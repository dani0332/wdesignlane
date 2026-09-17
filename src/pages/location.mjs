import { page, pageHead, sectionHead, cards, folio, faq, ctaBand, split, steps, stats } from '../layout.mjs';
import { company } from '../data/site.mjs';

/**
 * Shared template for every location page.
 * Adding a location page = add an entry to src/data/locations.mjs.
 *
 * Image paths live in the data rather than being derived from the slug,
 * because assets/img/city/ is not uniform — only banner-img and s9bg exist
 * for every city (maryland has no about-bg).
 */
export function locationPage(l) {
  const body = `
${pageHead({ title: l.h1, crumb: l.crumb, lede: l.lede })}

<section class="section">
  <div class="wrap">
    ${split({ title: l.intro.title, img: l.img.banner, body: l.intro.body, list: l.intro.list })}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'What we do here', title: l.services.title, lede: l.services.lede })}
    ${cards(l.services.items)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'Track record', title: l.why.title, lede: l.why.lede })}
    ${stats(l.stats)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${split({ title: l.local.title, img: l.img.about, body: l.local.body, mediaFirst: true })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'Portfolio', title: l.folioTitle, lede: l.folioLede })}
    ${folio(l.folio)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${split({ title: l.choose.title, img: l.img.secondary, body: l.choose.body, list: l.choose.list || [] })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Process',
      title: 'How We Deliver',
      lede: `${company.name} works remotely-first with ${l.region} clients, which means faster turnarounds and no travel costs padding the invoice.`,
    })}
    ${steps([
      { title: 'Discovery', text: 'A call to understand your business, your market and what the site actually needs to achieve.' },
      { title: 'Strategy & Planning', text: 'A written plan with scope, timeline, deliverables and the measures we will judge the result against.' },
      { title: 'Design & Build', text: 'Design and development with regular reviews, so you see the work as it develops rather than at the end.' },
      { title: 'Launch & Support', text: 'Testing, refinement and launch, followed by ongoing support to keep the site current.' },
    ])}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'FAQ', title: 'Frequently Asked Questions' })}
    ${faq(l.faqs)}
  </div>
</section>

${ctaBand({ title: l.cta.title, text: l.cta.text })}
`;

  return page({ slug: l.slug, title: l.title, description: l.description, body });
}
