// Central site data: company details + navigation tree.
// Every page and the footer read from here, so adding a page is a one-line change.

export const company = {
  name: 'Kodex Designs',
  tagline: 'Creative Web Design Agency in USA',
  // Optional. While these are empty, every phone affordance across the site is
  // omitted: the footer link, the hero and CTA-band buttons, the contact page
  // bullet, the legal-page contact line and the contact form's fallback
  // message. Set BOTH to switch them all back on — see `hasPhone` in
  // src/layout.mjs. (Previous number: 866-748-5602 / tel:+18667485602)
  phone: '',
  phoneHref: '',
  email: 'sales@kodexdesigns.com',
  logo: 'assets/img/logo.webp',
  year: new Date().getFullYear(),
};

// Slugs match the live site so existing inbound links and SEO keep working.
export const nav = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  {
    label: 'Services',
    groups: [
      {
        title: '01 / Design',
        items: [
          ['Website Design', 'website-design-services.html'],
          ['Website Redesign', 'website-redesign-services.html'],
          ['Static Web Design', 'static-web-designing.html'],
          ['Dynamic Web Design', 'dynamic-web-designing.html'],
          ['Responsive Web Design', 'responsive-web-designing.html'],
          ['B2B Web Design', 'b2b-web-designing.html'],
          ['Landing Page Design', 'landing-page-design.html'],
          ['Ecommerce Web Design', 'ecommerce-web-design-services.html'],
          ['Shopify Web Design', 'shopify-website-design.html'],
          ['Magento Web Design', 'magento-website-design.html'],
          ['WooCommerce Web Design', 'woocommerce-website-design.html'],
        ],
      },
      {
        title: '02 / Web Development',
        items: [
          ['Website Development', 'website-development-services.html'],
          ['Web Portal Development', 'web-portal-development.html'],
          ['CMS Development', 'cms-development.html'],
          ['Web Maintenance', 'web-maintenance-services.html'],
        ],
      },
      {
        title: '03 / Ecommerce',
        items: [
          ['Ecommerce Development', 'ecommerce-website-development.html'],
          ['Shopify Development', 'shopify-website-development.html'],
        ],
      },
      {
        title: '04 / Branding',
        items: [
          ['Branding Agency', 'branding-agency.html'],
          ['Logo Design', 'logo-design-services.html'],
          ['Logo Animation', 'logo-animation.html'],
          ['Graphic Design', 'graphic-design-agency.html'],
          ['Typographic Logo', 'typographic-logo.html'],
        ],
      },
      {
        title: '05 / Digital Marketing',
        items: [
          ['Social Media', 'social-media-marketing-services.html'],
          ['SEO', 'seo-services.html'],
          ['Online Reputation', 'online-reputation-management-services.html'],
        ],
      },
      {
        title: '06 / Video Production',
        items: [
          ['Animated Videos', 'animated-video-production.html'],
          ['Explainer Videos', 'explainer-videos-services.html'],
          ['Whiteboard Animation', 'whiteboard-animation.html'],
        ],
      },
      {
        title: '07 / Mobile',
        items: [['App Development', 'mobile-app-development-services.html']],
      },
    ],
  },
  {
    label: 'Industries',
    groups: [
      {
        title: 'Industries we serve',
        items: [
          ['Accounting', 'accounting-web-design-development.html'],
          ['Architecture', 'architect-web-design-development.html'],
          ['Auto Repair', 'auto-repair-web-design-development.html'],
          ['Banking', 'bank-web-design-development.html'],
          ['Church', 'church-web-design-development.html'],
          ['Dentist', 'dentist-web-design-development.html'],
          ['Doctor', 'doctor-web-design-development.html'],
          ['Electricians', 'electrician-web-design-development.html'],
          ['Law Firm', 'law-web-design-development.html'],
          ['Plumber', 'plumber-firm-web-design-development.html'],
          ['Real Estate', 'real-estate-web-design-development.html'],
          ['Wedding Planner', 'wedding-planner-web-design-development.html'],
          ['NFT Marketplace', 'nft-marketplace-development.html'],
          ['NFT Web Development', 'nft-web-development.html'],
        ],
      },
    ],
  },
  {
    label: 'Locations',
    groups: [
      {
        title: 'Where we work',
        items: [
          ['California', 'california-web-design.html'],
          ['Colorado', 'colorado-web-design.html'],
          ['Maryland', 'maryland-web-design.html'],
          ['Virginia', 'virginia-web-design.html'],
          ['Washington DC', 'washington-dc-web-design.html'],
        ],
      },
    ],
  },
  { label: 'Contact', href: 'contact.html' },
];

export const footerColumns = [
  {
    title: 'Services',
    links: [
      ['Website Design', 'website-design-services.html'],
      ['Website Development', 'website-development-services.html'],
      ['Ecommerce Design', 'ecommerce-web-design-services.html'],
      ['Landing Page Design', 'landing-page-design.html'],
      ['Web Maintenance', 'web-maintenance-services.html'],
    ],
  },
  {
    title: 'Branding',
    links: [
      ['Branding Agency', 'branding-agency.html'],
      ['Logo Design', 'logo-design-services.html'],
      ['Logo Animation', 'logo-animation.html'],
      ['Graphic Design', 'graphic-design-agency.html'],
    ],
  },
  {
    title: 'Industries',
    links: [
      ['Healthcare', 'doctor-web-design-development.html'],
      ['Real Estate', 'real-estate-web-design-development.html'],
      ['Law Firm', 'law-web-design-development.html'],
      ['Accounting', 'accounting-web-design-development.html'],
    ],
  },
  {
    title: 'Locations',
    links: [
      ['California', 'california-web-design.html'],
      ['Colorado', 'colorado-web-design.html'],
      ['Maryland', 'maryland-web-design.html'],
      ['Virginia', 'virginia-web-design.html'],
      ['Washington DC', 'washington-dc-web-design.html'],
    ],
  },
];

export const legalLinks = [
  ['Privacy Policy', 'privacy-policy.html'],
  ['Terms & Conditions', 'terms-and-condition.html'],
];
