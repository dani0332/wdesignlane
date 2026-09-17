import { company, nav, footerColumns, legalLinks } from './data/site.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ------------------------------------------------------------------- phone */
/* The phone number is optional data. When either half of it is missing from
   src/data/site.mjs, every phone affordance — the footer link, the CTA-band
   and hero buttons, the contact bullet — is omitted entirely rather than
   rendering an empty label or a dead `tel:` link.
   Fill in BOTH `phone` and `phoneHref` to switch them all back on at once. */
export const hasPhone = Boolean(company.phone && company.phoneHref);

/** Phone as a plain link, or '' when there is no number. */
export const phoneLink = (attrs = '') =>
  hasPhone ? `<a href="${company.phoneHref}"${attrs}>${esc(company.phone)}</a>` : '';

/** Phone as a ghost button, or '' when there is no number. */
export const phoneButton = (cls = 'btn btn--ghost') => phoneLink(` class="${cls}"`);

const chevron = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;
const arrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

/* ------------------------------------------------------------------ header */
function navItem(item, current) {
  if (item.href) {
    const cur = item.href === current ? ' aria-current="page"' : '';
    return `<li><a href="${item.href}"${cur}>${esc(item.label)}</a></li>`;
  }
  const groups = item.groups
    .map(
      (g) =>
        `<p class="group-label">${esc(g.title)}</p>` +
        g.items
          .map(([label, href]) => {
            const cur = href === current ? ' aria-current="page"' : '';
            return `<a href="${href}"${cur}>${esc(label)}</a>`;
          })
          .join('')
    )
    .join('');
  const id = 'sub-' + item.label.toLowerCase().replace(/\W+/g, '-');
  return `<li class="has-sub" data-open="false">
      <button type="button" aria-expanded="false" aria-controls="${id}">${esc(item.label)}${chevron}</button>
      <div class="subnav" id="${id}">${groups}</div>
    </li>`;
}

export function header(current) {
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap site-header__inner">
    <a class="logo" href="index.html" role="img" aria-label="${esc(company.name)} — home">
      <span class="logo__mark"></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <nav class="nav" id="primary-nav" data-open="false" aria-label="Primary">
      <ul>${nav.map((i) => navItem(i, current)).join('')}</ul>
    </nav>
    <div class="header-cta">
      <a class="btn btn--primary" href="contact.html">Get a Quote</a>
    </div>
  </div>
</header>`;
}

/* ------------------------------------------------------------------ footer */
export function footer() {
  const cols = footerColumns
    .map(
      (c) =>
        `<div><h4>${esc(c.title)}</h4>${c.links
          .map(([l, h]) => `<a href="${h}">${esc(l)}</a>`)
          .join('')}</div>`
    )
    .join('');
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer__grid">
      <div class="footer__brand">
        <img src="${company.logo}" alt="${esc(company.name)}" width="168" height="40">
        <p>We combine creativity with code to build custom websites that capture your brand identity and drive real business results.</p>
        <p>${phoneLink()}
           <a href="mailto:${company.email}">${esc(company.email)}</a></p>
      </div>
      ${cols}
    </div>
    <div class="footer__bar">
      <p>&copy; ${company.year} ${esc(company.name)}. All rights reserved.</p>
      <p>${legalLinks.map(([l, h]) => `<a href="${h}">${esc(l)}</a>`).join(' &middot; ')}</p>
    </div>
  </div>
</footer>`;
}

/* ------------------------------------------------------- section components */
export const sectionHead = ({ eyebrow, title, lede, center = true }) =>
  `<div class="${center ? 'center' : ''}">
    ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
    <h2>${esc(title)}</h2>
    ${lede ? `<p class="lede">${esc(lede)}</p>` : ''}
  </div>`;

// iconTile:'dark' is for glyph sets drawn as solid white with transparency —
// they vanish on the default near-white tile. See base.css .card__icon--dark.
export const cards = (items, { iconTile } = {}) =>
  `<div class="grid g-3" style="margin-top:2.5rem">${items
    .map(
      (c) => `<article class="card">
        ${c.icon ? `<div class="card__icon${iconTile === 'dark' ? ' card__icon--dark' : ''}"><img src="${c.icon}" alt="" aria-hidden="true"></div>` : ''}
        <h4>${esc(c.title)}</h4>
        <p>${esc(c.text)}</p>
        ${c.href ? `<a class="card__more" href="${c.href}">View more ${arrow}</a>` : ''}
      </article>`
    )
    .join('')}</div>`;

export const stats = (items) =>
  `<div class="stats">${items
    .map((s) => `<div class="stat"><div class="stat__num">${esc(s.num)}</div><p>${esc(s.label)}</p></div>`)
    .join('')}</div>`;

export const steps = (items) =>
  `<div class="steps" style="margin-top:2.8rem">${items
    .map((s) => `<div class="step"><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div>`)
    .join('')}</div>`;

export const folio = (images) =>
  `<div class="folio" style="margin-top:2.5rem">${images
    .map((src) => `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="Portfolio project" loading="lazy"></a>`)
    .join('')}</div>`;

/* Tabbed portfolio. Each group is { id, label, note, items: [...] } and each
   item is a string (plain 4:3 shot) or { src, kind, alt }:
     kind:'shot'   — plain image, cropped 4:3   (default)
     kind:'scroll' — tall full-page mockup; the crop pans to the bottom on hover
     kind:'video'  — mp4 reel; plays muted on hover / focus, see site.js       */
const folioItem = (raw) => {
  const it = typeof raw === 'string' ? { src: raw } : raw;
  const kind = it.kind || 'shot';
  const alt = esc(it.alt || 'Portfolio project');
  if (kind === 'video') {
    return `<div class="folio__item folio__item--video">
      <video src="${it.src}" muted loop playsinline preload="metadata" aria-label="${alt}"></video>
      <span class="folio__play" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="8 5 19 12 8 19"/></svg>
      </span>
    </div>`;
  }
  return `<a class="folio__item${kind === 'scroll' ? ' folio__item--scroll' : ''}" href="${it.src}" target="_blank" rel="noopener">
      <img src="${it.src}" alt="${alt}" loading="lazy">
    </a>`;
};

export const folioTabs = (groups) => {
  const tabs = groups
    .map(
      (g, i) =>
        `<button type="button" role="tab" class="folio-tabs__tab" id="tab-${g.id}"
           aria-controls="panel-${g.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(g.label)}</button>`
    )
    .join('');
  const panels = groups
    .map(
      (g, i) => `<div class="folio-tabs__panel" role="tabpanel" id="panel-${g.id}"
        aria-labelledby="tab-${g.id}"${i === 0 ? '' : ' hidden'}>
        ${g.note ? `<p class="folio-tabs__note">${esc(g.note)}</p>` : ''}
        <div class="folio">${g.items.map(folioItem).join('')}</div>
      </div>`
    )
    .join('');
  return `<div class="folio-tabs" data-folio-tabs style="margin-top:2.5rem">
    <div class="folio-tabs__list" role="tablist" aria-label="Portfolio categories">${tabs}</div>
    ${panels}
  </div>`;
};

export const quotes = (items) =>
  `<div class="grid g-3" style="margin-top:2.5rem">${items
    .map(
      (q) => `<figure class="quote">
        <blockquote>${esc(q.text)}</blockquote>
        <figcaption><b>${esc(q.name)}</b><span>${esc(q.role)}</span></figcaption>
      </figure>`
    )
    .join('')}</div>`;

export const faq = (items) =>
  `<div class="faq" style="margin-top:2.5rem">${items
    .map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`)
    .join('')}</div>`;

export const ctaBand = ({ title, text, cta = 'Start Your Project' }) =>
  `<section class="section"><div class="wrap"><div class="cta-band">
    <h2>${esc(title)}</h2><p>${esc(text)}</p>
    <div class="btn-row"><a class="btn btn--primary" href="contact.html">${esc(cta)}</a>
    ${phoneButton()}</div>
  </div></div></section>`;

export const pageHead = ({ title, lede, crumb }) =>
  `<section class="page-head"><div class="wrap">
    <p class="crumb"><a href="index.html">Home</a><span>/</span>${esc(crumb || title)}</p>
    <h1>${esc(title)}</h1>
    ${lede ? `<p class="lede">${esc(lede)}</p>` : ''}
    <div class="btn-row"><a class="btn btn--primary" href="contact.html">Get a Free Quote</a></div>
  </div></section>`;

export const split = ({ title, body, img, mediaFirst = false, list = [] }) =>
  `<div class="split${mediaFirst ? ' split--media-first' : ''}">
    <div>
      <h2>${esc(title)}</h2>
      ${body.map((p) => `<p>${esc(p)}</p>`).join('')}
      ${list.length ? `<ul class="check">${list.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
      <div class="btn-row"><a class="btn btn--primary" href="contact.html">Talk to Us</a></div>
    </div>
    <div class="split__media"><img src="${img}" alt="" loading="lazy"></div>
  </div>`;

/* -------------------------------------------------------------- page shell */
export function page({ slug, title, description, theme = 'signal', body }) {
  return `<!doctype html>
<html lang="en" data-theme="${theme}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="https://www.webdesignlane.com/${slug.replace(/\.html$/, '').replace(/^index$/, '')}">
<link rel="icon" href="assets/img/fav.webp">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/theme.css">
<link rel="stylesheet" href="assets/css/base.css">
</head>
<body>
${header(slug)}
<main id="main">
${body}
</main>
${footer()}
<script src="assets/js/site.js" defer></script>
</body>
</html>`;
}
