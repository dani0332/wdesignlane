(function () {
  'use strict';

  /* ---- review-only theme switcher -------------------------------------
     Lets you compare palettes without rebuilding: append ?theme=ember or
     ?theme=harbor to any URL, or use the floating switcher.
     Delete this block (and the --preview build flag) once a palette is
     chosen and baked in via `node build.mjs --theme=<name>`.          */
  var THEMES = ['signal', 'ember', 'harbor'];
  var LABELS = { signal: 'A · Signal', ember: 'B · Ember', harbor: 'C · Harbor' };

  if (document.documentElement.hasAttribute('data-preview')) {
    var qs = new URLSearchParams(location.search).get('theme');
    var saved = null;
    try { saved = localStorage.getItem('wdl-theme'); } catch (e) {}
    var active = THEMES.indexOf(qs) > -1 ? qs : (THEMES.indexOf(saved) > -1 ? saved : 'signal');
    document.documentElement.setAttribute('data-theme', active);

    var bar = document.createElement('div');
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Preview palette');
    bar.style.cssText =
      'position:fixed;left:50%;translate:-50% 0;bottom:18px;z-index:999;display:flex;gap:4px;' +
      'background:#111;padding:5px;border-radius:999px;box-shadow:0 10px 30px rgba(0,0,0,.3);' +
      'font:600 12px/1 system-ui,sans-serif';
    THEMES.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = LABELS[t];
      b.style.cssText =
        'border:0;cursor:pointer;padding:8px 14px;border-radius:999px;color:#fff;background:' +
        (t === active ? 'var(--brand)' : 'transparent');
      b.addEventListener('click', function () {
        document.documentElement.setAttribute('data-theme', t);
        try { localStorage.setItem('wdl-theme', t); } catch (e) {}
        [].forEach.call(bar.children, function (c, i) {
          c.style.background = THEMES[i] === t ? 'var(--brand)' : 'transparent';
        });
      });
      bar.appendChild(b);
    });
    document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(bar); });
  }

  var mq = window.matchMedia('(max-width: 1080px)');

  /* ---- mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.dataset.open !== 'true';
      nav.dataset.open = String(open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open && mq.matches ? 'hidden' : '';
    });
  }

  /* ---- dropdowns: click on touch/mobile, hover on desktop ---- */
  var subs = Array.prototype.slice.call(document.querySelectorAll('.has-sub'));

  function closeAll(except) {
    subs.forEach(function (s) {
      if (s === except) return;
      s.dataset.open = 'false';
      var b = s.querySelector('button');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  subs.forEach(function (sub) {
    var btn = sub.querySelector('button');
    if (!btn) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = sub.dataset.open !== 'true';
      closeAll(sub);
      sub.dataset.open = String(open);
      btn.setAttribute('aria-expanded', String(open));
    });

    sub.addEventListener('mouseenter', function () {
      if (mq.matches) return;
      closeAll(sub);
      sub.dataset.open = 'true';
      btn.setAttribute('aria-expanded', 'true');
    });
    sub.addEventListener('mouseleave', function () {
      if (mq.matches) return;
      sub.dataset.open = 'false';
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function () { closeAll(null); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAll(null);
      if (nav && nav.dataset.open === 'true' && toggle) toggle.click();
    }
  });

  /* ---- portfolio tabs ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-folio-tabs]'), function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        panel.hidden = !on;
        // a hidden <video> keeps playing, so stop anything in the panel we left
        if (!on) {
          Array.prototype.forEach.call(panel.querySelectorAll('video'), function (v) { v.pause(); });
        }
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
        else if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); }
        else if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1], true); }
      });
    });

    /* reels play on hover / tap only — six autoplaying mp4s is a lot of bytes */
    Array.prototype.forEach.call(root.querySelectorAll('.folio__item--video video'), function (v) {
      var wrap = v.parentNode;
      var play = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
      wrap.addEventListener('mouseenter', play);
      wrap.addEventListener('mouseleave', function () { v.pause(); v.currentTime = 0; });
      wrap.addEventListener('click', function () { if (v.paused) play(); else v.pause(); });
    });
  });

  /* ---- contact form: static site has no backend, so be honest ---- */
  var form = document.querySelector('form[data-static-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-status');
      if (note) {
        // The phone number is optional site-wide, so build this from whichever
        // contact routes actually exist rather than assuming both.
        var routes = [];
        if (form.dataset.phone) routes.push('call ' + form.dataset.phone);
        if (form.dataset.email) routes.push('email ' + form.dataset.email);
        note.textContent =
          'This static build has no form backend wired up yet. Please ' +
          (routes.length ? routes.join(' or ') : 'contact us directly') +
          ' and we will pick it up.';
        note.style.color = 'var(--brand)';
      }
    });
  }
})();
