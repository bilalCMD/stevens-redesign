<?php
// Receives the site's forms (contact, quote requests, orders, the Soil Resource
// Guide, newsletter) and emails them to Stevens.
//
// The recipient is fixed here on the server, never taken from the request, so
// the endpoint cannot be used to send mail anywhere else.

const RECIPIENT = 'sales@stevenswater.com';
const FROM      = 'no-reply@stevens.dartwebsite.com';
const MAX_FIELD = 5000;

header('Content-Type: application/json');
header('Cache-Control: no-store');

function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

// One enquiry per line, newest last, kept outside the document root so a
// deploy cannot remove them. The file is trimmed so it cannot grow forever.
const INBOX = __DIR__ . '/../../../../stevens-admin/submissions.jsonl';
const INBOX_MAX = 2000;

function keep(array $row): void {
    $dir = dirname(INBOX);
    if (!is_dir($dir)) return;                       // nothing set up yet
    $row['id'] = bin2hex(random_bytes(6));
    $line = json_encode($row, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($line === false) return;
    @file_put_contents(INBOX, $line . "\n", FILE_APPEND | LOCK_EX);

    // Trim occasionally rather than on every message.
    if (random_int(1, 50) !== 1 || !is_file(INBOX)) return;
    $lines = file(INBOX, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    if (count($lines) <= INBOX_MAX) return;
    @file_put_contents(INBOX, implode("\n", array_slice($lines, -INBOX_MAX)) . "\n", LOCK_EX);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'POST only']);
}

$raw = file_get_contents('php://input');
if (strlen($raw) > 60000) {
    reply(413, ['ok' => false, 'error' => 'Too large']);
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    reply(400, ['ok' => false, 'error' => 'Invalid request']);
}

// Bots fill every field; people never see this one.
if (!empty($data['website'])) {
    reply(200, ['ok' => true]);
}

$form    = preg_replace('/[^a-z-]/', '', strtolower((string)($data['form'] ?? 'enquiry')));
$subject = trim(preg_replace('/[\r\n]+/', ' ', (string)($data['subject'] ?? 'Website enquiry')));
$fields  = is_array($data['fields'] ?? null) ? $data['fields'] : [];
$replyTo = trim((string)($data['replyTo'] ?? ''));

if ($subject === '' || count($fields) === 0) {
    reply(422, ['ok' => false, 'error' => 'Missing details']);
}

$lines = [];
foreach ($fields as $label => $value) {
    $label = trim(preg_replace('/[\r\n]+/', ' ', (string)$label));
    $value = trim(mb_substr((string)$value, 0, MAX_FIELD));
    if ($label === '') continue;
    $lines[] = $value === '' ? $label : "$label: $value";
}

$body  = implode("\n", $lines);
$body .= "\n\n--\nSent from the " . $form . " form on stevens.dartwebsite.com";
$body .= "\n" . gmdate('Y-m-d H:i') . " UTC";

$headers = [
    'From: Stevens Website <' . FROM . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: stevens-site',
];
if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $replyTo;
}

// A dry run checks the request end to end without sending anything.
if (!empty($data['dryRun'])) {
    reply(200, ['ok' => true, 'dryRun' => true, 'subject' => $subject, 'lines' => count($lines)]);
}

$sent = mail(
    RECIPIENT,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers),
    '-f' . FROM
);

// The dashboard shows these as well, so an enquiry is never lost to a mail
// problem and there is a record to look back through.
keep([
    'at'      => time(),
    'form'    => $form,
    'subject' => $subject,
    'replyTo' => $replyTo,
    'fields'  => $lines,
    'mailed'  => (bool)$sent,
]);

reply($sent ? 200 : 502, ['ok' => (bool)$sent]);
