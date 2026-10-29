/* ==========================================================================
   PCCOE – DEPARTMENT OF INFORMATION TECHNOLOGY
   Site behaviour. Bootstrap 5 handles the sliders and pop-ups; this file
   adds the rest. Each feature is a small function that does nothing on a
   page without its elements.

   1. Sticky menu shadow        5. Font size & contrast
   2. Mobile menu drawer        6. Scroll progress bar
   3. Back-to-top button        7. Scroll reveal animations
   4. Quick search (Ctrl + K)   8. Notices auto-scroll
                                9. Welcome pop-up (once per visit)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNav();
  initMobileNav();
  initBackToTop();
  initSearch();
  initAccessibility();
  initScrollProgress();
  initReveal();
  initNoticeScroll();
  initWelcomePopup();
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
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    drawer.classList.remove('open');
    backdrop.classList.remove('show');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  // Menus with a dropdown: on phones a tap opens the list; on desktop the
  // list opens on hover, and the heading itself is not a link.
  document.querySelectorAll('.nav-item').forEach(item => {
    const dropdown = item.querySelector('.nav-dropdown');
    const trigger = item.querySelector('.nav-link-btn');
    if (!dropdown || !trigger) return;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (isMobile()) {
        const isOpen = item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(isOpen));
      }
    });
  });

  drawer.querySelectorAll('.dropdown-item-link').forEach(link => link.addEventListener('click', close));
}

/* 3. BACK-TO-TOP BUTTON --------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
}

/* 4. QUICK SEARCH (Ctrl + K) ---------------------------------------------- */
/* The list (window.SEARCH_ITEMS) is built from the main menu in
   includes/footer.php, so new menu links are searchable automatically.  */
function initSearch() {
  const modalEl = document.getElementById('searchModal');
  const input = document.getElementById('siteSearchInput');
  const results = document.getElementById('searchResults');
  if (!modalEl || !input || !results || !window.bootstrap) return;

  const items = window.SEARCH_ITEMS || [];
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

  const escapeHtml = (text) => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function render(list) {
    if (!list.length) {
      results.innerHTML = '<p class="search-empty">No matching results. Try another word.</p>';
      return;
    }
    results.innerHTML = list.map(item => {
      const externalAttrs = /^https?:\/\//.test(item.url) ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `
        <a class="search-result" href="${escapeHtml(item.url)}"${externalAttrs}>
          <span class="search-result-cat">${escapeHtml(item.cat)}</span>
          <span class="search-result-title">${escapeHtml(item.title)}</span>
        </a>`;
    }).join('');
  }

  modalEl.addEventListener('show.bs.modal', () => {
    input.value = '';
    render(items.slice(0, 8));
  });
  modalEl.addEventListener('shown.bs.modal', () => input.focus());
  results.addEventListener('click', (e) => { if (e.target.closest('a')) modal.hide(); });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    render(q ? items.filter(item => (item.title + ' ' + item.cat).toLowerCase().includes(q)) : items.slice(0, 8));
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.show();
    }
  });
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

/* 8. NOTICES AUTO-SCROLL -------------------------------------------------- */
/* The news list scrolls slowly upwards and pauses while the mouse is over
   it or it has keyboard focus, so it can be read and clicked.            */
function initNoticeScroll() {
  const box = document.querySelector('.notice-scroll');
  if (!box || prefersReducedMotion) return;
  let paused = false;
  const pause = () => { paused = true; };
  const resume = () => { paused = false; };
  box.addEventListener('mouseenter', pause);
  box.addEventListener('mouseleave', resume);
  box.addEventListener('focusin', pause);
  box.addEventListener('focusout', resume);
  box.addEventListener('touchstart', pause, { passive: true });

  let position = 0;
  setInterval(() => {
    if (paused || box.scrollHeight <= box.clientHeight) return;
    position = Math.abs(box.scrollTop - position) > 2 ? box.scrollTop : position; // keep manual scrolling
    position += 1;
    if (position >= box.scrollHeight - box.clientHeight) position = 0;
    box.scrollTop = position;
  }, 50);
}

/* 9. WELCOME POP-UP (once per visit) -------------------------------------- */
function initWelcomePopup() {
  const popup = document.getElementById('welcomePopup');
  if (!popup || !window.bootstrap) return;
  try {
    if (sessionStorage.getItem('welcomePopupSeen')) return;
    sessionStorage.setItem('welcomePopupSeen', '1');
  } catch (e) { /* storage blocked: still show it */ }
  setTimeout(() => bootstrap.Modal.getOrCreateInstance(popup).show(), 800);
}
