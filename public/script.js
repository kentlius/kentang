// ---------- Language ----------
const root = document.documentElement;

const NAMES = {
  en: {
    full: 'Kent <em>Liusudarso</em>',
    med: 'Kent <em>Liu</em>',
    short: 'Kent L.',
    tiny: 'Kent'
  },
  ja: {
    full: 'ケント・<em>リウスダルソ</em>',
    med: 'ケント・<em>リウ</em>',
    short: 'ケント',
    tiny: 'ケント'
  }
};

const TITLES = {
  en: 'Kent Liusudarso',
  ja: 'ケント・リウスダルソ'
};

const DESC = {
  en: 'Kent Liusudarso — portfolio and contact.',
  ja: 'ケント・リウスダルソ — ポートフォリオと連絡先。'
};

const heroName = document.querySelector('.hero-name');
const metaDesc = document.querySelector('meta[name="description"]');

function nameFor(lang, width) {
  const set = NAMES[lang] || NAMES.en;
  if (width >= 980) return set.full;
  if (width >= 640) return set.med;
  if (width >= 400) return set.short;
  return set.tiny;
}

function applyName(animate) {
  const lang = root.getAttribute('data-lang') || 'en';
  if (heroName) {
    heroName.innerHTML = nameFor(lang, window.innerWidth);
    if (animate && heroName.animate) {
      heroName.animate(
        [
          { opacity: 0, filter: 'blur(6px)' },
          { opacity: 1, filter: 'blur(0)' }
        ],
        { duration: 500, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }
  }
  document.title = TITLES[lang] || TITLES.en;
  if (metaDesc) metaDesc.setAttribute('content', DESC[lang] || DESC.en);
  document.querySelectorAll('[data-label-en]').forEach((el) => {
    const label = lang === 'ja' ? el.getAttribute('data-label-ja') : el.getAttribute('data-label-en');
    if (label) el.setAttribute('aria-label', label);
  });
  root.lang = lang;
}

let resizeRaf = null;
window.addEventListener('resize', () => {
  if (resizeRaf) return;
  resizeRaf = requestAnimationFrame(() => {
    resizeRaf = null;
    applyName();
  });
});

const langToggle = document.querySelector('.lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const next = (root.getAttribute('data-lang') || 'en') === 'en' ? 'ja' : 'en';
    root.setAttribute('data-lang', next);
    try { localStorage.setItem('lang', next); } catch (e) {}
    applyName(true);
  });
}

applyName();

// ---------- Theme ----------
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

// ---------- Custom cursor ----------
const cursor = document.querySelector('.cursor');
if (cursor && window.matchMedia('(hover: hover)').matches) {
  let x = 0, y = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  const tick = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });
}
