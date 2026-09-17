// Design-category service pages (nav group "01 / Design").
// Rendered by the shared template in src/pages/service.mjs.

const P = (n) => `assets/img/portimg${n}.webp`;
const SHOP = (n) => `assets/img/shopifydevelopment_page/portimg${n}.webp`;
const ICON = (n) => `assets/img/webdesign_page/s4icon${n}.webp`;

export const designServices = [
  /* -------------------------------------------------- website redesign -- */
  {
    slug: 'website-redesign-services.html',
    title: 'Website Redesign Services | Web Design Lane',
    description:
      'Website redesign services that modernise dated sites without losing rankings. Faster load times, a proper mobile experience and a design that converts.',
    h1: 'Keep the Equity, Lose the Dated Design',
    crumb: 'Website Redesign',
    lede:
      'A redesign should not cost you the traffic you spent years earning. We modernise the design, fix what is slowing you down, and protect the rankings you already have.',
    intro: {
      title: 'Give Your Old Website a Fresh New Look',
      img: 'assets/img/webdesign_page/s4img1.webp',
      body: [
        'Most sites do not fail all at once. They drift — the brand moves on, the content grows past the layout, and the mobile experience quietly falls behind.',
        'We start by finding out what is actually underperforming: bounce rates, slow templates, confusing navigation, or pages that never ranked. Then we redesign around the evidence rather than taste alone.',
      ],
      list: [
        'Full audit before a single pixel moves',
        'URL and redirect mapping so rankings survive',
        'Mobile-first rebuild of every key template',
        'Measurable goals agreed before we start',
      ],
    },
    offering: {
      title: 'What a Redesign With Us Covers',
      lede:
        'A redesign is part design project, part rescue operation. These are the pieces we handle so nothing gets left behind in the move.',
      items: [
        { title: 'UX & Content Audit', icon: ICON(1), href: 'website-redesign-services.html',
          text: 'We review analytics, heatmaps and search data to find the pages losing you visitors before deciding what changes.' },
        { title: 'Visual Redesign', icon: ICON(2), href: 'website-design-services.html',
          text: 'A modern, on-brand interface built around your current identity, not the one you had five years ago.' },
        { title: 'Mobile Experience Rebuild', icon: ICON(3), href: 'responsive-web-designing.html',
          text: 'Every template rebuilt mobile-first, because that is where most of your traffic already is.' },
        { title: 'Performance Overhaul', icon: ICON(4), href: 'web-maintenance-services.html',
          text: 'Image handling, render-blocking scripts and bloated themes dealt with so Core Web Vitals stop hurting you.' },
        { title: 'SEO Migration', icon: ICON(5), href: 'seo-services.html',
          text: 'Redirect maps, metadata and structured data carried across so the relaunch does not reset your rankings.' },
        { title: 'CMS Replatforming', icon: ICON(6), href: 'cms-development.html',
          text: 'Move off a platform your team has outgrown, with content migrated and editors trained on the new one.' },
      ],
    },
    detail: [
      {
        title: 'Redesign Without the Traffic Cliff',
        img: 'assets/img/webdesign_page/s3left.webp',
        body: [
          'The most common redesign failure is a launch that drops organic traffic overnight — usually because URLs changed and nothing was redirected.',
          'We map every existing URL to its new home, keep the page titles and structured data that were working, and monitor search performance for weeks after launch rather than walking away at go-live.',
        ],
      },
      {
        title: 'Design Decisions Backed by Data',
        img: 'assets/img/webdesign_page/s4img2.webp',
        body: [
          'We look at where visitors drop out, which pages never get reached, and which calls to action get ignored, then design against those specific problems.',
          'That means you can tell whether the redesign worked, because we agreed what success looks like before the work started.',
        ],
      },
    ],
    folioTitle: 'Before and After',
    folioLede: 'Sites we have brought up to date without losing what was already working.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    faqs: [
      { q: 'Will a redesign hurt my search rankings?',
        a: 'Not if it is handled properly. We map redirects, preserve working metadata and monitor search performance after launch. Rankings usually recover within weeks and often improve.' },
      { q: 'Can you redesign without changing my CMS?',
        a: 'Yes. If your platform is still a good fit we redesign on top of it. We only recommend replatforming when the current system is genuinely holding you back.' },
      { q: 'How long does a redesign take?',
        a: 'Most redesigns run six to ten weeks depending on page count and how much content needs rewriting or migrating.' },
      { q: 'Do you rewrite the content too?',
        a: 'We can. Many redesigns include a content pass, because a new layout rarely fixes copy that was never clear in the first place.' },
    ],
    cta: {
      title: 'Is Your Website Working Against You?',
      text: 'Send us the URL. We will tell you what we would change and why, before you commit to anything.',
    },
  },

  /* ------------------------------------------------------ static design -- */
  {
    slug: 'static-web-designing.html',
    title: 'Static Website Design Services | Web Design Lane',
    description:
      'Static web design services in the USA. Pre-rendered sites that load instantly, resist attack and cost less to host — ideal for portfolios and small businesses.',
    h1: 'Go Static, Get Speed With No Database Drag',
    crumb: 'Static Web Design',
    lede:
      'No database queries, no plugin stack, no surprise downtime. A static site serves finished HTML the instant it is asked for — and keeps doing it under load.',
    intro: {
      title: 'Sleek Sites That Load in a Flash and Stay Rock Solid',
      img: 'assets/img/webdesign_page/s1right.webp',
      body: [
        'A static website is built once and served as plain files. There is no database to query on every request and no application layer to fall over when traffic spikes.',
        'For brochure sites, portfolios and landing pages, that translates directly into faster loads, better Core Web Vitals and a hosting bill measured in single digits.',
      ],
      list: [
        'Pre-rendered HTML, no database on the request path',
        'Minimal attack surface — nothing to inject into',
        'Cheap, simple hosting on any CDN',
        'Stays up when traffic suddenly spikes',
      ],
    },
    offering: {
      title: 'Our Static Web Design Services',
      lede:
        'Everything a static build should include, from the first concept to the deploy pipeline that puts it live.',
      items: [
        { title: 'Custom Static Design', icon: ICON(1), href: 'static-web-designing.html',
          text: 'Designed around your brand from scratch, with none of the constraints a bought template brings with it.' },
        { title: 'Landing Page Design', icon: ICON(2), href: 'landing-page-design.html',
          text: 'Single-purpose pages built for campaigns, where every second of load time shows up in your cost per conversion.' },
        { title: 'Responsive Static Layouts', icon: ICON(3), href: 'responsive-web-designing.html',
          text: 'Mobile-first layouts that keep the speed advantage intact on the slow connections your visitors actually use.' },
        { title: 'Static Site Redesign', icon: ICON(4), href: 'website-redesign-services.html',
          text: 'Bring a dated static site up to modern standards, or move a bloated CMS site onto static foundations.' },
        { title: 'Portfolio Sites', icon: ICON(5), href: 'graphic-design-agency.html',
          text: 'Clean, image-led showcases for photographers, studios and creative professionals, with galleries that stay fast.' },
        { title: 'SEO-Ready Architecture', icon: ICON(6), href: 'seo-services.html',
          text: 'Semantic markup, clean URLs and structured data built in, so crawlers get exactly what they need.' },
      ],
    },
    detail: [
      {
        title: 'Fewer Moving Parts, Fewer Things to Break',
        img: 'assets/img/webdesign_page/s4img3.webp',
        body: [
          'Most website security incidents involve an outdated plugin or an exposed admin panel. A static site has neither, which removes an entire category of risk.',
          'It also removes an entire category of maintenance. There are no monthly core updates to apply and no compatibility breakages to chase after them.',
        ],
      },
      {
        title: 'Static Does Not Mean Limited',
        img: 'assets/img/webdesign_page/s4img4.webp',
        body: [
          'Forms, booking widgets, search, analytics and live chat all work on a static site through hosted services — you simply are not running them yourself.',
          'When a section genuinely needs a database behind it, we say so and build that part dynamically rather than forcing the whole site into one model.',
        ],
      },
    ],
    folioTitle: 'Our Expertly Created Static Sites',
    folioLede: 'Fast, lean builds for businesses that value speed and simplicity over feature bloat.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    faqs: [
      { q: 'What exactly is a static website?',
        a: 'A site made of pre-built HTML, CSS and image files served directly to the visitor. Nothing is assembled on the fly, which is why it loads so quickly.' },
      { q: 'Why choose static over a dynamic site?',
        a: 'Speed, security and cost. If your content changes occasionally rather than constantly, a static build gives you better performance for less money.' },
      { q: 'Can I still update the content myself?',
        a: 'Yes. We can connect a headless CMS so your team edits content normally, and the site rebuilds and redeploys automatically.' },
      { q: 'Do you provide support after launch?',
        a: 'Yes. Static sites need far less maintenance, but we offer ongoing support plans for content updates and new sections.' },
    ],
    cta: {
      title: 'Want a Site That Is Fast, Secure and Stress-Free?',
      text: 'Tell us what your site needs to do. If static is the right call, we will build it that way.',
    },
  },

  /* ----------------------------------------------------- dynamic design -- */
  {
    slug: 'dynamic-web-designing.html',
    title: 'Dynamic Website Design Services | Web Design Lane',
    description:
      'Dynamic web design services. Database-driven websites with user accounts, live content, dashboards and integrations that scale as your business grows.',
    h1: 'Websites That Change With Your Business',
    crumb: 'Dynamic Web Design',
    lede:
      'When content changes daily, users log in, or every visitor should see something different, you need a site built on a real application — not a set of fixed pages.',
    intro: {
      title: 'Built Around Data, Not Fixed Pages',
      img: 'assets/img/webdevelopment_page/s1right.webp',
      body: [
        'A dynamic website assembles each page from your data at the moment it is requested. Add a product, a listing or an article once and every relevant page updates itself.',
        'That is what makes dynamic sites the right fit for catalogues, member areas, booking systems and anything else where the content outgrows manual editing.',
      ],
      list: [
        'Database-driven content and templating',
        'User accounts, roles and permissions',
        'Search, filtering and personalised views',
        'API and third-party system integration',
      ],
    },
    offering: {
      title: 'Our Dynamic Web Design Services',
      lede: 'The building blocks of a site that does real work rather than just presenting information.',
      items: [
        { title: 'Database-Driven Design', icon: ICON(1), href: 'dynamic-web-designing.html',
          text: 'Content models designed around how your business actually works, so editors add data once and it appears everywhere.' },
        { title: 'User Accounts & Portals', icon: ICON(2), href: 'web-portal-development.html',
          text: 'Registration, authentication and role-based areas where each user sees only what belongs to them.' },
        { title: 'Custom CMS Builds', icon: ICON(3), href: 'cms-development.html',
          text: 'An admin experience designed around your editors, not a generic dashboard they have to work around.' },
        { title: 'Search & Filtering', icon: ICON(4), href: 'website-development-services.html',
          text: 'Fast, faceted search that stays usable when the catalogue grows from fifty items to fifty thousand.' },
        { title: 'API Integrations', icon: ICON(5), href: 'website-development-services.html',
          text: 'CRMs, payment providers, inventory systems and marketing platforms wired in and kept in sync.' },
        { title: 'Interactive Dashboards', icon: ICON(6), href: 'web-portal-development.html',
          text: 'Live data views with charts, exports and alerts, built so non-technical users can actually read them.' },
      ],
    },
    detail: [
      {
        title: 'Scale Without a Rebuild',
        img: 'assets/img/webdevelopment_page/s3left.webp',
        body: [
          'Dynamic sites earn their keep as they grow. Adding a hundred new pages is a data import, not a hundred design tasks.',
          'We plan the content model up front so new categories, regions or product lines slot in later without anyone having to reopen the templates.',
        ],
      },
      {
        title: 'Fast, Even With a Database Behind It',
        img: 'assets/img/webdevelopment_page/s4img1.webp',
        body: [
          'Dynamic does not have to mean slow. We use query optimisation, caching layers and CDN edge delivery so pages render quickly under real traffic.',
          'Performance budgets are set at the start and measured before launch, not discovered afterwards when visitors start leaving.',
        ],
      },
    ],
    folioTitle: 'Dynamic Builds We Have Shipped',
    folioLede: 'Portals, catalogues and member platforms built to keep working as the data grows.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    faqs: [
      { q: 'How is a dynamic site different from a static one?',
        a: 'A static site serves fixed files. A dynamic site builds each page from a database when it is requested, so content can change per user, per query or per minute.' },
      { q: 'Which technologies do you build on?',
        a: 'We pick the stack around the project rather than the other way round, favouring well-supported, widely known frameworks so your team is never locked in.' },
      { q: 'Can you add dynamic features to my existing site?',
        a: 'Usually, yes. We can bolt a members area, booking flow or live catalogue onto a site that is otherwise working fine.' },
      { q: 'Will it be harder to maintain?',
        a: 'It needs more upkeep than a static site, which is why we document the build and offer maintenance plans covering updates, backups and monitoring.' },
    ],
    cta: {
      title: 'Outgrown a Site You Have to Edit by Hand?',
      text: 'Tell us what your content looks like and we will show you how we would model it.',
    },
  },

  /* -------------------------------------------------- responsive design -- */
  {
    slug: 'responsive-web-designing.html',
    title: 'Responsive Web Design Services | Web Design Lane',
    description:
      'Responsive web design services. Mobile-first layouts tested on real devices, so your site works everywhere your customers actually browse.',
    h1: 'One Site, Right on Every Screen',
    crumb: 'Responsive Web Design',
    lede:
      'More than half your visitors arrive on a phone. Responsive design is not a finishing touch on a desktop layout — it is where the design should start.',
    intro: {
      title: 'Perfect on Any Device and Screen Size',
      img: 'assets/img/webdesign_page/s4img2.webp',
      body: [
        'Responsive design means one site, one codebase and one set of content, reflowing intelligently rather than a stripped-down mobile version hidden behind a redirect.',
        'We design the smallest screen first and let the layout expand. That order forces clear priorities, and it is why our mobile experiences do not feel like an afterthought.',
      ],
      list: [
        'Mobile-first design, not desktop cut down',
        'Tested on real phones, not just a browser resize',
        'Tap targets, forms and menus sized for thumbs',
        'Images served at the size each device needs',
      ],
    },
    offering: {
      title: 'What Our Responsive Work Covers',
      lede: 'The details that decide whether a site feels native on a phone or merely survives on one.',
      items: [
        { title: 'Mobile-First Layouts', icon: ICON(1), href: 'responsive-web-designing.html',
          text: 'Every template designed at mobile width first, so the small screen gets the clearest hierarchy rather than the leftovers.' },
        { title: 'Fluid Grid Systems', icon: ICON(2), href: 'website-design-services.html',
          text: 'Layouts that adapt continuously between breakpoints instead of snapping awkwardly at three fixed widths.' },
        { title: 'Touch-Ready Navigation', icon: ICON(3), href: 'website-design-services.html',
          text: 'Menus, filters and carousels that work with a thumb, at the sizes fingers actually need to hit reliably.' },
        { title: 'Responsive Imagery', icon: ICON(4), href: 'web-maintenance-services.html',
          text: 'Modern formats and per-device sizing so phones are never sent a desktop-sized hero image over mobile data.' },
        { title: 'Cross-Browser Testing', icon: ICON(5), href: 'website-development-services.html',
          text: 'Checked on real iOS and Android devices as well as the desktop browsers your audience still uses.' },
        { title: 'Accessibility Pass', icon: ICON(6), href: 'website-design-services.html',
          text: 'Contrast, focus states, semantic structure and keyboard navigation reviewed before launch, not bolted on later.' },
      ],
    },
    detail: [
      {
        title: 'Mobile Performance Is Part of the Design',
        img: 'assets/img/webdesign_page/s7right.webp',
        body: [
          'A layout that looks right on a phone but takes eight seconds to appear has not solved the problem. Weight and load order are design decisions too.',
          'We set a performance budget alongside the visual direction, so heavy carousels and oversized fonts get questioned while they are still cheap to change.',
        ],
      },
      {
        title: 'Google Judges You on Mobile',
        img: 'assets/img/webdesign_page/s4img5.webp',
        body: [
          'Search indexing is mobile-first, which means the mobile version of your page is the one being assessed for ranking.',
          'We make sure the small-screen version carries the full content and structured data — not a trimmed version that quietly costs you visibility.',
        ],
      },
    ],
    folioTitle: 'Responsive Projects',
    folioLede: 'Sites built to hold together from a 360-pixel phone up to a widescreen desktop.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    faqs: [
      { q: 'Is responsive design included as standard?',
        a: 'Yes. Every site we build is responsive. This page exists for clients who need an existing site fixed rather than a new one built.' },
      { q: 'Can you make my current site responsive?',
        a: 'Often, yes. We audit the existing templates first — sometimes retrofitting is the cheaper path, and sometimes a rebuild is.' },
      { q: 'Do I need a separate mobile site?',
        a: 'Almost never. Separate mobile sites split your content and your SEO. One responsive site is simpler to run and ranks better.' },
      { q: 'Which devices do you test on?',
        a: 'Current and recent iPhones and Android handsets, tablets, and the major desktop browsers — on real hardware, not only emulators.' },
    ],
    cta: {
      title: 'Losing Visitors on Mobile?',
      text: 'We will audit how your site behaves on real devices and tell you exactly what is costing you.',
    },
  },

  /* --------------------------------------------------------- b2b design -- */
  {
    slug: 'b2b-web-designing.html',
    title: 'B2B Web Design Services | Web Design Lane',
    description:
      'B2B web design services built around long sales cycles — lead capture, gated content, CRM integration and pages that speak to buying committees.',
    h1: 'Design for Buyers Who Take Six Months to Decide',
    crumb: 'B2B Web Design',
    lede:
      'B2B buyers research quietly, compare carefully and arrive with a committee. Your site has to answer all of them before anyone fills in a form.',
    intro: {
      title: 'Built for the Way B2B Actually Buys',
      img: 'assets/img/webdevelopment_page/s7right.webp',
      body: [
        'Business purchases are rarely impulsive. Several people evaluate you, each with different questions, and most of that happens long before they contact you.',
        'We design for that reality: clear proof, accessible technical detail, credible case studies and a route to contact that does not demand a commitment too early.',
      ],
      list: [
        'Messaging mapped to each stakeholder',
        'Case studies and proof placed where they matter',
        'Lead capture tuned to the research stage',
        'CRM and marketing automation wired in',
      ],
    },
    offering: {
      title: 'Our B2B Web Design Services',
      lede: 'What a B2B site needs beyond a good-looking homepage.',
      items: [
        { title: 'Corporate Website Design', icon: ICON(1), href: 'website-design-services.html',
          text: 'A credible, current site that holds up when a procurement team looks you over alongside three competitors.' },
        { title: 'Lead Generation Pages', icon: ICON(2), href: 'landing-page-design.html',
          text: 'Campaign and solution pages designed to convert research traffic into a conversation rather than a bounce.' },
        { title: 'Resource & Gated Content', icon: ICON(3), href: 'cms-development.html',
          text: 'Whitepapers, guides and webinars behind forms that ask for the right amount of information at the right time.' },
        { title: 'Case Study Systems', icon: ICON(4), href: 'website-development-services.html',
          text: 'A structured, filterable library so prospects can find proof from their own sector without hunting.' },
        { title: 'CRM Integration', icon: ICON(5), href: 'website-development-services.html',
          text: 'Leads routed straight into Salesforce, HubSpot or your platform of choice with the source data attached.' },
        { title: 'Client Portals', icon: ICON(6), href: 'web-portal-development.html',
          text: 'Secure areas for documents, quotes and account data, so existing customers stay served after the sale.' },
      ],
    },
    detail: [
      {
        title: 'Speak to the Committee, Not Just the Champion',
        img: 'assets/img/webdevelopment_page/s4img2.webp',
        body: [
          'The person who finds you is rarely the person who signs. The technical lead wants specifications, the finance lead wants numbers, the executive wants outcomes.',
          'We structure the site so each of them finds their answer quickly, instead of forcing everyone through one generic overview page.',
        ],
      },
      {
        title: 'Measure What Marketing Actually Needs',
        img: 'assets/img/webdevelopment_page/s4img3.webp',
        body: [
          'Tracking form fills is not enough when the cycle runs for months. We set up attribution that survives the gap between first visit and closed deal.',
          'That means clean UTM handling, form source tracking and CRM fields that let you see which content genuinely produces pipeline.',
        ],
      },
    ],
    folioTitle: 'B2B Work',
    folioLede: 'Sites for firms selling considered, high-value services to other businesses.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    faqs: [
      { q: 'How is B2B web design different?',
        a: 'The sales cycle is longer and the audience is a group. The site has to educate and build credibility over multiple visits rather than close on the first one.' },
      { q: 'Do you integrate with our CRM?',
        a: 'Yes. We connect to HubSpot, Salesforce, Pipedrive and others so leads arrive with their source and campaign data intact.' },
      { q: 'Can you help with the content?',
        a: 'Yes. We work with your subject-matter experts to turn what they know into pages that answer real buyer questions.' },
      { q: 'Should our pricing be public?',
        a: 'It depends on your market. We will give you a straight recommendation based on how your competitors handle it and how qualified your inbound traffic is.' },
    ],
    cta: {
      title: 'Is Your Site Losing Deals Before You Hear About Them?',
      text: 'Let us review how your site handles a B2B buyer and where it drops them.',
    },
  },

  /* ------------------------------------------------------- landing page -- */
  {
    slug: 'landing-page-design.html',
    title: 'Landing Page Design Services | Web Design Lane',
    description:
      'Conversion-focused landing page design. Single-purpose pages with persuasive copy, fast loads and optimised forms that lower your cost per acquisition.',
    h1: 'One Page, One Job, Measurably Done',
    crumb: 'Landing Page Design',
    lede:
      'A landing page has one purpose and no distractions. Every element either moves the visitor toward the action or it does not belong on the page.',
    intro: {
      title: 'Pages Built to Convert, Not Just to Exist',
      img: 'assets/img/webdesign_page/s4img4.webp',
      body: [
        'When you pay for every click, the page that receives it decides whether that spend returns anything. A generic homepage almost never does the job.',
        'We build campaign-specific pages that match the promise of the ad, answer the immediate objection, and make the next step obvious and easy.',
      ],
      list: [
        'Message match between ad and page',
        'Single, unmistakable call to action',
        'Forms tuned to ask only what is needed',
        'Fast loads, because speed is conversion',
      ],
    },
    offering: {
      title: 'Our Landing Page Services',
      lede: 'From a one-off campaign page to a full library of variants for a running programme.',
      items: [
        { title: 'PPC Landing Pages', icon: ICON(1), href: 'landing-page-design.html',
          text: 'Built to match a specific ad group so quality scores improve and your cost per click comes down.' },
        { title: 'Lead Capture Pages', icon: ICON(2), href: 'b2b-web-designing.html',
          text: 'Forms designed around what your sales team genuinely needs, not every field the CRM happens to offer.' },
        { title: 'Product Launch Pages', icon: ICON(3), href: 'website-design-services.html',
          text: 'Focused pages for a new release, with the story, the proof and the pre-order or signup in one scroll.' },
        { title: 'Event & Webinar Pages', icon: ICON(4), href: 'landing-page-design.html',
          text: 'Registration pages with agenda, speakers and reminders that reduce the no-show rate afterwards.' },
        { title: 'A/B Test Variants', icon: ICON(5), href: 'seo-services.html',
          text: 'Structured variants and measurement so you learn which headline or layout actually wins.' },
        { title: 'Conversion Audits', icon: ICON(6), href: 'seo-services.html',
          text: 'A review of your existing pages with prioritised, specific fixes rather than generic best-practice advice.' },
      ],
    },
    detail: [
      {
        title: 'The Fold Is Not a Myth, It Is a Priority List',
        img: 'assets/img/webdesign_page/s4img6.webp',
        body: [
          'Visitors decide within seconds whether the page is relevant to them. The headline, the sub-line and the first visual carry almost all of that weight.',
          'We work that opening hardest — and then keep the rest of the page earning attention rather than assuming it has been given.',
        ],
      },
      {
        title: 'Every Field You Add Costs You Leads',
        img: 'assets/img/quesimg1.webp',
        body: [
          'Form length correlates directly with abandonment. The right question is not what would be nice to know, but what sales genuinely cannot proceed without.',
          'We design forms around that minimum, then enrich the record afterwards so you get the data without paying for it in lost submissions.',
        ],
      },
    ],
    folioTitle: 'Landing Pages We Have Built',
    folioLede: 'Campaign pages for paid search, social and email programmes.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    faqs: [
      { q: 'How is a landing page different from a homepage?',
        a: 'A homepage serves every visitor and every goal. A landing page serves one audience and one goal, which is precisely why it converts better.' },
      { q: 'How many landing pages do I need?',
        a: 'One per meaningful campaign or audience segment. Sending different ad groups to the same page is usually where paid budgets leak.' },
      { q: 'Do you write the copy?',
        a: 'Yes. Landing page copy and layout cannot be separated, so we produce them together rather than designing around text supplied later.' },
      { q: 'Can you set up A/B testing?',
        a: 'Yes. We build variants and configure measurement so decisions come from results rather than opinion.' },
    ],
    cta: {
      title: 'Paying for Clicks That Do Not Convert?',
      text: 'Send us the page and the campaign. We will tell you where the leak is.',
    },
  },

  /* ------------------------------------------------- ecommerce web design */
  {
    slug: 'ecommerce-web-design-services.html',
    title: 'eCommerce Web Design Services | Web Design Lane',
    description:
      'eCommerce web design services that turn browsers into buyers. Storefronts, product pages and checkout flows designed around how people actually shop.',
    h1: 'Store Designs That Sell Your Products Fast',
    crumb: 'Ecommerce Web Design',
    lede:
      'Traffic is not the problem for most stores — the path from product page to paid order is. We design that path so fewer people fall off it.',
    intro: {
      title: 'We Design to Pull Shoppers In and Move Them to Buy',
      img: 'assets/img/ecommercewebdesign_page/s7bg.webp',
      body: [
        'Online shoppers make decisions on limited information: a few photos, a short description, a price and whatever reassurance they can find nearby.',
        'We design product and category pages that give them all of that quickly, and a checkout that does not reintroduce doubt at the last step.',
      ],
      list: [
        'Category and product templates that scale',
        'Checkout flows designed to reduce abandonment',
        'Trust signals placed where hesitation happens',
        'Mobile-first, because most browsing is on a phone',
      ],
    },
    offering: {
      title: 'Our eCommerce Web Design Services',
      lede: 'The pieces of a store that decide whether a visit becomes an order.',
      items: [
        { title: 'Custom Store Design', icon: ICON(1), href: 'ecommerce-web-design-services.html',
          text: 'A branded storefront that looks like your business rather than a lightly recoloured theme everyone recognises.' },
        { title: 'Product Page Design', icon: ICON(2), href: 'ecommerce-website-development.html',
          text: 'Imagery, variants, stock and reviews arranged so the buying decision gets easier the further down the page you read.' },
        { title: 'Checkout Optimisation', icon: ICON(3), href: 'ecommerce-website-development.html',
          text: 'Fewer steps, clearer costs and guest checkout, aimed squarely at the point where most carts are abandoned.' },
        { title: 'Store UX & UI', icon: ICON(4), href: 'website-design-services.html',
          text: 'Navigation, filtering and search designed to hold up when the catalogue runs to thousands of SKUs.' },
        { title: 'Shopify Design', icon: ICON(5), href: 'shopify-website-design.html',
          text: 'Custom Shopify storefronts and theme work for merchants who want the platform without the template look.' },
        { title: 'Store Branding', icon: ICON(6), href: 'branding-agency.html',
          text: 'Identity, photography direction and packaging design that carry through from the ad to the unboxing.' },
      ],
    },
    detail: [
      {
        title: 'Most Carts Are Lost at Checkout',
        img: 'assets/img/ecommercewebdesign_page/s4boxbg.webp',
        body: [
          'Forced account creation, shipping costs revealed late and a form that fails validation on mobile account for a large share of abandoned orders.',
          'We treat checkout as its own design problem, with guest purchase, honest costs shown early, and payment methods your customers already trust.',
        ],
      },
      {
        title: 'Design That Survives a Growing Catalogue',
        img: 'assets/img/s8right.webp',
        body: [
          'A store that works with forty products can become unusable with four hundred if the navigation and filtering were never designed for it.',
          'We plan the taxonomy and the templates against where your catalogue is heading, not only where it is today.',
        ],
      },
    ],
    folioTitle: 'Take a Look at Our eCommerce Work',
    folioLede: 'Storefronts built for merchants across fashion, food, hardware and specialist retail.',
    folio: [1, 2, 3, 4, 5, 6].map(SHOP),
    faqs: [
      { q: 'Which platform should I sell on?',
        a: 'Shopify suits most merchants. WooCommerce fits content-heavy brands already on WordPress, and Magento suits large, complex catalogues. We recommend based on your catalogue and team.' },
      { q: 'Can you redesign my existing store?',
        a: 'Yes, and we start by looking at your analytics to find where orders are being lost before changing anything.' },
      { q: 'Will the design work on mobile?',
        a: 'It is designed for mobile first. Most store traffic arrives on a phone, so that is where the design has to be strongest.' },
      { q: 'Do you migrate products from my old store?',
        a: 'Yes. Products, customers, orders and URL redirects are all part of a properly handled migration.' },
    ],
    cta: {
      title: 'Is Your Current Design Holding Back Sales?',
      text: 'Let us look at your store and show you where shoppers are dropping out.',
    },
  },

  /* ----------------------------------------------------- shopify design -- */
  {
    slug: 'shopify-website-design.html',
    title: 'Shopify Website Design | Web Design Lane',
    description:
      'Custom Shopify website design. Branded storefronts, bespoke theme work and conversion-focused product pages for merchants who want more than a template.',
    h1: 'Shopify Stores That Do Not Look Like Everyone Else',
    crumb: 'Shopify Web Design',
    lede:
      'Shopify handles payments, inventory and hosting so you do not have to. What it cannot do is make your store look like your brand. That part is ours.',
    intro: {
      title: 'The Platform Is Standard, the Storefront Should Not Be',
      img: 'assets/img/shopifydevelopment_page/portimg1.webp',
      body: [
        'Thousands of stores run the same handful of popular themes. Shoppers may not name the theme, but they recognise the layout — and it flattens your brand.',
        'We design custom Shopify storefronts on top of the platform, so you keep the reliability of Shopify and lose the interchangeable look.',
      ],
      list: [
        'Custom themes built from your brand, not a preset',
        'Sections your team can rearrange without a developer',
        'Speed-conscious builds with disciplined app usage',
        'Shopify Plus work where the scale demands it',
      ],
    },
    offering: {
      title: 'Our Shopify Design Services',
      lede: 'Design and front-end work across the whole storefront, from home page to thank-you page.',
      items: [
        { title: 'Custom Theme Design', icon: ICON(1), href: 'shopify-website-design.html',
          text: 'A storefront designed and built for your catalogue rather than adapted from another merchant’s sample store.' },
        { title: 'Theme Customisation', icon: ICON(2), href: 'shopify-website-development.html',
          text: 'Targeted changes to a theme you already own, done cleanly so future theme updates do not undo them.' },
        { title: 'Product Page Design', icon: ICON(3), href: 'ecommerce-web-design-services.html',
          text: 'Variant pickers, galleries, size guides and reviews arranged to answer objections in order.' },
        { title: 'Collection & Search', icon: ICON(4), href: 'ecommerce-website-development.html',
          text: 'Filtering and merchandising that keeps large collections browsable instead of endless.' },
        { title: 'Store Migration', icon: ICON(5), href: 'ecommerce-website-development.html',
          text: 'Moving from WooCommerce, Magento or a legacy platform with products, customers and redirects intact.' },
        { title: 'Speed Optimisation', icon: ICON(6), href: 'web-maintenance-services.html',
          text: 'App audits, image handling and script cleanup, because installed apps are usually what slowed the store down.' },
      ],
    },
    detail: [
      {
        title: 'Apps Are Convenient Until They Are Not',
        img: 'assets/img/shopifydevelopment_page/portimg2.webp',
        body: [
          'Every app adds scripts to your storefront. Ten of them, each solving a small problem, can collectively cost you a second or more of load time.',
          'We audit what is installed, replace what can be built natively into the theme, and keep the rest from competing for the same page.',
        ],
      },
      {
        title: 'Editable by Your Team, Not Only by Us',
        img: 'assets/img/shopifydevelopment_page/portimg3.webp',
        body: [
          'We build with Shopify sections and settings so your merchandiser can reorder a homepage or launch a campaign banner without booking developer time.',
          'You get flexibility where it helps and constraints where they protect the design from drifting apart over time.',
        ],
      },
    ],
    folioTitle: 'Shopify Stores We Have Designed',
    folioLede: 'Custom storefronts for merchants who wanted the platform without the template.',
    folio: [1, 2, 3, 4, 5, 6].map(SHOP),
    faqs: [
      { q: 'Do I need a custom theme?',
        a: 'Not always. If a well-built theme is close to your needs, customising it is cheaper. We will tell you honestly which route fits your budget.' },
      { q: 'Can you work with Shopify Plus?',
        a: 'Yes, including checkout customisation, scripts and multi-store setups that Plus makes available.' },
      { q: 'Will my store still be fast?',
        a: 'That is part of the brief. We set a performance target, watch the app stack and test on mobile connections before launch.' },
      { q: 'Can you migrate my existing store to Shopify?',
        a: 'Yes. We handle product, customer and order migration plus the redirect mapping that keeps your search rankings intact.' },
    ],
    cta: {
      title: 'Ready for a Shopify Store That Looks Like You?',
      text: 'Show us your catalogue and we will show you what we would do with it.',
    },
  },

  /* ----------------------------------------------------- magento design -- */
  {
    slug: 'magento-website-design.html',
    title: 'Magento Website Design | Web Design Lane',
    description:
      'Magento and Adobe Commerce website design for large catalogues, multi-store setups and B2B pricing rules. Built for complexity other platforms cannot carry.',
    h1: 'Built for Catalogues Other Platforms Choke On',
    crumb: 'Magento Web Design',
    lede:
      'Thousands of SKUs, several storefronts, customer-specific pricing and complex tax rules. Magento handles all of it — if the storefront is designed for that scale.',
    intro: {
      title: 'Magento Design That Matches the Platform Power',
      img: 'assets/img/s6img3.webp',
      body: [
        'Magento, now Adobe Commerce, is chosen for the hard cases: enormous catalogues, B2B pricing tiers, multiple brands and regions running from one back end.',
        'That power is wasted if the front end is slow or confusing. We design storefronts that keep a huge catalogue navigable and a complex order process clear.',
      ],
      list: [
        'Designed for catalogues in the thousands',
        'Multi-store and multi-language layouts',
        'B2B pricing, quoting and account structures',
        'Front-end performance treated as a requirement',
      ],
    },
    offering: {
      title: 'Our Magento Design Services',
      lede: 'Storefront design and front-end work for merchants running serious complexity.',
      items: [
        { title: 'Custom Magento Themes', icon: ICON(1), href: 'magento-website-design.html',
          text: 'Storefront design built around your catalogue structure rather than forced into a generic layout.' },
        { title: 'Large Catalogue UX', icon: ICON(2), href: 'ecommerce-web-design-services.html',
          text: 'Layered navigation, faceted search and merchandising rules that keep thousands of products findable.' },
        { title: 'B2B Storefronts', icon: ICON(3), href: 'b2b-web-designing.html',
          text: 'Company accounts, negotiated pricing, quote requests and purchase approvals presented clearly.' },
        { title: 'Multi-Store Design', icon: ICON(4), href: 'ecommerce-website-development.html',
          text: 'Several brands, regions or languages sharing one back end while keeping distinct storefront identities.' },
        { title: 'Checkout Redesign', icon: ICON(5), href: 'ecommerce-website-development.html',
          text: 'Streamlined checkout across complex shipping, tax and payment rules without hiding the details buyers need.' },
        { title: 'Performance Work', icon: ICON(6), href: 'web-maintenance-services.html',
          text: 'Caching, image delivery and front-end budgets, because Magento storefronts get heavy quickly if nobody is watching.' },
      ],
    },
    detail: [
      {
        title: 'Findability Is the Whole Game at Scale',
        img: 'assets/img/s6img4.webp',
        body: [
          'With a large catalogue, the difference between a good store and a bad one is whether a customer can reach the right product in three moves.',
          'We design the category structure, filters and search behaviour together, then test them against your real product data rather than a sample set.',
        ],
      },
      {
        title: 'Design That Respects the Back Office',
        img: 'assets/img/s6img5.webp',
        body: [
          'Magento stores are run by teams — merchandisers, category managers, customer service — each with their own daily tasks.',
          'We design storefront features those teams can actually control from the admin, instead of hard-coding decisions they need to change weekly.',
        ],
      },
    ],
    folioTitle: 'Magento Work',
    folioLede: 'Storefronts for merchants with large catalogues and complicated requirements.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    faqs: [
      { q: 'Is Magento right for my store?',
        a: 'It suits large catalogues, B2B pricing and multi-store operations. If you have a few hundred simple products, Shopify is usually the better value.' },
      { q: 'Do you work with Adobe Commerce?',
        a: 'Yes. Adobe Commerce is the commercial edition of the same platform, and we design for both.' },
      { q: 'Can you improve our Magento store speed?',
        a: 'Yes. Front-end weight, caching strategy and image delivery are the usual culprits, and we audit all three.' },
      { q: 'Can you migrate us off Magento?',
        a: 'If the complexity no longer justifies it, yes. We will give you an honest assessment of what you would gain and lose.' },
    ],
    cta: {
      title: 'Running a Catalogue That Has Outgrown Its Storefront?',
      text: 'Tell us about the scale you are working at and we will scope the design work around it.',
    },
  },

  /* ------------------------------------------------- woocommerce design -- */
  {
    slug: 'woocommerce-website-design.html',
    title: 'WooCommerce Website Design | Web Design Lane',
    description:
      'WooCommerce website design for WordPress stores. Custom storefronts, faster product pages and checkout flows built on the CMS your content already lives in.',
    h1: 'Sell From the WordPress Site You Already Run',
    crumb: 'WooCommerce Web Design',
    lede:
      'If your content, blog and SEO already live in WordPress, WooCommerce keeps the store in the same place — under your control, with no monthly platform fee.',
    intro: {
      title: 'Content and Commerce in One Place',
      img: 'assets/img/s6img6.webp',
      body: [
        'WooCommerce turns WordPress into a store without splitting your site in two. Your blog, landing pages and product catalogue share one CMS and one domain.',
        'For brands where content drives the sales — recipes, guides, reviews, editorial — that unity is worth a great deal, both for editors and for search.',
      ],
      list: [
        'One CMS for content and catalogue',
        'No platform transaction fees',
        'Full control of hosting and data',
        'Custom storefront design, not a stock theme',
      ],
    },
    offering: {
      title: 'Our WooCommerce Services',
      lede: 'Design and build work for WordPress stores that need to look and perform better.',
      items: [
        { title: 'Custom Woo Storefronts', icon: ICON(1), href: 'woocommerce-website-design.html',
          text: 'Storefront design built for your catalogue and brand instead of a theme everyone else is also running.' },
        { title: 'Product Page Design', icon: ICON(2), href: 'ecommerce-web-design-services.html',
          text: 'Variations, galleries and stock information laid out so the buying decision gets simpler as you scroll.' },
        { title: 'Checkout Redesign', icon: ICON(3), href: 'ecommerce-website-development.html',
          text: 'A shorter, clearer checkout with guest purchase and payment methods your customers already recognise.' },
        { title: 'Content Commerce', icon: ICON(4), href: 'cms-development.html',
          text: 'Editorial and shopping woven together, so articles can sell products without feeling like adverts.' },
        { title: 'Plugin Rationalisation', icon: ICON(5), href: 'web-maintenance-services.html',
          text: 'Cutting the plugin stack back to what earns its place, which is usually the fastest performance win available.' },
        { title: 'Store Maintenance', icon: ICON(6), href: 'web-maintenance-services.html',
          text: 'Updates, backups, security monitoring and uptime checks, handled on a schedule rather than after an incident.' },
      ],
    },
    detail: [
      {
        title: 'Plugins Are Where WooCommerce Stores Slow Down',
        img: 'assets/img/webdevelopment_page/s4img4.webp',
        body: [
          'A typical store accumulates dozens of plugins, each adding queries and scripts. Together they can double your page weight without anyone noticing.',
          'We audit the stack, remove overlaps, replace what belongs in the theme, and leave you with a shorter list that is easier to keep updated.',
        ],
      },
      {
        title: 'You Own the Whole Thing',
        img: 'assets/img/webdevelopment_page/s4img5.webp',
        body: [
          'WooCommerce is open source and self-hosted. Your data, your customer list, your code, your choice of host — no platform sitting between you and your customers.',
          'That freedom comes with responsibility for updates and security, which is exactly why we offer maintenance plans alongside the build.',
        ],
      },
    ],
    folioTitle: 'WooCommerce Stores',
    folioLede: 'WordPress-based stores where content and commerce work together.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    faqs: [
      { q: 'Is WooCommerce as capable as Shopify?',
        a: 'For most catalogues, yes. It trades hosted convenience for control and no transaction fees, which suits content-led brands well.' },
      { q: 'Can you add a store to my existing WordPress site?',
        a: 'Yes. That is one of the main reasons to choose WooCommerce — the store slots into the site you already run.' },
      { q: 'Who handles updates and security?',
        a: 'You do, or we do under a maintenance plan. Self-hosting means someone has to own it, and we would rather it be a plan than a surprise.' },
      { q: 'Can you migrate from Shopify to WooCommerce?',
        a: 'Yes, including products, customers, orders and the redirects that keep your existing search rankings.' },
    ],
    cta: {
      title: 'Want to Sell Without Leaving WordPress?',
      text: 'Tell us what you sell and we will scope a WooCommerce build around it.',
    },
  },
];
