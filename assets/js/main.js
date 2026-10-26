/* ==========================================================================
   PCCOE – DEPARTMENT OF INFORMATION TECHNOLOGY
   All page behaviour lives in this one file. Each feature is a small
   function, and a function simply does nothing on a page that does not
   have its elements.

   1. Sticky menu shadow         7. Scroll reveal animations
   2. Mobile menu drawer         8. Number counters
   3. Back-to-top button         9. Hero slider
   4. Quick search (Ctrl + K)   10. Testimonial slider
   5. Font size & contrast      11. Accordions (open / close cards)
   6. Scroll progress bar       12. About page section highlighter
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNav();
  initMobileNav();
  initBackToTop();
  initSearch();
  initAccessibility();
  initScrollProgress();
  initReveal();
  initCounters();
  initHeroSlider();
  initTestimonials();
  initAccordions();
  initSectionSpy();
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 1. STICKY MENU SHADOW --------------------------------------------------- */
function initStickyNav() {
  const nav = document.querySelector('.site-navigation');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* 2. MOBILE MENU DRAWER --------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.nav-links-wrapper');
  if (!toggleBtn || !drawer) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-backdrop';
  document.body.appendChild(backdrop);

  const isMobile = () => window.innerWidth <= 992;

  function open() {
    drawer.classList.add('open');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    drawer.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
  backdrop.addEventListener('click', close);

  // On mobile, tapping a menu with a dropdown opens it instead of following the link
  document.querySelectorAll('.nav-item').forEach(item => {
    const dropdown = item.querySelector('.nav-dropdown');
    const trigger = item.querySelector('.nav-link-btn');
    if (!dropdown || !trigger) return;
    trigger.addEventListener('click', (e) => {
      if (isMobile()) {
        e.preventDefault();
        item.classList.toggle('open');
      } else if (trigger.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  });

  // Close the drawer after choosing a link
  drawer.querySelectorAll('.dropdown-item-link').forEach(link => link.addEventListener('click', close));
}

/* 3. BACK-TO-TOP BUTTON --------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* 4. QUICK SEARCH (Ctrl + K) ---------------------------------------------- */
/* To make something searchable, add one line to SEARCH_ITEMS. */
const SEARCH_ITEMS = [
  { title: 'About the Department', cat: 'About Us', url: 'about.html#about-department', desc: 'IT department of PCCOE, started in 2001, DTE code 6175.' },
  { title: "From HOD's Desk – Dr. Jayashree V. Katti", cat: 'About Us', url: 'about.html#hod-desk', desc: 'Message from the Head of the Information Technology Department.' },
  { title: 'Vision & Mission', cat: 'About Us', url: 'about.html#vision-mission', desc: 'Department vision and four mission statements.' },
  { title: 'Programs & Intake', cat: 'Academics', url: 'about.html#programs-intake', desc: 'B.Tech IT (120 seats) and M.Tech AI & DS (18 seats).' },
  { title: 'Department Milestones', cat: 'About Us', url: 'about.html#milestones', desc: 'Journey of the department from 2001 to today.' },
  { title: 'Program Outcomes (POs)', cat: 'Academics', url: 'about.html#outcomes', desc: 'Outcomes every IT graduate is expected to achieve.' },
  { title: 'Honours & Minor Courses', cat: 'Academics', url: 'index.html#honours-minors', desc: 'Data Science, AI & ML, Cyber Security and Blockchain.' },
  { title: 'B.Tech Information Technology', cat: 'Academics', url: 'https://it.pccoepune.com/b-tech-it', desc: 'Four-year undergraduate programme, intake 120.' },
  { title: 'M.Tech (AI & Data Science)', cat: 'Academics', url: 'https://it.pccoepune.com/m-tech-it', desc: 'Two-year postgraduate programme, intake 18.' },
  { title: 'Faculty Profiles', cat: 'People', url: 'https://it.pccoepune.com/faculty-profile', desc: 'Doctorates and researchers across AI, security, IoT and more.' },
  { title: 'Student Testimonials', cat: 'Students', url: 'index.html#testimonials', desc: 'What IT students say about the department.' },
  { title: 'Campus Video Tour', cat: 'Campus', url: 'index.html#video-tour', desc: 'A virtual walk through the PCCOE campus.' }
];

function initSearch() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('siteSearchInput');
  const results = document.getElementById('searchResults');
  if (!modal || !input || !results) return;

  const openSearch = () => {
    modal.classList.add('active');
    input.value = '';
    render(SEARCH_ITEMS.slice(0, 6));
    setTimeout(() => input.focus(), 100);
  };
  const closeSearch = () => modal.classList.remove('active');

  document.querySelectorAll('.trigger-search-modal').forEach(btn => btn.addEventListener('click', openSearch));
  modal.querySelector('.modal-close-btn').addEventListener('click', closeSearch);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
  results.addEventListener('click', (e) => { if (e.target.closest('a')) closeSearch(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    render(q ? SEARCH_ITEMS.filter(item =>
      (item.title + ' ' + item.cat + ' ' + item.desc).toLowerCase().includes(q)) : SEARCH_ITEMS.slice(0, 6));
  });

  function render(list) {
    if (!list.length) {
      results.innerHTML = '<p class="search-empty">No matching results. Try another word.</p>';
      return;
    }
    results.innerHTML = list.map(item => {
      const external = item.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `
        <a class="search-result" href="${item.url}"${external}>
          <span class="search-result-cat">${item.cat}</span>
          <span class="search-result-title">${item.title}</span>
          <span class="search-result-desc">${item.desc}</span>
        </a>`;
    }).join('');
  }
}

/* 5. FONT SIZE & CONTRAST ------------------------------------------------- */
function initAccessibility() {
  const body = document.body;
  const on = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener('click', fn); };
  on('fontIncrease', () => body.classList.add('text-large'));
  on('fontDecrease', () => body.classList.remove('text-large'));
  on('fontReset', () => body.classList.remove('text-large', 'contrast-high'));
  on('contrastToggle', () => body.classList.toggle('contrast-high'));
}

/* 6. SCROLL PROGRESS BAR (thin gold line at the very top) ----------------- */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* 7. SCROLL REVEAL ANIMATIONS --------------------------------------------- */
/* Add class="reveal" to any element to make it fade up when scrolled into
   view. Optional: data-delay="200" (milliseconds) to stagger items.      */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
      el.classList.add('is-visible');
      observer.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => observer.observe(el));
}

/* 8. NUMBER COUNTERS ------------------------------------------------------ */
/* <span class="count-up" data-target="120" data-suffix="+">120+</span>    */
function initCounters() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;

  function run(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion) { el.textContent = prefix + target + suffix; return; }
    const duration = 1800;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = prefix + Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(el => observer.observe(el));
}

/* 9. HERO SLIDER ---------------------------------------------------------- */
function initHeroSlider() {
  const slider = document.querySelector('.hero');
  if (!slider) return;
  const slides = slider.querySelectorAll('.hero-slide');
  const dots = slider.querySelectorAll('.hero-dot');
  const progress = slider.querySelector('.hero-progress-bar');
  const DURATION = 6000;
  let current = 0;
  let timer = null;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
    if (progress && !prefersReducedMotion) {
      progress.style.transition = 'none';
      progress.style.transform = 'scaleX(0)';
      void progress.offsetWidth; // restart the bar animation
      progress.style.transition = `transform ${DURATION}ms linear`;
      progress.style.transform = 'scaleX(1)';
    }
  }
  function start() {
    stop();
    if (!prefersReducedMotion) timer = setInterval(() => show(current + 1), DURATION);
  }
  function stop() { if (timer) clearInterval(timer); }

  slider.querySelector('.hero-arrow.prev').addEventListener('click', () => { show(current - 1); start(); });
  slider.querySelector('.hero-arrow.next').addEventListener('click', () => { show(current + 1); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));

  // Swipe on phones
  let startX = 0;
  slider.addEventListener('touchstart', e => { startX = e.changedTouches[0].screenX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].screenX - startX;
    if (Math.abs(diff) > 50) { show(current + (diff < 0 ? 1 : -1)); start(); }
  }, { passive: true });

  show(0);
  start();
}

/* 10. TESTIMONIAL SLIDER -------------------------------------------------- */
function initTestimonials() {
  const wrap = document.querySelector('.testimonials');
  if (!wrap) return;
  const track = wrap.querySelector('.testimonial-track');
  const cards = track.children;
  const dotsBox = wrap.querySelector('.testimonial-dots');
  let index = 0;
  let timer = null;

  const perView = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const pages = () => Math.max(1, cards.length - perView() + 1);

  function buildDots() {
    dotsBox.innerHTML = '';
    for (let i = 0; i < pages(); i++) {
      const b = document.createElement('button');
      b.className = 'testimonial-dot';
      b.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      b.addEventListener('click', () => { go(i); restart(); });
      dotsBox.appendChild(b);
    }
  }
  function go(i) {
    index = (i + pages()) % pages();
    const step = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
    track.style.transform = `translateX(${-index * step}px)`;
    dotsBox.querySelectorAll('.testimonial-dot').forEach((d, n) => d.classList.toggle('active', n === index));
  }
  function restart() {
    if (timer) clearInterval(timer);
    if (!prefersReducedMotion) timer = setInterval(() => go(index + 1), 5000);
  }

  wrap.querySelector('.testimonial-nav.prev').addEventListener('click', () => { go(index - 1); restart(); });
  wrap.querySelector('.testimonial-nav.next').addEventListener('click', () => { go(index + 1); restart(); });
  wrap.addEventListener('mouseenter', () => timer && clearInterval(timer));
  wrap.addEventListener('mouseleave', restart);
  window.addEventListener('resize', () => { buildDots(); go(Math.min(index, pages() - 1)); });

  buildDots();
  go(0);
  restart();
}

/* 11. ACCORDIONS ---------------------------------------------------------- */
/* <div class="accordion"><button class="accordion-trigger">..</button>
   <div class="accordion-body">..</div></div>                              */
function initAccordions() {
  document.querySelectorAll('.accordion').forEach(acc => {
    const trigger = acc.querySelector('.accordion-trigger');
    const body = acc.querySelector('.accordion-body');
    if (!trigger || !body) return;
    const set = (open) => {
      acc.classList.toggle('open', open);
      trigger.setAttribute('aria-expanded', open);
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
    };
    set(acc.classList.contains('open'));
    trigger.addEventListener('click', () => set(!acc.classList.contains('open')));
    window.addEventListener('resize', () => { if (acc.classList.contains('open')) body.style.maxHeight = body.scrollHeight + 'px'; });
  });
}

/* 12. ABOUT PAGE SECTION HIGHLIGHTER -------------------------------------- */
/* Highlights the link in the "On this page" list for the section in view. */
function initSectionSpy() {
  const links = document.querySelectorAll('.page-toc a[href^="#"]');
  if (!links.length) return;
  const map = new Map();
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) map.set(section, link);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        map.get(entry.target).classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, section) => observer.observe(section));
}
