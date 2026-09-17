import { page, pageHead, sectionHead, cards, folio, faq, ctaBand, split, steps } from '../layout.mjs';
import { company } from '../data/site.mjs';

/**
 * Shared template for every service page.
 * Adding a new service page = add an entry to src/data/services.mjs.
 */
export function servicePage(s) {
  const body = `
${pageHead({ title: s.h1, crumb: s.crumb, lede: s.lede })}

<section class="section">
  <div class="wrap">
    ${split({
      title: s.intro.title,
      img: s.intro.img,
      body: s.intro.body,
      list: s.intro.list || [],
    })}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'What you get', title: s.offering.title, lede: s.offering.lede })}
    ${cards(s.offering.items)}
  </div>
</section>

${s.detail
  .map(
    (d, i) => `<section class="section${i % 2 ? ' section--alt' : ''}">
  <div class="wrap">
    ${split({ title: d.title, img: d.img, body: d.body, mediaFirst: i % 2 === 1 })}
  </div>
</section>`
  )
  .join('\n')}

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'Portfolio', title: s.folioTitle, lede: s.folioLede })}
    ${folio(s.folio)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Process',
      title: 'How We Deliver',
      lede: `${company.name} believes in transparency every step of the way, keeping you in the loop with every executed plan.`,
    })}
    ${steps([
      { title: 'Discovery', text: 'We get to know your brand, your goals, and the audience you intend to reach through conversations and discovery calls.' },
      { title: 'Strategy & Planning', text: 'We draft a tailored action plan with clear deliverables, timelines, KPIs, and the tools and platforms we will use.' },
      { title: 'Design & Build', text: 'Our team sets the plan in motion, and you are updated on progress at every stage of the build.' },
      { title: 'Launch & Support', text: 'We make every necessary retouch before launch. Only when you are satisfied do we go live — then we stay on for ongoing improvements.' },
    ])}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'FAQ', title: 'Frequently Asked Questions' })}
    ${faq(s.faqs)}
  </div>
</section>

${ctaBand({ title: s.cta.title, text: s.cta.text })}
`;

  return page({ slug: s.slug, title: s.title, description: s.description, body });
}
