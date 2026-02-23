/**
 * design-system.js — Dimitrios Georgiou Portfolio
 * Place in: assets/js/design-system.js
 * Include via _includes/scripts.html or head/custom.html
 */

(function () {
  'use strict';

  /* ─── 1. DARK MODE TOGGLE ──────────────────────────────────────────────── */
  const THEME_KEY = 'dg-theme';

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    // Update toggle button icon
    const btn = document.querySelector('.dg-theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '◐';
  }

  function initTheme() {
    const stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Init theme immediately to avoid flash
  initTheme();

  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.dg-theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Inject toggle button into masthead if not already there
    const masthead = document.querySelector('.masthead__inner-wrap, .masthead');
    if (masthead && !document.querySelector('.dg-theme-toggle')) {
      const btn = document.createElement('button');
      btn.className = 'dg-theme-toggle';
      btn.setAttribute('aria-label', 'Toggle dark mode');
      btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '◐';
      btn.addEventListener('click', toggleTheme);
      masthead.appendChild(btn);
    }
  });

  /* ─── 2. SCROLL ANIMATIONS (Intersection Observer) ─────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('dg-visible');
            // For stagger parents, also mark children
            if (entry.target.classList.contains('dg-stagger')) {
              Array.from(entry.target.children).forEach(function (child) {
                child.classList.add('dg-visible');
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Auto-observe elements with dg-fade-in class
    document.querySelectorAll('.dg-fade-in, .dg-stagger').forEach(function (el) {
      observer.observe(el);
    });

    // Also auto-apply fade-in to common elements
    const autoFadeSelectors = [
      '.feature__item',
      '.archive__item',
      '.dg-card',
      '.page__hero',
    ];
    autoFadeSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, i) {
        el.classList.add('dg-fade-in');
        el.style.transitionDelay = (i * 0.07) + 's';
        observer.observe(el);
      });
    });
  });

  /* ─── 3. READING PROGRESS BAR ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    // Only show on single/article pages
    const isArticlePage = document.body.classList.contains('layout--single');
    if (!isArticlePage) return;

    const bar = document.createElement('div');
    bar.className = 'dg-progress';
    document.body.prepend(bar);

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(progress, 100) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
  });

  /* ─── 4. SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  });

  /* ─── 5. ACTIVE NAV HIGHLIGHT ────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    document.querySelectorAll('.greedy-nav a, .nav__items a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && path.startsWith(href) && href !== '/') {
        link.classList.add('current');
      } else if (href === '/' && path === '/') {
        link.classList.add('current');
      }
    });
  });

  /* ─── 6. EXTERNAL LINKS — open in new tab ────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
      if (!link.hostname || link.hostname === window.location.hostname) return;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  });

})();
