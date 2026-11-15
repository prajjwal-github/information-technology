/* ==========================================================================
   SHARED HEADER + FOOTER  (used by every page)
   --------------------------------------------------------------------------
   Every page has two empty boxes:
       <div id="site-header"></div>   and   <div id="site-footer"></div>
   This file fills them, so the header, menu and footer are written ONCE,
   here, and every page shows the same thing.
   It works on a web server and also when a page is opened straight from
   the folder (double-click), because it does not load any other file.

   WHAT TO EDIT HERE
     SITE       contact details shown in the header and footer
     MENU       main menu links (add a link = copy one line)
     SPOTLIGHT  the scrolling "Spotlight" news line under the menu
   ========================================================================== */

/* ---- 1. CONTACT DETAILS ------------------------------------------------ */
var SITE = {
  deptName: 'Department of Information Technology',
  collegeName: 'Pimpri Chinchwad College of Engineering',
  trustName: "PIMPRI CHINCHWAD EDUCATION TRUST's",
  topPhone: '+91 - 9960984347',
  topPhoneTel: '+91-9960984347',
  topEmail: 'pccoeadmin@gmail.com',
  deptEmail: 'Pccoeitdept@gmail.com',
  deptPhone: '020-27600061-2222',
  address: 'Near Akurdi Railway Station Road, Sector No. 26, Pradhikaran, Nigdi, Pimpri, Maharashtra 411044',
  enquiryForm: 'https://forms.zohopublic.in/dmteampcco1/form/PCETForm/formperma/tYvqjs2MVyQV3phz1vyaomCABN2zsmOV12BKDcKD3ck',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.091343874179!2d73.75136151258685!3d18.651748851481713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1755593614754!5m2!1sen!2sin'
};

/* ---- 2. MAIN MENU -------------------------------------------------------
   label = text shown, href = page file (or full web address).
   A group with "items" becomes a drop-down.                                 */
var MENU = [
  { label: 'HOME', href: 'index.html', icon: 'fa-solid fa-house-chimney' },
  { label: 'About us', items: [
    { label: 'About Department',   href: 'about.html' },
    { label: 'Vision and Mission', href: 'vision-mission.html' },
    { label: 'HOD Desk',           href: 'hod.html' },
    { label: "PO's/PSO/PEO's",     href: 'pso.html' },
    { label: 'Board of Studies',   href: 'bos.html' }
  ]},
  { label: 'People', items: [
    { label: 'Faculty Profile',     href: 'faculty-profile.html' },
    { label: 'Admin Staff Profile', href: 'admin-staff-profile.html' }
  ]},
  { label: 'Academics', items: [
    { label: 'B.Tech Information Technology',  href: 'b-tech-it.html' },
    { label: 'M.Tech(AI & DS) IT Engineering', href: 'm-tech-it.html' },
    { label: 'Syllabus',                       href: 'btechsyllabus.html' },
    { label: 'Examination',                    href: 'https://www.pccoepune.com/timetable-examinations.php' },
    { label: 'Timetable',                      href: 'timetables.html' },
    { label: 'Academic Calender',              href: 'acalender.html' }
  ]},
  { label: 'Research', items: [
    { label: 'Research Coordinator Desk',    href: 'research-coordinator-desk.html' },
    { label: 'Intellectual Property Rights', href: 'patents-and-copyrights.html' },
    { label: 'Publication',                  href: 'publication.html' },
    { label: 'Research Funding',             href: 'research-grants-publications.html' },
    { label: 'Books Published',              href: 'books-published.html' },
    { label: 'Workshops Conferences',        href: 'workshops-conferences.html' },
    { label: 'Entrepreneurship Activities',  href: 'entrepreneurship-activities.html' },
    { label: 'Consultancy Work',             href: 'consultancy-work.html' },
    { label: 'Center of Excellence',         href: 'center-of-excellence.html' }
  ]},
  { label: 'Student Corner', items: [
    { label: 'Professional Body Student Chapter', href: 'professional-chapters.html' },
    { label: 'Student Development and Welfare',   href: 'student-dev-welfare.html' },
    { label: 'Student Achievement',               href: 'stud-achievements.html' },
    { label: 'Events Conducted',                  href: 'pdc.html' }
  ]},
  { label: 'Placements', items: [
    { label: 'Placements',                          href: 'placements.html' },
    { label: 'Internships',                         href: 'internships.html' },
    { label: 'Alumni',                              href: 'alumini.html' },
    { label: 'Industrial Visit & Training Program', href: 'training.html' },
    { label: 'MOU',                                 href: 'mou.html' }
  ]},
  { label: 'Facilities', items: [
    { label: 'Infrastructure',      href: 'infrastructure.html' },
    { label: 'Research Facilities', href: 'research_facilities.html' },
    { label: 'Library',             href: 'library.html' },
    { label: 'Tutorial Room',       href: '#' }
  ]},
  { label: 'Activities', href: 'activities.html' },
  { label: 'Contact',    href: 'contact.html' }
];

/* ---- 3. SPOTLIGHT NEWS LINE -------------------------------------------- */
var SPOTLIGHT = [
  { text: 'Praxis 2026 - Comming Soon', href: 'https://www.praxis26.in' },
  { text: 'Congratulations to TY IT Students on Securing 3rd Place at IEEE Pitch Competition 2026!', href: 'https://it.pccoepune.com/assets/images/achievements/pitch-competition-2026.jpg' },
  { text: 'Congratulations- First Prize in Centarl India Hackethon(CIH) 3.0)', href: 'https://it.pccoepune.com/assets/images/first-prize-cih-01.jpeg' },
  { text: 'Heartiest Congratulations to team- The Hustlers! 🌟. Team secured the *3rd Prize* 🏆 in *Round 2* of the InventPitch Competition 2025 by IEEE Pune Section', href: 'https://it.pccoepune.com/assets/images/hustlers.jpg' },
  { text: 'Heartiest Congratulation To Atharva Deshmukh  on International Internship with stipend of 1367 USD', href: 'https://it.pccoepune.com/assets/images/Atharva_Deshmukh_International_Internship.webp' }
];

/* ==========================================================================
   You normally do not need to change anything below this line.
   ========================================================================== */
(function () {
  // Name of the page now open, e.g. "about" (works for /about and about.html)
  var file = location.pathname.split('/').pop().replace(/\.html$/, '').toLowerCase();
  var current = (file === '' ? 'index' : file) + '.html';

  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function isExternal(href) { return /^https?:\/\//.test(href); }
  function linkAttrs(href) {
    return 'href="' + esc(href) + '"' + (isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : '');
  }
  function ext(href) { return linkAttrs(href); }
  function isActive(item) {
    if (item.href === current) return true;
    return (item.items || []).some(function (child) { return child.href === current; });
  }

  /* ---- Menu HTML ---- */
  var menuHtml = MENU.map(function (item) {
    var active = isActive(item) ? ' active' : '';
    if (!item.items) {
      return '<li class="nav-item' + active + '"><a ' + linkAttrs(item.href) + ' class="nav-link-btn"' +
        (active ? ' aria-current="page"' : '') + '>' +
        (item.icon ? '<i class="' + item.icon + '"></i> ' : '') + esc(item.label) + '</a></li>';
    }
    var links = item.items.map(function (child) {
      var here = child.href === current ? ' aria-current="page"' : '';
      return '<li><a class="dropdown-item-link" ' + linkAttrs(child.href) + here + '><i class="fa-solid fa-angle-right"></i> ' + esc(child.label) + '</a></li>';
    }).join('');
    return '<li class="nav-item' + active + '"><a href="#" class="nav-link-btn" role="button" aria-haspopup="true" aria-expanded="false">' +
      esc(item.label) + ' <i class="fa-solid fa-chevron-down dropdown-chevron"></i></a><ul class="nav-dropdown">' + links + '</ul></li>';
  }).join('');

  /* ---- Spotlight HTML (list repeated so the scroll loops without a gap) ---- */
  var tickerHtml = [false, true].map(function (copy) {
    return SPOTLIGHT.map(function (news) {
      return '<div class="ticker-item"' + (copy ? ' aria-hidden="true"' : '') + '><a ' + ext(news.href) +
        (copy ? ' tabindex="-1"' : '') + '>' + esc(news.text) + ' &rarr;</a></div>';
    }).join('');
  }).join('');

  var headerHtml =
    '<a class="visually-hidden-focusable skip-link" href="#main-content">Skip to main content</a>' +

    /* Top contact strip */
    '<header class="top-strip" role="region" aria-label="Top Contact and Admission Strip"><div class="container"><div class="top-strip-inner">' +
      '<div class="top-contact-info">' +
        '<div class="top-contact-item"><i class="fa-solid fa-phone-volume"></i><a href="tel:' + SITE.topPhoneTel + '" title="Call">' + esc(SITE.topPhone) + '</a></div>' +
        '<span class="strip-divider">|</span>' +
        '<div class="top-contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:' + SITE.topEmail + '" title="Email PCCOE Office">' + esc(SITE.topEmail) + '</a></div>' +
        '<div class="top-social-group">' +
          '<a ' + ext('https://www.facebook.com/pccoeieee') + ' class="top-social-link" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
          '<a ' + ext('https://www.instagram.com/pccoeieee') + ' class="top-social-link" title="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
          '<a ' + ext('https://in.linkedin.com/company/ieee-pccoe-student-branch') + ' class="top-social-link" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' +
        '</div>' +
      '</div>' +
      '<div class="top-links">' +
        '<a class="top-nav-link" ' + ext('http://www.pccoepune.com/international-admissions.php') + '>International Admission Enquiry</a><span class="strip-divider">|</span>' +
        '<a class="top-enquiry-link" ' + ext(SITE.enquiryForm) + '><i class="fa-solid fa-bolt"></i> Admission Enquiry</a><span class="strip-divider">|</span>' +
        '<a class="top-nav-link" ' + ext('http://www.pccoepune.com/faculty-training-opportunities.php') + '>FTO</a><span class="strip-divider">|</span>' +
        '<a class="top-nav-link" ' + ext('http://www.pccoepune.com/nirf.php') + '>NIRF</a><span class="strip-divider">|</span>' +
        '<a class="top-nav-link" ' + ext('https://www.aicte-india.org/feedback/index.php') + '>AICTE Feedback</a>' +
        '<div class="access-tools" title="Accessibility Adjustments">' +
          '<button class="access-btn" id="fontDecrease" title="Decrease Font Size" aria-label="Decrease Font Size">A-</button>' +
          '<button class="access-btn" id="fontReset" title="Normal Font Size" aria-label="Normal Font Size">A</button>' +
          '<button class="access-btn" id="fontIncrease" title="Increase Font Size" aria-label="Increase Font Size">A+</button>' +
          '<button class="access-btn" id="contrastToggle" title="Toggle High Contrast" aria-label="Toggle High Contrast"><i class="fa-solid fa-circle-half-stroke"></i></button>' +
        '</div>' +
      '</div>' +
    '</div></div></header>' +

    /* College logos and name */
    '<section class="brand-header" role="banner"><div class="container"><div class="brand-header-grid">' +
      '<div class="brand-logo-left"><a ' + ext('http://www.pccoepune.com/') + ' class="logo-link" title="PCCOE Pune Official Website"><img src="assets/images/logo/pccoe-logo.webp" alt="PCCOE LOGO" class="main-logo-img"></a></div>' +
      '<div class="brand-text-center">' +
        '<div class="trust-title">' + esc(SITE.trustName) + '</div>' +
        '<div class="college-name">' + esc(SITE.collegeName.toUpperCase()) + '</div>' +
        '<div class="dept-title-text">' + esc(SITE.deptName.toUpperCase()) + '</div>' +
        '<div class="accreditation-ribbon">' +
          '<span class="accreditation-item"><i class="fa-solid fa-award"></i><strong>NBA</strong> Accredited</span><span class="accreditation-sep">|</span>' +
          '<span class="accreditation-item"><i class="fa-solid fa-star"></i><strong>NAAC</strong> Accredited with <strong>\'A\'</strong> Grade</span><span class="accreditation-sep">|</span>' +
          '<span class="accreditation-item"><i class="fa-solid fa-building-columns"></i>An <strong>Autonomous</strong> Institute</span><span class="accreditation-sep">|</span>' +
          '<span class="accreditation-item"><i class="fa-solid fa-check-double"></i><strong>AICTE</strong> Approved</span><span class="accreditation-sep">|</span>' +
          '<span class="accreditation-item"><i class="fa-solid fa-university"></i>Permanently Affiliated to <strong>SPPU</strong>, Pune</span>' +
        '</div>' +
      '</div>' +
      '<div class="brand-logo-right"><a ' + ext('http://pcet.org.in/') + ' class="logo-link" title="PCET Trust Portal"><img src="assets/images/logo/pcet-trust-logo.webp" alt="PCET TRUST LOGO" class="trust-logo-img"></a></div>' +
    '</div></div></section>' +

    /* Main menu */
    '<nav class="site-navigation" role="navigation" aria-label="Main Navigation"><div class="container nav-container">' +
      '<div class="nav-links-wrapper" id="mainMenu"><ul class="nav-list">' + menuHtml + '</ul></div>' +
      '<div class="nav-actions">' +
        '<button class="nav-search-btn" data-bs-toggle="modal" data-bs-target="#searchModal" title="Quick Search (Ctrl + K)" aria-label="Quick Search"><i class="fa-solid fa-magnifying-glass"></i></button>' +
        '<a ' + ext(SITE.enquiryForm) + ' class="nav-cta-apply">Apply Now</a>' +
        '<button class="mobile-menu-toggle" aria-label="Open Navigation Menu" aria-controls="mainMenu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>' +
      '</div>' +
    '</div></nav>' +

    /* Spotlight */
    '<div class="container spotlight-container"><div class="spotlight-wrapper">' +
      '<div class="spotlight-badge"><i class="fa-solid fa-bullhorn"></i> Spotlight</div>' +
      '<div class="spotlight-ticker-viewport"><div class="spotlight-marquee">' + tickerHtml + '</div></div>' +
    '</div></div>';

  var footerHtml =
    '<footer class="site-master-footer" role="contentinfo">' +
      '<div class="footer-main-body"><div class="container footer-columns-grid">' +
        '<div class="footer-col footer-col-contact">' +
          '<div class="footer-counter-wrap"><span class="footer-dept-badge"><i class="fa-solid fa-laptop-code"></i> ' + esc(SITE.deptName) + '</span></div>' +
          '<ul class="footer-contact-list">' +
            '<li class="footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>' + esc(SITE.address) + '</span></li>' +
            '<li class="footer-contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:' + SITE.deptEmail + '">' + esc(SITE.deptEmail) + '</a></li>' +
            '<li class="footer-contact-item"><i class="fa-solid fa-phone"></i><span>' + esc(SITE.deptPhone) + '</span></li>' +
          '</ul>' +
          '<div class="footer-social">' +
            '<a ' + ext('https://www.facebook.com/pccoeieee') + ' title="Facebook" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
            '<a ' + ext('https://www.instagram.com/pccoeieee') + ' title="Instagram" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
            '<a ' + ext('https://in.linkedin.com/company/ieee-pccoe-student-branch') + ' title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col"><ul class="footer-nav-menu">' +
          '<li><a href="index.html">Home</a></li>' +
          '<li><a ' + ext('http://www.pccoepune.com/best-engineering-college-in-akurdi.php') + '>About PCCOE</a></li>' +
          '<li><a ' + ext('http://pcet.org.in/') + '>About PCET</a></li>' +
          '<li><a href="contact.html">Contact us</a></li>' +
        '</ul></div>' +
        '<div class="footer-col"><ul class="footer-nav-menu">' +
          '<li><span class="footer-menu-heading">Important Links</span></li>' +
          '<li><a ' + ext('http://www.unipune.ac.in/') + '>Savitribai Phule Pune University</a></li>' +
          '<li><a ' + ext('http://www.pccoepune.com/') + '>Pimpri Chinchwad College Of Engineering</a></li>' +
          '<li><a ' + ext('https://www.aicte-india.org/') + '>All India Council for Technical Education</a></li>' +
        '</ul></div>' +
        '<div class="footer-col footer-col-map">' +
          '<div class="footer-location-title"><i class="fa-solid fa-location-dot"></i> Location</div>' +
          '<div class="footer-map-container"><iframe src="' + SITE.mapEmbed + '" title="PCCOE Akurdi Campus Map Location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>' +
        '</div>' +
      '</div></div>' +
      '<div class="footer-bottom-strip"><div class="container footer-bottom-inner">' +
        '<div><span>Copyright @ ' + new Date().getFullYear() + ' Pimpri Chinchwad College of Engineering <strong>(PCCOE)</strong></span></div>' +
        '<div><span>Designed &amp; Developed by <a ' + ext('https://pcet.org.in/digital-marketing-team/') + ' class="team-badge-link">Digital Marketing Team, PCET</a></span></div>' +
      '</div></div>' +
    '</footer>' +

    '<button class="back-to-top-btn" title="Back to top" aria-label="Back to top"><i class="fa-solid fa-chevron-up"></i></button>' +

    /* Quick search pop-up (Ctrl + K) */
    '<div class="modal fade search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalTitle" aria-hidden="true">' +
      '<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content">' +
        '<div class="modal-header"><h4 class="modal-title" id="searchModalTitle"><i class="fa-solid fa-magnifying-glass"></i> Search IT Department</h4>' +
        '<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close search"></button></div>' +
        '<div class="modal-body"><input type="search" id="siteSearchInput" class="form-control search-input" placeholder="Search pages, e.g. faculty, syllabus, placements..." aria-label="Search">' +
        '<div id="searchResults" class="search-results" aria-live="polite"></div></div>' +
      '</div></div>' +
    '</div>';

  var headerBox = document.getElementById('site-header');
  var footerBox = document.getElementById('site-footer');
  if (headerBox) headerBox.outerHTML = headerHtml;
  if (footerBox) footerBox.outerHTML = footerHtml;

  /* Side menu on inner pages: links of the same menu group */
  var sideBox = document.getElementById('side-menu');
  if (sideBox) {
    // The menu group that holds this page; pages that are not in the menu
    // name their group in data-group="..." on the side menu box.
    var group = MENU.filter(function (item) {
      return (item.items || []).some(function (child) { return child.href === current; });
    })[0] || MENU.filter(function (item) {
      return item.items && item.label === sideBox.getAttribute('data-group');
    })[0];
    var list = group ? group.items : MENU.filter(function (item) { return !item.items; });
    sideBox.innerHTML =
      '<div class="side-menu-title">' + esc(group ? group.label : 'Quick Links') + '</div>' +
      '<ul class="side-menu-list">' + list.filter(function (l) { return l.href !== '#'; }).map(function (l) {
        var here = l.href === current;
        return '<li><a ' + linkAttrs(l.href) + (here ? ' class="active" aria-current="page"' : '') + '><i class="fa-solid fa-angle-right"></i> ' + esc(l.label) + '</a></li>';
      }).join('') + '</ul>';
  }

  /* List used by the quick search pop-up, built from the menu */
  window.SEARCH_ITEMS = [];
  MENU.forEach(function (item) {
    (item.items || [item]).forEach(function (link) {
      if (link.href === '#') return;
      window.SEARCH_ITEMS.push({ title: link.label, cat: item.items ? item.label : 'Menu', url: link.href });
    });
  });
})();
