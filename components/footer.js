/* ==========================================================================
   SHARED FOOTER  (used by every page)
   --------------------------------------------------------------------------
   Contains: 1. Four-column footer  2. Copyright bar
             3. Back-to-top button  4. Quick search pop-up (Ctrl + K)
   Same design as the PCCOE Computer Department website.

   HOW TO USE: put this line just before </body> in a page:
       <script src="components/footer.js"></script>
   ========================================================================== */

(function () {
  const IT_SITE = 'https://it.pccoepune.com';
  const year = new Date().getFullYear();

  const footerHTML = `
  <!-- 1. FOOTER -->
  <footer class="site-master-footer" role="contentinfo">
    <div class="footer-main-body">
      <div class="container footer-columns-grid">

        <!-- Column 1: Contact -->
        <div class="footer-col footer-col-contact">
          <div class="footer-counter-wrap">
            <span class="footer-dept-badge"><i class="fa-solid fa-laptop-code"></i> Department of Information Technology</span>
          </div>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>Near Akurdi Railway Station Road, Sector No. 26, Pradhikaran, Nigdi, Pimpri, Maharashtra 411044</span>
            </li>
            <li class="footer-contact-item">
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:pccoeadmin@gmail.com">pccoeadmin@gmail.com</a>
            </li>
            <li class="footer-contact-item">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+918087174347">+91 - 8087174347</a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Department links -->
        <div class="footer-col">
          <ul class="footer-nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html#about-department">About Department</a></li>
            <li><a href="about.html#hod-desk">From HOD's Desk</a></li>
            <li><a href="about.html#vision-mission">Vision &amp; Mission</a></li>
            <li><a href="${IT_SITE}/faculty-profile" target="_blank" rel="noopener noreferrer">Faculty Profile</a></li>
            <li><a href="https://www.pccoepune.com/about-pccoe.php" target="_blank" rel="noopener noreferrer">About PCCOE</a></li>
            <li><a href="http://pcet.org.in/" target="_blank" rel="noopener noreferrer">About PCET</a></li>
            <li><a href="${IT_SITE}/contact" target="_blank" rel="noopener noreferrer">Contact us</a></li>
          </ul>
        </div>

        <!-- Column 3: Important links -->
        <div class="footer-col">
          <ul class="footer-nav-menu">
            <li><a href="#" class="footer-menu-heading">Important Links</a></li>
            <li><a href="http://www.unipune.ac.in/" target="_blank" rel="noopener noreferrer">Savitribai Phule Pune University</a></li>
            <li><a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">All India Council for Technical Education</a></li>
            <li><a href="https://www.pccoepune.com/nirf.php" target="_blank" rel="noopener noreferrer">NIRF</a></li>
            <li><a href="https://www.pccoepune.com/" target="_blank" rel="noopener noreferrer">PCCOE Main Website</a></li>
          </ul>
        </div>

        <!-- Column 4: Map -->
        <div class="footer-col footer-col-map">
          <div class="footer-location-title"><i class="fa-solid fa-location-dot"></i> LOCATION</div>
          <div class="footer-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.546565048871!2d73.75211259357907!3d18.651728800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering%20%7C%20Autonomous%20Engineering%20College%20in%20Pune!5e0!3m2!1sen!2sus!4v1673342758968!5m2!1sen!2sus"
              title="PCCOE Akurdi Campus Map Location" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>
    </div>

    <!-- 2. COPYRIGHT BAR -->
    <div class="footer-bottom-strip">
      <div class="container footer-bottom-inner">
        <div><span>Copyright @ ${year} Pimpri Chinchwad College of Engineering <strong>(PCCOE)</strong></span></div>
        <div><span>Designed &amp; Developed by <a href="http://pcet.org.in/digital-marketing-team/" target="_blank" rel="noopener noreferrer" class="team-badge-link">Digital Marketing Team, PCET</a></span></div>
      </div>
    </div>
  </footer>

  <!-- 3. BACK TO TOP BUTTON -->
  <button class="back-to-top-btn" title="Back to top" aria-label="Back to top">
    <i class="fa-solid fa-chevron-up"></i>
  </button>

  <!-- 4. QUICK SEARCH POP-UP -->
  <div class="modal-overlay" id="searchModal" role="dialog" aria-modal="true" aria-labelledby="searchModalTitle">
    <div class="modal-dialog">
      <div class="modal-header">
        <h4 id="searchModalTitle"><i class="fa-solid fa-magnifying-glass"></i> Search PCCOE IT Department</h4>
        <button class="modal-close-btn" aria-label="Close search">&times;</button>
      </div>
      <div class="modal-body">
        <input type="text" id="siteSearchInput" class="search-input"
          placeholder="Search programs, HOD, vision, honours, faculty...">
        <div id="searchResults" class="search-results"></div>
      </div>
    </div>
  </div>`;

  document.currentScript.insertAdjacentHTML('beforebegin', footerHTML);
})();
