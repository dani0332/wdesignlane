// Development and ecommerce-development service pages
// (nav groups "02 / Web Development" and "03 / Ecommerce").

const P = (n) => `assets/img/portimg${n}.webp`;
const SHOP = (n) => `assets/img/shopifydevelopment_page/portimg${n}.webp`;
const ICON = (n) => `assets/img/s2icon${n}.webp`;

export const developmentServices = [
  /* ------------------------------------------------- web portal --------- */
  {
    slug: 'web-portal-development.html',
    title: 'Web Portal Development Services | Kodex Designs',
    description:
      'Custom web portal development — client portals, vendor and partner portals, employee intranets and dashboards with secure roles and real-time data.',
    h1: 'Give Every User Their Own Front Door',
    crumb: 'Web Portal Development',
    lede:
      'A portal replaces the email threads, spreadsheets and phone calls your business currently runs on, with one secure place where each user sees exactly their own work.',
    intro: {
      title: 'One Platform, Many Kinds of User',
      img: 'assets/img/webdevelopment_page/s1right.webp',
      body: [
        'Portals are what you build when a website is not enough: customers checking orders, partners submitting claims, staff approving requests, all in one system with different permissions.',
        'We design the role model first — who can see what, who can approve what — because that decision shapes every screen that follows.',
      ],
      list: [
        'Role-based access designed before the screens',
        'Single sign-on and multi-factor authentication',
        'Live data from the systems you already run',
        'Audit trails for anything that matters legally',
      ],
    },
    offering: {
      title: 'Portals We Build',
      lede: 'Different audiences, same principle: give people a self-service route to what they need.',
      items: [
        { title: 'Client Portals', icon: ICON(1), href: 'web-portal-development.html',
          text: 'Documents, invoices, project status and support requests in one account area instead of scattered across inboxes.' },
        { title: 'Vendor & Partner Portals', icon: ICON(2), href: 'web-portal-development.html',
          text: 'Onboarding, order submission, pricing and performance data, with each partner seeing only their own records.' },
        { title: 'Employee Intranets', icon: ICON(3), href: 'cms-development.html',
          text: 'Policies, directories, forms and approvals that make internal processes findable rather than folkloric.' },
        { title: 'Booking & Scheduling', icon: ICON(4), href: 'dynamic-web-designing.html',
          text: 'Availability, reservations, reminders and rescheduling, synchronised with the calendars your team already uses.' },
        { title: 'Data Dashboards', icon: ICON(5), href: 'website-development-services.html',
          text: 'Live operational reporting with filtering, exports and alerts, readable by people who are not analysts.' },
        { title: 'Membership Platforms', icon: ICON(6), href: 'dynamic-web-designing.html',
          text: 'Subscriptions, gated content, renewals and member directories, with billing handled by a proven provider.' },
      ],
    },
    detail: [
      {
        title: 'Security Is a Design Decision, Not a Checklist',
        img: 'assets/img/webdevelopment_page/s3left.webp',
        body: [
          'Portals hold the data you least want leaked. Access control has to be enforced on the server for every request, not merely hidden in the interface.',
          'We build permissions into the data layer, encrypt what needs encrypting, log access to sensitive records, and keep dependencies patched after launch.',
        ],
      },
      {
        title: 'Integrate, Do Not Duplicate',
        img: 'assets/img/webdevelopment_page/s4img1.webp',
        body: [
          'A portal that keeps its own copy of your customer data will be wrong within a month. It should read from the systems that already own that information.',
          'We integrate with your CRM, ERP, accounting and support tools so the portal shows one version of the truth rather than becoming another silo.',
        ],
      },
    ],
    folioTitle: 'Portals and Dashboards',
    folioLede: 'Internal and customer-facing platforms built for daily operational use.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    faqs: [
      { q: 'How long does a portal take to build?',
        a: 'Most run three to six months. We usually ship a focused first release covering the highest-value workflow, then extend from there.' },
      { q: 'Can it connect to our existing systems?',
        a: 'Yes. If the system has an API or a supported export, we can integrate with it. We confirm this during discovery before committing to a scope.' },
      { q: 'How do you handle user permissions?',
        a: 'Role-based access control designed up front, enforced server-side on every request, with an audit trail on sensitive actions.' },
      { q: 'Who hosts the finished portal?',
        a: 'Your cloud account, or one we manage for you. Either way you own the code and the data outright.' },
    ],
    cta: {
      title: 'Still Running Operations Through Spreadsheets?',
      text: 'Describe the process and we will map what a portal would replace, and what it would save.',
    },
  },

  /* ------------------------------------------------------- CMS ---------- */
  {
    slug: 'cms-development.html',
    title: 'CMS Development Services | Kodex Designs',
    description:
      'CMS development services — WordPress, headless and custom content platforms built so your team can publish confidently without breaking the design.',
    h1: 'A CMS Your Team Will Actually Use',
    crumb: 'CMS Development',
    lede:
      'Most content systems fail not because they lack features, but because editing is confusing enough that people stop doing it. We build the other kind.',
    intro: {
      title: 'Built Around Your Editors, Not the Other Way Round',
      img: 'assets/img/s4left.webp',
      body: [
        'The right CMS depends on who publishes, how often, and how much structure the content needs. That answer is rarely the platform your last agency happened to like.',
        'We design the content model around real editorial workflows, then set up fields and permissions so the site cannot be broken by a routine update.',
      ],
      list: [
        'Content model designed around real workflows',
        'Editing that cannot break the layout',
        'Roles, drafts, previews and approval steps',
        'Training and documentation for your team',
      ],
    },
    offering: {
      title: 'Our CMS Development Services',
      lede: 'From a straightforward WordPress build to a headless platform feeding several channels.',
      items: [
        { title: 'WordPress Development', icon: ICON(5), href: 'cms-development.html',
          text: 'Custom themes and blocks built properly, so the site stays fast and your editors stay inside the design system.' },
        { title: 'Headless CMS Builds', icon: ICON(1), href: 'website-development-services.html',
          text: 'Content managed once and delivered to a website, an app and anywhere else through a clean API.' },
        { title: 'Custom CMS Platforms', icon: ICON(2), href: 'dynamic-web-designing.html',
          text: 'For content that does not fit a standard model, an admin built precisely around your structure.' },
        { title: 'Content Migration', icon: ICON(3), href: 'website-redesign-services.html',
          text: 'Moving years of posts, media and URLs to a new platform with formatting and redirects preserved.' },
        { title: 'Multilingual Setup', icon: ICON(4), href: 'website-development-services.html',
          text: 'Translation workflows and locale routing that keep each language correctly structured for search.' },
        { title: 'Editor Training', icon: ICON(6), href: 'web-maintenance-services.html',
          text: 'Short, practical sessions plus written guides, so the system still makes sense after staff change.' },
      ],
    },
    detail: [
      {
        title: 'Structure Beats a Big Text Box',
        img: 'assets/img/s6img1.webp',
        body: [
          'When a page is one large rich-text field, every editor invents their own formatting and the design erodes within months.',
          'We break content into defined fields and reusable blocks, which keeps pages consistent, makes redesigns far cheaper, and lets the same content be reused elsewhere.',
        ],
      },
      {
        title: 'Plugins Are a Liability You Inherit',
        img: 'assets/img/s6img2.webp',
        body: [
          'Every plugin is code you did not write, running on your site, that someone else may stop maintaining next year.',
          'We keep the stack deliberately short, prefer well-supported options, and build small pieces of functionality directly rather than installing a whole framework for one feature.',
        ],
      },
    ],
    folioTitle: 'CMS Projects',
    folioLede: 'Publishing platforms for businesses that update their sites weekly, not annually.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    faqs: [
      { q: 'Should we use WordPress?',
        a: 'Often, yes — it is well understood and easy to hire for. For multi-channel content or very structured data, a headless CMS is usually the better fit.' },
      { q: 'What does headless actually mean?',
        a: 'The CMS stores and serves content through an API, and the front end is built separately. It gives more flexibility, at the cost of a slightly less visual editing experience.' },
      { q: 'Can you migrate our existing content?',
        a: 'Yes. Posts, pages, media and URL structure all move across, with redirects in place so search rankings are not lost.' },
      { q: 'Will our team need training?',
        a: 'A short session is usually enough. We also leave written documentation so new staff can pick it up without us.' },
    ],
    cta: {
      title: 'Tired of Waiting on Someone Else to Publish?',
      text: 'Let us build a CMS your team can run without a support ticket.',
    },
  },

  /* ----------------------------------------------- web maintenance ------ */
  {
    slug: 'web-maintenance-services.html',
    title: 'Website Maintenance Services | Kodex Designs',
    description:
      'Website maintenance services — updates, backups, security monitoring, uptime checks and performance work, handled on a schedule instead of after an incident.',
    h1: 'The Work That Happens After Launch',
    crumb: 'Web Maintenance',
    lede:
      'A website is not finished at launch; it starts ageing. Maintenance is the difference between a site that stays fast and secure and one you rebuild in three years.',
    intro: {
      title: 'Looked After, Not Just Left Running',
      img: 'assets/img/s6img4.webp',
      body: [
        'Unpatched software, expired certificates, broken forms and creeping page weight are all preventable. They only become emergencies when nobody is watching.',
        'Our maintenance plans cover the routine work on a schedule, with monitoring that tells us about a problem before your customers do.',
      ],
      list: [
        'Core, theme and plugin updates, tested first',
        'Off-site backups with verified restores',
        'Security scanning and uptime monitoring',
        'A monthly report you can actually read',
      ],
    },
    offering: {
      title: 'What Maintenance Covers',
      lede: 'Everything needed to keep a live site healthy, plus the small improvements that keep it competitive.',
      items: [
        { title: 'Updates & Patching', icon: ICON(1), href: 'web-maintenance-services.html',
          text: 'Platform and dependency updates applied on a staging copy first, so a routine patch never takes the site down.' },
        { title: 'Backups & Recovery', icon: ICON(2), href: 'web-maintenance-services.html',
          text: 'Automated off-site backups, with restores actually tested — an untested backup is only a hope.' },
        { title: 'Security Monitoring', icon: ICON(3), href: 'web-maintenance-services.html',
          text: 'Malware scanning, firewall rules, login hardening and certificate renewal handled before anything expires.' },
        { title: 'Uptime & Alerts', icon: ICON(4), href: 'web-maintenance-services.html',
          text: 'Continuous checks from multiple locations so we hear about an outage before your customers call about it.' },
        { title: 'Performance Tuning', icon: ICON(5), href: 'website-redesign-services.html',
          text: 'Ongoing work on Core Web Vitals, image handling and caching as content and traffic grow.' },
        { title: 'Content Updates', icon: ICON(6), href: 'cms-development.html',
          text: 'A monthly allowance of hours for the edits, new pages and small fixes your team would rather hand over.' },
      ],
    },
    detail: [
      {
        title: 'Most Hacks Exploit Something Already Patched',
        img: 'assets/img/s6img5.webp',
        body: [
          'Site compromises rarely involve a novel attack. They exploit a known vulnerability in a component that had an update available for months.',
          'Keeping software current is unglamorous and it is the single most effective security measure available. We do it on a schedule and record what changed.',
        ],
      },
      {
        title: 'Small Problems Found Early Stay Small',
        img: 'assets/img/s6img6.webp',
        body: [
          'A contact form that quietly stopped sending, a certificate about to lapse, a page growing heavier each month — all cheap to fix, all expensive to ignore.',
          'Regular checks catch these while they are still minor, which is usually worth more than the plan costs.',
        ],
      },
    ],
    folioTitle: 'Sites We Keep Running',
    folioLede: 'Ongoing care for sites we built and plenty that we did not.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    faqs: [
      { q: 'Do you maintain sites you did not build?',
        a: 'Yes. We start with an audit to understand the stack and flag anything urgent, then move you onto a regular plan.' },
      { q: 'What is included in a plan?',
        a: 'Updates, backups, security monitoring, uptime checks, a monthly report and an allowance of support hours. Larger plans add performance work.' },
      { q: 'How quickly do you respond to problems?',
        a: 'Response targets are set in the plan. Site-down issues are treated as urgent regardless of tier.' },
      { q: 'Can we cancel?',
        a: 'Plans run month to month. You keep your site, your backups and your hosting access either way.' },
    ],
    cta: {
      title: 'When Was Your Site Last Updated?',
      text: 'If you are not sure, that is the answer. Let us audit it and tell you where it stands.',
    },
  },

  /* ------------------------------------------ ecommerce development ----- */
  {
    slug: 'ecommerce-website-development.html',
    title: 'eCommerce Website Development | Kodex Designs',
    description:
      'eCommerce website development — storefronts, checkout, payments, inventory and ERP integration built to handle real order volume without falling over.',
    h1: 'Stores Built to Take the Order',
    crumb: 'Ecommerce Development',
    lede:
      'Design brings shoppers to the checkout. Development is what makes sure the payment clears, the stock is right and the order reaches your warehouse.',
    intro: {
      title: 'The Engineering Behind a Store That Works',
      img: 'assets/img/s15img1.webp',
      body: [
        'An online store is an application with money in it. Payments, tax, stock, shipping rules and refunds all have to behave correctly under load and on a bad connection.',
        'We build the commerce layer carefully, integrate it with the systems that run your business, and test the failure cases rather than just the happy path.',
      ],
      list: [
        'Secure payment integration with proven providers',
        'Real-time inventory across every sales channel',
        'ERP, accounting and fulfilment integration',
        'Load tested before your busiest season',
      ],
    },
    offering: {
      title: 'Our eCommerce Development Services',
      lede: 'From a first store on a hosted platform to a custom commerce build with unusual requirements.',
      items: [
        { title: 'Custom Store Builds', icon: ICON(3), href: 'ecommerce-website-development.html',
          text: 'Shopify, WooCommerce, Magento or custom — chosen for your catalogue rather than our convenience.' },
        { title: 'Payment Integration', icon: ICON(1), href: 'ecommerce-website-development.html',
          text: 'Cards, wallets, instalments and regional methods, implemented so card data never touches your servers.' },
        { title: 'Inventory Sync', icon: ICON(2), href: 'web-portal-development.html',
          text: 'Stock kept accurate across your store, marketplaces and physical locations, so you stop overselling.' },
        { title: 'ERP & Fulfilment', icon: ICON(4), href: 'website-development-services.html',
          text: 'Orders flowing straight into your accounting, warehouse and shipping systems without manual re-entry.' },
        { title: 'Subscriptions & Recurring', icon: ICON(5), href: 'dynamic-web-designing.html',
          text: 'Billing cycles, dunning, pauses and upgrades handled properly, because recurring revenue is unforgiving of bugs.' },
        { title: 'Headless Commerce', icon: ICON(6), href: 'website-development-services.html',
          text: 'A custom front end over a commerce API, for brands whose experience needs to go beyond a standard theme.' },
      ],
    },
    detail: [
      {
        title: 'Build for Your Peak, Not Your Average',
        img: 'assets/img/s5bg.webp',
        body: [
          'The traffic that matters most arrives on your busiest day of the year, and that is the worst possible moment to discover a bottleneck.',
          'We load test against realistic peak volumes, tune caching and queries, and plan the scaling approach before the campaign goes out rather than during it.',
        ],
      },
      {
        title: 'Take Payment Security Off Your Plate',
        img: 'assets/img/s10bg.webp',
        body: [
          'Storing card details brings compliance obligations most businesses should not take on. Hosted fields and tokenisation keep that data out of your systems entirely.',
          'We integrate with established providers so you get the payment methods your customers expect while staying out of PCI scope wherever possible.',
        ],
      },
    ],
    folioTitle: 'Commerce Builds',
    folioLede: 'Stores handling real orders, real stock and real integration requirements.',
    folio: [1, 2, 3, 4, 5, 6].map(SHOP),
    faqs: [
      { q: 'Which ecommerce platform do you recommend?',
        a: 'Shopify for most merchants, WooCommerce when content drives sales, Magento or a custom build for large catalogues and complex B2B rules.' },
      { q: 'Can you integrate with our ERP?',
        a: 'Yes. Order, stock and customer sync with ERP, accounting and warehouse systems is a standard part of the work.' },
      { q: 'How do you handle migrations?',
        a: 'Products, customers, orders and URLs all move, with redirects mapped so the relaunch does not cost you search traffic.' },
      { q: 'Will the store handle a sales spike?',
        a: 'We load test against your expected peak and tune before launch. Capacity planning is part of the build, not an afterthought.' },
    ],
    cta: {
      title: 'Ready to Sell Without the Manual Workarounds?',
      text: 'Tell us how orders reach you today and we will show you what to automate first.',
    },
  },

  /* -------------------------------------------- shopify development ----- */
  {
    slug: 'shopify-website-development.html',
    title: 'Shopify Development Services | Kodex Designs',
    description:
      'Shopify development services — custom themes, private apps, checkout extensions, migrations and Shopify Plus builds by developers who know Liquid.',
    h1: 'Shopify, Pushed Past the Theme Settings',
    crumb: 'Shopify Development',
    lede:
      'Shopify covers a great deal out of the box. The moment your requirements go past what the settings panel allows, you need developers who know the platform properly.',
    intro: {
      title: 'Where Shopify Ends and Development Begins',
      img: 'assets/img/shopifydevelopment_page/portimg4.webp',
      body: [
        'Custom bundles, unusual shipping logic, product configurators, ERP sync, wholesale pricing — none of these are theme settings, and all of them are routine Shopify development.',
        'We build them with Liquid, the Shopify APIs and custom apps, so the store keeps working through platform updates instead of breaking on the next theme release.',
      ],
      list: [
        'Custom themes and Liquid development',
        'Private and custom apps for your workflows',
        'Shopify Plus scripts and checkout extensions',
        'Clean migrations with redirects handled',
      ],
    },
    offering: {
      title: 'Our Shopify Development Services',
      lede: 'The technical side of Shopify, from theme code to the systems behind the store.',
      items: [
        { title: 'Custom Theme Development', icon: ICON(1), href: 'shopify-website-design.html',
          text: 'Themes built from the ground up in Liquid, with sections your merchandising team can control safely.' },
        { title: 'Custom App Development', icon: ICON(2), href: 'shopify-website-development.html',
          text: 'Private apps for the workflows no public app quite covers, built against the current Shopify APIs.' },
        { title: 'Checkout Extensions', icon: ICON(3), href: 'ecommerce-website-development.html',
          text: 'Shopify Plus checkout customisation, scripts and upsell logic that respect the platform rules.' },
        { title: 'Systems Integration', icon: ICON(4), href: 'web-portal-development.html',
          text: 'ERP, PIM, 3PL and accounting integrations so orders and stock stay in sync without manual work.' },
        { title: 'Platform Migration', icon: ICON(5), href: 'ecommerce-website-development.html',
          text: 'Moving to Shopify from WooCommerce, Magento or a bespoke store, with data and rankings preserved.' },
        { title: 'Speed & App Audits', icon: ICON(6), href: 'web-maintenance-services.html',
          text: 'Finding what is slowing the storefront down, and replacing the worst offenders with native theme code.' },
      ],
    },
    detail: [
      {
        title: 'Ten Apps Is Usually Nine Too Many',
        img: 'assets/img/shopifydevelopment_page/portimg5.webp',
        body: [
          'Each installed app injects its own scripts and styles. The cumulative effect on load time is often larger than any single app owner would admit.',
          'We audit the stack, measure what each app actually costs you, and build the few features you genuinely need directly into the theme.',
        ],
      },
      {
        title: 'Customise Without Breaking Upgrades',
        img: 'assets/img/shopifydevelopment_page/portimg6.webp',
        body: [
          'Editing theme files directly is how stores end up unable to take an update. Done that way, every improvement becomes a merge conflict.',
          'We structure customisations so platform and theme updates remain routine, and document what was changed and why.',
        ],
      },
    ],
    folioTitle: 'Shopify Development Work',
    folioLede: 'Stores where the requirements went well beyond what a theme could do.',
    folio: [1, 2, 3, 4, 5, 6].map(SHOP),
    faqs: [
      { q: 'Do we need Shopify Plus?',
        a: 'Only if you need checkout customisation, scripts, multiple storefronts or the higher API limits. Below that, standard Shopify is usually sufficient.' },
      { q: 'Can you build a custom app for us?',
        a: 'Yes. Private apps are the right answer when a workflow is specific to your business and no public app fits it well.' },
      { q: 'Will customisations survive Shopify updates?',
        a: 'Yes, if they are built the supported way. We avoid the shortcuts that make future updates painful.' },
      { q: 'Can you take over an existing Shopify store?',
        a: 'Yes. We audit the theme and app stack first so you know what state it is in before we change anything.' },
    ],
    cta: {
      title: 'Hit the Limits of What Shopify Does by Default?',
      text: 'Tell us what you need it to do and we will tell you how it is built.',
    },
  },

  /* ------------------------------------------------ mobile app dev ------ */
  {
    slug: 'mobile-app-development-services.html',
    title: 'Mobile App Development Services | Kodex Designs',
    description:
      'Mobile app development services for iOS and Android — native and cross-platform apps designed, built, tested and shipped through the app stores.',
    h1: 'Apps People Keep on the Home Screen',
    crumb: 'App Development',
    lede:
      'Most downloaded apps are opened once. We build the other kind: fast, focused and genuinely more useful than the website it sits alongside.',
    intro: {
      title: 'From Idea to App Store',
      img: 'assets/img/s1right2.webp',
      body: [
        'We take apps through the whole path — product definition, interface design, build, testing, store submission and the releases that come after.',
        'The first question we ask is whether you need an app at all. Sometimes a fast mobile site does the job, and we will say so before you spend the budget.',
      ],
      list: [
        'iOS and Android from one codebase where it fits',
        'Native builds when performance demands them',
        'Store submission and review handled for you',
        'Ongoing releases, not just a launch',
      ],
    },
    offering: {
      title: 'Our App Development Services',
      lede: 'Everything from the first prototype to the version you ship next quarter.',
      items: [
        { title: 'iOS App Development', icon: ICON(1), href: 'mobile-app-development-services.html',
          text: 'iPhone and iPad apps built to Apple guidelines, so review approval is routine rather than a gamble.' },
        { title: 'Android Development', icon: ICON(2), href: 'mobile-app-development-services.html',
          text: 'Apps that hold up across the wide range of Android hardware your users actually carry.' },
        { title: 'Cross-Platform Builds', icon: ICON(3), href: 'mobile-app-development-services.html',
          text: 'One codebase shipping to both stores, which cuts cost and keeps feature parity from drifting.' },
        { title: 'App UI/UX Design', icon: ICON(4), href: 'website-design-services.html',
          text: 'Interface design that follows platform conventions, because familiar beats clever on a phone.' },
        { title: 'Backend & APIs', icon: ICON(5), href: 'website-development-services.html',
          text: 'The servers, APIs and databases behind the app, built to scale with your user base.' },
        { title: 'Maintenance & Releases', icon: ICON(6), href: 'web-maintenance-services.html',
          text: 'OS updates, bug fixes and new features shipped on a regular cycle after launch.' },
      ],
    },
    detail: [
      {
        title: 'Ship Something Real, Then Learn From It',
        img: 'assets/img/s1right3.webp',
        body: [
          'Building every planned feature before launch is the most expensive way to discover which ones users did not want.',
          'We define the smallest version that delivers genuine value, ship it, and let real usage decide what gets built next.',
        ],
      },
      {
        title: 'The Store Review Is Part of the Project',
        img: 'assets/img/s12bg.webp',
        body: [
          'App Store and Play Store rejections usually come down to the same handful of predictable issues: permissions, privacy disclosures, payment rules and metadata.',
          'We design against those rules from the start and handle submission ourselves, so launch dates are not set by a surprise rejection.',
        ],
      },
    ],
    folioTitle: 'Apps We Have Shipped',
    folioLede: 'Mobile products across retail, services, logistics and internal operations.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    faqs: [
      { q: 'Native or cross-platform?',
        a: 'Cross-platform suits most business apps and roughly halves the cost. Native is worth it for heavy graphics, deep hardware use or demanding performance.' },
      { q: 'How much does an app cost?',
        a: 'A focused first release typically starts in the low tens of thousands. Scope drives the number, so we cost it feature by feature.' },
      { q: 'Do you handle app store submission?',
        a: 'Yes, including store listings, screenshots, privacy disclosures and the review process itself.' },
      { q: 'Do we own the code?',
        a: 'Yes. The source code and the store accounts are yours, with nothing locked behind us.' },
    ],
    cta: {
      title: 'Have an App Idea Worth Testing?',
      text: 'Tell us the problem it solves. We will scope the smallest version that proves it.',
    },
  },
];
