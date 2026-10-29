<?php
/* ==========================================================================
   SHARED FOOTER  (used by every page)
   --------------------------------------------------------------------------
   1. Four-column footer   2. Copyright bar   3. Back-to-top button
   4. Quick search pop-up (Ctrl + K)   5. JavaScript files
   Same design as the PCCOE Computer Department website.

   Optional before including: $pageScripts – list of extra JS files.
   ========================================================================== */
$pageScripts = $pageScripts ?? [];

// Quick search list, built from the main menu so it always matches it.
$searchItems = [];
foreach ($NAV_MENU as $item) {
    foreach ($item['items'] ?? [$item] as $link) {
        if (($link['url'] ?? '') === '#') {
            continue;
        }
        $searchItems[] = [
            'title' => $link['label'],
            'cat'   => isset($item['items']) ? $item['label'] : 'Menu',
            'url'   => $link['url'] ?? page_url($link['page'], $link['live'] ?? null),
        ];
    }
}
?>
<!-- 1. FOOTER -->
<footer class="site-master-footer" role="contentinfo">
  <div class="footer-main-body">
    <div class="container footer-columns-grid">

      <!-- Column 1: Contact -->
      <div class="footer-col footer-col-contact">
        <div class="footer-counter-wrap">
          <span class="footer-dept-badge"><i class="fa-solid fa-laptop-code"></i> <?= e($SITE['dept_name']) ?></span>
        </div>
        <ul class="footer-contact-list">
          <li class="footer-contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <span><?= e($SITE['address']) ?></span>
          </li>
          <li class="footer-contact-item">
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:<?= e($SITE['dept_email']) ?>"><?= e($SITE['dept_email']) ?></a>
          </li>
          <li class="footer-contact-item">
            <i class="fa-solid fa-phone"></i>
            <span><?= e($SITE['dept_phone']) ?></span>
          </li>
        </ul>
        <div class="footer-social">
          <a <?= external('https://www.facebook.com/pccoeieee') ?> title="Facebook" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a <?= external('https://www.instagram.com/pccoeieee') ?> title="Instagram" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a <?= external('https://in.linkedin.com/company/ieee-pccoe-student-branch') ?> title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <!-- Column 2: Quick links -->
      <div class="footer-col">
        <ul class="footer-nav-menu">
          <li><a href="./">Home</a></li>
          <li><a <?= external('http://www.pccoepune.com/best-engineering-college-in-akurdi.php') ?>>About PCCOE</a></li>
          <li><a <?= external('http://pcet.org.in/') ?>>About PCET</a></li>
          <li><a <?= nav_link_attrs(['page' => 'contact']) ?>>Contact us</a></li>
        </ul>
      </div>

      <!-- Column 3: Important links -->
      <div class="footer-col">
        <ul class="footer-nav-menu">
          <li><span class="footer-menu-heading">Important Links</span></li>
          <li><a <?= external('http://www.unipune.ac.in/') ?>>Savitribai Phule Pune University</a></li>
          <li><a <?= external('http://www.pccoepune.com/') ?>>Pimpri Chinchwad College Of Engineering</a></li>
          <li><a <?= external('https://www.aicte-india.org/') ?>>All India Council for Technical Education</a></li>
        </ul>
      </div>

      <!-- Column 4: Map -->
      <div class="footer-col footer-col-map">
        <div class="footer-location-title"><i class="fa-solid fa-location-dot"></i> Location</div>
        <div class="footer-map-container">
          <iframe src="<?= e($SITE['map_embed']) ?>" title="PCCOE Akurdi Campus Map Location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
  </div>

  <!-- 2. COPYRIGHT BAR -->
  <div class="footer-bottom-strip">
    <div class="container footer-bottom-inner">
      <div><span>Copyright @ <?= date('Y') ?> Pimpri Chinchwad College of Engineering <strong>(PCCOE)</strong></span></div>
      <div><span>Designed &amp; Developed by <a <?= external('https://pcet.org.in/digital-marketing-team/') ?> class="team-badge-link">Digital Marketing Team, PCET</a></span></div>
    </div>
  </div>
</footer>

<!-- 3. BACK TO TOP BUTTON -->
<button class="back-to-top-btn" title="Back to top" aria-label="Back to top">
  <i class="fa-solid fa-chevron-up"></i>
</button>

<!-- 4. QUICK SEARCH POP-UP (Bootstrap modal) -->
<div class="modal fade search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="searchModalTitle"><i class="fa-solid fa-magnifying-glass"></i> Search IT Department</h4>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close search"></button>
      </div>
      <div class="modal-body">
        <input type="search" id="siteSearchInput" class="form-control search-input" placeholder="Search pages, e.g. faculty, syllabus, placements..." aria-label="Search">
        <div id="searchResults" class="search-results" aria-live="polite"></div>
      </div>
    </div>
  </div>
</div>
<script>window.SEARCH_ITEMS = <?= json_encode($searchItems, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) ?>;</script>

<!-- 5. JAVASCRIPT -->
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>
<?php foreach ($pageScripts as $js): ?>
<script src="<?= e($js) ?>"></script>
<?php endforeach; ?>
</body>
</html>
