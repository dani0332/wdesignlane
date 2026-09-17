import {
  page, sectionHead, cards, stats, steps, folioTabs, quotes, faq, ctaBand, split, phoneButton,
} from '../layout.mjs';
import { company } from '../data/site.mjs';

const services = [
  { title: 'Website Development', icon: 'assets/img/s2icon1.webp', href: 'website-development-services.html',
    text: 'We build strong, scalable websites specific to your business objectives. Our development process provides smooth performance and an easy-to-use experience on all platforms.' },
  { title: 'Responsive Web Design', icon: 'assets/img/s2icon2.webp', href: 'responsive-web-designing.html',
    text: 'Our responsive web designs are fully adaptable on all devices, providing a smooth, interactive experience for mobile, tablet, or desktop users.' },
  { title: 'eCommerce Web Development', icon: 'assets/img/s2icon3.webp', href: 'ecommerce-website-development.html',
    text: 'We excel at creating secure, easy-to-use eCommerce websites that boost your online sales and ensure a smooth shopping experience for your customers.' },
  { title: 'Landing Page Design', icon: 'assets/img/s2icon4.webp', href: 'landing-page-design.html',
    text: 'Our landing pages are designed to engage visitors, drive conversions, and present clear, powerful messaging that matches your marketing objectives.' },
  { title: 'WordPress Web Design', icon: 'assets/img/s2icon5.webp', href: 'cms-development.html',
    text: 'We build WordPress sites that look amazing, are performance-optimized, and are simple to manage, giving you the freedom to take charge.' },
  { title: 'Web Infrastructure & Maintenance', icon: 'assets/img/s2icon6.webp', href: 'web-maintenance-services.html',
    text: 'Our web maintenance solutions guarantee your website remains current, secure, and running at its optimal level, freeing you up to concentrate on expanding your business.' },
];

const industries = [
  { title: 'Logistics', icon: 'assets/img/s9icon1.webp',
    text: 'We cater to the logistics sector with efficient, responsive web solutions that keep operations running smoothly. From traceability to live updates, we develop sites that provide speed and accuracy.' },
  { title: 'E-learning', icon: 'assets/img/s9icon2.webp',
    text: 'We enable the e-learning environment with intuitive, interactive solutions that make knowledge accessible and compelling. Our solutions enrich the digital classroom for teachers and students.' },
  { title: 'Healthcare', icon: 'assets/img/s9icon3.webp',
    text: 'We support the healthcare sector with secure, HIPAA-compliant websites that prioritize patient trust and usability. From appointment scheduling to telehealth, we develop for improved care.' },
  { title: 'ERP', icon: 'assets/img/s9icon4.webp',
    text: 'We develop rich, intuitive ERP web applications that streamline your intricate processes. We provide businesses seeking enhanced control, data visibility, and more efficient operations.' },
  { title: 'Real Estate', icon: 'assets/img/s9icon5.webp',
    text: 'We provide the real estate market with engaging and functional websites that display listings and facilitate sales. Our sites convert browsers into serious buyers.' },
  { title: 'Travel Agency', icon: 'assets/img/s9icon6.webp',
    text: 'We empower travel agencies with engaging, lightning-fast websites that inspire and convert. From wanderlust to booking, we craft the experience from screen to destination.' },
  { title: 'E-commerce', icon: 'assets/img/s9icon7.webp',
    text: 'We fuel the e-commerce space with high-converting, mobile-friendly online stores. We empower brands that are ready to scale and sell smarter in the digital economy.' },
  { title: 'Hospitality', icon: 'assets/img/s9icon8.webp',
    text: 'We empower the hospitality sector with stunning, customer-centric web solutions. Our designs stop attention, build trust, and generate reservations.' },
];

const apart = [
  { title: 'Creative Expertise', icon: 'assets/img/s6icon1.webp',
    text: "Our team focuses on creativity, creating visually breathtaking websites that speak your brand's story. We create creatively and purposefully to engage your audience with an initial impression." },
  { title: 'Results-Driven Approach', icon: 'assets/img/s6icon2.webp',
    text: 'We specialize in providing measurable outcomes, from boosting user interaction to enhancing conversions. Each project is designed to enable your business to meet its online objectives.' },
  { title: 'Personalized Solutions', icon: 'assets/img/s6icon3.webp',
    text: 'At Web Design Lane, each website is developed to fit your specific requirements and vision. We offer personalized web solutions that support your brand and sector.' },
  { title: 'Scalable and Secure', icon: 'assets/img/s6icon4.webp',
    text: 'We build websites that grow with your business. Our solutions are secure and designed to scale seamlessly as your needs grow with the changing digital industry.' },
  { title: 'Proven Track Record', icon: 'assets/img/s6icon5.webp',
    text: "We've built a reputation for excellence with a history of successful projects across various industries. Our clients trust us to deliver on time, every time." },
  { title: 'Client-Centered Focus', icon: 'assets/img/s6icon6.webp',
    text: 'We focus on your business and vision needs throughout the process. Our collaborative method ensures that each project meets your expectations.' },
];

const process = [
  { title: 'Coordination with Customers',
    text: 'This first phase includes getting to know your brand, the goals you wish to accomplish, and the audience you intend to reach — through conversations, questionnaires and discovery calls, so we understand how you define success.' },
  { title: 'Strategy & Planning',
    text: 'Based on the requirements and objectives, we draft a well-defined, tailored action plan containing deliverables, timelines, key performance indicators, and the relevant tools and platforms we will use.' },
  { title: 'Execution and Implementation',
    text: "Once the plan is approved, our team sets it into motion — building the website, launching the campaign, or optimizing your digital presence. You'll always be updated about progress." },
  { title: 'Review, Launch & Ongoing Support',
    text: 'After completing the task, we sit down with you and make all the necessary retouches before the final launch. Only when you are satisfied do we launch — and we stay on for ongoing improvements.' },
];

const testimonials = [
  { text: 'Web Design Lane converted our web store into a clean, intuitive site. Sales have increased exponentially, and the user interface is perfect. They know what it takes to succeed in e-commerce!',
    name: 'John Davies', role: 'E-Commerce Business Owner' },
  { text: 'We were having trouble making our site both user-friendly and HIPAA-friendly. Web Design Lane created a stunning, secure site that exceeded our expectations. The attention to detail is impeccable.',
    name: 'Sara Smith', role: 'Medical Professional' },
  { text: 'As a real estate agent, I require a website that highlights properties most favorably. Web Design Lane made me a quick, mobile-friendly, and aesthetically pleasing website that generates daily leads.',
    name: 'Michael T.', role: 'Real Estate Agent' },
  { text: 'The folks at Web Design Lane took our vision for an e-learning platform and easily turned it into a reality. The website is interactive and easy to use, and has enhanced our student enrollment.',
    name: 'Emma Dawson', role: 'Education Provider' },
  { text: 'It was a pleasure working with Web Design Lane. They designed a website specifically tailored to my brand, which has enhanced my customer conversion rate. Highly recommended.',
    name: 'David Anderson', role: 'Small Business Owner' },
  { text: "Web Design Lane brought our travel agency's site to functionality with a fresh design, easy navigation, and fantastic functionality. It's been a total game-changer for booking drive.",
    name: 'Linda Brown', role: 'Owner, Travel Agency' },
];

/* Portfolio categories mirror the original site's tabs. Sample work is grouped
   by the asset sets shipped with the theme:
     website design  assets/img/portimg1-6.webp        (full-page mockups)
     web portal      assets/img/portimg7-12.webp       (dashboards)
     e-commerce      shopifydevelopment_page/1-6.webp  (full-page stores)
     maintenance     assets/img/portimg13-18.webp
     mobile apps     assets/img/portimg19-24.webp
     branding        assets/img/portimg25-30.webp
     video animation assets/img/portimg1-6.mp4                              */
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const shot = (src, alt) => ({ src, alt });
const scroll = (src, alt) => ({ src, alt, kind: 'scroll' });
const reel = (src, alt) => ({ src, alt, kind: 'video' });

const portfolio = [
  { id: 'website-design', label: 'Website Design',
    note: 'Custom marketing sites and landing pages — hover any thumbnail to scroll the full page design.',
    items: range(1, 6).map((n) => scroll(`assets/img/portimg${n}.webp`, `Website design project ${n}`)) },
  { id: 'web-portal', label: 'Web Portal',
    note: 'Dashboards, admin panels and customer portals built for dense data and daily use.',
    items: range(7, 12).map((n) => shot(`assets/img/portimg${n}.webp`, `Web portal dashboard project ${n - 6}`)) },
  { id: 'ecommerce', label: 'E-Commerce',
    note: 'Storefronts built to sell — product pages, carts and checkouts designed around conversion.',
    items: range(1, 6).map((n) =>
      scroll(`assets/img/shopifydevelopment_page/portimg${n}.webp`, `E-commerce store design project ${n}`)) },
  { id: 'web-maintenance', label: 'Web Maintenance',
    note: 'Ongoing care: uptime pages, staged updates, performance and security work on live sites.',
    items: range(13, 18).map((n) => shot(`assets/img/portimg${n}.webp`, `Web maintenance project ${n - 12}`)) },
  { id: 'mobile-apps', label: 'Mobile Apps',
    note: 'iOS and Android interfaces designed alongside the web product they belong to.',
    items: range(19, 24).map((n) => shot(`assets/img/portimg${n}.webp`, `Mobile app design project ${n - 18}`)) },
  { id: 'branding', label: 'Branding',
    note: 'Logos, identity systems and collateral that carry through to the website.',
    items: range(25, 30).map((n) => shot(`assets/img/portimg${n}.webp`, `Branding and identity project ${n - 24}`)) },
  { id: 'video-animation', label: 'Video Animation',
    note: 'Explainer and promo reels — hover a tile to play.',
    items: range(1, 6).map((n) => reel(`assets/img/portimg${n}.mp4`, `Video animation reel ${n}`)) },
];

const faqs = [
  { q: 'What is web design and development?',
    a: 'It is the process of creating and building a website; this comprises the visual part (UI/UX) and the code (front-end and back-end) that makes the site functional, user-friendly, and responsive.' },
  { q: 'How long does it take to design and develop a website?',
    a: 'The time taken may vary depending on complexity. A basic website typically needs four to six weeks, while more advanced websites or e-commerce platforms can take two to three months.' },
  { q: 'What is the website design cost?',
    a: 'Website design costs vary according to features, customizations, and complexity. Typically, a professional website design costs between $1,500 and $10,000+.' },
  { q: 'Why has responsive web design become important?',
    a: 'Responsive web design ensures your website looks good on any platform and device — desktop, tablet, or smartphone. It enhances user experience and is vital for SEO rankings.' },
];

const body = `
<section class="hero">
  <div class="wrap hero__grid">
    <div>
      <span class="eyebrow">${company.tagline}</span>
      <h1>We Think in Tech, So You Win the Traffic</h1>
      <p class="lede">Does your website speak your brand? At ${company.name}, we combine creativity with code to build
        custom websites that capture your brand identity and drive real business results. From sleek web designs to
        seamless web development, we build high-performing digital experiences that attract traffic, engage users,
        and scale with your needs.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="contact.html">Get a Free Quote</a>
        ${phoneButton()}
      </div>
    </div>
    <div class="hero__media">
      <img src="assets/img/s1right1.webp" alt="Website design project preview" width="720" height="405" fetchpriority="high">
      <img src="assets/img/s1right2.webp" alt="Web development project preview" width="360" height="270" loading="lazy">
      <img src="assets/img/s1right3.webp" alt="Branding project preview" width="360" height="270" loading="lazy">
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Reputation',
      title: 'Trusted Across Leading Platforms',
      lede: "As a top web design agency in the USA, we have earned clients' trust worldwide and positive reviews on some of the most-used review platforms. Our clients consistently rate us for our web design and development expertise.",
    })}
    <div class="logos" style="margin-top:2.5rem">
      <img src="assets/img/ftr_awards.webp" alt="Industry awards and review platform badges" loading="lazy">
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${split({
      title: "Let's Code Your Brand Identity Down to the Last Detail",
      img: 'assets/img/s6img2.webp',
      body: [
        "Web development and design is the art of creating a brand's online face. It's where colour, layout, and typography coexist with code, structure, and speed. Design gives a website personality and voice, while development creates it with speed, interactivity, and function.",
        "Together they are the backbone of every outstanding online experience, converting static concepts into dynamic places where users can see, feel, and navigate. In today's global community, web development and design aren't about creating websites but building connections.",
        `${company.name} understands the importance of a user-friendly and scalable website ready to progress as your business grows. Let us code your brand in clicks to power unforgettable digital experiences.`,
      ],
    })}
  </div>
</section>

${ctaBand({
  title: 'Ready To Get Your Brand in the Right Lane?',
  text: `At ${company.name}, we build attractive, high-functioning websites that deliver genuine results. Let's put your brand in the spotlight.`,
})}

<section class="section section--dark section--bg1">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'What we do',
      title: 'We Deliver Full-Scale Web Solutions!',
      lede: 'As a creative design agency in the USA, we offer our clients complete web design and development services for their digital growth.',
    })}
    ${cards(services)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Portfolio',
      title: "See What We've Delivered Yet",
      lede: 'As a professional web design company, we create designs that impress and function effortlessly. As a custom web development agency, we develop solutions that grow your business.',
    })}
    ${folioTabs(portfolio)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${split({
      title: 'We Design & Develop Sites that Lead to Higher CTRs',
      img: 'assets/img/s6img1.webp',
      mediaFirst: true,
      body: [
        `If your website isn't clicking, it's costing you. At ${company.name} we don't just build websites — we develop digital experiences that convert visitors into customers.`,
        'With a keen sense of design and a professional development approach, we build websites that load fast, look beautiful, and guide users precisely where they need to go.',
      ],
      list: [
        'Faster load times and Core Web Vitals built in',
        'Conversion-focused layouts and clear calls to action',
        'Accessible, responsive interfaces on every device',
        'SEO-ready structure from the first line of markup',
      ],
    })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Industries',
      title: 'Industries We Serve',
      lede: `${company.name} provides customized web design and development services in every sector. From start-ups to enterprises, we create experiences that produce results and grow your business.`,
    })}
    ${cards(industries)}
  </div>
</section>

<section class="section section--dark">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'By the numbers', title: 'Numbers that Speak Volume' })}
    <div style="margin-top:2.5rem">
      ${stats([
        { num: '160+', label: 'Skilled development experts ready to assist.' },
        { num: '30+', label: "Positive Clutch reviews highlighting our company's reliability." },
        { num: '250+', label: 'Projects successfully completed across multiple sectors.' },
      ])}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Process',
      title: "Here's How We Do It For Your Brand!",
      lede: `${company.name} believes in transparency every step of the way. We aim to deliver your expected results, keeping you in the loop with every executed plan.`,
    })}
    ${steps(process)}
  </div>
</section>

<section class="section section--alt section--bg2">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Why us',
      title: 'What Sets Us Apart?',
      lede: `At ${company.name}, we integrate creative design and expert development to build websites that capture attention and generate real, measurable success.`,
    })}
    ${cards(apart, { iconTile: 'dark' })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: 'Testimonials', title: 'Hear It from Our Clients' })}
    ${quotes(testimonials)}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions!',
      lede: 'Do you have questions? Just ask us. The FAQ section answers common questions about our services, processes, and how we can help you grow your online business.',
    })}
    ${faq(faqs)}
  </div>
</section>

${ctaBand({
  title: "Got an Idea? Let's Discuss!",
  text: 'Schedule a free consultation call with us to discuss the next steps.',
  cta: 'Book a Free Consultation',
})}
`;

export default page({
  slug: 'index.html',
  title: `${company.name} — ${company.tagline}`,
  description:
    'Looking for an affordable website design company in USA? Web Design Lane creates an experience that transforms brands and grows business together.',
  body,
});
