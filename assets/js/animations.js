/* ============================================
   MINIMAL PROFESSIONAL INTERACTIONS
   Subtle, Performance-Optimized
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // SUBTLE FADE-IN FOR CARDS ONLY (NOT HEADERS)
  // ============================================
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        fadeInObserver.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Only animate cards, not headers
  const animatedElements = document.querySelectorAll(
    '.feature__item, .project-card, .publication-item, .wishlist-item'
  );
  
  animatedElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    fadeInObserver.observe(el);
  });

  // Smooth anchor scrolling is now handled in scripts.html

  // ============================================
  // TOC ACTIVE STATE
  // ============================================
  const tocLinks = document.querySelectorAll('.toc__menu a');
  
  if (tocLinks.length > 0) {
    const sections = Array.from(tocLinks).map(link => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id === '#_') return null;
      try {
        return document.querySelector(id);
      } catch (e) {
        return null;
      }
    }).filter(section => section !== null);
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = '';
          
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
              current = section.getAttribute('id');
            }
          });
          
          tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
              link.classList.add('active');
            }
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    });
  }

  // ============================================
  // LANGUAGE BAR ANIMATIONS (CV page only)
  // ============================================
  const langBars = document.querySelectorAll('.cv-lang-fill');
  
  if (langBars.length > 0) {
    const langObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.dataset.width || entry.target.style.width;
          entry.target.style.width = '0%';
          
          setTimeout(() => {
            entry.target.style.width = targetWidth;
          }, 100);
          
          langObserver.unobserve(entry.target);
        }
      });
    });
    
    langBars.forEach(bar => {
      bar.dataset.width = bar.style.width;
      langObserver.observe(bar);
    });
  }

  // ============================================
  // RESPECT REDUCED MOTION PREFERENCE
  // ============================================
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
    });
  }

});

// ============================================
// MINIMAL CSS ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
  .fade-in-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .toc__menu a.active {
    color: #2563eb;
    font-weight: 600;
  }
`;
document.head.appendChild(style);
