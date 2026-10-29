<?php
/* ==========================================================================
   PAGE <head>  (used by every page)
   Set these before including this file:
     $pageTitle        – text for the browser tab
     $pageDescription  – one-line summary for search engines
     $pageStyles       – optional list of extra CSS files for this page
   ========================================================================== */
$pageTitle       = $pageTitle ?? 'PCCOE | Information Technology';
$pageDescription = $pageDescription ?? 'Department of Information Technology, Pimpri Chinchwad College of Engineering (PCCOE), Pune.';
$pageStyles      = $pageStyles ?? [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= e($pageTitle) ?></title>
  <meta name="description" content="<?= e($pageDescription) ?>">
  <meta name="theme-color" content="#035a91">
  <link rel="icon" type="image/png" href="assets/images/logo/favicon-32x32.png">

  <!-- Fonts & icons (same as the Computer Department site) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">

  <!-- Bootstrap 5.3.3 (stored locally in assets/vendor) -->
  <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">

  <!-- Site styles: global + header + footer, then page styles -->
  <link rel="stylesheet" href="assets/css/style.css">
<?php foreach ($pageStyles as $css): ?>
  <link rel="stylesheet" href="<?= e($css) ?>">
<?php endforeach; ?>
</head>
