/* ==========================================================================
   SHARED HEADER  (used by every page)
   --------------------------------------------------------------------------
   Contains: 1. Top contact strip  2. College logo header  3. Main menu
             4. Spotlight news ticker
   Same design as the PCCOE Computer Department website.

   HOW TO USE: put this line where the header should appear in a page:
       <script src="components/header.js"></script>
   The menu item for the current page is highlighted using the
   data-page="..." value on the <body> tag (home, about).

   TO ADD A MENU LINK: copy one <li>...</li> line inside a dropdown below.
   ========================================================================== */

(function () {
  const IT_SITE = 'https://it.pccoepune.com';
  const ENQUIRY_FORM = 'https://forms.zohopublic.in/dmteampcco1/form/PCETForm/formperma/tYvqjs2MVyQV3phz1vyaomCABN2zsmOV12BKDcKD3ck';

  const headerHTML = `
  <!-- 1. TOP UTILITY STRIP -->
  <header class="top-strip" role="region" aria-label="Top Contact and Admission Strip">
    <div class="container">
      <div class="top-strip-inner">
        <div class="top-contact-info">
          <div class="top-contact-item">
            <i class="fa-solid fa-phone-volume"></i>
            <a href="tel:+918087174347" title="Call Admissions Office">+91 - 8087174347</a>
          </div>
          <span class="strip-divider">|</span>
          <div class="top-contact-item">
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:pccoeadmin@gmail.com" title="Email PCCOE Office">pccoeadmin@gmail.com</a>
          </div>
          <div class="top-social-group">
            <a href="https://www.facebook.com/pages/PCCOE/725095680876531" target="_blank" rel="noopener noreferrer" class="top-social-link" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/pccoe-pune" target="_blank" rel="noopener noreferrer" class="top-social-link" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com/pccoe_pune" target="_blank" rel="noopener noreferrer" class="top-social-link" title="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/pccoepune/" target="_blank" rel="noopener noreferrer" class="top-social-link" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCQiPDETOiteTLmAvvPk1WjA" target="_blank" rel="noopener noreferrer" class="top-social-link" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div class="top-links">
          <a class="top-enquiry-link" href="${ENQUIRY_FORM}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-bolt"></i> Admission Enquiry 2026–27
          </a>
          <span class="strip-divider">|</span>
          <a class="top-nav-link" href="https://www.pccoepune.com/international-admissions.php" target="_blank" rel="noopener noreferrer">International Admissions</a>
          <span class="strip-divider">|</span>
          <a class="top-nav-link" href="https://www.pccoepune.com/nirf.php" target="_blank" rel="noopener noreferrer">NIRF</a>
          <span class="strip-divider">|</span>
          <a class="top-nav-link" href="https://www.aicte-india.org/feedback/index.php" target="_blank" rel="noopener noreferrer">AICTE</a>
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
          <a href="https://www.pccoepune.com/" class="logo-link" title="PCCOE Pune Official Website" target="_blank" rel="noopener noreferrer">
            <img src="https://computer.pccoepune.com/assets/images/PCCoE-LOGO/pccoe-logo.webp" alt="PCCoE Logo" class="main-logo-img">
          </a>
        </div>
        <div class="brand-text-center">
          <div class="trust-title">PIMPRI CHINCHWAD EDUCATION TRUST'S (PCET)</div>
          <h1 class="college-name">PIMPRI CHINCHWAD COLLEGE OF ENGINEERING</h1>
          <h2 class="dept-title-text">DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
          <div class="accreditation-ribbon">
            <span class="accreditation-item"><i class="fa-solid fa-award"></i><strong>NBA</strong> Accredited</span>
            <span class="accreditation-sep">•</span>
            <span class="accreditation-item"><i class="fa-solid fa-star"></i><strong>NAAC 'A'</strong> Grade</span>
            <span class="accreditation-sep">•</span>
            <span class="accreditation-item"><i class="fa-solid fa-building-columns"></i>An <strong>Autonomous</strong> Institute</span>
            <span class="accreditation-sep">•</span>
            <span class="accreditation-item"><i class="fa-solid fa-check-double"></i><strong>AICTE</strong> Approved</span>
            <span class="accreditation-sep">•</span>
            <span class="accreditation-item"><i class="fa-solid fa-certificate"></i><strong>ISO 21001:2018</strong> Certified</span>
            <span class="accreditation-sep">•</span>
            <span class="accreditation-item"><i class="fa-solid fa-university"></i>Affiliated to <strong>SPPU, Pune</strong></span>
          </div>
        </div>
        <div class="brand-logo-right">
          <a href="http://pcet.org.in/" class="logo-link" title="PCET Trust Portal" target="_blank" rel="noopener noreferrer">
            <img src="https://computer.pccoepune.com/assets/images/PCCoE-LOGO/pcet-trust-logo.webp" alt="PCET Trust Logo" class="trust-logo-img">
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. MAIN MENU (sticky) -->
  <nav class="site-navigation" role="navigation" aria-label="Main Navigation">
    <div class="container nav-container">
      <div class="nav-links-wrapper">
        <ul class="nav-list">

          <li class="nav-item" data-nav="home">
            <a href="index.html" class="nav-link-btn"><i class="fa-solid fa-house-chimney"></i> HOME</a>
          </li>

          <li class="nav-item" data-nav="about">
            <a href="about.html" class="nav-link-btn" aria-haspopup="true">About us <i class="fa-solid fa-chevron-down dropdown-chevron"></i></a>
            <ul class="nav-dropdown">
              <li><a class="dropdown-item-link" href="about.html#about-department"><i class="fa-solid fa-angle-right"></i> About Department</a></li>
              <li><a class="dropdown-item-link" href="about.html#hod-desk"><i class="fa-solid fa-angle-right"></i> From HOD's Desk</a></li>
              <li><a class="dropdown-item-link" href="about.html#vision-mission"><i class="fa-solid fa-angle-right"></i> Vision &amp; Mission</a></li>
              <li><a class="dropdown-item-link" href="about.html#programs-intake"><i class="fa-solid fa-angle-right"></i> Programs &amp; Intake</a></li>
              <li><a class="dropdown-item-link" href="about.html#milestones"><i class="fa-solid fa-angle-right"></i> Department Milestones</a></li>
              <li><a class="dropdown-item-link" href="about.html#outcomes"><i class="fa-solid fa-angle-right"></i> Program Outcomes (POs)</a></li>
            </ul>
          </li>

          <li class="nav-item" data-nav="people">
            <a href="#" class="nav-link-btn" aria-haspopup="true">People <i class="fa-solid fa-chevron-down dropdown-chevron"></i></a>
            <ul class="nav-dropdown">
              <li><a class="dropdown-item-link" href="${IT_SITE}/faculty-profile" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> Faculty Profile</a></li>
              <li><a class="dropdown-item-link" href="${IT_SITE}/m-tech-faculty" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> M.Tech Faculty</a></li>
              <li><a class="dropdown-item-link" href="${IT_SITE}/hod" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> Head of Department</a></li>
            </ul>
          </li>

          <li class="nav-item" data-nav="academics">
            <a href="#" class="nav-link-btn" aria-haspopup="true">Academics <i class="fa-solid fa-chevron-down dropdown-chevron"></i></a>
            <ul class="nav-dropdown">
              <li><a class="dropdown-item-link" href="${IT_SITE}/b-tech-it" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> B.Tech Information Technology</a></li>
              <li><a class="dropdown-item-link" href="${IT_SITE}/m-tech-it" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> M.Tech (AI &amp; Data Science)</a></li>
              <li><a class="dropdown-item-link" href="index.html#honours-minors"><i class="fa-solid fa-angle-right"></i> Honours &amp; Minor Courses</a></li>
              <li><a class="dropdown-item-link" href="${IT_SITE}/Infrastructure-facilities" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> Infrastructure &amp; Labs</a></li>
            </ul>
          </li>

          <li class="nav-item" data-nav="students">
            <a href="#" class="nav-link-btn" aria-haspopup="true">Student Corner <i class="fa-solid fa-chevron-down dropdown-chevron"></i></a>
            <ul class="nav-dropdown">
              <li><a class="dropdown-item-link" href="${IT_SITE}/workshops" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> Workshops &amp; Expert Talks</a></li>
              <li><a class="dropdown-item-link" href="${IT_SITE}/pdc" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> Student Achievements</a></li>
              <li><a class="dropdown-item-link" href="https://www.pccoepune.com/timetable-examinations.php" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-angle-right"></i> Examination Portal</a></li>
              <li><a class="dropdown-item-link" href="index.html#testimonials"><i class="fa-solid fa-angle-right"></i> Student Testimonials</a></li>
            </ul>
          </li>

          <li class="nav-item" data-nav="contact">
            <a href="${IT_SITE}/contact" class="nav-link-btn" target="_blank" rel="noopener noreferrer">Contact</a>
          </li>

        </ul>
      </div>

      <div class="nav-actions">
        <button class="nav-search-btn trigger-search-modal" title="Quick Search (Ctrl + K)" aria-label="Quick Search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <a href="${ENQUIRY_FORM}" target="_blank" rel="noopener noreferrer" class="nav-cta-apply">Apply Now</a>
        <button class="mobile-menu-toggle" aria-label="Open Navigation Menu">
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
          ${tickerItems(false)}
          ${tickerItems(true)}
        </div>
      </div>
    </div>
  </div>`;

  /* Ticker news items. Edit the text here; the list is repeated once
     automatically so the scrolling loop has no gap. */
  function tickerItems(hidden) {
    const items = [
      { tag: 'Admissions', text: '<strong>M.Tech (AI &amp; Data Science):</strong> Two-year PG programme, intake of 18 seats', href: IT_SITE + '/m-tech-it' },
      { tag: 'Academics', text: '<strong>Honours &amp; Minors:</strong> Data Science, AI &amp; ML, Cyber Security and Blockchain', href: 'index.html#honours-minors' },
      { tag: 'Award', text: '<strong>Team Technogeeks:</strong> won a ₹1 lakh prize for a CAPTCHA solution for visually impaired users', href: IT_SITE + '/pdc' },
      { tag: 'Quality', text: '<strong>ISO 21001:2018</strong> certified, NBA accredited and NAAC \'A\' grade institute', href: 'about.html#about-department' },
      { tag: 'Research', text: '<strong>Faculty expertise:</strong> AI, Cyber Security, IoT, Computer Vision, Cloud and Quantum Computing', href: 'about.html#faculty-strength' }
    ];
    return items.map(item => `
          <div class="ticker-item"${hidden ? ' aria-hidden="true"' : ''}>
            <span class="ticker-tag">${item.tag}</span>
            <a href="${item.href}">${item.text} &rarr;</a>
          </div>`).join('');
  }

  document.currentScript.insertAdjacentHTML('beforebegin', headerHTML);

  // Highlight the menu item for the current page
  const page = document.body.dataset.page;
  const activeItem = document.querySelector(`.nav-item[data-nav="${page}"]`);
  if (activeItem) activeItem.classList.add('active');
})();
