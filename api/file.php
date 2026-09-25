<?php
// Serves a picture uploaded from the dashboard. They are kept outside the
// document root so a deploy cannot remove them, so they are read out by name
// here — only a plain file name, only from the uploads folder, only pictures.

declare(strict_types=1);

const UPLOAD_DIR = __DIR__ . '/../../../../stevens-admin/uploads';

$name = (string) ($_GET['name'] ?? '');

// A name and nothing else: no directories, no traversal, no odd characters.
if ($name === '' || $name !== basename($name) || !preg_match('/^[A-Za-z0-9._-]{1,120}$/', $name)) {
    http_response_code(400);
    exit;
}

$path = UPLOAD_DIR . '/' . $name;
if (!is_file($path)) {
    http_response_code(404);
    exit;
}

$type = match (strtolower(pathinfo($name, PATHINFO_EXTENSION))) {
    'jpg', 'jpeg' => 'image/jpeg',
    'png'         => 'image/png',
    'gif'         => 'image/gif',
    'webp'        => 'image/webp',
    default       => '',
};
if ($type === '') {
    http_response_code(404);
    exit;
}

$tag = '"' . filemtime($path) . '-' . filesize($path) . '"';
header('Content-Type: ' . $type);
header('X-Content-Type-Options: nosniff');
// The name carries a random suffix, so a given file never changes.
header('Cache-Control: public, max-age=31536000, immutable');
header('ETag: ' . $tag);

if (($_SERVER['HTTP_IF_NONE_MATCH'] ?? '') === $tag) {
    http_response_code(304);
    exit;
}

header('Content-Length: ' . filesize($path));
readfile($path);
