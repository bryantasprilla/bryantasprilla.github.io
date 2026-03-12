/* ============================================================
   i18n.js — lightweight language switcher
   Depends on: translations.js (must load first)
   ============================================================ */
(function () {
  var STORAGE_KEY = 'ba_lang';
  var SUPPORTED   = ['en', 'es'];
  var DEFAULT     = 'en';

  /* ---------- helpers ---------- */

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var browser = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    return (SUPPORTED.indexOf(browser) !== -1) ? browser : DEFAULT;
  }

  function t(lang, key) {
    var dict = window.I18N_TRANSLATIONS && window.I18N_TRANSLATIONS[lang];
    if (!dict) return '';
    return (dict[key] !== undefined) ? dict[key] : (window.I18N_TRANSLATIONS[DEFAULT][key] || '');
  }

  /* ---------- apply translations ---------- */

  function applyLang(lang) {
    /* textContent nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(lang, el.dataset.i18n);
    });

    /* innerHTML nodes (e.g. paragraphs with embedded <a> tags) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(lang, el.dataset.i18nHtml);
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(lang, el.dataset.i18nAria));
    });

    /* <html lang=""> */
    document.documentElement.lang = lang;

    /* highlight active option in dropdown */
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* update the toggle label */
    var label = document.getElementById('langCurrent');
    if (label) label.textContent = lang.toUpperCase();

    /* store choice */
    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ---------- wire up dropdown buttons ---------- */

  function init() {
    var lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
