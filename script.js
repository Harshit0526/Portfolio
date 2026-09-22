(function () {
  'use strict';

  // ---- Contact form -------------------------------------------------------
  // To receive messages directly from the form, create a free form at
  // https://formspree.io (or https://web3forms.com), then paste its endpoint here:
  //   var FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
  // While this is empty, the form opens the visitor's email app with the
  // message pre-filled, so nothing is ever silently lost.
  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var WEB3FORMS_KEY = '5ca1c88b-5d2f-471a-9d99-af4f8675f228'; // replace with your key from web3forms.com
  var CONTACT_EMAIL = 'harshitsrivast1599@gmail.com';

  var menuToggle = document.getElementById('menu-toggle');
  var headerNav = document.getElementById('header-nav');

  function setMenu(open) {
    headerNav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function () {
      setMenu(!headerNav.classList.contains('open'));
    });
    headerNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // ---- Highlight the current section in the nav ---------------------------
  var links = document.querySelectorAll('.nav-link');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('data-section-link') === entry.target.id);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('[data-section]').forEach(function (s) { spy.observe(s); });
  }

  // ---- Contact form -------------------------------------------------------
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  var button = document.getElementById('submit-button');

  function say(text, kind) {
    note.textContent = text;
    note.className = 'form-note' + (kind ? ' ' + kind : '');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = new FormData(form);

      if (!FORM_ENDPOINT) {
        var subject = 'Portfolio message from ' + data.get('name');
        var body = data.get('message') + '\n\n' + data.get('name') + '\n' + data.get('email');
        window.location.href = 'mailto:' + CONTACT_EMAIL +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);
        say('Opening your email app. If nothing opens, write to ' + CONTACT_EMAIL + '.');
        return;
      }

      button.disabled = true;
      say('Sending…');
      data.append('access_key', WEB3FORMS_KEY);
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          form.reset();
          say('Thanks, your message was sent.', 'ok');
        })
        .catch(function () {
          say('Could not send. Please email ' + CONTACT_EMAIL + ' instead.', 'error');
        })
        .then(function () { button.disabled = false; });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---- 3D pointer tilt (hero stack + project card) ------------------------
  // Skipped entirely for touch-only devices and when the user prefers reduced motion.
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function addTilt(el, opts) {
    if (!el) return;
    var maxX = opts.maxX, maxY = opts.maxY, varX = opts.varX, varY = opts.varY, target = opts.target || el;
    var raf = null;

    function onMove(e) {
      var rect = el.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width;   // 0 → 1
      var py = (e.clientY - rect.top) / rect.height;    // 0 → 1
      var tiltY = (px - 0.5) * 2 * maxY;                 // left/right → rotateY
      var tiltX = (0.5 - py) * 2 * maxX;                 // up/down    → rotateX
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        target.style.setProperty(varX, tiltX.toFixed(2) + 'deg');
        target.style.setProperty(varY, tiltY.toFixed(2) + 'deg');
      });
    }

    function onLeave() {
      if (raf) cancelAnimationFrame(raf);
      target.style.setProperty(varX, '0deg');
      target.style.setProperty(varY, '0deg');
      el.classList.remove('tilting');
    }

    el.addEventListener('pointerenter', function () { el.classList.add('tilting'); });
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
  }

  if (hasHover && !prefersReducedMotion) {
    addTilt(document.getElementById('stack-3d'), { maxX: 10, maxY: 14, varX: '--tilt-x', varY: '--tilt-y' });
    document.querySelectorAll('.tilt-3d').forEach(function (card) {
      addTilt(card, { maxX: 5, maxY: 7, varX: '--tx', varY: '--ty', target: card });
    });
  }

  // ---- Scroll reveal (one subtle, reusable entrance per section) ---------
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var revealTargets = document.querySelectorAll('.section .section-title, .section .wrap > *:not(.section-title)');
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }
})();
