/**
 * Static site build — zero dependencies.
 *
 *   node build.mjs            build with the default theme
 *   node build.mjs --theme=ember
 *   node build.mjs --serve    build, then serve dist/ on :4173
 *
 * Output: dist/
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');

const arg = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split('=')[1] : fallback;
};
const theme = arg('theme', 'signal');

/* ---------------------------------------------------------- collect pages */
const { services } = await import('./src/data/services.mjs');
const { servicePage } = await import('./src/pages/service.mjs');
const { industries } = await import('./src/data/industries.mjs');
const { industryPage } = await import('./src/pages/industry.mjs');
const { locations } = await import('./src/data/locations.mjs');
const { locationPage } = await import('./src/pages/location.mjs');
const { privacyPolicy, termsAndConditions } = await import('./src/pages/legal.mjs');

const pages = new Map();
pages.set('index.html', (await import('./src/pages/home.mjs')).default);
pages.set('about.html', (await import('./src/pages/about.mjs')).default);
pages.set('contact.html', (await import('./src/pages/contact.mjs')).default);
for (const s of services) pages.set(s.slug, servicePage(s));
for (const i of industries) pages.set(i.slug, industryPage(i));
for (const l of locations) pages.set(l.slug, locationPage(l));
pages.set('privacy-policy.html', privacyPolicy);
pages.set('terms-and-condition.html', termsAndConditions);

/* ------------------------------------------------------------- write dist */
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// --preview stamps data-preview on <html>, which switches on the floating
// palette switcher in assets/js/site.js. Never pass it for a production build.
const preview = process.argv.includes('--preview');

/**
 * Emit extensionless internal links while the files on disk stay flat .html.
 *
 * The server rewrites /about -> about.html, and 301s about.html -> /about.
 * If the HTML kept href="about.html", every internal click would eat that
 * 301. So links are rewritten here instead:
 *
 *   href="about.html"  ->  href="/about"
 *   href="index.html"  ->  href="/"
 *   src="assets/x.css" ->  src="/assets/x.css"
 *
 * Root-relative, because a page served at /about has no trailing slash and
 * a bare relative path would resolve differently under /about/ vs /about.
 * This assumes deployment at the domain root, which is the case here.
 */
const canonicalizeLinks = (html) =>
  html
    .replace(/(\s(?:href|src)=")(?!https?:|\/\/|mailto:|tel:|#|data:|\/)([^"]+)"/g, (m, pre, url) => {
      if (url === 'index.html') return `${pre}/"`;
      const clean = url.replace(/\.html$/, '');
      return `${pre}/${clean}"`;
    });

const applyTheme = (html) => {
  let out = theme === 'signal' ? html : html.replace('data-theme="signal"', `data-theme="${theme}"`);
  if (preview) out = out.replace('<html lang="en"', '<html lang="en" data-preview');
  return canonicalizeLinks(out);
};

for (const [slug, html] of pages) {
  fs.writeFileSync(path.join(dist, slug), applyTheme(html), 'utf8');
}

/* copy assets verbatim */
fs.cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

/* ------------------------------------------- stubs for not-yet-built pages */
// Every link in the nav should resolve. Pages we have not written yet get a
// small honest placeholder rather than a 404.
const built = new Set(pages.keys());
const { nav, footerColumns, legalLinks } = await import('./src/data/site.mjs');
const linked = new Set();
const walk = (items) => {
  for (const i of items) {
    if (i.href) linked.add(i.href);
    if (i.groups) for (const g of i.groups) for (const [, href] of g.items) linked.add(href);
  }
};
walk(nav);
for (const c of footerColumns) for (const [, href] of c.links) linked.add(href);
for (const [, href] of legalLinks) linked.add(href);

const { page } = await import('./src/layout.mjs');
let stubs = 0;
for (const href of linked) {
  if (built.has(href)) continue;
  const name = href
    .replace(/\.html$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const html = page({
    slug: href,
    theme,
    title: `${name} | Kodex Designs`,
    description: `${name} — Kodex Designs.`,
    body: `<section class="section"><div class="wrap center" style="max-width:640px">
      <span class="eyebrow">Coming next</span>
      <h1>${name}</h1>
      <p class="lede">This page is part of the rebuild but hasn't been written yet.
        The design system, navigation and theme are already in place — only the page content is outstanding.</p>
      <div class="btn-row"><a class="btn btn--primary" href="contact.html">Contact Us</a>
      <a class="btn btn--ghost" href="index.html">Back to Home</a></div>
    </div></section>`,
  });
  const out = preview ? html.replace('<html lang="en"', '<html lang="en" data-preview') : html;
  fs.writeFileSync(path.join(dist, href), canonicalizeLinks(out), 'utf8');
  stubs++;
}

/* ---------------------------------------------------------------- sitemap */
const all = [...built, ...[...linked].filter((h) => !built.has(h))];
const urls = all
  .map((h) => {
    const loc = 'https://kodexdesigns.com/' + h.replace(/\.html$/, '').replace(/^index$/, '');
    return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq></url>`;
  })
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
// robots.txt — note the live site's current one still declares a WordPress
// blog at /blog/ that no longer exists, and points at a sitemap that 404s.
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  'User-agent: *\nAllow: /\n\nSitemap: https://kodexdesigns.com/sitemap.xml\n'
);

/* ------------------------------------------------- real 404 page + config */
const notFound = page({
  slug: '404.html',
  theme,
  title: 'Page Not Found | Kodex Designs',
  description: 'The page you were looking for could not be found.',
  body: `<section class="section"><div class="wrap center" style="max-width:620px">
    <span class="eyebrow">Error 404</span>
    <h1>We can't find that page</h1>
    <p class="lede">The link may be out of date, or the page may have moved.
      Let's get you back on track.</p>
    <div class="btn-row"><a class="btn btn--primary" href="index.html">Back to Home</a>
    <a class="btn btn--ghost" href="contact.html">Contact Us</a></div>
  </div></section>`,
});
fs.writeFileSync(
  path.join(dist, '404.html'),
  canonicalizeLinks(preview ? notFound.replace('<html lang="en"', '<html lang="en" data-preview') : notFound),
  'utf8'
);

// Apache config ships inside dist/ so the deploy is a single folder upload.
// nginx.conf is NOT copied — it lives in /etc/nginx, not the web root.
const htaccess = path.join(root, 'deploy', '.htaccess');
if (fs.existsSync(htaccess)) fs.copyFileSync(htaccess, path.join(dist, '.htaccess'));

console.log(`Theme:  ${theme}`);
console.log(`Built:  ${built.size} full pages`);
console.log(`Stubs:  ${stubs} placeholder pages (nav links all resolve)`);
console.log(`Output: dist/`);

/* ------------------------------------------------------------ dev server  */
if (process.argv.includes('--serve')) {
  const http = await import('node:http');
  const types = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
    '.webp': 'image/webp', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon',
  };
  const port = Number(arg('port', '4173'));
  http
    .createServer((req, res) => {
      // Mirrors deploy/.htaccess so local behaviour matches production.
      let p = decodeURIComponent(req.url.split('?')[0]);

      // /about.html -> 301 /about   and   /index(.html) -> 301 /
      const asHtml = p.match(/^\/(.*)\.html$/);
      if (asHtml || p === '/index') {
        const target = !asHtml || asHtml[1] === 'index' ? '/' : '/' + asHtml[1];
        res.writeHead(301, { location: target });
        return res.end();
      }
      // strip trailing slash
      if (p.length > 1 && p.endsWith('/')) {
        res.writeHead(301, { location: p.replace(/\/+$/, '') });
        return res.end();
      }

      if (p === '/') p = '/index.html';
      else if (!path.extname(p)) p += '.html';

      const file = path.join(dist, p);
      if (!file.startsWith(dist) || !fs.existsSync(file)) {
        // real 404 status, not the soft-200 the live site currently returns
        const custom = path.join(dist, '404.html');
        res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
        return res.end(fs.existsSync(custom) ? fs.readFileSync(custom) : '404');
      }
      res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    })
    .listen(port, () => console.log(`\nServing http://localhost:${port}`));
}
