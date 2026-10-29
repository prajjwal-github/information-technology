<?php
/* ==========================================================================
   LOCAL PREVIEW ONLY (not needed on the real server, which uses .htaccess)
   Start the site on your computer with:
       php -S localhost:8000 router.php
   then open http://localhost:8000
   It makes /hod open hod.php, like the live site.
   ========================================================================== */
$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if (preg_match('#^/(includes|components|sections)/#', $path)) {
    http_response_code(404);
    exit('Not found');
}
if ($path !== '/' && is_file(__DIR__ . $path)) {
    return false; // images, CSS, JS: serve the file as it is
}
$page = trim($path, '/') === '' ? 'index' : strtolower(trim($path, '/'));
if (preg_match('#^[a-z0-9_-]+$#', $page) && is_file(__DIR__ . "/$page.php")) {
    require __DIR__ . "/$page.php";
    return true;
}
http_response_code(404);
echo 'Page not found';
