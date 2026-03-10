/* ============================================
   CHICK N FISH — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Hero SVG Logo Draw Animation ---
  const logoSvg = document.getElementById('logoDrawSvg');
  const drawTagline = document.getElementById('heroDrawTagline');
  const drawScroll = document.getElementById('heroDrawScroll');

  if (logoSvg) {
    // Calculate and set stroke lengths for draw animation
    logoSvg.querySelectorAll('.draw').forEach(el => {
      try {
        const len = el.getTotalLength();
        el.style.setProperty('--len', len);
        el.style.strokeDasharray = len;
        el.style.strokeDashoffset = len;
      } catch (e) {
        el.style.setProperty('--len', 400);
        el.style.strokeDasharray = 400;
        el.style.strokeDashoffset = 400;
      }
    });

    // Phase 1: Fade in SVG canvas
    setTimeout(() => logoSvg.classList.add('visible'), 200);
    // Phase 2: Start stroke drawing
    setTimeout(() => logoSvg.classList.add('animate'), 500);
    // Phase 3: After all strokes drawn, add subtle fill
    setTimeout(() => logoSvg.classList.add('filled'), 3200);

    // Phase 4: Word-by-word tagline reveal
    if (drawTagline) {
      const words = drawTagline.querySelectorAll('.word');
      words.forEach((word, i) => {
        setTimeout(() => word.classList.add('visible'), 3600 + i * 120);
      });
    }

    // Phase 5: Scroll indicator fades in gently
    setTimeout(() => { if (drawScroll) drawScroll.classList.add('visible'); }, 4600);
  }

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- Category Tabs (Menu Page) ---
  const categoryTabs = document.querySelectorAll('.category-tab');
  const menuSections = document.querySelectorAll('.menu-category');

  if (categoryTabs.length > 0 && menuSections.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.category;

        // Update active tab
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show/hide sections
        if (target === 'all') {
          menuSections.forEach(s => {
            s.style.display = '';
            s.classList.add('visible');
          });
        } else {
          menuSections.forEach(s => {
            if (s.dataset.category === target) {
              s.style.display = '';
              s.classList.add('visible');
            } else {
              s.style.display = 'none';
            }
          });
        }

        // Scroll to menu content
        const menuContent = document.querySelector('.menu-content');
        if (menuContent) {
          const offset = 140;
          const top = menuContent.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // --- Promo Ticker (duplicate content for seamless loop) ---
  const ticker = document.querySelector('.promo-ticker');
  if (ticker) {
    const content = ticker.innerHTML;
    ticker.innerHTML = content + content;
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Active nav link highlight ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
