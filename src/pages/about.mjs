import { page, pageHead, sectionHead, cards, stats, steps, quotes, ctaBand, split } from '../layout.mjs';
import { company } from '../data/site.mjs';

const apart = [
  { title: 'Creative Expertise', icon: 'assets/img/s6icon1.webp',
    text: "Our team focuses on creativity, creating visually breathtaking websites that speak your brand's story. We create creatively and purposefully to engage your audience with an initial impression." },
  { title: 'Results-Driven Approach', icon: 'assets/img/s6icon2.webp',
    text: 'We specialize in providing measurable outcomes, from boosting user interaction to enhancing conversions. Each project is designed to enable your business to meet its online objectives.' },
  { title: 'Personalized Solutions', icon: 'assets/img/s6icon3.webp',
    text: `At ${company.name}, each website is developed to fit your specific requirements and vision. We offer personalized web solutions that support your brand and sector.` },
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
    text: "Once the plan is approved, our team sets it into motion — building the website, launching the campaign, managing your reputation, or optimizing your digital presence. You'll always be updated about progress." },
  { title: 'Review, Launch & Ongoing Support',
    text: 'After completing the task, we sit down with you and make all the necessary retouches before the final launch. Only when you are satisfied do we launch — and we stay on for ongoing improvements.' },
];

const testimonials = [
  { text: 'Kodex Designs converted our web store into a clean, intuitive site. Sales have increased exponentially, and the user interface is perfect.',
    name: 'John Davies', role: 'E-Commerce Business Owner' },
  { text: 'We were having trouble making our site both user-friendly and HIPAA-friendly. Kodex Designs created a stunning, secure site that exceeded our expectations.',
    name: 'Sara Smith', role: 'Medical Professional' },
  { text: 'Kodex Designs made me a quick, mobile-friendly, and aesthetically pleasing website that generates daily leads. I couldn’t be more satisfied!',
    name: 'Michael T.', role: 'Real Estate Agent' },
];

const body = `
${pageHead({
  title: "What We're All About",
  crumb: 'About',
  lede: 'A full-service digital marketing agency committed to meeting your business needs.',
})}

<section class="section">
  <div class="wrap">
    ${split({
      title: 'Our Mission',
      img: 'assets/img/abt_img.webp',
      body: [
        `${company.name} is committed to building websites that perform with purpose. We plan with reason, we build with accuracy, and we are dedicated to providing businesses the tools to speak clearly and convert with confidence.`,
        'Each project is customized, not generic, because we think your website should reflect how you work, lead, and grow.',
      ],
    })}
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${split({
      title: 'Our Vision',
      img: 'assets/img/s6img3.webp',
      mediaFirst: true,
      body: [
        'We envision a digital landscape where performance and personality go hand in hand.',
        `At ${company.name}, we intend to set the standard for what a website should do: accurately embody your brand, function without friction, and support authentic business objectives. Not to fit in, but to raise the bar for excellence in web quality.`,
      ],
    })}
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

<section class="section section--alt">
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

${ctaBand({
  title: "Got an Idea? Let's Discuss!",
  text: 'Schedule a free consultation call with us to discuss the next steps.',
  cta: 'Book a Free Consultation',
})}
`;

export default page({
  slug: 'about.html',
  title: `About Our Creative Digital Agency | ${company.name}`,
  description:
    'Kodex Designs is a full-service digital agency building websites that perform with purpose. Learn about our mission, vision, process and what sets us apart.',
  body,
});
