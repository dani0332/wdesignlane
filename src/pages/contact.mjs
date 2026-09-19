import { page, pageHead, sectionHead, faq, hasPhone, phoneLink } from '../layout.mjs';
import { company } from '../data/site.mjs';

const faqs = [
  { q: 'How soon will I hear back?',
    a: 'We reply to every enquiry within one business day. If your timeline is tight, call us directly and ask for the project desk.' },
  { q: 'What should I have ready before we talk?',
    a: 'Nothing formal. A rough sense of your goals, your timeline and any sites you like is plenty — we will shape the rest on the call.' },
  { q: 'Do you work with businesses outside the USA?',
    a: 'Yes. We work with clients worldwide and schedule calls around your timezone.' },
];

const body = `
${pageHead({
  title: 'Contact Us to Build Scroll-Worthy Websites!',
  crumb: 'Contact',
  lede: `Ready to impress with every swipe and scroll? Contact ${company.name} to create a website that makes a lasting first impression for your business.`,
})}

<section class="section">
  <div class="wrap">
    <div class="split">
      <div>
        <span class="eyebrow">Get in touch</span>
        <h2>Got an Idea? Let's Discuss!</h2>
        <p class="lede">Schedule a free consultation call with us to discuss the next steps.</p>

        <h4 style="margin-top:2rem">Still Deciding? Let's Make It Easy!</h4>
        <p>Not sure where to start? Our experts are just a message away. Let's talk goals,
           timelines, and what success looks like for your brand.</p>

        <ul class="check">
          ${hasPhone ? `<li>Call us: ${phoneLink(' style="color:var(--brand);font-weight:600"')}</li>` : ''}
          <li>Email us: <a href="mailto:${company.email}" style="color:var(--brand);font-weight:600">${company.email}</a></li>
          <li>Free consultation, no obligation</li>
          <li>Reply within one business day</li>
        </ul>
      </div>

      <div>
        <form class="form" data-static-form${hasPhone ? ` data-phone="${company.phone}"` : ''} data-email="${company.email}" novalidate>
          <p style="grid-column:1/-1;margin:0"><b>Your contact info</b></p>
          <div class="field">
            <label for="name">Full name</label>
            <input id="name" name="name" type="text" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="email">Email address</label>
            <input id="email" name="email" type="email" autocomplete="email" required>
          </div>
          <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autocomplete="tel">
          </div>
          <div class="field">
            <label for="service">Service needed</label>
            <select id="service" name="service">
              <option>Website Design</option>
              <option>Website Development</option>
              <option>Ecommerce</option>
              <option>Branding &amp; Logo</option>
              <option>Digital Marketing</option>
              <option>Something else</option>
            </select>
          </div>
          <p style="grid-column:1/-1;margin:.6rem 0 0"><b>Tell us more about your project</b></p>
          <div class="field field--wide">
            <label for="message">Project details</label>
            <textarea id="message" name="message" placeholder="Goals, timeline, budget range, anything useful..."></textarea>
          </div>
          <div class="field--wide">
            <button class="btn btn--primary" type="submit">Send Enquiry</button>
          </div>
          <p class="form-note form-status">We'll never share your details. Free consultation, no obligation.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'FAQ', title: 'Before You Reach Out' })}
    ${faq(faqs)}
  </div>
</section>
`;

export default page({
  slug: 'contact.html',
  title: `Contact Us – ${company.name}`,
  description:
    'Contact Kodex Designs to build a website that makes a lasting first impression. Free consultation, no obligation.',
  body,
});
