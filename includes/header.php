<?php
/* ==========================================================================
   SHARED HEADER  (used by every page)
   --------------------------------------------------------------------------
   1. Top contact strip   2. College logo header
   3. Main menu           4. Spotlight news ticker
   Same design as the PCCOE Computer Department website.

   Set $currentPage (e.g. 'index') before including this file so the
   matching menu item is highlighted.
   Menu links are edited in includes/config.php ($NAV_MENU).
   ========================================================================== */
$currentPage = $currentPage ?? '';

// Spotlight ticker items (from the official IT website). Edit text here.
$spotlight = [
    ['text' => 'Praxis 2026 - Comming Soon', 'url' => 'https://www.praxis26.in'],
    ['text' => 'Congratulations to TY IT Students on Securing 3rd Place at IEEE Pitch Competition 2026!', 'url' => live_file('assets/images/achievements/pitch-competition-2026.jpg')],
    ['text' => 'Congratulations- First Prize in Centarl India Hackethon(CIH) 3.0)', 'url' => live_file('assets/images/first-prize-cih-01.jpeg')],
    ['text' => 'Heartiest Congratulations to team- The Hustlers! 🌟. Team secured the *3rd Prize* 🏆 in *Round 2* of the InventPitch Competition 2025 by IEEE Pune Section', 'url' => live_file('assets/images/hustlers.jpg')],
    ['text' => 'Heartiest Congratulation To Atharva Deshmukh  on International Internship with stipend of 1367 USD', 'url' => live_file('assets/images/Atharva_Deshmukh_International_Internship.webp')],
];

/** True when this menu entry (or one of its dropdown links) is the current page. */
function nav_is_active($item, $currentPage)
{
    if (($item['page'] ?? null) === $currentPage) {
        return true;
    }
    foreach ($item['items'] ?? [] as $child) {
        if (($child['page'] ?? null) === $currentPage) {
            return true;
        }
    }
    return false;
}
?>
<body class="page-<?= e($currentPage) ?>">
<a class="visually-hidden-focusable skip-link" href="#main-content">Skip to main content</a>

<!-- 1. TOP UTILITY STRIP -->
<header class="top-strip" role="region" aria-label="Top Contact and Admission Strip">
  <div class="container">
    <div class="top-strip-inner">
      <div class="top-contact-info">
        <div class="top-contact-item">
          <i class="fa-solid fa-phone-volume"></i>
          <a href="tel:<?= e($SITE['top_phone_tel']) ?>" title="Call"><?= e($SITE['top_phone']) ?></a>
        </div>
        <span class="strip-divider">|</span>
        <div class="top-contact-item">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:<?= e($SITE['top_email']) ?>" title="Email PCCOE Office"><?= e($SITE['top_email']) ?></a>
        </div>
        <div class="top-social-group">
          <a <?= external('https://www.facebook.com/pccoeieee') ?> class="top-social-link" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a <?= external('https://www.instagram.com/pccoeieee') ?> class="top-social-link" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a <?= external('https://in.linkedin.com/company/ieee-pccoe-student-branch') ?> class="top-social-link" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="top-links">
        <a class="top-nav-link" <?= external('http://www.pccoepune.com/international-admissions.php') ?>>International Admission Enquiry</a>
        <span class="strip-divider">|</span>
        <a class="top-enquiry-link" <?= external($SITE['enquiry_form']) ?>><i class="fa-solid fa-bolt"></i> Admission Enquiry</a>
        <span class="strip-divider">|</span>
        <a class="top-nav-link" <?= external('http://www.pccoepune.com/faculty-training-opportunities.php') ?>>FTO</a>
        <span class="strip-divider">|</span>
        <a class="top-nav-link" <?= external('http://www.pccoepune.com/nirf.php') ?>>NIRF</a>
        <span class="strip-divider">|</span>
        <a class="top-nav-link" <?= external('https://www.aicte-india.org/feedback/index.php') ?>>AICTE Feedback</a>
        <div class="access-tools" title="Accessibility Adjustments">
          <button class="access-btn" id="fontDecrease" title="Decrease Font Size" aria-label="Decrease Font Size">A-</button>
          <button class="access-btn" id="fontReset" title="Normal Font Size" aria-label="Normal Font Size">A</button>
          <button class="access-btn" id="fontIncrease" title="Increase Font Size" aria-label="Increase Font Size">A+</button>
          <button class="access-btn" id="contrastToggle" title="Toggle High Contrast" aria-label="Toggle High Contrast"><i class="fa-solid fa-circle-half-stroke"></i></button>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- 2. BRAND IDENTITY HEADER -->
<section class="brand-header" role="banner">
  <div class="container">
    <div class="brand-header-grid">
      <div class="brand-logo-left">
        <a <?= external('http://www.pccoepune.com/') ?> class="logo-link" title="PCCOE Pune Official Website">
          <img src="assets/images/logo/pccoe-logo.webp" alt="PCCOE LOGO" class="main-logo-img">
        </a>
      </div>
      <div class="brand-text-center">
        <div class="trust-title"><?= e($SITE['trust_name']) ?></div>
        <h1 class="college-name"><?= e(strtoupper($SITE['college_name'])) ?></h1>
        <h2 class="dept-title-text"><?= e(strtoupper($SITE['dept_name'])) ?></h2>
        <div class="accreditation-ribbon">
          <span class="accreditation-item"><i class="fa-solid fa-award"></i><strong>NBA</strong> Accredited</span>
          <span class="accreditation-sep">|</span>
          <span class="accreditation-item"><i class="fa-solid fa-star"></i><strong>NAAC</strong> Accredited with <strong>'A'</strong> Grade</span>
          <span class="accreditation-sep">|</span>
          <span class="accreditation-item"><i class="fa-solid fa-building-columns"></i>An <strong>Autonomous</strong> Institute</span>
          <span class="accreditation-sep">|</span>
          <span class="accreditation-item"><i class="fa-solid fa-check-double"></i><strong>AICTE</strong> Approved</span>
          <span class="accreditation-sep">|</span>
          <span class="accreditation-item"><i class="fa-solid fa-university"></i>Permanently Affiliated to <strong>SPPU</strong>, Pune</span>
        </div>
      </div>
      <div class="brand-logo-right">
        <a <?= external('http://pcet.org.in/') ?> class="logo-link" title="PCET Trust Portal">
          <img src="assets/images/logo/pcet-trust-logo.webp" alt="PCET TRUST LOGO" class="trust-logo-img">
        </a>
      </div>
    </div>
  </div>
</section>

<!-- 3. MAIN MENU (sticky) -->
<nav class="site-navigation" role="navigation" aria-label="Main Navigation">
  <div class="container nav-container">
    <div class="nav-links-wrapper" id="mainMenu">
      <ul class="nav-list">
<?php foreach ($NAV_MENU as $item): ?>
<?php $active = nav_is_active($item, $currentPage) ? ' active' : ''; ?>
<?php if (empty($item['items'])): ?>
        <li class="nav-item<?= $active ?>">
          <a <?= nav_link_attrs($item) ?> class="nav-link-btn"<?= $active ? ' aria-current="page"' : '' ?>>
            <?php if (!empty($item['icon'])): ?><i class="<?= e($item['icon']) ?>"></i> <?php endif; ?><?= e($item['label']) ?>
          </a>
        </li>
<?php else: ?>
        <li class="nav-item<?= $active ?>">
          <a href="#" class="nav-link-btn" role="button" aria-haspopup="true" aria-expanded="false"><?= e($item['label']) ?> <i class="fa-solid fa-chevron-down dropdown-chevron"></i></a>
          <ul class="nav-dropdown">
<?php foreach ($item['items'] as $child): ?>
            <li><a class="dropdown-item-link" <?= nav_link_attrs($child) ?>><i class="fa-solid fa-angle-right"></i> <?= e($child['label']) ?></a></li>
<?php endforeach; ?>
          </ul>
        </li>
<?php endif; ?>
<?php endforeach; ?>
      </ul>
    </div>

    <div class="nav-actions">
      <button class="nav-search-btn" data-bs-toggle="modal" data-bs-target="#searchModal" title="Quick Search (Ctrl + K)" aria-label="Quick Search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <a <?= external($SITE['enquiry_form']) ?> class="nav-cta-apply">Apply Now</a>
      <button class="mobile-menu-toggle" aria-label="Open Navigation Menu" aria-controls="mainMenu" aria-expanded="false">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>
</nav>

<!-- 4. SPOTLIGHT NEWS TICKER -->
<div class="container spotlight-container">
  <div class="spotlight-wrapper">
    <div class="spotlight-badge"><i class="fa-solid fa-bullhorn"></i> Spotlight</div>
    <div class="spotlight-ticker-viewport">
      <div class="spotlight-marquee">
<?php foreach ([false, true] as $copy): /* list is repeated so the scroll loops without a gap */ ?>
<?php foreach ($spotlight as $news): ?>
        <div class="ticker-item"<?= $copy ? ' aria-hidden="true"' : '' ?>>
          <a <?= external($news['url']) ?><?= $copy ? ' tabindex="-1"' : '' ?>><?= e($news['text']) ?> &rarr;</a>
        </div>
<?php endforeach; ?>
<?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
