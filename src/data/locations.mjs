// One entry per location page. Rendered by src/pages/location.mjs.
//
// Image paths are explicit because assets/img/city/ is not uniform: every city
// has banner-img and s9bg, but maryland has no about-bg. Where a city lacks an
// image we fall back to a generic one rather than shipping a broken <img>.

const P = (n) => `assets/img/portimg${n}.webp`;
const ICON = (n) => `assets/img/s2icon${n}.webp`;
const city = (name, file) => `assets/img/city/${name}/${file}.webp`;

// Services offered are the same everywhere; only the framing changes per page.
const serviceCards = (place) => [
  { title: 'Website Design', icon: ICON(2), href: 'website-design-services.html',
    text: `Custom, mobile-first websites designed around how ${place} customers actually find and judge a business.` },
  { title: 'Website Development', icon: ICON(1), href: 'website-development-services.html',
    text: 'Clean, maintainable builds with performance and security handled properly rather than bolted on afterwards.' },
  { title: 'Ecommerce', icon: ICON(3), href: 'ecommerce-web-design-services.html',
    text: 'Storefronts on Shopify, WooCommerce or Magento, designed around your catalogue and your margins.' },
  { title: 'Local SEO', icon: ICON(4), href: 'seo-services.html',
    text: `Optimisation for the location searches that bring ${place} customers to you rather than a competitor.` },
  { title: 'Branding', icon: ICON(5), href: 'branding-agency.html',
    text: 'Identity, logo and brand systems that hold together across every place your business appears.' },
  { title: 'Maintenance', icon: ICON(6), href: 'web-maintenance-services.html',
    text: 'Updates, backups, monitoring and ongoing improvements once the site is live.' },
];

const standardStats = [
  { num: '7+', label: 'Years in business' },
  { num: '500+', label: 'Projects delivered' },
  { num: '90%', label: 'Client retention rate' },
  { num: '47', label: 'Designers, developers and strategists' },
];

export const locations = [
  /* -------------------------------------------------------- california -- */
  {
    slug: 'california-web-design.html',
    crumb: 'California',
    region: 'California',
    title: 'Web Design California | Kodex Designs',
    description:
      'Web design and development for California businesses — custom sites, ecommerce and local SEO for startups, retailers and established firms across the state.',
    h1: 'Helping California Businesses Go Digital',
    lede:
      'From Bay Area startups to Southern California retailers, we build websites that compete in one of the most crowded markets in the country.',
    img: {
      banner: city('california', 'banner-img'),
      about: city('california', 'about-bg'),
      secondary: city('california', 's9bg'),
    },
    intro: {
      title: 'A Market That Rewards Doing It Properly',
      body: [
        'California businesses compete against companies with serious design budgets. A template site does not hold its own in that comparison for long.',
        'We build custom sites that stand up next to the competition, without the agency overhead that usually comes attached to that standard of work.',
      ],
      list: [
        'Custom design, never a recycled template',
        'Built for mobile, where most of your traffic is',
        'Local SEO across multiple California markets',
        'Straight pricing, agreed before work starts',
      ],
    },
    services: {
      title: 'Smart Web Solutions for California Businesses',
      lede: 'Everything from a first website to an ecommerce platform and the marketing that feeds it.',
      items: serviceCards('California'),
    },
    why: {
      title: 'Why California Brands Work With Us',
      lede: 'Local knowledge with national capability, and a team that stays with clients for years rather than projects.',
    },
    stats: standardStats,
    local: {
      title: 'One State, Many Different Markets',
      body: [
        'San Francisco, Los Angeles, San Diego and the Central Valley behave like separate markets, with different customers, competitors and search behaviour.',
        'We research the specific market you sell into rather than treating California as one audience, which matters a great deal for local search and for tone.',
      ],
    },
    folioTitle: 'Work for California Clients',
    folioLede: 'Websites built for businesses across the state, in a range of sectors.',
    folio: [1, 2, 3, 4, 5, 6].map(P),
    choose: {
      title: 'Full Service, One Team',
      body: [
        'Design, development, branding and SEO under one roof means nobody can point at another supplier when something does not line up.',
        'You get one team accountable for the result, one point of contact, and a site where the design, the code and the search strategy were planned together.',
      ],
      list: [
        'One team from strategy through to launch',
        'Fixed scope and pricing agreed up front',
        'Ongoing support after the site goes live',
        'You own the code, the content and the accounts',
      ],
    },
    faqs: [
      { q: 'Do you work with businesses across California?',
        a: 'Yes, statewide. We work remotely-first, which keeps turnaround fast and avoids travel costs appearing on your invoice.' },
      { q: 'What does a website cost?',
        a: 'Most business sites fall between a few thousand and the low tens of thousands, depending on page count, features and content needs.' },
      { q: 'Can you help us rank locally?',
        a: 'Yes. Local SEO is built into our projects, including location pages and business profile optimisation for each market you serve.' },
      { q: 'How long does a project take?',
        a: 'Typically six to ten weeks for a business site. Ecommerce and custom platforms take longer.' },
    ],
    cta: {
      title: 'Ready to Grow in California?',
      text: 'Book a free strategy call and we will tell you honestly what your site needs.',
    },
  },

  /* ---------------------------------------------------------- colorado -- */
  {
    slug: 'colorado-web-design.html',
    crumb: 'Colorado',
    region: 'Colorado',
    title: 'Web Design Colorado | Kodex Designs',
    description:
      'Web design and development for Colorado businesses — custom websites, ecommerce and local SEO for companies across Denver, Boulder and the Front Range.',
    h1: 'Web Design Built for Colorado Business',
    lede:
      'Denver and the Front Range have grown fast, and so has the competition. We build sites that help Colorado businesses stand out in it.',
    img: {
      banner: city('colorado', 'banner-img'),
      about: city('colorado', 'about-bg'),
      secondary: city('colorado', 's9bg'),
    },
    intro: {
      title: 'Growth Markets Need Sites That Keep Up',
      body: [
        'Colorado has drawn in a steady flow of new businesses and new customers, which is good for demand and hard on anyone with a dated website.',
        'We build sites that convert that growing audience, with the local search presence needed to be found across the metro area and the mountain towns.',
      ],
      list: [
        'Custom design tailored to your market',
        'Local SEO across Front Range towns',
        'Fast, mobile-first builds',
        'Clear pricing with no surprises',
      ],
    },
    services: {
      title: 'Web Solutions for Colorado Businesses',
      lede: 'The full range, from a first site through to ecommerce and ongoing marketing.',
      items: serviceCards('Colorado'),
    },
    why: {
      title: 'Why Colorado Businesses Choose Us',
      lede: 'A small, senior team that takes on fewer projects and stays involved after launch.',
    },
    stats: standardStats,
    local: {
      title: 'Denver, Boulder, Springs and the Mountain Towns',
      body: [
        'A business selling in Denver competes very differently from one serving Boulder or a resort town, even when the service is identical.',
        'We build location pages and local search strategies around the specific communities you serve rather than one broad Colorado page that ranks nowhere.',
      ],
    },
    folioTitle: 'Work for Colorado Clients',
    folioLede: 'Sites built for businesses across the Front Range and beyond.',
    folio: [7, 8, 9, 10, 11, 12].map(P),
    choose: {
      title: 'Outdoor, Hospitality and Service Businesses',
      body: [
        'Colorado has a concentration of outdoor, tourism and hospitality businesses, all of which live on imagery and on seasonal search traffic.',
        'We build image-led sites that still load quickly, and plan content around the seasonal peaks these businesses depend on.',
      ],
      list: [
        'Image-heavy sites that stay fast',
        'Booking and reservation integration',
        'Seasonal content and campaign planning',
        'Local SEO for each town you serve',
      ],
    },
    faqs: [
      { q: 'Do you work with businesses outside Denver?',
        a: 'Yes, right across Colorado. We work remotely-first, so location makes no difference to responsiveness.' },
      { q: 'Can you handle booking systems?',
        a: 'Yes. Booking and reservation integration is common in this market and is a standard part of our work.' },
      { q: 'What does a website cost?',
        a: 'Most business sites run from a few thousand to the low tens of thousands, depending on scope.' },
      { q: 'How long does it take?',
        a: 'Around six to ten weeks for a business site, longer for ecommerce or booking-heavy builds.' },
    ],
    cta: {
      title: 'Ready to Grow in Colorado?',
      text: 'Book a free strategy call and let us look at where your site stands today.',
    },
  },

  /* ---------------------------------------------------------- maryland -- */
  {
    slug: 'maryland-web-design.html',
    crumb: 'Maryland',
    region: 'Maryland',
    title: 'Web Design Maryland | Kodex Designs',
    description:
      'Web design and development for Maryland businesses — custom sites, ecommerce and local SEO for companies across Baltimore, Annapolis and the DC suburbs.',
    h1: 'Web Design for Maryland Businesses',
    lede:
      'From Baltimore to the DC suburbs, Maryland businesses compete for a demanding, well-informed audience. Your website needs to meet that standard.',
    img: {
      banner: city('maryland', 'banner-img'),
      about: 'assets/img/s6img2.webp',
      secondary: city('maryland', 's9bg'),
    },
    intro: {
      title: 'A Market Close to the Capital',
      body: [
        'Maryland businesses often sell into the same audience as the DC metro area: professional, research-driven and used to well-built websites.',
        'We build sites that hold up to that scrutiny, whether you are a local service business, a professional practice or a government contractor.',
      ],
      list: [
        'Custom design built for your sector',
        'Local SEO across Maryland and the DC metro',
        'Accessible, standards-compliant builds',
        'Clear scope and pricing agreed in advance',
      ],
    },
    services: {
      title: 'Web Solutions for Maryland Businesses',
      lede: 'Design, build, ecommerce and marketing, delivered by one accountable team.',
      items: serviceCards('Maryland'),
    },
    why: {
      title: 'Why Maryland Clients Stay With Us',
      lede: 'Most of our work comes from repeat clients and referrals, which only happens if the first project went well.',
    },
    stats: standardStats,
    local: {
      title: 'Baltimore, Annapolis and the DC Suburbs',
      body: [
        'Maryland spans distinct markets: a major city, a state capital, affluent suburbs and rural counties, each with different customers and competitors.',
        'We research the market you actually sell into and build the local pages and search strategy around it, rather than one generic statewide page.',
      ],
    },
    folioTitle: 'Work for Maryland Clients',
    folioLede: 'Websites built for professional, service and retail businesses in the region.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    choose: {
      title: 'Professional Services and Contractors',
      body: [
        'Maryland has a high concentration of professional firms and government contractors, both of which are judged heavily on credibility and accessibility.',
        'We build to accessibility standards as a matter of course and design for the trust signals these buyers look for before they make contact.',
      ],
      list: [
        'WCAG accessibility built in',
        'Credential and certification presentation',
        'Secure forms and client portals',
        'Content that stands up to scrutiny',
      ],
    },
    faqs: [
      { q: 'Do you work across Maryland?',
        a: 'Yes, statewide and across the wider DC metro area. We work remotely-first, so distance is not a factor.' },
      { q: 'Can you build accessible websites?',
        a: 'Yes. We build to WCAG standards, which matters especially for contractors and professional firms here.' },
      { q: 'Can you build a secure client portal?',
        a: 'Yes. Portals with document exchange and role-based access are a regular part of our work.' },
      { q: 'How long does a project take?',
        a: 'Usually six to ten weeks for a business site, longer where a portal or integrations are involved.' },
    ],
    cta: {
      title: 'Ready to Grow in Maryland?',
      text: 'Book a free strategy call and we will review where your site is falling short.',
    },
  },

  /* ---------------------------------------------------------- virginia -- */
  {
    slug: 'virginia-web-design.html',
    crumb: 'Virginia',
    region: 'Virginia',
    title: 'Web Design Virginia | Kodex Designs',
    description:
      'Web design and development for Virginia businesses — custom websites, ecommerce and local SEO from Northern Virginia to Richmond and Hampton Roads.',
    h1: 'Web Design for Virginia Businesses',
    lede:
      'Northern Virginia, Richmond and Hampton Roads are three different markets. We build sites that compete in the one you actually sell into.',
    img: {
      banner: city('virginia', 'banner-img'),
      about: city('virginia', 'about-bg'),
      secondary: city('virginia', 's9bg'),
    },
    intro: {
      title: 'From Government Contracting to Main Street',
      body: [
        'Virginia holds an unusual mix: technology and contracting in the north, established commerce in Richmond, and service businesses across the rest of the state.',
        'We build for each of them differently, because a contracting firm and a local trade business are trying to convince entirely different visitors.',
      ],
      list: [
        'Custom design shaped around your sector',
        'Local SEO for the market you serve',
        'Accessible, secure, well-built code',
        'Clear pricing with no moving targets',
      ],
    },
    services: {
      title: 'Web Solutions for Virginia Businesses',
      lede: 'The full range of design, build and marketing work, from one team.',
      items: serviceCards('Virginia'),
    },
    why: {
      title: 'Why Virginia Businesses Work With Us',
      lede: 'A senior team, a clear process, and a habit of staying involved long after launch.',
    },
    stats: standardStats,
    local: {
      title: 'Three Regions, Three Strategies',
      body: [
        'Northern Virginia competes with the DC market and its budgets. Richmond and Hampton Roads are more locally driven, with different search behaviour entirely.',
        'We build the local pages and search strategy around your actual catchment, which is far more effective than one page aimed at the whole state.',
      ],
    },
    folioTitle: 'Work for Virginia Clients',
    folioLede: 'Sites built for technology, professional and service businesses in the state.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    choose: {
      title: 'Built to Be Scrutinised',
      body: [
        'Technology and contracting buyers in Virginia look closely: accessibility, security posture, page performance and whether the content survives an expert reading.',
        'We build to those standards by default, because retrofitting them after a procurement review costs considerably more than doing it first.',
      ],
      list: [
        'WCAG accessibility as standard',
        'Security and hosting handled properly',
        'Performance budgets measured before launch',
        'Content written for informed readers',
      ],
    },
    faqs: [
      { q: 'Do you work across Virginia?',
        a: 'Yes, from Northern Virginia through Richmond to Hampton Roads. We work remotely-first, so location is not a constraint.' },
      { q: 'Do you work with government contractors?',
        a: 'Yes. Accessibility, security and credential presentation are all standard parts of how we build.' },
      { q: 'What does a website cost?',
        a: 'Most business sites fall between a few thousand and the low tens of thousands, depending on scope and integrations.' },
      { q: 'How long does it take?',
        a: 'Six to ten weeks for most business sites, longer for portals and custom platforms.' },
    ],
    cta: {
      title: 'Ready to Grow in Virginia?',
      text: 'Book a free strategy call and let us assess your current site honestly.',
    },
  },

  /* ----------------------------------------------------- washington dc -- */
  {
    slug: 'washington-dc-web-design.html',
    crumb: 'Washington DC',
    region: 'Washington DC',
    title: 'Web Design Washington DC | Kodex Designs',
    description:
      'Web design and development in Washington DC — accessible, credible websites for associations, nonprofits, professional firms and government contractors.',
    h1: 'Web Design for Washington DC',
    lede:
      'DC runs on credibility. Associations, nonprofits and professional firms are all judged on whether their website looks like a serious organisation.',
    img: {
      banner: city('washington', 'banner-img'),
      about: city('washington', 'about-bg'),
      secondary: city('washington', 's9bg'),
    },
    intro: {
      title: 'Built for an Audience That Reads Carefully',
      body: [
        'The DC audience is unusually informed and unusually critical. Vague claims and thin content get noticed here faster than almost anywhere else.',
        'We build sites with substance: real content, clear structure, accessibility done properly, and a design that reads as established rather than improvised.',
      ],
      list: [
        'WCAG accessibility built in from the start',
        'Content with genuine substance behind it',
        'Membership and donation functionality',
        'Secure, well-maintained hosting',
      ],
    },
    services: {
      title: 'Web Solutions for DC Organisations',
      lede: 'Design, development and marketing for organisations that are judged on credibility.',
      items: serviceCards('Washington DC'),
    },
    why: {
      title: 'Why DC Organisations Choose Us',
      lede: 'We build for scrutiny — accessible, well-documented, and straightforward for your team to maintain.',
    },
    stats: standardStats,
    local: {
      title: 'Associations, Nonprofits and Advocacy',
      body: [
        'DC has an exceptional concentration of associations and nonprofits, each with member areas, event programmes, publications and donation flows to run.',
        'We build those properly — member portals, event registration, resource libraries and giving — on systems a small in-house team can actually manage.',
      ],
    },
    folioTitle: 'Work for DC Clients',
    folioLede: 'Sites built for associations, nonprofits and professional organisations.',
    folio: [25, 26, 27, 28, 29, 30].map(P),
    choose: {
      title: 'Accessibility Is Not Negotiable Here',
      body: [
        'Organisations working with or near government face real accessibility expectations, and they are enforced more seriously in this market than most.',
        'We design and build to WCAG standards throughout and provide testing documentation, so conformance is evidenced rather than assumed.',
      ],
      list: [
        'WCAG conformance designed in',
        'Testing with assistive technology',
        'Documentation you can hand to a reviewer',
        'Member portals and secure areas',
      ],
    },
    faqs: [
      { q: 'Do you work with associations and nonprofits?',
        a: 'Yes, frequently. Member portals, event registration, resource libraries and donation flows are all familiar ground.' },
      { q: 'Can you meet accessibility requirements?',
        a: 'Yes. We build to WCAG standards and provide testing documentation to evidence conformance.' },
      { q: 'Can you handle membership management?',
        a: 'Yes, including member areas, renewals, directories and integration with the association systems you already run.' },
      { q: 'How long does a project take?',
        a: 'Typically eight to twelve weeks, as review cycles in this sector tend to involve more stakeholders.' },
    ],
    cta: {
      title: 'Ready to Build Something Credible?',
      text: 'Book a free strategy call and we will review your site against what your audience expects.',
    },
  },
];
