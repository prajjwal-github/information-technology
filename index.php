<?php
/* ==========================================================================
   HOME PAGE  –  Department of Information Technology, PCCOE
   This file only lists the parts of the page, in order. Each part is a
   separate file, so it can be edited on its own:
     includes/   header, footer and <head> shared by every page
     sections/home/   the sections of this page
   ========================================================================== */
require __DIR__ . '/includes/config.php';
require __DIR__ . '/components/ui.php';

$currentPage     = 'index';
$pageTitle       = 'PCCOE | Information Technology';
$pageDescription = 'Department of Information Technology, Pimpri Chinchwad College of Engineering (PCCOE), Pune. Course started in the year 2001.';
$pageStyles      = ['assets/css/home.css'];

require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
?>
<main id="main-content">
<?php
require __DIR__ . '/sections/home/hero-notices.php';   // Photo slider + Notices / News & Announcements
require __DIR__ . '/sections/home/about.php';          // About us + Mandatory Disclosure and PCET Brochure
require __DIR__ . '/sections/home/dept-glance.php';    // IT Department at Glance
require __DIR__ . '/sections/home/testimonials.php';   // Student Testimonials + Important Links
require __DIR__ . '/sections/home/honours-video.php';  // Honour & Minor Courses, Swaratarang 2k24, Video Section
require __DIR__ . '/sections/home/popup.php';          // FDP 2026 poster shown when the page opens
?>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
