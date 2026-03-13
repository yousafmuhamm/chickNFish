/* ============================================
   CHICK N FISH — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Hero Logo Video Animation ---
  const logoVideo = document.getElementById('logoVideo');
  const drawTagline = document.getElementById('heroDrawTagline');
  const drawScroll = document.getElementById('heroDrawScroll');

  if (logoVideo) {
    // Play at 2× speed
    logoVideo.playbackRate = 2.0;

    // Fade in video once it can play
    logoVideo.addEventListener('canplay', () => {
      logoVideo.classList.add('visible');
    }, { once: true });
    // Fallback: show after short delay if already loaded
    setTimeout(() => logoVideo.classList.add('visible'), 100);

    const revealAfterVideo = () => {
      if (drawTagline) {
        const words = drawTagline.querySelectorAll('.word');
        words.forEach((word, i) => {
          setTimeout(() => word.classList.add('visible'), i * 50);
        });
      }
      setTimeout(() => { if (drawScroll) drawScroll.classList.add('visible'); }, 350);
    };

    logoVideo.addEventListener('ended', revealAfterVideo, { once: true });

    // Fallback: if video fails to load or is very long, reveal after 4s
    setTimeout(() => {
      if (drawTagline && !drawTagline.querySelector('.word.visible')) {
        revealAfterVideo();
      }
    }, 4000);
  }

  // --- Order Modal (Promo Banner click) ---
  const promoBanner = document.getElementById('promoBanner');
  const orderModal = document.getElementById('orderModalOverlay');
  const orderModalClose = document.getElementById('orderModalClose');

  if (promoBanner && orderModal) {
    const openModal = () => orderModal.classList.add('active');
    const closeModal = () => orderModal.classList.remove('active');

    promoBanner.addEventListener('click', openModal);
    promoBanner.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(); });
    orderModalClose.addEventListener('click', closeModal);
    orderModal.addEventListener('click', e => { if (e.target === orderModal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
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
