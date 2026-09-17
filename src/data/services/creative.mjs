// Branding, digital marketing and video production service pages
// (nav groups "04 / Branding", "05 / Digital Marketing", "06 / Video Production").

const P = (n) => `assets/img/portimg${n}.webp`;
const LOGO = (n) => `assets/img/logodesign_page/portimg${n}.webp`;
const BICON = (n) => `assets/img/branding_page/s8icon${n}.webp`;
const LICON = (n) => `assets/img/logodesign_page/s8icon${n}.webp`;
const ICON = (n) => `assets/img/s9icon${n}.webp`;

export const creativeServices = [
  /* ---------------------------------------------------- logo animation -- */
  {
    slug: 'logo-animation.html',
    title: 'Logo Animation Services | Web Design Lane',
    description:
      'Logo animation services. Motion versions of your mark for video intros, social content, app splash screens and presentations, delivered in every format you need.',
    h1: 'Give Your Mark a Way to Move',
    crumb: 'Logo Animation',
    lede:
      'A still logo introduces you. An animated one holds attention for the three seconds before your message starts — and makes everything you publish feel finished.',
    intro: {
      title: 'Motion That Fits the Brand, Not the Trend',
      img: 'assets/img/branding_page/s3left.webp',
      body: [
        'Animation should express something true about the brand. A precision engineering firm and a children’s app should not move the same way, however fashionable the effect.',
        'We start from what your identity already says, then choose timing, easing and sequence that reinforce it rather than decorate over it.',
      ],
      list: [
        'Motion derived from your existing identity',
        'Versions for intro, outro, loop and splash',
        'Transparent, square and widescreen exports',
        'Source files so you can re-edit later',
      ],
    },
    offering: {
      title: 'Our Logo Animation Services',
      lede: 'Every place your logo needs to move, covered in one project.',
      items: [
        { title: 'Intro & Outro Stings', icon: BICON(3), href: 'logo-animation.html',
          text: 'Short, sharp openers and closers that make your video content look consistently produced.' },
        { title: 'App Splash Animations', icon: BICON(1), href: 'mobile-app-development-services.html',
          text: 'Lightweight launch animations sized for mobile, so the app feels considered from the first tap.' },
        { title: 'Social Loops', icon: BICON(2), href: 'social-media-marketing-services.html',
          text: 'Square and vertical loops built for feeds, where the first second decides whether anyone stops.' },
        { title: 'Animated Favicons & UI', icon: BICON(4), href: 'website-design-services.html',
          text: 'Subtle motion for loaders, headers and hover states that keep the brand present in the interface.' },
        { title: 'Presentation Openers', icon: BICON(5), href: 'branding-agency.html',
          text: 'Deck and event versions that hold up on a big screen and in a video call alike.' },
        { title: 'Motion Guidelines', icon: BICON(6), href: 'branding-agency.html',
          text: 'Documented timing and easing rules so future animations by anyone still feel like your brand.' },
      ],
    },
    detail: [
      {
        title: 'Short, Because Nobody Waits',
        img: 'assets/img/branding_page/s7right.webp',
        body: [
          'The useful length for a logo animation is one to three seconds. Beyond that it stops being a signature and starts being an obstacle before the content.',
          'We design for that constraint, which usually means one clear idea executed precisely rather than several effects competing.',
        ],
      },
      {
        title: 'Delivered in Every Format You Will Need',
        img: 'assets/img/branding_page/s1right.webp',
        body: [
          'You receive transparent-background files for overlaying on video, solid versions for social, looping files for screens and lightweight versions for the web.',
          'Source project files come with them, so a future edit does not mean starting the animation again from scratch.',
        ],
      },
    ],
    folioTitle: 'Animated Marks',
    folioLede: 'Logo motion work produced for brands across sectors.',
    folio: [1, 2, 3, 4, 5, 6].map(LOGO),
    faqs: [
      { q: 'Can you animate a logo you did not design?',
        a: 'Yes, as long as we can work from a vector file. If only a low-resolution image exists, we redraw it first.' },
      { q: 'How long should a logo animation be?',
        a: 'One to three seconds for most uses. Anything longer tends to get skipped or cut.' },
      { q: 'What file formats do I get?',
        a: 'Transparent MOV or WebM, MP4, animated GIF, a lightweight web format, and the editable source project.' },
      { q: 'How long does it take?',
        a: 'Most logo animations are delivered within one to two weeks, including revision rounds.' },
    ],
    cta: {
      title: 'Ready to See Your Logo Move?',
      text: 'Send us your mark and we will show you how we would bring it to life.',
    },
  },

  /* ----------------------------------------------------- graphic design -- */
  {
    slug: 'graphic-design-agency.html',
    title: 'Graphic Design Agency | Web Design Lane',
    description:
      'Graphic design agency services — campaign creative, social templates, print collateral, packaging and presentation design that keep every output on brand.',
    h1: 'Every Output, Unmistakably Yours',
    crumb: 'Graphic Design',
    lede:
      'Brand consistency does not break during the identity project. It breaks afterwards, in the hundred small pieces of design that get made under deadline.',
    intro: {
      title: 'Design Systems That Survive Daily Use',
      img: 'assets/img/branding_page/s4bg.webp',
      body: [
        'Most companies do not need one beautiful poster. They need fifty assets a month that all look like they came from the same organisation.',
        'We produce the campaign creative and, just as importantly, the templates and rules that let your own team keep producing without drifting off-brand.',
      ],
      list: [
        'Campaign creative across digital and print',
        'Editable templates your team can run with',
        'Print-ready artwork, correctly prepared',
        'Asset libraries kept organised and findable',
      ],
    },
    offering: {
      title: 'Our Graphic Design Services',
      lede: 'The everyday design work that keeps a brand visible and coherent.',
      items: [
        { title: 'Campaign Creative', icon: ICON(1), href: 'graphic-design-agency.html',
          text: 'Key visuals adapted across every placement a campaign needs, from banner to billboard.' },
        { title: 'Social Media Design', icon: ICON(2), href: 'social-media-marketing-services.html',
          text: 'Post and story templates sized per platform, built so your team can fill them in confidently.' },
        { title: 'Print & Collateral', icon: ICON(3), href: 'graphic-design-agency.html',
          text: 'Brochures, stationery, signage and event material prepared properly for the press.' },
        { title: 'Packaging Design', icon: ICON(4), href: 'branding-agency.html',
          text: 'Structural and surface design that works on a shelf and in an unboxing video alike.' },
        { title: 'Presentation Design', icon: ICON(5), href: 'branding-agency.html',
          text: 'Pitch decks and templates that make a slide look considered without needing a designer each time.' },
        { title: 'Infographics & Reports', icon: ICON(6), href: 'graphic-design-agency.html',
          text: 'Complex information made readable — annual reports, data stories and explanatory diagrams.' },
      ],
    },
    detail: [
      {
        title: 'Templates Beat One-Off Requests',
        img: 'assets/img/branding_page/s6bg.webp',
        body: [
          'If every social post needs a designer, either the posting stops or the quality does. Neither outcome is what you paid for the brand work.',
          'We build proper templates with the rules baked in, so your team produces on-brand work at their own pace and only escalates the genuinely new.',
        ],
      },
      {
        title: 'Print Is Unforgiving of Small Mistakes',
        img: 'assets/img/branding_page/s8boxbg.webp',
        body: [
          'Colour mode, bleed, resolution and overprint errors are invisible on screen and extremely visible on ten thousand printed copies.',
          'We prepare print artwork to the printer’s specification and check proofs before the run, because a reprint costs more than the design did.',
        ],
      },
    ],
    folioTitle: 'Graphic Design Work',
    folioLede: 'Campaign, print and digital creative produced across a range of sectors.',
    folio: [25, 26, 27, 28, 29, 30].map(P),
    faqs: [
      { q: 'Do you work with our existing brand guidelines?',
        a: 'Yes. If you have guidelines we work within them; if they are thin, we will tell you where they need extending.' },
      { q: 'Can you handle print production?',
        a: 'We prepare press-ready artwork and can liaise with your printer, or recommend one and manage the proofing.' },
      { q: 'Do you offer ongoing design support?',
        a: 'Yes. A monthly retainer suits teams with a steady flow of creative, and works out cheaper than project-by-project.' },
      { q: 'Will we get editable files?',
        a: 'Yes. Source files and templates are handed over so your team is never dependent on us for a small change.' },
    ],
    cta: {
      title: 'Design Requests Piling Up?',
      text: 'Let us take the queue and build the templates that stop it forming again.',
    },
  },

  /* -------------------------------------------------- typographic logo -- */
  {
    slug: 'typographic-logo.html',
    title: 'Typographic Logo Design | Web Design Lane',
    description:
      'Typographic logo design — custom wordmarks, lettering and monograms for brands whose name is their strongest asset. Drawn, not set from a font.',
    h1: 'When the Name Is the Logo',
    crumb: 'Typographic Logo',
    lede:
      'A wordmark carries your name and nothing else, which means every letter has to work. Done well, it is the most durable form a logo can take.',
    intro: {
      title: 'Drawn Letters, Not a Typed Font',
      img: 'assets/img/logodesign_page/s3left.webp',
      body: [
        'Typing a name in a licensed typeface is not a wordmark. It is a starting point that anyone else can reproduce in seconds.',
        'We draw and refine the letterforms — adjusting weight, spacing, joins and terminals — until the word reads as a designed object rather than set text.',
      ],
      list: [
        'Custom-drawn letterforms, fully owned by you',
        'Optical spacing rather than default kerning',
        'Tested at favicon size and at billboard size',
        'Monogram and stacked variants included',
      ],
    },
    offering: {
      title: 'Our Typographic Logo Services',
      lede: 'Different forms a name-led identity can take, depending on how it will be used.',
      items: [
        { title: 'Custom Wordmarks', icon: LICON(2), href: 'typographic-logo.html',
          text: 'Your name drawn as a single designed unit, with spacing and letterforms tuned by eye.' },
        { title: 'Lettermarks & Monograms', icon: LICON(1), href: 'logo-design-services.html',
          text: 'Initial-based marks for long names, and the compact version every brand eventually needs.' },
        { title: 'Custom Lettering', icon: LICON(3), href: 'typographic-logo.html',
          text: 'Hand-built letterforms with genuine character, for brands that need warmth rather than neutrality.' },
        { title: 'Wordmark Refinement', icon: LICON(4), href: 'logo-design-services.html',
          text: 'Correcting spacing, weight and proportion in an existing mark without losing recognition.' },
        { title: 'Lockup Systems', icon: LICON(5), href: 'branding-agency.html',
          text: 'Horizontal, stacked, icon-only and tagline versions, so there is always a correct one to hand.' },
        { title: 'Type Pairing', icon: LICON(6), href: 'branding-agency.html',
          text: 'The supporting typefaces that sit beside the mark across web, print and interface.' },
      ],
    },
    detail: [
      {
        title: 'Spacing Is Most of the Craft',
        img: 'assets/img/logodesign_page/s7right.webp',
        body: [
          'Default kerning is a compromise designed to work across every possible word. Your name is one word, so it can be spaced precisely for itself.',
          'That optical adjustment is what separates a wordmark that reads as designed from one that reads as typed, even when most viewers cannot say why.',
        ],
      },
      {
        title: 'It Has to Work Very Small',
        img: 'assets/img/logodesign_page/s1right.webp',
        body: [
          'A wordmark lives in browser tabs, app icons and social avatars, where fine strokes disappear and tight counters fill in.',
          'We test at real sizes throughout and supply a simplified small-size variant when the full mark cannot survive the reduction.',
        ],
      },
    ],
    folioTitle: 'Wordmarks and Lettering',
    folioLede: 'Name-led identities for brands with something worth spelling out.',
    folio: [1, 2, 3, 4, 5, 6, 7, 8].map(LOGO),
    faqs: [
      { q: 'Is a wordmark right for my brand?',
        a: 'It suits distinctive or short names, and brands without an obvious symbol. Long or generic names often do better with a lettermark.' },
      { q: 'Can we use a font we already licensed?',
        a: 'As a starting point, yes. We would still customise the letterforms so the result is genuinely yours and protectable.' },
      { q: 'Do we own the letterforms?',
        a: 'Yes. Custom-drawn letters are your property. Any licensed typeface used alongside remains subject to its own licence, and we make that clear.' },
      { q: 'How long does it take?',
        a: 'Typically three to five weeks including refinement rounds, since much of the work is slow, precise adjustment.' },
    ],
    cta: {
      title: 'Want a Mark Built From Your Name?',
      text: 'Tell us the name and the market. We will show you what it could look like drawn properly.',
    },
  },

  /* ----------------------------------------------------- social media --- */
  {
    slug: 'social-media-marketing-services.html',
    title: 'Social Media Marketing Services | Web Design Lane',
    description:
      'Social media marketing services — strategy, content production, community management and paid social that turn followers into measurable business results.',
    h1: 'Followers Are Not the Goal, Customers Are',
    crumb: 'Social Media',
    lede:
      'Vanity metrics are easy to buy and hard to bank. We run social as a channel that produces enquiries, sales and retention you can trace back.',
    intro: {
      title: 'A Channel Strategy, Not a Posting Schedule',
      img: 'assets/img/smm_page/s1right.webp',
      body: [
        'Posting daily on five platforms is not a strategy. It is a workload. Most businesses do better on the one or two platforms their customers actually use.',
        'We work out where your audience is, what they respond to there, and build a content plan that serves a business objective rather than an empty calendar.',
      ],
      list: [
        'Platform choice based on your audience',
        'Content produced, not just scheduled',
        'Community management with a real response time',
        'Paid social measured against revenue',
      ],
    },
    offering: {
      title: 'Our Social Media Services',
      lede: 'Strategy, production and management across the platforms that matter to you.',
      items: [
        { title: 'Social Strategy', icon: ICON(1), href: 'social-media-marketing-services.html',
          text: 'Audience research, platform selection and a content plan tied to specific business goals.' },
        { title: 'Content Production', icon: ICON(2), href: 'graphic-design-agency.html',
          text: 'Graphics, short video and copy produced to a consistent standard rather than assembled in a rush.' },
        { title: 'Community Management', icon: ICON(3), href: 'online-reputation-management-services.html',
          text: 'Comments, messages and mentions answered promptly, in a voice that sounds like your brand.' },
        { title: 'Paid Social Campaigns', icon: ICON(4), href: 'landing-page-design.html',
          text: 'Targeting, creative testing and budget management aimed at cost per acquisition, not impressions.' },
        { title: 'Influencer Partnerships', icon: ICON(5), href: 'social-media-marketing-services.html',
          text: 'Finding and managing creators whose audience genuinely overlaps with your customers.' },
        { title: 'Reporting & Analytics', icon: ICON(6), href: 'seo-services.html',
          text: 'Monthly reporting that connects social activity to traffic, leads and revenue.' },
      ],
    },
    detail: [
      {
        title: 'Consistency Outperforms Intensity',
        img: 'assets/img/smm_page/s4img1.webp',
        body: [
          'A month of daily posting followed by three months of silence performs worse than a steady, modest schedule maintained all year.',
          'We set a cadence you can sustain, and build the content bank that makes sustaining it realistic when everyone gets busy.',
        ],
      },
      {
        title: 'Organic and Paid Work Better Together',
        img: 'assets/img/smm_page/s4img2.webp',
        body: [
          'Organic content shows you what resonates. Paid budget puts money behind the pieces that already proved themselves, rather than guessing up front.',
          'Running both under one plan means your ad spend is informed by evidence and your organic work has a route to a wider audience.',
        ],
      },
    ],
    folioTitle: 'Social Work',
    folioLede: 'Content and campaigns produced for brands across several sectors.',
    folio: [25, 26, 27, 28, 29, 30].map(P),
    faqs: [
      { q: 'Which platforms should we be on?',
        a: 'The ones your customers use. For most B2B that is LinkedIn; for consumer brands it is usually Instagram and TikTok. We confirm with research, not assumption.' },
      { q: 'How often should we post?',
        a: 'Consistency matters more than frequency. Three strong posts a week beats daily filler, and is far easier to sustain.' },
      { q: 'Do you create the content or just schedule it?',
        a: 'We create it — graphics, video and copy. Scheduling alone rarely fixes a channel that is not working.' },
      { q: 'How do you measure success?',
        a: 'Against the business goal we agree at the start: traffic, leads, sales or retention. Follower count is context, not the target.' },
    ],
    cta: {
      title: 'Posting Without Seeing a Return?',
      text: 'Let us audit your channels and show you what is actually worth your time.',
    },
  },

  /* ------------------------------------------------------------- SEO ---- */
  {
    slug: 'seo-services.html',
    title: 'SEO Services | Web Design Lane',
    description:
      'SEO services in the USA — technical audits, on-page optimisation, local SEO, content strategy and white-hat link building, reported against real business outcomes.',
    h1: 'The First Result Wins the Click',
    crumb: 'SEO',
    lede:
      'Search is where buying decisions start. If your competitors are above you for the terms that matter, they are having conversations you never hear about.',
    intro: {
      title: 'Get Found for the Searches That Matter',
      img: 'assets/img/s15bg.webp',
      body: [
        'Ranking for your own company name proves nothing. The value is in the terms people search when they have a problem and do not yet know who solves it.',
        'We identify those terms, fix what is stopping you from competing for them, and build the content and authority needed to hold the position.',
      ],
      list: [
        'Technical fixes before content investment',
        'Keyword targets chosen for intent, not volume',
        'Content that answers the actual question',
        'Reporting tied to leads, not just rankings',
      ],
    },
    offering: {
      title: 'Your Full Suite of SEO Services',
      lede: 'The complete programme, from the technical foundation up to authority building.',
      items: [
        { title: 'Technical SEO Audits', icon: ICON(1), href: 'seo-services.html',
          text: 'Crawlability, indexation, site speed and structure — the problems that cap everything else you try.' },
        { title: 'On-Page Optimisation', icon: ICON(2), href: 'seo-services.html',
          text: 'Titles, headings, internal linking and structured data, aligned to what each page should rank for.' },
        { title: 'Keyword Research', icon: ICON(3), href: 'seo-services.html',
          text: 'Mapping real search intent to pages, so you compete where the traffic converts rather than where it is largest.' },
        { title: 'Local SEO', icon: ICON(4), href: 'california-web-design.html',
          text: 'Business profiles, citations, reviews and location pages for businesses that sell in a specific area.' },
        { title: 'Content Strategy', icon: ICON(5), href: 'cms-development.html',
          text: 'A content plan built around questions your buyers ask, written to be useful rather than to hit a word count.' },
        { title: 'Link Building', icon: ICON(6), href: 'online-reputation-management-services.html',
          text: 'Earned coverage and genuine editorial links. No networks, no purchased placements, no shortcuts that later cost you.' },
      ],
    },
    detail: [
      {
        title: 'Fix the Foundation Before Buying Content',
        img: 'assets/img/s12bg.webp',
        body: [
          'Publishing articles on a site search engines struggle to crawl, or that loads slowly on mobile, is money spent against a ceiling.',
          'We start with the technical audit so everything that comes afterwards has a chance of working, and so you can see what improved and why.',
        ],
      },
      {
        title: 'Volume Is a Trap, Intent Is the Signal',
        img: 'assets/img/s10bg.webp',
        body: [
          'A broad term with huge search volume often brings visitors who will never buy, while a specific long-tail phrase brings someone ready to act.',
          'We prioritise terms by commercial intent, which is why our reports lead with enquiries rather than with impressions.',
        ],
      },
    ],
    folioTitle: 'Search Work',
    folioLede: 'Sites we have taken from invisible to competitive in their category.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    faqs: [
      { q: 'How long before SEO shows results?',
        a: 'Technical fixes can move things within weeks. Competitive rankings usually take three to six months, and anyone promising faster is overselling.' },
      { q: 'Can you guarantee a first-page ranking?',
        a: 'No, and neither can anyone else honestly. We commit to the work, the method and transparent reporting on what it produces.' },
      { q: 'Is SEO affordable for a small business?',
        a: 'Yes, when it is focused. Local and long-tail terms are winnable on modest budgets, which is where most small businesses should start.' },
      { q: 'How is pricing worked out?',
        a: 'By the scope of work: site size, competitiveness of your terms, and how much content and technical work is needed.' },
    ],
    cta: {
      title: 'Losing Clicks to Competitors Above You?',
      text: 'We will audit your site and show you what is holding the rankings back.',
    },
  },

  /* ------------------------------------------------ reputation mgmt ----- */
  {
    slug: 'online-reputation-management-services.html',
    title: 'Online Reputation Management Services | Web Design Lane',
    description:
      'Online reputation management — review generation, response strategy, search result management and monitoring, handled ethically and transparently.',
    h1: 'What People Find When They Search Your Name',
    crumb: 'Online Reputation',
    lede:
      'Almost every prospect looks you up before making contact. What surfaces in those first few results does a lot of deciding before you get a say.',
    intro: {
      title: 'Reputation Is Managed, Not Wished For',
      img: 'assets/img/s6img2.webp',
      body: [
        'Most businesses only think about their reviews after a bad one appears. By then the options are narrow and the tone is defensive.',
        'Handled properly, reputation work is routine: steadily asking satisfied customers for reviews, responding well to criticism, and keeping the results you control in good shape.',
      ],
      list: [
        'Honest review generation from real customers',
        'Response templates your team can actually use',
        'Owned properties that rank for your name',
        'Monitoring and alerts for new mentions',
      ],
    },
    offering: {
      title: 'Our Reputation Services',
      lede: 'Practical, above-board work on how your business appears to someone checking you out.',
      items: [
        { title: 'Review Generation', icon: ICON(1), href: 'online-reputation-management-services.html',
          text: 'Systems that make it easy for genuinely happy customers to leave a review at the right moment.' },
        { title: 'Review Response', icon: ICON(2), href: 'online-reputation-management-services.html',
          text: 'A response approach for praise and complaints alike — because how you handle criticism is read closely.' },
        { title: 'Search Result Management', icon: ICON(3), href: 'seo-services.html',
          text: 'Strengthening the properties you control so your own pages occupy the results for your brand name.' },
        { title: 'Monitoring & Alerts', icon: ICON(4), href: 'online-reputation-management-services.html',
          text: 'Tracking mentions across review sites, social and news so nothing gets discovered a month late.' },
        { title: 'Profile Optimisation', icon: ICON(5), href: 'seo-services.html',
          text: 'Business listings and social profiles kept accurate, complete and consistent across every platform.' },
        { title: 'Crisis Support', icon: ICON(6), href: 'contact.html',
          text: 'A clear plan and fast turnaround when something goes wrong publicly and needs answering properly.' },
      ],
    },
    detail: [
      {
        title: 'Ask Properly and the Reviews Come',
        img: 'assets/img/s6img3.webp',
        body: [
          'Unhappy customers volunteer feedback; satisfied ones usually need asking. That imbalance is why review profiles skew negative by default.',
          'We build the asking into your normal customer journey — the right moment, the right channel, one click — so the overall picture reflects reality.',
        ],
      },
      {
        title: 'A Good Reply Is Worth More Than a Deleted Review',
        img: 'assets/img/s6img1.webp',
        body: [
          'Readers expect a few critical reviews. What they judge is whether the business answered them like adults or ignored them entirely.',
          'We will not attempt to suppress legitimate criticism. We help you respond in a way that often impresses the next reader more than the complaint disappoints them.',
        ],
      },
    ],
    folioTitle: 'Reputation Work',
    folioLede: 'Businesses whose search results now reflect the service they actually provide.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    faqs: [
      { q: 'Can you remove a negative review?',
        a: 'Only if it breaches the platform’s policies — fake, abusive or from a non-customer. Legitimate criticism cannot and should not be removed.' },
      { q: 'Do you write or buy reviews?',
        a: 'No. Fake reviews violate platform rules, are increasingly detectable, and do far more damage than the problem they were meant to solve.' },
      { q: 'How long does it take to improve results?',
        a: 'Review scores shift within a few months of consistent asking. Changing what ranks for your brand name typically takes longer.' },
      { q: 'What do we need to do ourselves?',
        a: 'Respond to what we escalate and keep serving customers well. We handle the systems, monitoring and drafting around that.' },
    ],
    cta: {
      title: 'Unsure What Your Search Results Say About You?',
      text: 'We will run the search, read the reviews, and tell you exactly where you stand.',
    },
  },

  /* --------------------------------------------- animated video prod ---- */
  {
    slug: 'animated-video-production.html',
    title: 'Animated Video Production | Web Design Lane',
    description:
      'Animated video production — 2D and motion graphics videos for marketing, product and training, delivered from script through storyboard to final cut.',
    h1: 'Ideas Are Easier to Watch Than to Read',
    crumb: 'Animated Videos',
    lede:
      'Animation can show a process, a product or an abstract idea in ninety seconds, in ways a page of text and a stock photo never manage.',
    intro: {
      title: 'From Script to Final Cut',
      img: 'assets/img/branding_page/s3left.webp',
      body: [
        'Good animation is decided long before anything moves. The script sets the argument, the storyboard sets the pacing, and the style frame sets the look.',
        'We work through those stages with you and get sign-off at each one, so the expensive production phase is executing an agreed plan rather than exploring options.',
      ],
      list: [
        'Scripting and storyboarding included',
        'Style frames approved before animation starts',
        'Professional voiceover and sound design',
        'Cut-downs for social and ad placements',
      ],
    },
    offering: {
      title: 'Our Animation Services',
      lede: 'Different animation formats, chosen for what the message actually needs.',
      items: [
        { title: '2D Animation', icon: ICON(1), href: 'animated-video-production.html',
          text: 'Character and scene-based animation with the flexibility to show almost any story.' },
        { title: 'Motion Graphics', icon: ICON(2), href: 'animated-video-production.html',
          text: 'Typography, icons and data in motion, ideal for explaining products and numbers clearly.' },
        { title: 'Product Animation', icon: ICON(3), href: 'explainer-videos-services.html',
          text: 'Showing how something works, including the parts a camera could never reach.' },
        { title: 'Social Video Cuts', icon: ICON(4), href: 'social-media-marketing-services.html',
          text: 'Vertical and square edits with captions, built for feeds where sound is usually off.' },
        { title: 'Training & Internal Video', icon: ICON(5), href: 'whiteboard-animation.html',
          text: 'Onboarding and process videos that stay accurate longer than a filmed walkthrough would.' },
        { title: 'Logo Stings', icon: ICON(6), href: 'logo-animation.html',
          text: 'Animated intros and outros that give all your video output a consistent frame.' },
      ],
    },
    detail: [
      {
        title: 'The Script Carries the Video',
        img: 'assets/img/branding_page/s1right.webp',
        body: [
          'Beautiful animation over a muddled script produces a video people watch and then cannot summarise. The writing is where the work is won.',
          'We start with one clear message, cut everything that does not serve it, and keep most videos between sixty and ninety seconds.',
        ],
      },
      {
        title: 'Built to Be Cut Down',
        img: 'assets/img/branding_page/s7right.webp',
        body: [
          'One long video rarely fits every placement. Ads, social feeds and landing pages all want different lengths and aspect ratios.',
          'We plan the edit so shorter cuts and vertical versions come out of the same production rather than costing a second one.',
        ],
      },
    ],
    folioTitle: 'Animation Work',
    folioLede: 'Marketing, product and training animation produced for a range of clients.',
    folio: [25, 26, 27, 28, 29, 30].map(P),
    faqs: [
      { q: 'How long should our video be?',
        a: 'Sixty to ninety seconds for marketing. Training and product deep-dives can run longer, but attention drops sharply past two minutes.' },
      { q: 'What does animation cost?',
        a: 'It depends on style and length. Motion graphics are the most economical; full character animation costs considerably more per second.' },
      { q: 'Do you write the script?',
        a: 'Yes, working from your input. We can also animate a script you already have if it is production-ready.' },
      { q: 'How long does production take?',
        a: 'Typically four to eight weeks from brief to final cut, including approval at script, storyboard and style stages.' },
    ],
    cta: {
      title: 'Something Hard to Explain in Words?',
      text: 'Tell us the idea. We will tell you how we would animate it.',
    },
  },

  /* ------------------------------------------------- explainer videos --- */
  {
    slug: 'explainer-videos-services.html',
    title: 'Explainer Video Services | Web Design Lane',
    description:
      'Explainer video production — short, clear videos that make a product, service or process instantly understandable, from script to final delivery.',
    h1: 'Explainers That Actually Explain',
    crumb: 'Explainer Videos',
    lede:
      'If your product takes a paragraph to describe, you are losing people in the paragraph. An explainer makes the same point in under ninety seconds.',
    intro: {
      title: 'Understood at First Glance',
      img: 'assets/img/smm_page/s4img3.webp',
      body: [
        'Explainer videos earn their place on homepages, pricing pages and in sales conversations, because they answer the question every visitor silently asks first.',
        'The craft is in the reduction: naming the problem, showing the solution, and stopping before the viewer’s attention does.',
      ],
      list: [
        'One message, delivered in under ninety seconds',
        'Problem, solution, proof, next step',
        'Captioned for silent autoplay',
        'Versions for site, ads and sales decks',
      ],
    },
    offering: {
      title: 'Our Explainer Video Services',
      lede: 'Formats suited to different products and different places in the buying process.',
      items: [
        { title: 'Product Explainers', icon: ICON(1), href: 'explainer-videos-services.html',
          text: 'What it is, who it is for and why it is better, shown rather than claimed.' },
        { title: 'Service Explainers', icon: ICON(2), href: 'explainer-videos-services.html',
          text: 'Walking through how your service works step by step, which removes most first-call hesitation.' },
        { title: 'Animated Explainers', icon: ICON(3), href: 'animated-video-production.html',
          text: '2D and motion graphics for concepts that have no physical form to film.' },
        { title: 'App & Software Demos', icon: ICON(4), href: 'mobile-app-development-services.html',
          text: 'Interface walkthroughs that make a product feel simple before anyone signs up for a trial.' },
        { title: 'Whiteboard Explainers', icon: ICON(5), href: 'whiteboard-animation.html',
          text: 'Hand-drawn style for processes and technical ideas that benefit from being built up gradually.' },
        { title: 'Corporate Overviews', icon: ICON(6), href: 'animated-video-production.html',
          text: 'Who you are and what you stand for, for the homepage, pitch deck and recruitment page.' },
      ],
    },
    detail: [
      {
        title: 'Reduce Until Only the Point Is Left',
        img: 'assets/img/smm_page/s4img4.webp',
        body: [
          'Every stakeholder wants their feature mentioned. Accommodating all of them is the reliable way to produce a video nobody finishes.',
          'We hold the line on one core message, and park the rest for a follow-up video or the page the video sits on.',
        ],
      },
      {
        title: 'Most Viewers Have the Sound Off',
        img: 'assets/img/smm_page/s4img1.webp',
        body: [
          'Autoplay on websites and social feeds is silent by default, so a video carried entirely by voiceover communicates nothing to most of its audience.',
          'We design the visuals and on-screen text to carry the message alone, with the voiceover adding to it rather than being required.',
        ],
      },
    ],
    folioTitle: 'What We Have Explained',
    folioLede: 'Explainer videos produced for software, services and physical products.',
    folio: [19, 20, 21, 22, 23, 24].map(P),
    faqs: [
      { q: 'What is an explainer video?',
        a: 'A short video, usually under ninety seconds, that makes a product or service immediately understandable to someone who has never heard of it.' },
      { q: 'What is included?',
        a: 'Script, storyboard, style frames, animation, voiceover, sound design, and the cut-downs needed for social and ads.' },
      { q: 'Where should we use it?',
        a: 'Homepage, product and pricing pages, paid campaigns, sales decks and email. The same production covers all of them.' },
      { q: 'How is it different from a product video?',
        a: 'An explainer is aimed at someone who does not yet understand the category. A product video speaks to someone already comparing options.' },
    ],
    cta: {
      title: 'Struggling to Explain What You Do?',
      text: 'Tell us in a paragraph. We will turn it into ninety seconds.',
    },
  },

  /* ---------------------------------------------- whiteboard animation -- */
  {
    slug: 'whiteboard-animation.html',
    title: 'Whiteboard Animation Services | Web Design Lane',
    description:
      'Whiteboard animation services — hand-drawn style videos that build an idea in front of the viewer, ideal for processes, training and technical explanations.',
    h1: 'Watch the Idea Get Drawn',
    crumb: 'Whiteboard Animation',
    lede:
      'Whiteboard animation builds a picture piece by piece as the narration goes. That pacing is unusually good at holding attention through detail.',
    intro: {
      title: 'Simple Style, Serious Explanatory Power',
      img: 'assets/img/smm_page/s4img2.webp',
      body: [
        'The hand-drawn look sets expectations low and comprehension high. Viewers relax into it, and complex material feels approachable rather than intimidating.',
        'It is particularly effective for processes, training and technical subjects, where each new element can be introduced exactly when the narration reaches it.',
      ],
      list: [
        'Ideas built up in step with the narration',
        'Well suited to training and technical content',
        'More economical than full 2D animation',
        'Holds attention through longer running times',
      ],
    },
    offering: {
      title: 'Our Whiteboard Animation Services',
      lede: 'Where the drawn style does more work than a polished one would.',
      items: [
        { title: 'Process Explainers', icon: ICON(1), href: 'whiteboard-animation.html',
          text: 'Multi-step processes drawn out in sequence, so each stage lands before the next arrives.' },
        { title: 'Training Videos', icon: ICON(2), href: 'explainer-videos-services.html',
          text: 'Onboarding and compliance material that people finish, which is most of the battle.' },
        { title: 'Technical Explanations', icon: ICON(3), href: 'animated-video-production.html',
          text: 'Difficult concepts assembled gradually rather than presented all at once as a finished diagram.' },
        { title: 'Sales Presentations', icon: ICON(4), href: 'explainer-videos-services.html',
          text: 'Pitch narratives your team can send ahead, told the same clear way every time.' },
        { title: 'Educational Content', icon: ICON(5), href: 'whiteboard-animation.html',
          text: 'Course and lesson material where the drawing pace matches how people actually take notes.' },
        { title: 'Case Study Videos', icon: ICON(6), href: 'animated-video-production.html',
          text: 'Client stories told as a problem being worked through, rather than a list of claims.' },
      ],
    },
    detail: [
      {
        title: 'Pacing Is the Real Technique',
        img: 'assets/img/smm_page/s4img3.webp',
        body: [
          'Drawing too fast and the viewer cannot follow; too slow and they leave. The rhythm has to track the narration precisely.',
          'We time the illustration to the script line by line, so each element appears the moment it is needed and not a beat before.',
        ],
      },
      {
        title: 'Good Value for Longer Content',
        img: 'assets/img/smm_page/s4img4.webp',
        body: [
          'Full 2D animation gets expensive quickly per minute, which makes a ten-minute training video hard to justify.',
          'Whiteboard style keeps longer formats affordable while still holding attention, which is why training libraries so often use it.',
        ],
      },
    ],
    folioTitle: 'Whiteboard Work',
    folioLede: 'Drawn explainers for training, technical and educational content.',
    folio: [13, 14, 15, 16, 17, 18].map(P),
    faqs: [
      { q: 'When is whiteboard the right choice?',
        a: 'For processes, training and technical explanations, especially over two minutes where the drawing keeps attention.' },
      { q: 'Can it match our brand?',
        a: 'Yes. Brand colours, your logo and accent styling all work within the drawn look without losing its character.' },
      { q: 'Is it cheaper than 2D animation?',
        a: 'Usually, particularly for longer videos, which is why training libraries tend to be produced this way.' },
      { q: 'How long does it take?',
        a: 'Around three to six weeks depending on length, including script and storyboard approval.' },
    ],
    cta: {
      title: 'Have Something Complicated to Teach?',
      text: 'Send us the material and we will show you how it would draw out.',
    },
  },
];
