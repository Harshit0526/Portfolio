(function () {
  'use strict';

  var SKILLS = [
    ['Java', '92%', 'CORE'],
    ['Spring Boot', '88%', 'FRAMEWORK'],
    ['REST APIs', '84%', 'BACKEND'],
    ['JavaScript', '78%', 'LANGUAGE'],
    ['MySQL', '76%', 'DATABASE'],
    ['React', '72%', 'FRONTEND'],
  ];

  var WORKS = [
    ['01', 'Viastastore', 'E-Commerce Website', 'Full-stack e-commerce website with product browsing, user authentication, cart, order management and admin dashboard functionality.',
      '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">'
      + '<defs>'
      + '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1634"/><stop offset="100%" stop-color="#050913"/></linearGradient>'
      + '<linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3e6ef1"/><stop offset="100%" stop-color="#82a8ff"/></linearGradient>'
      + '<radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#3e6ef1" stop-opacity="0.35"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
      + '</defs>'
      + '<rect width="420" height="220" fill="url(#bg)"/>'
      + '<circle cx="210" cy="110" r="90" fill="url(#glow)"/>'
      + '<rect x="30" y="18" width="360" height="2" fill="url(#accent)" opacity="0.18" rx="1"/>'
      + '<rect x="30" y="200" width="360" height="2" fill="url(#accent)" opacity="0.18" rx="1"/>'
      /* browser chrome */
      + '<rect x="60" y="30" width="300" height="160" rx="4" fill="#0a1428" stroke="#2a4a8a" stroke-width="1"/>'
      + '<rect x="60" y="30" width="300" height="22" rx="4" fill="#0d1d3e" stroke="#2a4a8a" stroke-width="1"/>'
      + '<circle cx="76" cy="41" r="4" fill="#1e3a6e"/>'
      + '<circle cx="90" cy="41" r="4" fill="#1e3a6e"/>'
      + '<circle cx="104" cy="41" r="4" fill="#1e3a6e"/>'
      + '<rect x="118" y="35" width="160" height="12" rx="2" fill="#0b1634" stroke="#2a4a8a" stroke-width="1"/>'
      + '<text x="198" y="45" font-size="6" fill="#4a6fa5" font-family="monospace" text-anchor="middle">viastastore.com</text>'
      /* navbar */
      + '<rect x="60" y="52" width="300" height="18" fill="#0c1a38"/>'
      + '<text x="75" y="64" font-size="6" fill="#6d9cff" font-family="monospace">SHOP</text>'
      + '<text x="105" y="64" font-size="6" fill="#4a6fa5" font-family="monospace">CATEGORIES</text>'
      + '<text x="160" y="64" font-size="6" fill="#4a6fa5" font-family="monospace">DEALS</text>'
      + '<rect x="318" y="56" width="34" height="10" rx="2" fill="#3e6ef1"/>'
      + '<text x="335" y="64" font-size="6" fill="#fff" font-family="monospace" text-anchor="middle">LOGIN</text>'
      /* hero banner */
      + '<rect x="68" y="78" width="180" height="60" rx="2" fill="#0d1e40" stroke="#1e3a6e" stroke-width="1"/>'
      + '<text x="78" y="96" font-size="8" fill="#6d9cff" font-family="monospace" font-weight="bold">Shop Smarter</text>'
      + '<text x="78" y="108" font-size="6" fill="#8aa4d4" font-family="monospace">Live Better</text>'
      + '<rect x="78" y="114" width="50" height="10" rx="2" fill="url(#accent)"/>'
      + '<text x="103" y="122" font-size="5.5" fill="#fff" font-family="monospace" text-anchor="middle">EXPLORE</text>'
      /* product cards */
      + '<rect x="258" y="78" width="46" height="60" rx="2" fill="#0d1e40" stroke="#1e3a6e" stroke-width="1"/>'
      + '<rect x="263" y="83" width="36" height="28" rx="1" fill="#112040"/>'
      + '<line x1="281" y1="91" x2="281" y2="103" stroke="#3e6ef1" stroke-width="1.5"/>'
      + '<line x1="275" y1="97" x2="287" y2="97" stroke="#3e6ef1" stroke-width="1.5"/>'
      + '<text x="281" y="122" font-size="5" fill="#8aa4d4" font-family="monospace" text-anchor="middle">ITEM</text>'
      + '<rect x="263" y="126" width="36" height="6" rx="1" fill="#3e6ef1" opacity="0.7"/>'
      + '<rect x="310" y="78" width="46" height="60" rx="2" fill="#0d1e40" stroke="#1e3a6e" stroke-width="1"/>'
      + '<rect x="315" y="83" width="36" height="28" rx="1" fill="#112040"/>'
      + '<circle cx="333" cy="97" r="8" stroke="#82a8ff" stroke-width="1.5" fill="none"/>'
      + '<text x="333" y="122" font-size="5" fill="#8aa4d4" font-family="monospace" text-anchor="middle">ITEM</text>'
      + '<rect x="315" y="126" width="36" height="6" rx="1" fill="#3e6ef1" opacity="0.7"/>'
      /* cart icon */
      + '<rect x="340" y="56" width="14" height="10" rx="1" fill="none" stroke="#6d9cff" stroke-width="1"/>'
      + '<circle cx="343" cy="68" r="1.5" fill="#6d9cff"/>'
      + '<circle cx="351" cy="68" r="1.5" fill="#6d9cff"/>'
      + '<circle cx="356" cy="58" r="4" fill="#3e6ef1"/>'
      + '<text x="356" y="61" font-size="5" fill="#fff" font-family="monospace" text-anchor="middle">2</text>'
      /* bottom bar */
      + '<rect x="68" y="148" width="284" height="1" fill="#1e3a6e"/>'
      + '<text x="78" y="162" font-size="5.5" fill="#4a6fa5" font-family="monospace">FEATURED</text>'
      + '<text x="130" y="162" font-size="5.5" fill="#4a6fa5" font-family="monospace">NEW ARRIVALS</text>'
      + '<text x="200" y="162" font-size="5.5" fill="#4a6fa5" font-family="monospace">BEST SELLERS</text>'
      + '<rect x="68" y="168" width="90" height="16" rx="1" fill="#0d1e40" stroke="#1e3a6e" stroke-width="1"/>'
      + '<rect x="68" y="168" width="55" height="16" rx="1" fill="#112a52"/>'
      + '<text x="113" y="179" font-size="5" fill="#6d9cff" font-family="monospace" text-anchor="middle">████ ██</text>'
      + '<rect x="168" y="168" width="90" height="16" rx="1" fill="#0d1e40" stroke="#1e3a6e" stroke-width="1"/>'
      + '<rect x="168" y="168" width="40" height="16" rx="1" fill="#112a52"/>'
      + '<text x="213" y="179" font-size="5" fill="#6d9cff" font-family="monospace" text-anchor="middle">████ ██</text>'
      + '<rect x="268" y="168" width="84" height="16" rx="1" fill="#0d1e40" stroke="#1e3a6e" stroke-width="1"/>'
      + '<rect x="268" y="168" width="70" height="16" rx="1" fill="#112a52"/>'
      + '<text x="310" y="179" font-size="5" fill="#6d9cff" font-family="monospace" text-anchor="middle">████ ██</text>'
      + '</svg>'
    ],
  ];

  var arrowUpRightSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';

  function renderSkills() {
    var list = document.getElementById('skill-list');
    if (!list) return;
    SKILLS.forEach(function (skill) {
      var label = skill[0], percent = skill[1], category = skill[2];
      var item = document.createElement('div');
      item.className = 'skill-item';
      item.innerHTML =
        '<span>' + label + '</span>' +
        '<div class="skill-bar"><i style="width:0"></i></div>' +
        '<span class="skill-percent">' + category + '</span>';
      list.appendChild(item);
      var bar = item.querySelector('.skill-bar i');
      // animate width shortly after insertion
      requestAnimationFrame(function () {
        setTimeout(function () { bar.style.width = percent; }, 50);
      });
    });
  }

  function renderWorks() {
    var list = document.getElementById('works-list');
    if (!list) return;
    WORKS.forEach(function (work, index) {
      var number = work[0], title = work[1], type = work[2], copy = work[3], img = work[4];
      var article = document.createElement('article');
      article.className = 'work-card';
      article.setAttribute('data-reveal', '');
      article.style.transitionDelay = (index * 100) + 'ms';
      article.innerHTML =
        '<div class="work-card-image">' + img + '</div>' +
        '<div class="work-card-body">' +
          '<div class="work-card-top">' +
            '<span class="work-number">' + number + '</span>' +
            '<span class="work-type">' + type + '</span>' +
          '</div>' +
          '<h3>' + title + '</h3>' +
          '<p>' + copy + '</p>' +
          '<a class="work-link" href="https://github.com/Harshit0526" target="_blank" rel="noreferrer" data-testid="link-view-project-' + index + '">View project ' + arrowUpRightSvg + '</a>' +
        '</div>';
      list.appendChild(article);
      observeReveal(article);
    });
  }

  // ---- Smooth scroll on any element with data-scroll-to ----
  function scrollToId(id) {
    closeMenu();
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function bindScrollTriggers() {
    document.querySelectorAll('[data-scroll-to]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToId(el.getAttribute('data-scroll-to'));
      });
    });
    document.querySelectorAll('.header-nav a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () { closeMenu(); });
    });
  }

  // ---- Mobile menu ----
  var menuToggle = document.getElementById('menu-toggle');
  var headerNav = document.getElementById('header-nav');
  var menuOpen = false;

  function closeMenu() {
    menuOpen = false;
    headerNav.classList.remove('open');
    menuToggle.querySelector('.icon-menu').style.display = '';
    menuToggle.querySelector('.icon-x').style.display = 'none';
    menuToggle.setAttribute('aria-label', 'Open menu');
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    headerNav.classList.toggle('open', menuOpen);
    menuToggle.querySelector('.icon-menu').style.display = menuOpen ? 'none' : '';
    menuToggle.querySelector('.icon-x').style.display = menuOpen ? '' : 'none';
    menuToggle.setAttribute('aria-label', menuOpen ? 'Close menu' : 'Open menu');
  }

  if (menuToggle) menuToggle.addEventListener('click', toggleMenu);

  // ---- Scroll-spy active nav link ----
  function setupScrollSpy() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
    var navLinks = document.querySelectorAll('.nav-link');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('data-section-link') === id);
          });
        }
      });
    }, { rootMargin: '-32% 0px -58% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  // ---- Reveal-on-scroll animation ----
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });

  function observeReveal(el) { revealObserver.observe(el); }

  function setupReveal() {
    document.querySelectorAll('[data-reveal]').forEach(observeReveal);
  }

  // ---- Contact form (client-side only, mirrors original mock submit) ----
  function setupContactForm() {
    var form = document.getElementById('contact-form');
    var note = document.getElementById('form-note');
    var button = document.getElementById('submit-button');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.textContent = 'Message queued. I\u2019ll be in touch soon.';
      button.firstChild.textContent = 'Message sent ';
      form.reset();
    });
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    renderSkills();
    renderWorks();
    bindScrollTriggers();
    setupScrollSpy();
    setupReveal();
    setupContactForm();
  });
})();
