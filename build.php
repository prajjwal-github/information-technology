<?php
/* ==========================================================================
   STATIC BUILD FOR NETLIFY (or any host without PHP)
   --------------------------------------------------------------------------
   Netlify only serves plain files; it cannot run PHP. This script runs each
   page (index.php, hod.php, ...) once and saves the result as HTML in dist/,
   together with the assets. The PHP files stay the real source: edit them,
   never the files in dist/.

   Run:  php build.php        (Netlify runs it automatically, see netlify.toml)
   Output:  dist/index.html, dist/hod.html, ... + dist/assets/
   Netlify serves dist/hod.html at /hod, so addresses stay the same.
   ========================================================================== */
$root = __DIR__;
$dist = $root . '/dist';

// Files in the main folder that are not pages
$notPages = ['build.php', 'router.php'];

function remove_dir($dir)
{
    if (!is_dir($dir)) {
        return;
    }
    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS), RecursiveIteratorIterator::CHILD_FIRST) as $item) {
        $item->isDir() ? rmdir($item->getPathname()) : unlink($item->getPathname());
    }
    rmdir($dir);
}

function copy_dir($from, $to)
{
    @mkdir($to, 0777, true);
    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($from, FilesystemIterator::SKIP_DOTS), RecursiveIteratorIterator::SELF_FIRST) as $item) {
        $target = $to . '/' . substr($item->getPathname(), strlen($from) + 1);
        $item->isDir() ? @mkdir($target, 0777, true) : copy($item->getPathname(), $target);
    }
}

remove_dir($dist);
mkdir($dist, 0777, true);

// 1. Render every page in its own PHP process (pages share function names)
foreach (glob($root . '/*.php') as $file) {
    $name = basename($file);
    if (in_array($name, $notPages, true)) {
        continue;
    }
    $html = shell_exec(escapeshellarg(PHP_BINARY) . ' ' . escapeshellarg($file));
    if ($html === null || $html === '' || stripos($html, 'Fatal error') !== false || stripos($html, 'Warning:') !== false) {
        fwrite(STDERR, "Build failed on $name\n$html\n");
        exit(1);
    }
    file_put_contents($dist . '/' . basename($name, '.php') . '.html', $html);
    echo "Built $name\n";
}

// 2. Copy images, CSS, JS
copy_dir($root . '/assets', $dist . '/assets');

// 3. Netlify redirects: old capital-letter addresses -> lowercase
file_put_contents($dist . '/_redirects', "/Training  /training  301\n/index  /  301\n");

echo "Done: static site is in dist/\n";
