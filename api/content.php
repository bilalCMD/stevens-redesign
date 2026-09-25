<?php
// Hands the website whatever the dashboard has saved. The file itself lives
// outside the document root so a deploy cannot wipe it.

declare(strict_types=1);

const CONTENT_FILE = __DIR__ . '/../../../../stevens-admin/content.json';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
// Browsers may keep it briefly; an edit is live on the next load either way.
header('Cache-Control: public, max-age=30');

if (!is_file(CONTENT_FILE)) {
    echo '{}';
    exit;
}

$raw = file_get_contents(CONTENT_FILE);
if ($raw === false || trim($raw) === '') {
    echo '{}';
    exit;
}

// Only pass on something that parses, so a half-written file can never break
// the site's first render.
if (json_decode($raw) === null && json_last_error() !== JSON_ERROR_NONE) {
    echo '{}';
    exit;
}

header('ETag: "' . md5($raw) . '"');
if (($_SERVER['HTTP_IF_NONE_MATCH'] ?? '') === '"' . md5($raw) . '"') {
    http_response_code(304);
    exit;
}

echo $raw;
