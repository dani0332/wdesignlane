// One entry per industry page. Rendered by src/pages/industry.mjs.
//
// `dir` is the folder under assets/img/industries/ holding s1bg, s3bg and s6bg
// for that sector. Adding an industry page is a data change, not a code change.

const P = (n) => `assets/img/portimg${n}.webp`;
const ICON = (n) => `assets/img/s9icon${n}.webp`;

export const industries = [
  /* ------------------------------------------------------- accounting -- */
  {
    slug: 'accounting-web-design-development.html',
    dir: 'accounting',
    title: 'Accounting Firm Web Design & Development | Web Design Lane',
    description:
      'Web design and development for accounting firms and CPAs. Credible, secure sites with client portals, clear service pages and local search visibility.',
    h1: 'Websites That Win Accounting Clients',
    crumb: 'Accounting',
    lede:
      'People choose an accountant on trust and competence, neither of which survives a dated website. Yours should look as careful as your work is.',
    intro: {
      title: 'Credibility First, Everything Else Second',
      body: [
        'Prospective clients are about to hand you their finances. Before they call, they will check whether your firm looks organised, current and properly established.',
        'We build accounting sites that answer those questions immediately: clear services, named people with real credentials, and a straightforward way to book a first conversation.',
      ],
      list: [
        'Service pages that separate tax, audit, advisory and bookkeeping',
        'Team profiles with credentials and specialisms',
        'Secure client portal and document upload',
        'Local search visibility for your service area',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Accounting Firms',
      lede: 'The features that turn an accounting website from a brochure into a working part of the practice.',
      items: [
        { title: 'Service Pages', icon: ICON(1), href: 'website-design-services.html',
          text: 'Separate, properly written pages for tax, audit, advisory and bookkeeping, so each ranks for what it actually is.' },
        { title: 'Client Portals', icon: ICON(2), href: 'web-portal-development.html',
          text: 'Secure document exchange and status tracking, so clients stop emailing sensitive files as attachments.' },
        { title: 'Consultation Booking', icon: ICON(3), href: 'dynamic-web-designing.html',
          text: 'Online scheduling tied to your calendar, with reminders that cut the no-show rate.' },
        { title: 'Calculators & Tools', icon: ICON(4), href: 'website-development-services.html',
          text: 'Tax and payroll estimators that give visitors a reason to arrive, and a reason to leave their details.' },
        { title: 'Resource Library', icon: ICON(5), href: 'cms-development.html',
          text: 'Guides and deadline reminders that demonstrate expertise and bring in steady organic search traffic.' },
        { title: 'Local SEO', icon: ICON(6), href: 'seo-services.html',
          text: 'Optimisation for the city and specialism searches that actually produce enquiries for firms like yours.' },
      ],
    },
    why: {
      title: 'Why Accounting Firms Invest in Their Site',
      lede: 'Referrals still matter, but almost every referral now gets checked online before anyone picks up the phone.',
    },
    stats: [
      { num: '7+', label: 'Years building professional service sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'Designers, developers and strategists' },
    ],
    growth: {
      title: 'Turn Seasonal Traffic Into Year-Round Clients',
      body: [
        'Accounting search traffic spikes hard around filing deadlines. Most firms capture the visit and lose the relationship as soon as the season ends.',
        'We build the follow-up into the site — resource downloads, newsletter signup, advisory service pages — so deadline traffic becomes retained clients rather than a yearly spike.',
      ],
    },
    folioTitle: 'Professional Services Work',
    folioLede: 'Sites built for firms whose clients buy on trust and expertise.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    trust: {
      title: 'Secure by Default, Because of What You Handle',
      body: [
        'Financial data raises the stakes on everything: file uploads, contact forms, portal logins and the hosting underneath them all.',
        'We use encrypted transfer, hardened logins and properly configured hosting, and we keep it patched afterwards rather than leaving that to chance.',
      ],
      list: [
        'Encrypted document exchange',
        'Multi-factor authentication on portals',
        'Regular patching and monitoring',
        'Accessible, standards-compliant markup',
      ],
    },
    faqs: [
      { q: 'Can you build a secure client portal?',
        a: 'Yes. Encrypted document exchange, multi-factor login and per-client access are a standard part of our accounting builds.' },
      { q: 'Will the site help us rank locally?',
        a: 'Yes. Local search is where most accounting enquiries begin, so location and specialism pages are built in from the start.' },
      { q: 'Can we update content ourselves?',
        a: 'Yes. We set up a CMS so your team can publish deadline reminders and guides without needing us.' },
      { q: 'How long does a firm website take?',
        a: 'Most accounting sites run six to ten weeks depending on page count and whether a portal is included.' },
    ],
    cta: {
      title: 'Ready for a Site That Reflects Your Firm?',
      text: 'Let us show you what a modern accounting website would do for your enquiry rate.',
    },
  },

  /* ----------------------------------------------------- architecture -- */
  {
    slug: 'architect-web-design-development.html',
    dir: 'architechture',
    title: 'Architecture Firm Web Design & Development | Web Design Lane',
    description:
      'Web design for architecture firms and practices. Image-led portfolio sites that show the work at full quality without sacrificing load speed.',
    h1: 'Portfolios That Do Your Buildings Justice',
    crumb: 'Architecture',
    lede:
      'Architecture is judged visually. Your website has one job above all others: present the work at the quality it deserves, quickly, on any screen.',
    intro: {
      title: 'The Work Comes First',
      body: [
        'Clients choose a practice by looking. Project imagery, plans and the story behind a build do more persuading than any amount of service copy.',
        'We design image-led sites where photography fills the screen and the interface gets out of the way — without the slow, heavy galleries that usually come with that.',
      ],
      list: [
        'Full-bleed project imagery, optimised properly',
        'Project pages with drawings, process and outcome',
        'Filterable portfolio by sector and scale',
        'Fast on mobile despite heavy photography',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Architects',
      lede: 'What an architecture site needs to work as a portfolio and as a business development tool.',
      items: [
        { title: 'Project Galleries', icon: ICON(1), href: 'website-design-services.html',
          text: 'Full-width imagery with smart loading, so a fifty-image project page still opens quickly.' },
        { title: 'Case Study Pages', icon: ICON(2), href: 'cms-development.html',
          text: 'Brief, constraints, approach and outcome — the narrative that turns a nice photo into a credible reference.' },
        { title: 'Portfolio Filtering', icon: ICON(3), href: 'dynamic-web-designing.html',
          text: 'Sorting by sector, scale and location, so a prospect finds work comparable to their own project.' },
        { title: 'Practice & Team', icon: ICON(4), href: 'website-design-services.html',
          text: 'The people, the philosophy and the accreditations, presented without the usual corporate filler.' },
        { title: 'Awards & Press', icon: ICON(5), href: 'branding-agency.html',
          text: 'Recognition and coverage collected in one place, where it supports rather than interrupts the work.' },
        { title: 'Enquiry Flow', icon: ICON(6), href: 'landing-page-design.html',
          text: 'A considered enquiry form that captures project type, scale and timeline before the first call.' },
      ],
    },
    why: {
      title: 'Why Practices Rebuild Their Sites',
      lede: 'Most architecture sites are built once, then left as the practice and its work move on.',
    },
    stats: [
      { num: '7+', label: 'Years designing for creative practices' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'Specialists across design and build' },
    ],
    growth: {
      title: 'Heavy Imagery, Fast Pages',
      body: [
        'Architecture sites are the most common place we see a beautiful design undone by twelve-megabyte photographs.',
        'We handle image pipelines properly — modern formats, per-device sizing, progressive loading — so the work looks uncompromised and the page still opens in under two seconds.',
      ],
    },
    folioTitle: 'Visual Portfolio Work',
    folioLede: 'Image-led sites for practices whose work has to be seen to be sold.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    trust: {
      title: 'A Site Your Studio Can Keep Current',
      body: [
        'A portfolio only stays persuasive if new projects reach it. When publishing requires a developer, the site quietly falls two years behind.',
        'We build a CMS shaped around how practices actually document work, so adding a project is an afternoon for your team rather than a change request to us.',
      ],
      list: [
        'Add projects without developer involvement',
        'Bulk image upload with automatic optimisation',
        'Draft and preview before publishing',
        'Consistent layout regardless of who publishes',
      ],
    },
    faqs: [
      { q: 'Can the site handle very large images?',
        a: 'Yes. We process uploads into multiple optimised sizes and formats automatically, so quality stays high and pages stay fast.' },
      { q: 'Can we add projects ourselves?',
        a: 'Yes. Publishing a new project is a standard CMS task, with bulk image upload and preview before it goes live.' },
      { q: 'Do you design the whole practice identity too?',
        a: 'We can. Our branding team handles identity, and the website is built to carry it consistently.' },
      { q: 'How long does an architecture site take?',
        a: 'Usually eight to twelve weeks, with most of the schedule determined by how quickly project content can be gathered.' },
    ],
    cta: {
      title: 'Ready to Show the Work Properly?',
      text: 'Send us your portfolio and we will show you how we would present it.',
    },
  },

  /* -------------------------------------------------------- auto repair -- */
  {
    slug: 'auto-repair-web-design-development.html',
    dir: 'autorepair',
    title: 'Auto Repair Shop Web Design & Development | Web Design Lane',
    description:
      'Web design for auto repair shops and garages. Mobile-first sites with online booking, service pages and local SEO that bring in nearby drivers.',
    h1: 'Get Found by Drivers Who Need You Now',
    crumb: 'Auto Repair',
    lede:
      'Most auto repair searches happen on a phone, urgently, within a few miles of your shop. The site that loads fastest and books soonest usually wins the job.',
    intro: {
      title: 'Built for the Search That Happens Roadside',
      body: [
        'Someone with a warning light on their dashboard is not browsing. They want to know you are open, you are close, you fix their make, and how soon you can see them.',
        'We build shop sites that answer all four within a second of loading, with a phone number and booking button that never scroll out of reach.',
      ],
      list: [
        'Tap-to-call and booking always visible',
        'Hours, location and directions above the fold',
        'Service pages per repair type for search',
        'Reviews shown where the decision happens',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Repair Shops',
      lede: 'Everything a garage site needs to turn a local search into a booked bay.',
      items: [
        { title: 'Online Booking', icon: ICON(1), href: 'dynamic-web-designing.html',
          text: 'Appointment scheduling tied to your bay availability, with confirmations and reminders sent automatically.' },
        { title: 'Service Pages', icon: ICON(2), href: 'website-design-services.html',
          text: 'Individual pages for brakes, transmission, diagnostics and the rest, because that is how people search.' },
        { title: 'Local SEO', icon: ICON(3), href: 'seo-services.html',
          text: 'Map listings, citations and location pages that put you in the results for drivers nearby.' },
        { title: 'Quote Requests', icon: ICON(4), href: 'landing-page-design.html',
          text: 'Short forms capturing vehicle, symptom and urgency, so you can respond with something useful.' },
        { title: 'Review Display', icon: ICON(5), href: 'online-reputation-management-services.html',
          text: 'Live review feeds from the platforms that matter, placed next to the booking button.' },
        { title: 'Fleet & Commercial', icon: ICON(6), href: 'b2b-web-designing.html',
          text: 'A dedicated route for fleet accounts, which are worth far more per customer than walk-in work.' },
      ],
    },
    why: {
      title: 'Why Local Search Decides This',
      lede: 'Repair work is bought within a short radius, under time pressure, from whoever looks most available.',
    },
    stats: [
      { num: '7+', label: 'Years building local business sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People across design, build and SEO' },
    ],
    growth: {
      title: 'Speed Is Not Optional on a Phone',
      body: [
        'Your visitor is standing beside a car that will not start, on mobile data, with three other shops one tap away in the results.',
        'We build lean, fast pages because in this sector every second of load time is measurably a share of the calls you do not receive.',
      ],
    },
    folioTitle: 'Local Business Work',
    folioLede: 'Sites for service businesses that live or die on local search.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    trust: {
      title: 'Reviews Do the Convincing',
      body: [
        'Drivers are wary of repair shops, and reviews are how they decide who to trust with a bill they cannot verify.',
        'We surface your reviews prominently and set up the systems that keep new ones arriving, so the profile keeps improving without anyone chasing it.',
      ],
      list: [
        'Live review feeds on key pages',
        'Automated review requests after service',
        'Business profile kept accurate and complete',
        'Response templates for the difficult ones',
      ],
    },
    faqs: [
      { q: 'Can customers book online?',
        a: 'Yes. Booking can be tied to your bay availability, with automatic confirmations and reminders to reduce no-shows.' },
      { q: 'Will this help us rank on the map?',
        a: 'Local SEO is central to these builds — business profile, citations, review signals and location-specific pages.' },
      { q: 'Do we need a page per service?',
        a: 'Yes. People search for "brake repair near me", not "auto services". Separate pages are how you appear for those searches.' },
      { q: 'How long does it take?',
        a: 'Most shop sites are live within four to six weeks, including booking setup and local SEO work.' },
    ],
    cta: {
      title: 'Want the Phone Ringing More?',
      text: 'Let us look at how you show up locally and what it would take to rank higher.',
    },
  },

  /* -------------------------------------------------------------- bank -- */
  {
    slug: 'bank-web-design-development.html',
    dir: 'bank',
    title: 'Bank & Financial Institution Web Design | Web Design Lane',
    description:
      'Web design and development for banks, credit unions and financial institutions — secure, accessible, compliant sites with product pages that convert.',
    h1: 'Banking Sites Built on Trust and Compliance',
    crumb: 'Banking',
    lede:
      'Financial websites carry obligations most sites do not: accessibility standards, disclosure requirements and a security posture that has to hold up to scrutiny.',
    intro: {
      title: 'Where Design Meets Regulation',
      body: [
        'A bank site has to be welcoming enough to convert an account application and rigorous enough to satisfy a compliance review. Those pressures pull in opposite directions.',
        'We have built for regulated industries long enough to design within those constraints rather than discovering them during legal sign-off.',
      ],
      list: [
        'WCAG accessibility built in, not retrofitted',
        'Disclosure and rate presentation handled correctly',
        'Hardened hosting and security review support',
        'Clear product comparison and application flows',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Financial Institutions',
      lede: 'The parts of a banking site that carry both the conversion and the compliance load.',
      items: [
        { title: 'Product Pages', icon: ICON(1), href: 'website-design-services.html',
          text: 'Accounts, loans and cards presented with rates, terms and required disclosures laid out legibly.' },
        { title: 'Application Flows', icon: ICON(2), href: 'dynamic-web-designing.html',
          text: 'Multi-step applications with save-and-resume, because long forms abandoned halfway cost real revenue.' },
        { title: 'Rate Comparison', icon: ICON(3), href: 'website-development-services.html',
          text: 'Calculators and comparison tables that help customers self-select the right product before applying.' },
        { title: 'Branch & ATM Finder', icon: ICON(4), href: 'web-portal-development.html',
          text: 'Location search with hours, services and accessibility information, accurate on mobile.' },
        { title: 'Secure Portals', icon: ICON(5), href: 'web-portal-development.html',
          text: 'Customer areas built to the access control and audit standards this sector requires.' },
        { title: 'Accessibility Compliance', icon: ICON(6), href: 'website-design-services.html',
          text: 'WCAG conformance designed in from the start, with testing and documentation to evidence it.' },
      ],
    },
    why: {
      title: 'Why Accessibility Is Not Optional Here',
      lede: 'Financial services face more accessibility scrutiny than almost any other sector, and retrofitting costs far more than building it in.',
    },
    stats: [
      { num: '7+', label: 'Years building for regulated sectors' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'Specialists on the team' },
    ],
    growth: {
      title: 'Applications Abandoned Are Customers Lost',
      body: [
        'Account and loan applications are long by necessity. Every additional screen, unexplained field or failed validation drops another share of applicants.',
        'We design these flows around save-and-resume, plain-language field help and mobile-first input, then measure where people still drop and fix those steps specifically.',
      ],
    },
    folioTitle: 'Financial Sector Work',
    folioLede: 'Sites built for institutions where trust and compliance both matter.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    trust: {
      title: 'Security You Can Put in Front of an Auditor',
      body: [
        'Hardened hosting, enforced encryption, strict access control and a documented patching schedule are the baseline, not the differentiator.',
        'We work alongside your security and compliance teams from the start, so the review at the end confirms the build rather than reopening it.',
      ],
      list: [
        'Encryption in transit and at rest',
        'Access control enforced server-side',
        'Documented patching and incident process',
        'Penetration test support before launch',
      ],
    },
    faqs: [
      { q: 'Can you meet accessibility requirements?',
        a: 'Yes. We build to WCAG standards from the start and provide testing documentation to evidence conformance.' },
      { q: 'Do you integrate with core banking systems?',
        a: 'We integrate with the systems that expose APIs, and work with your vendors where they do not. This is confirmed during discovery.' },
      { q: 'How do you handle compliance review?',
        a: 'We involve your compliance team early, so requirements shape the design rather than surfacing at the end.' },
      { q: 'How long does a project take?',
        a: 'Financial sector projects typically run three to six months, since review cycles are longer than in other industries.' },
    ],
    cta: {
      title: 'Planning a Financial Website Project?',
      text: 'Tell us about the requirements and the review process, and we will scope realistically around both.',
    },
  },

  /* ------------------------------------------------------------ church -- */
  {
    slug: 'church-web-design-development.html',
    dir: 'church',
    title: 'Church Website Design & Development | Web Design Lane',
    description:
      'Church website design — service times, sermon archives, online giving and event calendars, built so a small volunteer team can keep it current.',
    h1: 'A Welcome That Starts Before Sunday',
    crumb: 'Church',
    lede:
      'Most first-time visitors look up a church online before they ever walk through the door. What they find there decides whether they come.',
    intro: {
      title: 'Answer the Newcomer’s Questions First',
      body: [
        'Someone considering a visit has practical worries: when do services start, where do I park, what should I wear, what happens to my children.',
        'We put those answers where a newcomer finds them immediately, rather than behind a menu designed for people who already attend.',
      ],
      list: [
        'Service times and location impossible to miss',
        'A genuine "what to expect" page for newcomers',
        'Sermon archive in audio and video',
        'Simple, secure online giving',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Churches',
      lede: 'The features a congregation actually uses, built to be maintained by volunteers.',
      items: [
        { title: 'Service Information', icon: ICON(1), href: 'website-design-services.html',
          text: 'Times, location, parking and accessibility presented plainly, updated in seconds when they change.' },
        { title: 'Sermon Archive', icon: ICON(2), href: 'cms-development.html',
          text: 'Searchable audio and video by series, speaker and topic, with podcast distribution included.' },
        { title: 'Online Giving', icon: ICON(3), href: 'ecommerce-website-development.html',
          text: 'Secure one-off and recurring donations through a trusted provider, on mobile in a few taps.' },
        { title: 'Event Calendar', icon: ICON(4), href: 'dynamic-web-designing.html',
          text: 'Groups, classes and events with sign-up, so attendance is known before the room is booked.' },
        { title: 'Ministry Pages', icon: ICON(5), href: 'website-design-services.html',
          text: 'Children, youth, outreach and small groups each given the space to explain themselves.' },
        { title: 'Livestream Integration', icon: ICON(6), href: 'website-development-services.html',
          text: 'Streaming embedded on your own site, archived automatically once the service ends.' },
      ],
    },
    why: {
      title: 'Why the Website Is the Front Door',
      lede: 'For most people considering a visit, the website is the entire first impression of your congregation.',
    },
    stats: [
      { num: '7+', label: 'Years building community sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People on the team' },
    ],
    growth: {
      title: 'Built for Volunteers to Run',
      body: [
        'Church websites are usually maintained by whoever volunteered, alongside everything else they do. A complicated system means the site stops being updated.',
        'We keep the editing simple and predictable, so updating service times or posting a sermon takes minutes and does not require the person who set it up.',
      ],
    },
    folioTitle: 'Community Work',
    folioLede: 'Sites for churches and community organisations run by small teams.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    trust: {
      title: 'Giving That People Trust',
      body: [
        'Online giving only works if it feels safe and takes seconds. Anything that looks improvised or asks for too much will be abandoned.',
        'We use established payment providers, keep the flow short on mobile, and support recurring gifts, which is what makes the difference to steady income.',
      ],
      list: [
        'Trusted, established payment processing',
        'One-off and recurring giving options',
        'Fast, simple flow on mobile',
        'Clear giving records for your treasurer',
      ],
    },
    faqs: [
      { q: 'Can volunteers keep the site updated?',
        a: 'Yes. That is a core requirement of these builds — publishing a sermon or changing service times is a few minutes of work.' },
      { q: 'Can we take donations online?',
        a: 'Yes, through established providers, with support for both one-off and recurring giving.' },
      { q: 'Can we stream our services?',
        a: 'Yes. We embed your stream on your own site and archive it automatically into the sermon library afterwards.' },
      { q: 'Do you work with smaller budgets?',
        a: 'Yes. We scope church projects to what the congregation can sustain, and prioritise the pages newcomers actually use.' },
    ],
    cta: {
      title: 'Ready to Welcome People Online?',
      text: 'Tell us about your congregation and we will suggest where to start.',
    },
  },

  /* ----------------------------------------------------------- dentist -- */
  {
    slug: 'dentist-web-design-development.html',
    dir: 'dentist',
    title: 'Dental Website Design & Development | Web Design Lane',
    description:
      'Dental website design — treatment pages, online appointment booking, smile galleries and HIPAA-conscious forms that turn searches into booked patients.',
    h1: 'Websites That Grow Your Dental Practice',
    crumb: 'Dentist',
    lede:
      'Patients choose a dentist nervously. The practice whose site feels calm, competent and easy to book with is the one that gets the call.',
    intro: {
      title: 'From Search to Booked Appointment',
      body: [
        'Dental searches are high intent and highly local. Someone looking for an implant consultation or an emergency appointment is ready to act today.',
        'We build sites that convert that moment — clear treatment information, visible pricing guidance where appropriate, and booking that works in a few taps.',
      ],
      list: [
        'A page per treatment, written for patients',
        '24/7 online appointment booking',
        'Before-and-after galleries with consent handled',
        'Forms built with patient privacy in mind',
      ],
    },
    solutions: {
      title: 'Our Custom Web Solutions for Dentists',
      lede: 'What a dental site needs to reassure a nervous patient and fill the appointment book.',
      items: [
        { title: 'Treatment Pages', icon: ICON(1), href: 'website-design-services.html',
          text: 'Implants, orthodontics, cosmetic and general care each explained in plain language, and each able to rank.' },
        { title: 'Appointment Booking', icon: ICON(2), href: 'dynamic-web-designing.html',
          text: 'Round-the-clock scheduling synced to your practice management software, with automatic reminders.' },
        { title: 'Smile Galleries', icon: ICON(3), href: 'website-design-services.html',
          text: 'Before-and-after cases presented properly, with consent and usage tracked behind the scenes.' },
        { title: 'Reviews & Accreditation', icon: ICON(4), href: 'online-reputation-management-services.html',
          text: 'Patient reviews and professional memberships placed where hesitation actually occurs.' },
        { title: 'New Patient Forms', icon: ICON(5), href: 'web-portal-development.html',
          text: 'Secure online intake so patients arrive prepared and your front desk does less transcription.' },
        { title: 'Local & Mobile SEO', icon: ICON(6), href: 'seo-services.html',
          text: 'Fast, optimised pages that appear for treatment-plus-location searches across your catchment.' },
      ],
    },
    why: {
      title: 'Why Dental Sites Convert or Do Not',
      lede: 'The gap between a practice that fills its book online and one that does not is usually booking friction, not marketing spend.',
    },
    stats: [
      { num: '7+', label: 'Years building healthcare sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'Designers, developers and strategists' },
    ],
    growth: {
      title: 'Reduce the Anxiety Before the Chair',
      body: [
        'A meaningful share of patients delay treatment out of nervousness. Sites that acknowledge that directly — sedation options, what a visit involves, who will treat you — convert noticeably better.',
        'We write and structure the content to answer those unspoken worries, which is often worth more than another round of advertising.',
      ],
    },
    folioTitle: 'Healthcare Work',
    folioLede: 'Practice websites built to book appointments, not just to exist.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    trust: {
      title: 'Patient Privacy Taken Seriously',
      body: [
        'Any form collecting health information raises obligations around how that data is transmitted, stored and who can reach it.',
        'We build intake and contact flows with encrypted transmission and appropriate access control, and work with your compliance advisers where the requirements are specific to your practice.',
      ],
      list: [
        'Encrypted submission of patient information',
        'Access control on stored form data',
        'Consent tracked for gallery imagery',
        'Accessible markup for all patients',
      ],
    },
    faqs: [
      { q: 'Can patients book appointments online?',
        a: 'Yes, around the clock, synced to your practice management system with automatic confirmations and reminders.' },
      { q: 'Do you handle before-and-after galleries?',
        a: 'Yes, including a consent record for each case so usage stays properly documented.' },
      { q: 'Will the site help us attract higher-value treatments?',
        a: 'That is usually the aim. Dedicated treatment pages are how practices compete for implant and cosmetic searches.' },
      { q: 'How long does a dental site take?',
        a: 'Typically six to eight weeks, including booking integration and treatment content.' },
    ],
    cta: {
      title: 'Want to Grow the Practice Digitally?',
      text: 'Let us build a site that keeps your appointment book full.',
    },
  },

  /* ------------------------------------------------------------ doctor -- */
  {
    slug: 'doctor-web-design-development.html',
    dir: 'doctor',
    title: 'Medical Practice Web Design & Development | Web Design Lane',
    description:
      'Web design for doctors, clinics and medical practices — patient portals, online scheduling, service pages and accessible, privacy-conscious builds.',
    h1: 'Medical Sites Patients Can Rely On',
    crumb: 'Doctor',
    lede:
      'A patient looking for care is anxious and in a hurry. Your site should reduce both — clear information, easy booking, no hunting for a phone number.',
    intro: {
      title: 'Clarity When People Are Worried',
      body: [
        'Medical websites fail most often by burying the essentials: which conditions you treat, which insurance you take, how soon you can be seen.',
        'We put those answers first, write clinical content in language patients understand, and make booking or calling possible from anywhere on the site.',
      ],
      list: [
        'Conditions and services in plain language',
        'Insurance and payment information up front',
        'Online scheduling and patient portal access',
        'Accessible to patients with impairments',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Medical Practices',
      lede: 'The building blocks of a practice site that reduces phone load and fills the schedule.',
      items: [
        { title: 'Service & Condition Pages', icon: ICON(1), href: 'website-design-services.html',
          text: 'Each specialty and condition explained clearly, which is also how patients find you in search.' },
        { title: 'Online Scheduling', icon: ICON(2), href: 'dynamic-web-designing.html',
          text: 'Booking connected to your practice system, with reminders that measurably cut no-shows.' },
        { title: 'Patient Portals', icon: ICON(3), href: 'web-portal-development.html',
          text: 'Secure access to results, messages and documents, with access control enforced properly.' },
        { title: 'Provider Profiles', icon: ICON(4), href: 'website-design-services.html',
          text: 'Credentials, specialisms and photographs — patients want to know who they will actually see.' },
        { title: 'Telehealth Integration', icon: ICON(5), href: 'website-development-services.html',
          text: 'Virtual visit booking and joining, integrated cleanly into the same patient journey.' },
        { title: 'Accessibility', icon: ICON(6), href: 'responsive-web-designing.html',
          text: 'WCAG-conformant design, which matters more here than almost anywhere else.' },
      ],
    },
    why: {
      title: 'Why Clinics Rebuild',
      lede: 'Most practice sites were built for the practice, not for the patient trying to use them at eleven at night.',
    },
    stats: [
      { num: '7+', label: 'Years building healthcare sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People across the team' },
    ],
    growth: {
      title: 'Take Pressure Off the Front Desk',
      body: [
        'A large share of calls to a practice are routine: opening hours, directions, insurance questions, appointment changes. Every one occupies a staff member.',
        'A site that answers those clearly, plus self-service booking and rescheduling, frees your team for the calls that genuinely need a person.',
      ],
    },
    folioTitle: 'Healthcare Projects',
    folioLede: 'Clinic and practice sites built around the patient journey.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    trust: {
      title: 'Privacy Built Into the Build',
      body: [
        'Anything a patient submits through your site is sensitive. How it is transmitted, where it lands and who can open it all need deciding deliberately.',
        'We build with encrypted submission, restricted access and minimal retention, and coordinate with your compliance advisers on the specifics for your practice.',
      ],
      list: [
        'Encrypted transmission of patient data',
        'Least-privilege access to submissions',
        'Retention kept to what is necessary',
        'Audit trails where they are required',
      ],
    },
    faqs: [
      { q: 'Can you integrate with our practice management system?',
        a: 'Where the system offers an API or supported integration, yes. We confirm exactly what is possible during discovery.' },
      { q: 'Can patients book online?',
        a: 'Yes, with reminders and rescheduling, which typically reduces both no-shows and inbound call volume.' },
      { q: 'Is the site accessible?',
        a: 'Yes. We build to WCAG standards and test with assistive technology before launch.' },
      { q: 'How long does it take?',
        a: 'Most practice sites run eight to twelve weeks, depending on integrations and how many providers are included.' },
    ],
    cta: {
      title: 'Ready to Improve the Patient Experience?',
      text: 'Let us review your current site against what patients are actually trying to do on it.',
    },
  },

  /* ------------------------------------------------------- electrician -- */
  {
    slug: 'electrician-web-design-development.html',
    dir: 'electrician',
    title: 'Electrician Web Design & Development | Web Design Lane',
    description:
      'Web design for electricians and electrical contractors — emergency call handling, service area pages, quote requests and local SEO that fills the diary.',
    h1: 'Be the Electrician They Call First',
    crumb: 'Electricians',
    lede:
      'Electrical work is urgent, local and bought on trust. Your site has to prove you are licensed, nearby and available — in about five seconds.',
    intro: {
      title: 'Built for Urgent Local Searches',
      body: [
        'Half your enquiries start with something that has stopped working. The other half are planned jobs where the customer is comparing three quotes.',
        'We design for both: an unmissable emergency route for the first, and enough evidence of quality and licensing to win the second.',
      ],
      list: [
        'Emergency call-out clearly signposted',
        'Licence, insurance and certifications shown',
        'Service area pages for each town you cover',
        'Quote requests with photo upload',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Electrical Contractors',
      lede: 'The features that turn a local search into a booked job.',
      items: [
        { title: 'Emergency Call Handling', icon: ICON(1), href: 'landing-page-design.html',
          text: 'A tap-to-call route that stays visible on every page, because urgent visitors will not go looking for it.' },
        { title: 'Service Pages', icon: ICON(2), href: 'website-design-services.html',
          text: 'Rewiring, panel upgrades, EV chargers, inspections — a page each, matching how people search.' },
        { title: 'Service Area Pages', icon: ICON(3), href: 'seo-services.html',
          text: 'Genuine pages for each town you cover, so you appear in results across your whole catchment.' },
        { title: 'Quote Requests', icon: ICON(4), href: 'landing-page-design.html',
          text: 'Forms that accept photographs, so you can price accurately without a wasted site visit.' },
        { title: 'Credentials Display', icon: ICON(5), href: 'website-design-services.html',
          text: 'Licence numbers, insurance and trade accreditations shown plainly — this is what separates you from a van with a phone number.' },
        { title: 'Reviews & Gallery', icon: ICON(6), href: 'online-reputation-management-services.html',
          text: 'Completed work and customer reviews together, which is the most persuasive combination you have.' },
      ],
    },
    why: {
      title: 'Why Contractors Lose Jobs Online',
      lede: 'Usually not on price — on a site that loads slowly, hides the phone number, or gives no reason to trust the name.',
    },
    stats: [
      { num: '7+', label: 'Years building trade business sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People on the team' },
    ],
    growth: {
      title: 'One Page per Town You Actually Serve',
      body: [
        'A single site listing twelve towns in a footer will not rank in any of them. Search engines want a real page with real local content.',
        'We build genuine service area pages — local projects, local specifics, local contact details — which is how contractors compete across a whole region.',
      ],
    },
    folioTitle: 'Trade Business Work',
    folioLede: 'Sites for contractors who need the phone to ring.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    trust: {
      title: 'Show the Work, Show the Paperwork',
      body: [
        'Customers letting someone into their home want two things: evidence the work is good and evidence you are properly qualified and insured.',
        'We give both room on the site — a project gallery that shows finished quality, and credentials displayed without making the visitor hunt for them.',
      ],
      list: [
        'Project gallery with before and after',
        'Licence and insurance details visible',
        'Trade accreditations and memberships',
        'Reviews pulled from the platforms customers check',
      ],
    },
    faqs: [
      { q: 'Do we need separate pages for each town?',
        a: 'Yes, if you want to rank across a region. Listing towns in a footer does not work; genuine local pages do.' },
      { q: 'Can customers send photos with a quote request?',
        a: 'Yes. Photo upload in the quote form saves a great deal of wasted travel on inaccurate estimates.' },
      { q: 'Will the site work well on a phone?',
        a: 'It is designed mobile-first. Most emergency electrical searches happen on a phone, often in a hurry.' },
      { q: 'How long does it take?',
        a: 'Typically four to six weeks including service area pages and local SEO setup.' },
    ],
    cta: {
      title: 'Want More Local Enquiries?',
      text: 'Let us look at how you rank across your service area and what is missing.',
    },
  },

  /* ---------------------------------------------------------- law firm -- */
  {
    slug: 'law-web-design-development.html',
    dir: 'law',
    title: 'Law Firm Web Design & Development | Web Design Lane',
    description:
      'Web design for law firms and attorneys — practice area pages, confidential intake, attorney profiles and local SEO built for competitive legal search.',
    h1: 'Law Firm Sites That Win the Consultation',
    crumb: 'Law Firm',
    lede:
      'Legal search is among the most competitive online. Winning it takes genuine practice area depth, real credibility signals and an intake process that works.',
    intro: {
      title: 'Authority, Then Contact',
      body: [
        'Someone facing a legal problem is researching before they are ready to call. They are looking for a firm that clearly handles their specific situation.',
        'We build depth into each practice area so your firm demonstrates that expertise, and make the step to a confidential consultation easy once they are ready.',
      ],
      list: [
        'A substantial page per practice area',
        'Attorney profiles with real credentials',
        'Confidential, encrypted intake',
        'Case results presented within ethical rules',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Law Firms',
      lede: 'What a legal site needs to compete in an expensive, crowded search market.',
      items: [
        { title: 'Practice Area Pages', icon: ICON(1), href: 'website-design-services.html',
          text: 'Depth on each area you genuinely practise — thin pages do not rank and do not convince.' },
        { title: 'Attorney Profiles', icon: ICON(2), href: 'website-design-services.html',
          text: 'Bar admissions, experience, publications and cases, because clients choose a person as much as a firm.' },
        { title: 'Confidential Intake', icon: ICON(3), href: 'web-portal-development.html',
          text: 'Encrypted intake forms with conflict-check routing and appropriate disclaimers in place.' },
        { title: 'Case Results', icon: ICON(4), href: 'cms-development.html',
          text: 'Outcomes presented with the disclaimers your jurisdiction requires, structured for credibility.' },
        { title: 'Legal Content Hub', icon: ICON(5), href: 'seo-services.html',
          text: 'Guides answering the questions clients search before they call, which is how firms win organic traffic.' },
        { title: 'Local Legal SEO', icon: ICON(6), href: 'seo-services.html',
          text: 'Practice-plus-location optimisation for the searches that produce actual consultations.' },
      ],
    },
    why: {
      title: 'Why Legal Search Is So Hard to Win',
      lede: 'Legal terms carry some of the highest advertising costs online, which makes organic ranking disproportionately valuable.',
    },
    stats: [
      { num: '7+', label: 'Years building professional service sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'Specialists on the team' },
    ],
    growth: {
      title: 'Depth Beats Breadth Every Time',
      body: [
        'Firms often list fifteen practice areas with a paragraph each. That ranks for none of them and convinces nobody that you specialise in any.',
        'We concentrate on the areas that actually produce your revenue and build genuine depth there, which is what competes in legal search.',
      ],
    },
    folioTitle: 'Professional Services Work',
    folioLede: 'Sites for firms where credibility is the product.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    trust: {
      title: 'Confidentiality From the First Form',
      body: [
        'A prospective client describing their situation in an intake form is sharing something sensitive before any relationship formally exists.',
        'We build encrypted submission, restricted access and appropriate disclaimers into the intake process, and route enquiries so conflict checks can happen properly.',
      ],
      list: [
        'Encrypted intake submission',
        'Restricted access to enquiry data',
        'Disclaimers placed as your rules require',
        'Routing that supports conflict checking',
      ],
    },
    faqs: [
      { q: 'Can you handle legal advertising rules?',
        a: 'We work within the ethical rules for your jurisdiction, and your compliance counsel reviews disclaimers and case result presentation before launch.' },
      { q: 'Is the intake form secure?',
        a: 'Yes. Submissions are encrypted and access is restricted, with routing that supports your conflict check process.' },
      { q: 'Do you write legal content?',
        a: 'We draft from your attorneys’ expertise and submit everything for their review. Legal content is never published without your approval.' },
      { q: 'How long does a law firm site take?',
        a: 'Usually eight to twelve weeks, with content depth and review cycles driving most of the timeline.' },
    ],
    cta: {
      title: 'Ready to Compete in Legal Search?',
      text: 'Let us review your practice areas and show you where the opportunity is.',
    },
  },

  /* ----------------------------------------------------------- plumber -- */
  {
    slug: 'plumber-firm-web-design-development.html',
    dir: 'plumber',
    title: 'Plumber Web Design & Development | Web Design Lane',
    description:
      'Web design for plumbing companies — emergency call-outs, service area pages, online booking and local SEO that keeps engineers busy.',
    h1: 'The Plumber They Find at 2am',
    crumb: 'Plumber',
    lede:
      'Plumbing emergencies do not wait for office hours. The firm that is easiest to find and fastest to reach gets the job, every time.',
    intro: {
      title: 'Designed for the Emergency Search',
      body: [
        'A burst pipe produces a very specific visitor: on a phone, panicking, scanning for a number that will be answered right now.',
        'We build sites that serve that person in seconds, while still presenting the planned work — bathrooms, boilers, installations — that carries the better margins.',
      ],
      list: [
        'Emergency number visible on every screen',
        '24/7 availability stated plainly',
        'Service area pages across your whole patch',
        'Booking and quote requests for planned work',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Plumbing Companies',
      lede: 'What keeps the phone ringing and the diary full.',
      items: [
        { title: 'Emergency Routing', icon: ICON(1), href: 'landing-page-design.html',
          text: 'A sticky call button and a page designed to convert in under ten seconds.' },
        { title: 'Service Pages', icon: ICON(2), href: 'website-design-services.html',
          text: 'Leaks, drains, boilers, bathrooms and installations, each written to rank for how it is searched.' },
        { title: 'Service Area Pages', icon: ICON(3), href: 'seo-services.html',
          text: 'Real local pages for each town you serve, which is what puts you in the map results there.' },
        { title: 'Online Booking', icon: ICON(4), href: 'dynamic-web-designing.html',
          text: 'Scheduling for non-urgent work, so planned jobs stop consuming phone time.' },
        { title: 'Quote Requests', icon: ICON(5), href: 'landing-page-design.html',
          text: 'Photo upload and job details, so you can quote accurately without an unpaid visit.' },
        { title: 'Reviews & Credentials', icon: ICON(6), href: 'online-reputation-management-services.html',
          text: 'Licensing, insurance and live reviews, placed next to the call button where they do the most work.' },
      ],
    },
    why: {
      title: 'Why Speed Wins This Sector',
      lede: 'Emergency customers rarely compare more than two options. Being easy to reach beats being slightly cheaper.',
    },
    stats: [
      { num: '7+', label: 'Years building trade business sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People on the team' },
    ],
    growth: {
      title: 'Emergencies Pay the Bills, Installations Build the Business',
      body: [
        'Call-outs bring volume, but bathroom fits and boiler installations are where the margin is. Most plumbing sites optimise for one and forget the other.',
        'We design two clear routes through the site, so the urgent visitor converts instantly and the planning visitor finds the gallery, the finance options and the quote form.',
      ],
    },
    folioTitle: 'Trade Business Work',
    folioLede: 'Sites built for firms whose customers are searching right now.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    trust: {
      title: 'Reasons to Trust You With the Keys',
      body: [
        'Letting a stranger into your home under pressure is a real decision, and customers look for reassurance before making it.',
        'Licensing, insurance, named engineers, guarantees and recent reviews all belong on the page, not buried on an about page nobody reaches.',
      ],
      list: [
        'Licence and insurance details shown',
        'Named, photographed engineers',
        'Workmanship guarantees stated clearly',
        'Live reviews from the platforms customers check',
      ],
    },
    faqs: [
      { q: 'How do we capture emergency calls better?',
        a: 'A persistent tap-to-call button, stated availability, and a fast-loading page. Emergency visitors will not scroll to find you.' },
      { q: 'Do we need pages for every town?',
        a: 'Yes, if you want to appear across your service area. Genuine local pages are what rank; footer lists are not.' },
      { q: 'Can we take bookings online?',
        a: 'Yes, for planned work. It takes routine scheduling off the phone so your team can handle urgent calls.' },
      { q: 'How long until we see results?',
        a: 'The site launches in four to six weeks. Local search improvements usually show within two to three months.' },
    ],
    cta: {
      title: 'Want to Be the First Call?',
      text: 'Let us see how you show up locally and what is holding you back.',
    },
  },

  /* ------------------------------------------------------- real estate -- */
  {
    slug: 'real-estate-web-design-development.html',
    dir: 'realestate',
    title: 'Real Estate Web Design & Development | Web Design Lane',
    description:
      'Real estate web design — property search, listing feeds, agent profiles and lead capture built for agencies and brokerages that live on enquiry volume.',
    h1: 'Property Sites That Generate Enquiries',
    crumb: 'Real Estate',
    lede:
      'Buyers search on portals but decide on agents. Your site has to do two jobs: show property well, and convince sellers you are the firm to list with.',
    intro: {
      title: 'Two Audiences, One Website',
      body: [
        'Buyers want fast, filterable property search with good photography. Sellers want evidence you can market a home and get a price for it.',
        'We design for both without letting either take over, because a site that only serves buyers quietly costs you the listings that make the business work.',
      ],
      list: [
        'Fast property search with map and filters',
        'Listing feed integration, kept in sync',
        'Valuation requests and seller landing pages',
        'Agent profiles that generate direct enquiries',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Real Estate',
      lede: 'The functionality that turns property traffic into instructions and viewings.',
      items: [
        { title: 'Property Search', icon: ICON(1), href: 'dynamic-web-designing.html',
          text: 'Map and filter search that stays fast with thousands of listings and works properly on mobile.' },
        { title: 'Listing Feed Integration', icon: ICON(2), href: 'website-development-services.html',
          text: 'Automatic sync from your listing system, so the site is never advertising a sold property.' },
        { title: 'Saved Searches & Alerts', icon: ICON(3), href: 'web-portal-development.html',
          text: 'Registered buyers alerted the moment a matching property lists, which brings them back to you first.' },
        { title: 'Valuation Requests', icon: ICON(4), href: 'landing-page-design.html',
          text: 'Seller-focused pages and forms built to generate the instructions your business depends on.' },
        { title: 'Agent Profiles', icon: ICON(5), href: 'website-design-services.html',
          text: 'Individual pages with listings, sales history and direct contact — property is a personal business.' },
        { title: 'Area Guides', icon: ICON(6), href: 'seo-services.html',
          text: 'Neighbourhood content that ranks for location searches portals rarely target well.' },
      ],
    },
    why: {
      title: 'Why Agencies Still Need Their Own Site',
      lede: 'Portals own buyer traffic, but they do not win you instructions. That happens on your own site.',
    },
    stats: [
      { num: '7+', label: 'Years building property sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People across design and development' },
    ],
    growth: {
      title: 'Win the Listing, Not Just the Viewing',
      body: [
        'A seller choosing an agent is comparing marketing capability. Your website is the clearest demonstration of it they can inspect themselves.',
        'We build seller-focused pages — valuation requests, marketing examples, local sales evidence — that turn your site into a pitch that works while you sleep.',
      ],
    },
    folioTitle: 'Property Work',
    folioLede: 'Sites for agencies, brokerages and developers.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    trust: {
      title: 'Property Photography Deserves Fast Pages',
      body: [
        'Listings live on imagery, and imagery is heavy. A gallery that stutters on a phone undermines the property it is supposed to sell.',
        'We handle image delivery carefully so listings look excellent and still load fast on mobile, where most property browsing happens.',
      ],
      list: [
        'Optimised galleries and virtual tours',
        'Map search that performs on mobile',
        'Listings synced automatically from your system',
        'Enquiries routed to the right agent instantly',
      ],
    },
    faqs: [
      { q: 'Can you integrate our listing feed?',
        a: 'Yes. We sync from the major listing systems so your site updates automatically as stock changes.' },
      { q: 'Can buyers save searches and get alerts?',
        a: 'Yes, and it is one of the most effective features for bringing buyers back to your site rather than a portal.' },
      { q: 'How do we get more valuation requests?',
        a: 'Dedicated seller pages, local sales evidence and a low-friction valuation form. We design that route deliberately.' },
      { q: 'How long does it take?',
        a: 'Usually eight to twelve weeks, with feed integration accounting for much of the schedule.' },
    ],
    cta: {
      title: 'Ready to Win More Instructions?',
      text: 'Let us look at your site and where the seller enquiries are being lost.',
    },
  },

  /* --------------------------------------------------- wedding planner -- */
  {
    slug: 'wedding-planner-web-design-development.html',
    dir: 'wedding',
    title: 'Wedding Planner Web Design & Development | Web Design Lane',
    description:
      'Web design for wedding planners and venues — portfolio galleries, package information, enquiry forms and the elegant presentation this market expects.',
    h1: 'Sites as Considered as the Weddings',
    crumb: 'Wedding Planner',
    lede:
      'Couples book on feeling. Your website has to convey taste, reliability and the sense that their day will be safe in your hands.',
    intro: {
      title: 'Show the Days You Have Already Made',
      body: [
        'Nothing sells wedding planning like real weddings. Couples want to see work that looks like the day they are imagining, photographed beautifully.',
        'We build gallery-led sites where the photography leads and the practical information — packages, process, availability — is easy to find once they are convinced.',
      ],
      list: [
        'Full-screen galleries from real weddings',
        'Packages and process explained clearly',
        'Enquiry form capturing date and venue',
        'Testimonials placed where they reassure',
      ],
    },
    solutions: {
      title: 'Our Web Solutions for Wedding Professionals',
      lede: 'What converts a browsing couple into a booked consultation.',
      items: [
        { title: 'Portfolio Galleries', icon: ICON(1), href: 'website-design-services.html',
          text: 'Real weddings presented as full stories, which is what couples actually spend their time looking at.' },
        { title: 'Package Pages', icon: ICON(2), href: 'website-design-services.html',
          text: 'Clear service tiers and what each includes, so enquiries arrive with realistic expectations.' },
        { title: 'Enquiry & Date Check', icon: ICON(3), href: 'dynamic-web-designing.html',
          text: 'Forms capturing date, venue, guest count and budget, so the first call is already productive.' },
        { title: 'Testimonials', icon: ICON(4), href: 'online-reputation-management-services.html',
          text: 'Couples’ own words alongside their photographs, which is far more persuasive than either alone.' },
        { title: 'Vendor Network', icon: ICON(5), href: 'cms-development.html',
          text: 'The florists, photographers and venues you work with — proof you are established in the industry.' },
        { title: 'Blog & Real Weddings', icon: ICON(6), href: 'seo-services.html',
          text: 'Content that ranks for venue and location searches couples make early in their planning.' },
      ],
    },
    why: {
      title: 'Why Presentation Decides This Market',
      lede: 'Couples judge your taste by your website before they judge your planning. Those two are inseparable here.',
    },
    stats: [
      { num: '7+', label: 'Years designing for creative businesses' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People on the team' },
    ],
    growth: {
      title: 'Qualify Before the First Conversation',
      body: [
        'Wedding enquiries have a high rate of mismatch on budget and date, and each one costs an hour of someone’s time to discover.',
        'An enquiry form that captures date, venue, guest count and budget range lets you prioritise, prepare properly, and spend your time on couples you can genuinely serve.',
      ],
    },
    folioTitle: 'Creative Portfolio Work',
    folioLede: 'Gallery-led sites for businesses selling a visual, personal service.',
    folio: [25, 26, 27, 28, 29, 30].map(P),
    trust: {
      title: 'Beautiful on a Phone in Bed',
      body: [
        'Wedding planning research happens overwhelmingly on phones, often late at night, across dozens of tabs.',
        'We design for that: full-bleed imagery that loads quickly on mobile data, and an enquiry form that takes under a minute to complete one-handed.',
      ],
      list: [
        'Mobile-first galleries that load fast',
        'Enquiry form that works one-handed',
        'Easy to save, share and come back to',
        'Consistent with your brand throughout',
      ],
    },
    faqs: [
      { q: 'Can we add new weddings ourselves?',
        a: 'Yes. Publishing a new gallery is a straightforward CMS task with bulk upload and automatic image optimisation.' },
      { q: 'Should we show our prices?',
        a: 'Usually a starting range, which filters out mismatched enquiries without ruling out bespoke work. We will advise based on your market.' },
      { q: 'Will large galleries slow the site down?',
        a: 'Not the way we build them. Images are optimised on upload and loaded progressively as the visitor scrolls.' },
      { q: 'How long does it take?',
        a: 'Around six to eight weeks, depending on how much photography needs organising.' },
    ],
    cta: {
      title: 'Ready for a Site That Matches Your Work?',
      text: 'Show us your portfolio and we will show you how it could be presented.',
    },
  },

  /* -------------------------------------------------- nft marketplace -- */
  {
    slug: 'nft-marketplace-development.html',
    dir: 'nft-market',
    title: 'NFT Marketplace Development | Web Design Lane',
    description:
      'NFT marketplace development — wallet integration, smart contract interaction, minting, listings and auctions, built with security and gas costs in mind.',
    h1: 'Marketplaces Built on Contracts That Hold',
    crumb: 'NFT Marketplace',
    lede:
      'A marketplace handling digital assets is a financial application. The interface has to be simple and the contracts underneath have to be right the first time.',
    intro: {
      title: 'Where the Interface Meets the Chain',
      body: [
        'Most of the difficulty in a marketplace is not the listing grid. It is wallet connection, transaction states, failed transactions and making gas costs comprehensible.',
        'We build the front end to handle all of that honestly — showing users what is happening, what it will cost, and what went wrong when something fails.',
      ],
      list: [
        'Multi-wallet connection support',
        'Minting, listing, bidding and auction flows',
        'Royalty and fee handling built in',
        'Transaction states surfaced clearly to users',
      ],
    },
    solutions: {
      title: 'Our NFT Marketplace Services',
      lede: 'The components of a marketplace that people can actually use without a support channel open.',
      items: [
        { title: 'Wallet Integration', icon: ICON(1), href: 'website-development-services.html',
          text: 'Support for the major wallets with connection states and errors handled properly rather than silently.' },
        { title: 'Smart Contract Work', icon: ICON(2), href: 'nft-web-development.html',
          text: 'Minting, transfer, royalty and escrow contracts, written to be audited before anything goes live.' },
        { title: 'Listings & Auctions', icon: ICON(3), href: 'ecommerce-website-development.html',
          text: 'Fixed price, timed auctions and offers, with the edge cases in bidding handled deliberately.' },
        { title: 'Collection Pages', icon: ICON(4), href: 'website-design-services.html',
          text: 'Creator and collection views with rarity, trait filtering and the activity history buyers check first.' },
        { title: 'Search & Discovery', icon: ICON(5), href: 'dynamic-web-designing.html',
          text: 'Indexed, filterable search that stays fast as the catalogue and transaction history grow.' },
        { title: 'Admin & Moderation', icon: ICON(6), href: 'web-portal-development.html',
          text: 'Tools for verifying creators, handling reports and managing fees without touching the contracts.' },
      ],
    },
    why: {
      title: 'Why Usability Decides Adoption',
      lede: 'Most marketplace users are not developers. Every unexplained transaction prompt is a place people abandon.',
    },
    stats: [
      { num: '7+', label: 'Years building web platforms' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'Designers and developers' },
    ],
    growth: {
      title: 'Audit Before You Deploy',
      body: [
        'Contracts are effectively immutable once deployed and they hold other people’s assets. A bug is not a patch, it is an incident.',
        'We write with established, well-reviewed patterns, test extensively against adversarial cases, and recommend an independent audit before any mainnet deployment.',
      ],
    },
    folioTitle: 'Platform Work',
    folioLede: 'Marketplaces and transactional platforms built for real users.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    trust: {
      title: 'Tell Users What Is Actually Happening',
      body: [
        'Blockchain transactions are slow, occasionally fail, and cost money that varies minute to minute. Hiding that does not make it less true.',
        'We design interfaces that state costs up front, show pending status clearly, and explain failures in language that does not require reading a block explorer.',
      ],
      list: [
        'Gas costs shown before confirmation',
        'Pending and failed states explained plainly',
        'Clear transaction history per user',
        'Graceful handling of wallet disconnection',
      ],
    },
    faqs: [
      { q: 'Which blockchains do you build on?',
        a: 'Ethereum and the major EVM-compatible chains. Chain choice depends on your audience and your tolerance for transaction costs.' },
      { q: 'Do you write the smart contracts?',
        a: 'Yes, using established patterns, and we strongly recommend an independent audit before mainnet deployment.' },
      { q: 'How long does a marketplace take?',
        a: 'Typically three to six months for a first release, with contract work and audit forming a significant part of that.' },
      { q: 'Can you work on an existing marketplace?',
        a: 'Yes. We often take on front-end and usability work for platforms whose contracts are already deployed.' },
    ],
    cta: {
      title: 'Building a Marketplace?',
      text: 'Tell us the model and the chain, and we will scope it properly.',
    },
  },

  /* --------------------------------------------------- nft web / web3 -- */
  {
    slug: 'nft-web-development.html',
    dir: 'ntf-web',
    title: 'NFT & Web3 Website Development | Web Design Lane',
    description:
      'NFT and Web3 website development — mint sites, project pages, token gating and wallet-connected experiences built to handle launch-day traffic.',
    h1: 'Mint Sites That Survive Launch Day',
    crumb: 'NFT Web Development',
    lede:
      'A project launch concentrates months of anticipation into a few minutes of extreme traffic. The site either holds, or the launch becomes the story.',
    intro: {
      title: 'Built for the Spike, Not the Average',
      body: [
        'Mint day traffic does not resemble normal web traffic. Thousands of users arrive simultaneously, all attempting the same transaction in the same minute.',
        'We build and load test against that pattern specifically, because a mint site that falls over is remembered long after the collection sells out.',
      ],
      list: [
        'Load tested against mint-day concurrency',
        'Wallet connection and allowlist handling',
        'Live mint progress and supply counters',
        'Static, CDN-served front end where possible',
      ],
    },
    solutions: {
      title: 'Our Web3 Development Services',
      lede: 'Everything a project needs online, from the reveal page to the holder area.',
      items: [
        { title: 'Mint Sites', icon: ICON(1), href: 'nft-web-development.html',
          text: 'Fast, resilient mint pages with allowlist verification and clear transaction feedback.' },
        { title: 'Project Landing Pages', icon: ICON(2), href: 'landing-page-design.html',
          text: 'The roadmap, team and story presented properly — this is what convinces before anyone connects a wallet.' },
        { title: 'Token Gating', icon: ICON(3), href: 'web-portal-development.html',
          text: 'Holder-only areas, content and benefits verified against on-chain ownership.' },
        { title: 'Wallet Connection', icon: ICON(4), href: 'website-development-services.html',
          text: 'Reliable multi-wallet support with honest error handling, which is most of the support load avoided.' },
        { title: 'Collection Galleries', icon: ICON(5), href: 'website-design-services.html',
          text: 'Trait filtering, rarity display and reveal mechanics that work at collection scale.' },
        { title: 'Community Integration', icon: ICON(6), href: 'social-media-marketing-services.html',
          text: 'Discord and social verification connected to holder status, without manual moderation work.' },
      ],
    },
    why: {
      title: 'Why Launch Engineering Matters',
      lede: 'A mint is the one moment your entire audience visits at once. There is no second attempt at that impression.',
    },
    stats: [
      { num: '7+', label: 'Years building high-traffic sites' },
      { num: '500+', label: 'Projects delivered' },
      { num: '90%', label: 'Client retention rate' },
      { num: '47', label: 'People on the team' },
    ],
    growth: {
      title: 'Keep the Front End Static',
      body: [
        'The most reliable mint sites do as little as possible on a server. A static front end on a CDN absorbs enormous traffic without a bottleneck to fall over.',
        'We keep dynamic work to the minimum that genuinely needs it, so the parts that must scale are small, well understood and tested in advance.',
      ],
    },
    folioTitle: 'Web3 Work',
    folioLede: 'Launch sites and wallet-connected experiences built for real traffic.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    trust: {
      title: 'Handle the Allowlist Properly',
      body: [
        'Allowlist errors are the fastest way to lose community goodwill, and they are almost always avoidable with careful verification design.',
        'We implement allowlist checks that are verifiable on-chain where it matters, test them against real address sets before launch, and give users a clear way to check their own status beforehand.',
      ],
      list: [
        'Verifiable allowlist implementation',
        'Users can check status before mint opens',
        'Tested against real address sets',
        'Clear messaging when a wallet is not eligible',
      ],
    },
    faqs: [
      { q: 'Can the site handle a large mint?',
        a: 'That is the design goal. We keep the front end static and CDN-served, and load test against your expected concurrency.' },
      { q: 'Do you handle the allowlist?',
        a: 'Yes, including verification, pre-launch status checking for users, and testing against real address sets.' },
      { q: 'Can you add token gating to an existing site?',
        a: 'Yes. Holder verification and gated areas can be added to a site that already exists.' },
      { q: 'How long does a launch site take?',
        a: 'Typically four to eight weeks, depending on how much contract integration is involved.' },
    ],
    cta: {
      title: 'Launching a Project?',
      text: 'Tell us the mint mechanics and the expected volume, and we will build for it.',
    },
  },
];
