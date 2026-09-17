// One entry per service page. The shared template in src/pages/service.mjs
// renders these, so adding a service page is a data change, not a code change.
//
// The four entries below were written first and are kept inline. The rest live
// in src/data/services/ grouped by nav section, purely to keep any one file
// readable — they are the same shape and are rendered by the same template.

import { designServices } from './services/design.mjs';
import { developmentServices } from './services/development.mjs';
import { creativeServices } from './services/creative.mjs';

const P = (n) => `assets/img/portimg${n}.webp`;

const coreServices = [
  /* ------------------------------------------------ website design ------ */
  {
    slug: 'website-design-services.html',
    title: 'Custom Website Design Services | Web Design Lane',
    description:
      'Custom web design services in the USA. We build mobile-responsive websites that are visually beautiful and convert visitors into repeat customers.',
    h1: 'Your Website is Your Pitch, Design It to Win',
    crumb: 'Website Design',
    lede:
      'What does your website tell in the first five seconds? With our custom web design services in the USA, we build mobile-responsive web designs that are visually beautiful and convert visitors into repeat customers.',
    intro: {
      title: 'Grow Your Biz with Best-in-Class Web Designs',
      img: 'assets/img/webdesign_page/s1right.webp',
      body: [
        "Your website is more than just an online presence; it's your brand's most powerful tool for attracting customers and driving business growth. At Web Design Lane, we offer all-in-one web design solutions.",
        "Whether you want a new, slick design or would like to improve the functionality of your existing website, our team of expert web designers is ready to help. From concept to code, we help you realize that vision through clean, modern, mobile-friendly designs.",
      ],
      list: [
        'Client-centric project development',
        'Expert-fronted developers',
        'Customized web solutions for each business',
        'SEO-friendly code for maximum visibility',
      ],
    },
    offering: {
      title: 'The Web Design Services We Provide',
      lede:
        'Explore our custom website design services, offered by our professional web designers in the USA, to give your business the growth, engagement, and visual identity it deserves.',
      items: [
        { title: 'Custom Web Design', icon: 'assets/img/webdesign_page/s4icon1.webp', href: 'website-design-services.html',
          text: 'Bespoke designs built around your brand story, not a template. Layout, navigation and typography tuned to your goals.' },
        { title: 'Website Redesign', icon: 'assets/img/webdesign_page/s4icon2.webp', href: 'website-redesign-services.html',
          text: 'Transform an outdated site with modern design, faster load times and a mobile experience that stops hurting your rankings.' },
        { title: 'Responsive Design', icon: 'assets/img/webdesign_page/s4icon3.webp', href: 'responsive-web-designing.html',
          text: 'Mobile-first layouts that adapt seamlessly across every screen size, lowering bounce rates wherever your visitors are.' },
        { title: 'Landing Page Design', icon: 'assets/img/webdesign_page/s4icon4.webp', href: 'landing-page-design.html',
          text: 'Conversion-focused, campaign-specific pages: persuasive headlines, clear value propositions and optimized forms.' },
        { title: 'Static Web Design', icon: 'assets/img/webdesign_page/s4icon5.webp', href: 'static-web-designing.html',
          text: 'Fast-loading, secure and easy to maintain. Ideal for small businesses, startups and portfolios that value simplicity.' },
        { title: 'Dynamic Web Design', icon: 'assets/img/webdesign_page/s4icon6.webp', href: 'dynamic-web-designing.html',
          text: 'Interactive sites with real-time updates, login systems, carts and live content feeds — built to scale with you.' },
      ],
    },
    detail: [
      {
        title: 'Get a Website That Works for Your Business',
        img: 'assets/img/webdesign_page/s3left.webp',
        body: [
          "Let us build a website that looks good and works like a digital powerhouse. Our custom web design solutions speak to your unique brand story, using considered layout and navigation to capture and engage your audience.",
          'Having a great-looking website just isn’t enough; it must work for you around the clock. We build with performance, SEO, and user experience in mind — from intuitive interfaces to goal-driven calls to action.',
        ],
      },
      {
        title: 'Give Your Old Website a Fresh New Look',
        img: 'assets/img/webdesign_page/s4img1.webp',
        body: [
          "Does your website no longer represent who you are? Outdated code, slow loading times, and poor mobile experiences all hurt your conversions and search rankings.",
          'Our team takes a strategic approach to redesign, ensuring your new site reflects your current brand identity, improves usability, and delivers real business outcomes.',
        ],
      },
      {
        title: 'Get Your Site Perfect on Any Device',
        img: 'assets/img/webdesign_page/s4img2.webp',
        body: [
          "Today's users move from device to device, and your website should go with the flow. Our mobile-friendly design ensures your site is right on phones, tablets and desktop alike.",
          "With mobile traffic surpassing desktop usage, a responsive website isn't optional; it's essential. We ensure your site adapts seamlessly across all screen sizes.",
        ],
      },
    ],
    folioTitle: 'Showcasing Our Web Design Expertise',
    folioLede:
      "Look at the websites we've created for businesses of all sizes and industries. Each project shows our commitment to custom web design solutions and user-focused creativity.",
    folio: [1, 2, 3, 4, 5, 6].map(P),
    faqs: [
      { q: 'How much does custom web design cost?',
        a: 'Costs vary according to features, customizations, and complexity. Typically, a professional website design costs between $1,500 and $10,000+.' },
      { q: 'How long will my website take?',
        a: 'A basic website typically needs four to six weeks. More advanced websites or e-commerce platforms can take two to three months.' },
      { q: 'Will my website be mobile responsive?',
        a: 'Always. Every site we build is designed mobile-first and tested across phones, tablets and desktop before launch.' },
      { q: 'Do you design for SEO?',
        a: 'Yes. We build SEO-friendly, semantic markup and optimize performance from the first line of code so your site is ready to rank.' },
    ],
    cta: {
      title: 'Still Running a Business Without a Website?',
      text: "You're leaving credibility, customers, and revenue on the table. Let us create a tailored site that presents your company as well as it deserves.",
    },
  },

  /* -------------------------------------------- website development ----- */
  {
    slug: 'website-development-services.html',
    title: 'Website Development Services | Web Design Lane',
    description:
      'Scalable, secure website development services in the USA. We build fast, reliable websites and web applications tailored to your business objectives.',
    h1: 'Built to Perform, Coded to Last',
    crumb: 'Website Development',
    lede:
      'We build strong, scalable websites specific to your business objectives. Our development process provides smooth performance and an easy-to-use experience on all platforms.',
    intro: {
      title: 'Development That Holds Up Under Real Traffic',
      img: 'assets/img/webdevelopment_page/s1right.webp',
      body: [
        'A website is only as good as the code beneath it. We build on modern, well-supported foundations so your site stays fast, secure and maintainable long after launch.',
        'From straightforward brochure sites to complex, integration-heavy platforms, our developers write clean, documented code your team can actually work with.',
      ],
      list: [
        'Clean, documented, maintainable code',
        'Performance and Core Web Vitals built in',
        'Secure by default, with ongoing patching',
        'Third-party and API integrations handled',
      ],
    },
    offering: {
      title: 'Our Web Development Services',
      lede:
        'Full-stack development capability, from the front-end your customers see to the infrastructure that keeps it running.',
      items: [
        { title: 'Custom Web Development', icon: 'assets/img/webdevelopment_page/s8icon1.webp', href: 'website-development-services.html',
          text: 'Tailored builds designed around your workflows and business logic rather than forced into an off-the-shelf template.' },
        { title: 'Web Portal Development', icon: 'assets/img/webdevelopment_page/s8icon2.webp', href: 'web-portal-development.html',
          text: 'Secure client, partner and employee portals with role-based access, dashboards and document handling.' },
        { title: 'CMS Development', icon: 'assets/img/s2icon5.webp', href: 'cms-development.html',
          text: 'WordPress and headless CMS builds that are performance-optimized and genuinely simple for your team to manage.' },
        { title: 'Ecommerce Development', icon: 'assets/img/webdevelopment_page/s8icon4.webp', href: 'ecommerce-website-development.html',
          text: 'Secure, easy-to-use stores that boost online sales and give customers a smooth checkout experience.' },
        { title: 'API & Integrations', icon: 'assets/img/webdevelopment_page/s8icon5.webp', href: 'website-development-services.html',
          text: 'Connect your site to the CRM, ERP, payment and marketing tools your business already runs on.' },
        { title: 'Maintenance & Support', icon: 'assets/img/webdevelopment_page/s8icon6.webp', href: 'web-maintenance-services.html',
          text: 'Keep your site current, secure and running at its best so you can focus on expanding the business.' },
      ],
    },
    detail: [
      {
        title: 'Scalable Architecture From Day One',
        img: 'assets/img/webdevelopment_page/s3left.webp',
        body: [
          'We build websites that grow with your business. Our solutions are secure and designed to scale seamlessly as your needs grow with the changing digital industry.',
          'That means sensible data models, caching where it counts, and infrastructure choices that will not need tearing up the first time traffic spikes.',
        ],
      },
      {
        title: 'Security and Compliance Taken Seriously',
        img: 'assets/img/webdevelopment_page/s4img1.webp',
        body: [
          'From HIPAA-conscious healthcare builds to PCI-aware ecommerce, we develop with the compliance requirements of your sector in mind from the outset.',
          'Dependencies are kept patched, inputs validated, and access properly controlled — security is part of the build, not an afterthought.',
        ],
      },
    ],
    folioTitle: 'Development Work We’re Proud Of',
    folioLede: 'A selection of builds across ecommerce, healthcare, logistics and professional services.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    faqs: [
      { q: 'What technologies do you build with?',
        a: 'We use cutting-edge, well-supported technologies chosen to fit the project — from front-end frameworks through to the back-end and hosting stack.' },
      { q: 'Can you work with our existing site?',
        a: 'Yes. We regularly take over, audit and extend existing codebases as well as building from scratch.' },
      { q: 'Do you provide ongoing maintenance?',
        a: 'We do. Our maintenance service keeps your site current, secure, and running at its optimal level after launch.' },
      { q: 'Will we own the code?',
        a: 'Yes. On completion the codebase is yours, handed over with documentation.' },
    ],
    cta: {
      title: 'Ready to Build Something That Lasts?',
      text: 'Tell us what you need it to do, and we will tell you how we would build it.',
    },
  },

  /* ----------------------------------------------------- branding ------- */
  {
    slug: 'branding-agency.html',
    title: 'Branding Agency | Web Design Lane',
    description:
      'A branding agency that builds identities with intent — strategy, visual identity, logo and brand guidelines that hold up everywhere your brand appears.',
    h1: 'Brands People Actually Remember',
    crumb: 'Branding Agency',
    lede:
      'Your brand is the sum of every impression you make. We build identities with intent — so yours is consistent, distinctive and unmistakably yours.',
    intro: {
      title: 'Identity Built on Strategy, Not Decoration',
      img: 'assets/img/branding_page/s1right.webp',
      body: [
        'Good branding is not a logo on a moodboard. It starts with understanding your market, your audience and the position you are trying to hold.',
        'We work from that strategy outward into a visual identity that performs across every touchpoint — web, print, social and packaging.',
      ],
      list: [
        'Brand strategy and positioning',
        'Visual identity and logo systems',
        'Typography and colour direction',
        'Brand guidelines your team can follow',
      ],
    },
    offering: {
      title: 'Our Branding Services',
      lede: 'Everything needed to define, build and apply a brand consistently.',
      items: [
        { title: 'Brand Strategy', icon: 'assets/img/branding_page/s8icon1.webp', href: 'branding-agency.html',
          text: 'Positioning, audience definition and messaging that give the visual work something solid to stand on.' },
        { title: 'Logo Design', icon: 'assets/img/branding_page/s8icon2.webp', href: 'logo-design-services.html',
          text: 'Distinctive marks designed to work at every size, in every medium, in colour and in mono.' },
        { title: 'Logo Animation', icon: 'assets/img/branding_page/s8icon3.webp', href: 'logo-animation.html',
          text: 'Bring your mark to life for video, social and app splash screens with motion that fits the brand.' },
        { title: 'Typographic Logos', icon: 'assets/img/branding_page/s8icon4.webp', href: 'typographic-logo.html',
          text: 'Wordmarks and lettering crafted for brands whose name is the strongest asset they have.' },
        { title: 'Graphic Design', icon: 'assets/img/branding_page/s8icon5.webp', href: 'graphic-design-agency.html',
          text: 'Collateral, social templates and campaign assets that keep every output on-brand.' },
        { title: 'Brand Guidelines', icon: 'assets/img/branding_page/s8icon6.webp', href: 'branding-agency.html',
          text: 'A practical rulebook so anyone producing work for you stays consistent without asking.' },
      ],
    },
    detail: [
      {
        title: 'Consistency Is What Builds Recognition',
        img: 'assets/img/branding_page/s3left.webp',
        body: [
          'A brand becomes memorable through repetition. That only works if every application looks like it came from the same place.',
          'We deliver systems, not one-offs: colour, type, spacing and tone documented clearly enough that your team can apply them without us.',
        ],
      },
      {
        title: 'Built to Work on the Web',
        img: 'assets/img/branding_page/s7right.webp',
        body: [
          'We are a web agency first, so every identity we create is pressure-tested against real digital use: small favicons, dark backgrounds, cramped mobile headers.',
          'The result is a brand that still looks right once it leaves the presentation deck and lands on an actual screen.',
        ],
      },
    ],
    folioTitle: 'Identities We’ve Shaped',
    folioLede: 'Brand work across startups, professional services and consumer businesses.',
    folio: [1, 2, 3, 4, 5, 6].map((n) => `assets/img/logodesign_page/portimg${n}.webp`),
    faqs: [
      { q: 'What is included in a branding project?',
        a: 'Typically strategy and positioning, a logo system, colour and typography direction, and a set of brand guidelines. Scope is agreed up front.' },
      { q: 'How long does branding take?',
        a: 'Most identity projects run four to eight weeks depending on the number of rounds and the breadth of applications required.' },
      { q: 'Can you rebrand an existing business?',
        a: 'Yes. We handle full rebrands as well as lighter refreshes where the existing equity is worth keeping.' },
      { q: 'Do we get the source files?',
        a: 'Yes — full vector source files and exported formats for web and print are handed over at the end of the project.' },
    ],
    cta: {
      title: 'Ready to Put Your Brand in the Right Lane?',
      text: "Let's define what your brand stands for and build an identity that carries it.",
    },
  },

  /* --------------------------------------------------- logo design ------ */
  {
    slug: 'logo-design-services.html',
    title: 'Logo Design Services | Web Design Lane',
    description:
      'Professional logo design services. Distinctive, versatile marks designed to work at every size and in every medium, delivered with full source files.',
    h1: 'A Mark Worth Putting Your Name To',
    crumb: 'Logo Design',
    lede:
      'Your logo is the shorthand for everything your business is. We design marks that are distinctive, versatile, and built to last longer than a trend cycle.',
    intro: {
      title: 'Designed for Every Place It Will Appear',
      img: 'assets/img/logodesign_page/s1right.webp',
      body: [
        'A logo has to survive being shrunk to a favicon, embroidered on a shirt, and reversed out of a photograph. We design for all of it from the start.',
        'Every mark we deliver is tested in colour, mono and reverse, at sizes from 16 pixels to billboard, before it ever reaches you.',
      ],
      list: [
        'Original concepts, never stock or templated',
        'Colour, mono and reverse variants included',
        'Full vector source files on handover',
        'Usage guidance so it stays consistent',
      ],
    },
    offering: {
      title: 'Our Logo Design Services',
      lede: 'Whatever form your mark needs to take, we design it to hold up.',
      items: [
        { title: 'Custom Logo Design', icon: 'assets/img/logodesign_page/s8icon1.webp', href: 'logo-design-services.html',
          text: 'Original concepts developed from your brief, refined over structured rounds of feedback.' },
        { title: 'Typographic Logos', icon: 'assets/img/logodesign_page/s8icon2.webp', href: 'typographic-logo.html',
          text: 'Custom wordmarks and lettering for brands whose name does the heavy lifting.' },
        { title: 'Logo Animation', icon: 'assets/img/logodesign_page/s8icon3.webp', href: 'logo-animation.html',
          text: 'Motion versions for video intros, social content and app splash screens.' },
        { title: 'Logo Redesign', icon: 'assets/img/logodesign_page/s8icon4.webp', href: 'logo-design-services.html',
          text: 'Modernise a dated mark while keeping the recognition you have already built.' },
        { title: 'Brand Mark Systems', icon: 'assets/img/logodesign_page/s8icon5.webp', href: 'branding-agency.html',
          text: 'Primary, secondary and icon-only lockups so you always have the right version to hand.' },
        { title: 'Icon & Favicon Sets', icon: 'assets/img/logodesign_page/s8icon6.webp', href: 'graphic-design-agency.html',
          text: 'Purpose-drawn small-size versions, because a shrunken logo rarely reads well.' },
      ],
    },
    detail: [
      {
        title: 'A Process That Gets You to the Right Mark',
        img: 'assets/img/logodesign_page/s3left.webp',
        body: [
          'We start with your brief, your market and your competitors, then develop concepts that stake out a distinct position rather than blending in.',
          'You see a focused set of directions rather than an overwhelming pile, and we refine the strongest one together over clear, structured rounds.',
        ],
      },
      {
        title: 'Everything You Need on Handover',
        img: 'assets/img/logodesign_page/s7right.webp',
        body: [
          'You receive full vector source files, exported raster formats for web and print, and every approved variant — colour, mono, reverse and icon-only.',
          'Alongside those, short usage guidance covering clear space, minimum sizes and what not to do, so the mark stays consistent wherever it is applied.',
        ],
      },
    ],
    folioTitle: 'Logos We’ve Designed',
    folioLede: 'Marks created for businesses across a range of sectors and sizes.',
    folio: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `assets/img/logodesign_page/portimg${n}.webp`),
    faqs: [
      { q: 'How many concepts will I see?',
        a: 'We present a focused set of distinct directions rather than a large volume of near-identical options, then refine the strongest together.' },
      { q: 'How many revision rounds are included?',
        a: 'Revision rounds are agreed in the proposal up front so there are no surprises. Most projects settle within two to three rounds.' },
      { q: 'What files will I receive?',
        a: 'Full vector source files plus exported web and print formats, including colour, mono, reverse and icon-only variants.' },
      { q: 'Do I own the logo outright?',
        a: 'Yes. On final payment, full ownership of the approved mark transfers to you.' },
    ],
    cta: {
      title: 'Need a Logo That Earns Its Place?',
      text: "Tell us about your business and we'll show you what we would do with it.",
    },
  },
];

export const services = [
  ...coreServices,
  ...designServices,
  ...developmentServices,
  ...creativeServices,
];
