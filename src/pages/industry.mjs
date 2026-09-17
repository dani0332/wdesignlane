import { page, pageHead, sectionHead, cards, folio, faq, ctaBand, split, steps, stats } from '../layout.mjs';
import { company } from '../data/site.mjs';

/**
 * Shared template for every industry page.
 * Adding a new industry page = add an entry to src/data/industries.mjs.
 *
 * The order deliberately differs from the service template: industry visitors
 * arrive knowing their sector, not our services, so the sector-specific proof
 * (what their site has to do, who else we have built for) comes before the
 * generic agency process.
 */
export function industryPage(i) {
  const img = (n) => `assets/img/industries/${i.dir}/s${n}bg.webp`;

  const body = `
${pageHead({ title: i.h1, crumb: i.crumb, lede: i.lede })}

<section class="section">
  <div class="wrap">
    ${split({ title: i.intro.title, img: img(1), body: i.intro.body, list: i.intro.list })}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'What your site needs', title: i.solutions.title, lede: i.solutions.lede })}
    ${cards(i.solutions.items)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Why it matters',
      title: i.why.title,
      lede: i.why.lede,
    })}
    ${stats(i.stats)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${split({ title: i.growth.title, img: img(3), body: i.growth.body, mediaFirst: true })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'Portfolio', title: i.folioTitle, lede: i.folioLede })}
    ${folio(i.folio)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${split({ title: i.trust.title, img: img(6), body: i.trust.body, list: i.trust.list || [] })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Process',
      title: 'How We Deliver',
      lede: `${company.name} keeps you in the loop at every stage, so there are no surprises between the brief and the launch.`,
    })}
    ${steps([
      { title: 'Discovery', text: 'We learn how your business wins work today — the questions clients ask, the objections you hear, the services that actually pay.' },
      { title: 'Strategy & Planning', text: 'A tailored plan with deliverables, timelines and the measures we will judge the finished site against.' },
      { title: 'Design & Build', text: 'Design, content and build run with regular check-ins, so you see progress rather than a single reveal at the end.' },
      { title: 'Launch & Support', text: 'We test, refine and launch only when you are happy — then stay on to keep the site current and performing.' },
    ])}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'FAQ', title: 'Frequently Asked Questions' })}
    ${faq(i.faqs)}
  </div>
</section>

${ctaBand({ title: i.cta.title, text: i.cta.text, cta: i.cta.button || 'Start Your Project' })}
`;

  return page({ slug: i.slug, title: i.title, description: i.description, body });
}
