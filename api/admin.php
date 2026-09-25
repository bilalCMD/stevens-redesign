<?php
// The editing dashboard's API.
//
// Accounts, the edited content and the uploaded pictures all live in
// ~/stevens-admin, outside the document root. content.php and file.php serve
// the last two to the website.

declare(strict_types=1);

// Everything lives outside the deployed site. A deploy replaces the whole
// document root, so anything kept inside it would be lost on the next one.
const PRIVATE_DIR  = __DIR__ . '/../../../../stevens-admin';   // ~/stevens-admin
const CONTENT_FILE = PRIVATE_DIR . '/content.json';
const BACKUP_DIR   = PRIVATE_DIR . '/backups';
const UPLOAD_DIR   = PRIVATE_DIR . '/uploads';
const UPLOAD_URL   = '/api/file.php?name=';

const MAX_CONTENT   = 4 * 1024 * 1024;   // 4 MB of JSON
const MAX_UPLOAD    = 12 * 1024 * 1024;  // 12 MB per picture
const MAX_UPLOAD_PX = 2000;              // pictures are resized down to this
const SESSION_DAYS  = 30;
const LOGIN_TRIES   = 8;                 // per IP, before a pause
const LOCK_MINUTES  = 15;

header('Content-Type: application/json');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function reply(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function readJson(string $file, array $fallback = []): array {
    if (!is_file($file)) return $fallback;
    $raw = file_get_contents($file);
    if ($raw === false || $raw === '') return $fallback;
    $data = json_decode($raw, true);
    return is_array($data) ? $data : $fallback;
}

// Writes through a temporary file so a reader never sees half a document.
function writeJson(string $file, array $data): bool {
    $dir = dirname($file);
    if (!is_dir($dir) && !mkdir($dir, 0755, true) && !is_dir($dir)) return false;
    $tmp = $file . '.' . bin2hex(random_bytes(4)) . '.tmp';
    $json = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($json === false || file_put_contents($tmp, $json, LOCK_EX) === false) {
        @unlink($tmp);
        return false;
    }
    return rename($tmp, $file);
}

function body(): array {
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') return [];
    if (strlen($raw) > MAX_CONTENT) reply(413, ['ok' => false, 'error' => 'Too large']);
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

/* ---------------------------------------------------------------- accounts */

function usersFile(): string   { return PRIVATE_DIR . '/users.json'; }
function sessionFile(): string { return PRIVATE_DIR . '/sessions.json'; }
function tryFile(): string     { return PRIVATE_DIR . '/login-attempts.json'; }

function findUser(string $name): ?array {
    foreach (readJson(usersFile()) as $u) {
        if (isset($u['user']) && hash_equals(strtolower((string) $u['user']), strtolower($name))) return $u;
    }
    return null;
}

function clientIp(): string {
    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function loginBlocked(): bool {
    $all = readJson(tryFile());
    $row = $all[clientIp()] ?? null;
    if (!$row) return false;
    if (($row['count'] ?? 0) < LOGIN_TRIES) return false;
    return (time() - ($row['at'] ?? 0)) < LOCK_MINUTES * 60;
}

function noteLogin(bool $ok): void {
    $all = readJson(tryFile());
    $ip = clientIp();
    if ($ok) {
        unset($all[$ip]);
    } else {
        $row = $all[$ip] ?? ['count' => 0, 'at' => 0];
        if (time() - ($row['at'] ?? 0) > LOCK_MINUTES * 60) $row = ['count' => 0, 'at' => 0];
        $row['count'] = ($row['count'] ?? 0) + 1;
        $row['at'] = time();
        $all[$ip] = $row;
    }
    // keep the file from growing without bound
    if (count($all) > 500) $all = array_slice($all, -200, null, true);
    writeJson(tryFile(), $all);
}

function sessions(): array {
    $all = readJson(sessionFile());
    $now = time();
    $live = array_filter($all, fn ($s) => ($s['exp'] ?? 0) > $now);
    if (count($live) !== count($all)) writeJson(sessionFile(), $live);
    return $live;
}

function startSession(array $user): string {
    $token = bin2hex(random_bytes(32));
    $all = sessions();
    $all[$token] = [
        'user' => $user['user'],
        'name' => $user['name'] ?? $user['user'],
        'role' => $user['role'] ?? 'editor',
        'exp'  => time() + SESSION_DAYS * 86400,
    ];
    writeJson(sessionFile(), $all);
    return $token;
}

function bearer(): string {
    $h = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    if (preg_match('/Bearer\s+([A-Za-z0-9]+)/', (string) $h, $m)) return $m[1];
    return '';
}

function currentUser(): ?array {
    $token = bearer();
    if ($token === '') return null;
    $all = sessions();
    foreach ($all as $t => $s) {
        if (hash_equals($t, $token)) return $s;
    }
    return null;
}

function requireUser(): array {
    $u = currentUser();
    if (!$u) reply(401, ['ok' => false, 'error' => 'Please sign in again']);
    return $u;
}

/* ---------------------------------------------------------------- pictures */

function uploadName(string $original, string $ext): string {
    $stem = strtolower(pathinfo($original, PATHINFO_FILENAME));
    $stem = preg_replace('/[^a-z0-9]+/', '-', $stem) ?: 'image';
    $stem = trim($stem, '-');
    if ($stem === '') $stem = 'image';
    return substr($stem, 0, 40) . '-' . bin2hex(random_bytes(3)) . '.' . $ext;
}

// Re-encodes through GD, so whatever arrives is stored as a plain picture and
// nothing else can ride along inside the file.
function storePicture(string $tmp, string $original): array {
    $info = @getimagesize($tmp);
    if (!$info) return ['ok' => false, 'error' => 'That file is not a picture'];
    [$w, $h, $type] = $info;

    $src = match ($type) {
        IMAGETYPE_JPEG => @imagecreatefromjpeg($tmp),
        IMAGETYPE_PNG  => @imagecreatefrompng($tmp),
        IMAGETYPE_GIF  => @imagecreatefromgif($tmp),
        IMAGETYPE_WEBP => @imagecreatefromwebp($tmp),
        default        => false,
    };
    if (!$src) return ['ok' => false, 'error' => 'Only JPG, PNG, GIF and WebP pictures'];

    $scale = min(1, MAX_UPLOAD_PX / max($w, $h));
    $nw = max(1, (int) round($w * $scale));
    $nh = max(1, (int) round($h * $scale));

    $dst = imagecreatetruecolor($nw, $nh);
    $keepAlpha = in_array($type, [IMAGETYPE_PNG, IMAGETYPE_GIF, IMAGETYPE_WEBP], true);
    if ($keepAlpha) {
        imagealphablending($dst, false);
        imagesavealpha($dst, true);
        imagefill($dst, 0, 0, imagecolorallocatealpha($dst, 0, 0, 0, 127));
    }
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $nw, $nh, $w, $h);
    imagedestroy($src);

    if (!is_dir(UPLOAD_DIR) && !mkdir(UPLOAD_DIR, 0755, true) && !is_dir(UPLOAD_DIR)) {
        imagedestroy($dst);
        return ['ok' => false, 'error' => 'Cannot write the uploads folder'];
    }

    $ext = $keepAlpha ? 'png' : 'jpg';
    $name = uploadName($original, $ext);
    $path = UPLOAD_DIR . '/' . $name;
    $saved = $ext === 'png' ? imagepng($dst, $path, 6) : imagejpeg($dst, $path, 86);
    imagedestroy($dst);
    if (!$saved) return ['ok' => false, 'error' => 'Could not save the picture'];

    return ['ok' => true, 'url' => UPLOAD_URL . $name, 'name' => $name, 'width' => $nw, 'height' => $nh];
}

/* ------------------------------------------------------------- enquiries */

function inboxFile(): string { return PRIVATE_DIR . '/submissions.jsonl'; }
function inboxRead(): string { return PRIVATE_DIR . '/submissions-read.json'; }

// Newest first, with whether each has been marked as read.
function inboxRows(): array {
    if (!is_file(inboxFile())) return [];
    $lines = file(inboxFile(), FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    $read = readJson(inboxRead());
    $rows = [];
    foreach ($lines as $line) {
        $row = json_decode($line, true);
        if (!is_array($row) || !isset($row['id'])) continue;
        $row['read'] = !empty($read[$row['id']]);
        $rows[] = $row;
    }
    return array_reverse($rows);
}

/* ----------------------------------------------------------------- actions */

$action = (string) ($_GET['action'] ?? '');
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'OPTIONS') reply(204, []);

switch ($action) {
    case 'login': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        if (loginBlocked()) reply(429, ['ok' => false, 'error' => 'Too many attempts. Try again in a few minutes.']);
        $in = body();
        $name = trim((string) ($in['user'] ?? ''));
        $pass = (string) ($in['pass'] ?? '');
        $user = $name === '' ? null : findUser($name);
        if (!$user || !password_verify($pass, (string) ($user['hash'] ?? ''))) {
            noteLogin(false);
            reply(401, ['ok' => false, 'error' => 'Wrong username or password']);
        }
        noteLogin(true);
        reply(200, [
            'ok' => true,
            'token' => startSession($user),
            'user' => ['user' => $user['user'], 'name' => $user['name'] ?? $user['user'], 'role' => $user['role'] ?? 'editor'],
        ]);
    }

    case 'logout': {
        $token = bearer();
        if ($token !== '') {
            $all = sessions();
            unset($all[$token]);
            writeJson(sessionFile(), $all);
        }
        reply(200, ['ok' => true]);
    }

    case 'me': {
        $u = requireUser();
        reply(200, ['ok' => true, 'user' => ['user' => $u['user'], 'name' => $u['name'], 'role' => $u['role']]]);
    }

    case 'change-password': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        $me = requireUser();
        $in = body();
        $current = (string) ($in['current'] ?? '');
        $next = (string) ($in['next'] ?? '');
        if (strlen($next) < 10) reply(400, ['ok' => false, 'error' => 'Use at least 10 characters']);
        $users = readJson(usersFile());
        $changed = false;
        foreach ($users as &$u) {
            if (!hash_equals(strtolower((string) $u['user']), strtolower((string) $me['user']))) continue;
            if (!password_verify($current, (string) ($u['hash'] ?? ''))) {
                reply(401, ['ok' => false, 'error' => 'Current password is wrong']);
            }
            $u['hash'] = password_hash($next, PASSWORD_DEFAULT);
            $changed = true;
        }
        unset($u);
        if (!$changed || !writeJson(usersFile(), $users)) reply(500, ['ok' => false, 'error' => 'Could not change it']);
        // every other session for this account is ended
        $live = sessions();
        $token = bearer();
        foreach ($live as $t => $s) {
            if ($s['user'] === $me['user'] && !hash_equals($t, $token)) unset($live[$t]);
        }
        writeJson(sessionFile(), $live);
        reply(200, ['ok' => true]);
    }

    case 'submissions': {
        requireUser();
        $rows = inboxRows();
        $unread = 0;
        foreach ($rows as $r) { if (empty($r['read'])) $unread++; }
        reply(200, ['ok' => true, 'submissions' => array_slice($rows, 0, 300), 'unread' => $unread, 'total' => count($rows)]);
    }

    case 'submission-read': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        requireUser();
        $in = body();
        $ids = is_array($in['ids'] ?? null) ? $in['ids'] : [];
        $read = readJson(inboxRead());
        foreach ($ids as $id) {
            if (is_string($id) && preg_match('/^[a-f0-9]{12}$/', $id)) $read[$id] = true;
        }
        if (count($read) > 5000) $read = array_slice($read, -3000, null, true);
        writeJson(inboxRead(), $read);
        reply(200, ['ok' => true]);
    }

    case 'submission-delete': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        requireUser();
        $in = body();
        $id = (string) ($in['id'] ?? '');
        if (!preg_match('/^[a-f0-9]{12}$/', $id)) reply(400, ['ok' => false, 'error' => 'Bad id']);
        if (!is_file(inboxFile())) reply(200, ['ok' => true]);
        $lines = file(inboxFile(), FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
        $kept = [];
        foreach ($lines as $line) {
            $row = json_decode($line, true);
            if (is_array($row) && ($row['id'] ?? '') === $id) continue;
            $kept[] = $line;
        }
        @file_put_contents(inboxFile(), $kept ? implode("\n", $kept) . "\n" : '', LOCK_EX);
        reply(200, ['ok' => true]);
    }

    case 'content': {
        if ($method === 'GET') {
            reply(200, ['ok' => true, 'content' => readJson(CONTENT_FILE)]);
        }
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'GET or POST']);
        $u = requireUser();
        $in = body();
        if (!isset($in['content']) || !is_array($in['content'])) {
            reply(400, ['ok' => false, 'error' => 'Nothing to save']);
        }
        // keep a rolling set of backups, so a bad edit is always recoverable
        if (is_file(CONTENT_FILE)) {
            if (!is_dir(BACKUP_DIR)) @mkdir(BACKUP_DIR, 0755, true);
            @copy(CONTENT_FILE, BACKUP_DIR . '/content-' . date('Ymd-His') . '.json');
            $old = glob(BACKUP_DIR . '/content-*.json') ?: [];
            sort($old);
            foreach (array_slice($old, 0, max(0, count($old) - 30)) as $f) @unlink($f);
        }
        $doc = $in['content'];
        // An empty PHP array encodes as [], which is not the map the site expects.
        foreach (['products', 'articles', 'text'] as $section) {
            if (isset($doc[$section]) && is_array($doc[$section]) && $doc[$section] === []) {
                $doc[$section] = new stdClass();
            }
        }
        $doc['updatedAt'] = date('c');
        $doc['updatedBy'] = $u['name'] ?? $u['user'];
        if (!writeJson(CONTENT_FILE, $doc)) reply(500, ['ok' => false, 'error' => 'Could not save']);
        reply(200, ['ok' => true, 'updatedAt' => $doc['updatedAt'], 'updatedBy' => $doc['updatedBy']]);
    }

    case 'upload': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        requireUser();
        $file = $_FILES['file'] ?? null;
        if (!$file || ($file['error'] ?? 1) !== UPLOAD_ERR_OK) {
            reply(400, ['ok' => false, 'error' => 'No picture received']);
        }
        if (($file['size'] ?? 0) > MAX_UPLOAD) reply(413, ['ok' => false, 'error' => 'That picture is over 12 MB']);
        if (!is_uploaded_file($file['tmp_name'])) reply(400, ['ok' => false, 'error' => 'Bad upload']);
        $res = storePicture($file['tmp_name'], (string) ($file['name'] ?? 'image'));
        reply($res['ok'] ? 200 : 400, $res);
    }

    case 'uploads': {
        requireUser();
        $out = [];
        foreach (glob(UPLOAD_DIR . '/*') ?: [] as $f) {
            if (!is_file($f)) continue;
            $out[] = ['name' => basename($f), 'url' => UPLOAD_URL . basename($f), 'size' => filesize($f), 'at' => filemtime($f)];
        }
        usort($out, fn ($a, $b) => $b['at'] <=> $a['at']);
        reply(200, ['ok' => true, 'files' => array_slice($out, 0, 500)]);
    }

    case 'delete-upload': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        requireUser();
        $in = body();
        $name = basename((string) ($in['name'] ?? ''));
        if ($name === '' || str_contains($name, '..')) reply(400, ['ok' => false, 'error' => 'Bad name']);
        $path = UPLOAD_DIR . '/' . $name;
        if (!is_file($path)) reply(404, ['ok' => false, 'error' => 'Not found']);
        @unlink($path);
        reply(200, ['ok' => true]);
    }

    case 'backups': {
        requireUser();
        $out = [];
        foreach (glob(BACKUP_DIR . '/content-*.json') ?: [] as $f) {
            $out[] = ['name' => basename($f), 'at' => filemtime($f), 'size' => filesize($f)];
        }
        usort($out, fn ($a, $b) => $b['at'] <=> $a['at']);
        reply(200, ['ok' => true, 'backups' => $out]);
    }

    case 'restore': {
        if ($method !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
        requireUser();
        $in = body();
        $name = basename((string) ($in['name'] ?? ''));
        $path = BACKUP_DIR . '/' . $name;
        if (!preg_match('/^content-\d{8}-\d{6}\.json$/', $name) || !is_file($path)) {
            reply(404, ['ok' => false, 'error' => 'No such backup']);
        }
        if (!writeJson(CONTENT_FILE, readJson($path))) reply(500, ['ok' => false, 'error' => 'Could not restore']);
        reply(200, ['ok' => true]);
    }

    default:
        reply(404, ['ok' => false, 'error' => 'Unknown action']);
}
