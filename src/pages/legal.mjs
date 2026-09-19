import { page, pageHead, esc, hasPhone, phoneLink } from '../layout.mjs';
import { company } from '../data/site.mjs';

/**
 * Long-form legal pages. Both share one renderer because the only difference
 * between them is the section list.
 *
 * NOTE: this is plain-language boilerplate written to describe how this site
 * actually behaves. It is not legal advice and should be reviewed by counsel
 * before launch, particularly the data-protection sections if the business
 * takes enquiries from outside the USA.
 */
const legalPage = ({ slug, title, description, h1, crumb, lede, updated, sections }) => {
  const block = (s) =>
    `<h2>${esc(s.title)}</h2>` +
    (s.body || []).map((p) => `<p>${esc(p)}</p>`).join('') +
    (s.list ? `<ul>${s.list.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>` : '');

  const body = `
${pageHead({ title: h1, crumb, lede })}

<section class="section">
  <div class="wrap">
    <div class="prose">
      <p class="updated">Last updated: ${esc(updated)}</p>
      ${sections.map(block).join('\n      ')}
      <h2>Contact Us</h2>
      <p>If you have questions about this page, write to
        <a href="mailto:${company.email}">${esc(company.email)}</a>${hasPhone ? ` or call ${phoneLink()}` : ''}.</p>
    </div>
  </div>
</section>
`;
  return page({ slug, title, description, body });
};

/* ------------------------------------------------------- privacy policy -- */
export const privacyPolicy = legalPage({
  slug: 'privacy-policy.html',
  title: 'Privacy Policy | Kodex Designs',
  description:
    'How Kodex Designs collects, uses and protects the personal information you provide through this website.',
  h1: 'Privacy Policy',
  crumb: 'Privacy Policy',
  lede:
    'This page explains what information we collect through this website, why we collect it, and what we do with it.',
  updated: 'September 2026',
  sections: [
    {
      title: 'Who We Are',
      body: [
        `${company.name} is a web design and development agency operating in the USA. This policy covers the information collected through this website and through enquiries made to us by phone or email.`,
      ],
    },
    {
      title: 'Information We Collect',
      body: ['We collect two kinds of information: what you give us, and what is recorded automatically when you browse.'],
      list: [
        'Information you provide: your name, email address, phone number, company name and anything you write in an enquiry or project brief.',
        'Information collected automatically: your IP address, browser and device type, the pages you visit, and the site or search that referred you.',
      ],
    },
    {
      title: 'How We Use It',
      body: ['We use the information you give us to respond to your enquiry and, if you become a client, to deliver and support the work.'],
      list: [
        'To reply to enquiries and prepare proposals',
        'To deliver, support and invoice for work you have commissioned',
        'To send updates you have specifically asked to receive',
        'To understand how the site is used so we can improve it',
      ],
    },
    {
      title: 'What We Do Not Do',
      body: [
        'We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.',
        'We do not send marketing email to people who have not asked for it. If you do subscribe to something, every message includes a way to stop receiving it.',
      ],
    },
    {
      title: 'Cookies and Analytics',
      body: [
        'This site uses cookies to keep it working correctly and to understand, in aggregate, how visitors use it. Analytics data tells us which pages are read and where people leave, not who you are.',
        'You can block or delete cookies in your browser settings. The site will continue to work, though some conveniences may not be remembered between visits.',
      ],
    },
    {
      title: 'Sharing With Service Providers',
      body: [
        'We use third-party services to run this business — hosting, email, analytics and payment processing among them. Those providers process data on our behalf and only for the purpose we engaged them for.',
        'We may also disclose information where we are legally required to do so.',
      ],
    },
    {
      title: 'How Long We Keep It',
      body: [
        'Enquiries that do not become projects are kept for a reasonable period in case you come back to us, then deleted.',
        'Client records are kept for as long as the relationship continues and afterwards for the period our tax and legal obligations require.',
      ],
    },
    {
      title: 'Security',
      body: [
        'This site is served over an encrypted connection and form submissions are transmitted encrypted. Access to enquiry and client data is limited to the people who need it to do their work.',
        'No system is perfectly secure, but we keep our software patched and review access regularly.',
      ],
    },
    {
      title: 'Your Choices',
      body: ['You can ask us to do any of the following, and we will respond within a reasonable time.'],
      list: [
        'Tell you what personal information we hold about you',
        'Correct information that is wrong or out of date',
        'Delete your information, where we are not required to keep it',
        'Stop sending you email you no longer want',
      ],
    },
    {
      title: "Children's Privacy",
      body: [
        'This site is intended for businesses and is not directed at children. We do not knowingly collect personal information from anyone under 13.',
      ],
    },
    {
      title: 'Changes to This Policy',
      body: [
        'If this policy changes, we will update it here and change the date at the top of the page. Significant changes will be flagged to clients directly.',
      ],
    },
  ],
});

/* ---------------------------------------------------- terms & conditions -- */
export const termsAndConditions = legalPage({
  slug: 'terms-and-condition.html',
  title: 'Terms & Conditions | Kodex Designs',
  description:
    'The terms that apply to your use of the Kodex Designs website and to work commissioned from us.',
  h1: 'Terms & Conditions',
  crumb: 'Terms & Conditions',
  lede:
    'These terms cover your use of this website. Work we carry out for clients is governed by a separate signed agreement.',
  updated: 'September 2026',
  sections: [
    {
      title: 'Acceptance',
      body: [
        `By using this website you agree to these terms. If you do not agree with them, please do not use the site.`,
      ],
    },
    {
      title: 'What This Site Is For',
      body: [
        `This website describes the services ${company.name} offers and provides a way to contact us. Nothing on it is an offer capable of acceptance, and nothing on it forms a contract.`,
        'Any work we carry out for you is governed by a separate written agreement covering scope, timeline, fees and ownership.',
      ],
    },
    {
      title: 'Accuracy of Information',
      body: [
        'We take care to keep the content of this site accurate and current, but we do not guarantee that it is free of errors or omissions.',
        'Pricing indications, timescales and capabilities described here are general guidance. The terms of any specific project are set out in the proposal we prepare for you.',
      ],
    },
    {
      title: 'Intellectual Property',
      body: [
        'The design, text, code and images on this site belong to us or to the clients who licensed their project work for display, and are protected by copyright.',
        'You may view and print pages for your own reference. You may not republish, redistribute or use our content commercially without written permission.',
      ],
    },
    {
      title: 'Portfolio and Client Work',
      body: [
        'Project work shown on this site is displayed with the permission of the client concerned. Trademarks and brand assets shown remain the property of their owners.',
        'If you are a client and want a project removed from our portfolio, contact us and we will do so.',
      ],
    },
    {
      title: 'Acceptable Use',
      body: ['When using this site, you agree not to:'],
      list: [
        'Attempt to gain unauthorised access to the site or the systems behind it',
        'Use automated tools to scrape or overload the site',
        'Submit false information, malicious code or unlawful content through our forms',
        'Use the site in any way that interferes with other people using it',
      ],
    },
    {
      title: 'Third-Party Links',
      body: [
        'This site may link to websites we do not control. We include those links for convenience and are not responsible for the content, accuracy or practices of those sites.',
      ],
    },
    {
      title: 'Limitation of Liability',
      body: [
        'This website is provided as it is. To the extent permitted by law, we are not liable for any loss arising from your use of the site or from reliance on information published here.',
        'Nothing in these terms limits liability that cannot be limited by law.',
      ],
    },
    {
      title: 'Privacy',
      body: [
        'Information you submit through this site is handled as described in our Privacy Policy, which forms part of these terms.',
      ],
    },
    {
      title: 'Changes',
      body: [
        'We may update these terms from time to time. The current version is always the one published on this page, with the date shown at the top.',
      ],
    },
    {
      title: 'Governing Law',
      body: [
        'These terms are governed by the laws of the United States and the state in which we are established. Any dispute relating to this website will be handled in those courts.',
      ],
    },
  ],
});
