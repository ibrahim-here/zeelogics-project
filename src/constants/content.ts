import type { Project, Service, ProcessStep, Testimonial, AboutAttribute, Problem } from '../types';

// Color Constants
export const COLORS = {
  dark: '#000000',
  charcoal: '#1A1A1A',
  lighter: '#2F2F2F',
  neon: '#00FF00', // Replace with actual brand color
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    muted: '#666666',
  },
};

// Hero Section Content
export const HERO_CONTENT = {
  eyebrow: 'WE MAKE YOU VISIBLE',
  heading: "People don't know you exist.",
  subheading:
    'We build systems, tools & experiences — design + data + automation + voice — so bold brands finally get seen.',
  primaryCTA: 'Get started',
  secondaryCTA: 'See our work',
};

// Projects Section Content
export const PROJECTS: Project[] = [
  {
    id: 'smartparts',
    title: 'SmartParts Automation',
    description:
      'We built an AI chatbot + LinkedIn automation that tripled their qualified leads in 90 days.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'boldcraft',
    title: 'BoldCraft Redesign',
    description:
      'A full site redesign that transformed trust and boosted conversion by 40%.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'healthco',
    title: 'HealthCo Voice Agent',
    description:
      'Launched a voice bot that answers customer calls & books new appointments — cut manual call load by 30%.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'techflow',
    title: 'TechFlow Platform',
    description:
      'Built a comprehensive SaaS platform that streamlined operations for 500+ businesses.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'ecomarket',
    title: 'EcoMarket E-commerce',
    description:
      'Designed and developed a sustainable marketplace connecting eco-conscious consumers.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'fintrack',
    title: 'FinTrack Mobile App',
    description:
      'Created an intuitive financial tracking app with AI-powered insights and recommendations.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'edulearn',
    title: 'EduLearn Platform',
    description:
      'Developed an interactive learning platform with gamification and progress tracking.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
  {
    id: 'mediconnect',
    title: 'MediConnect Telemedicine',
    description:
      'Built a secure telemedicine platform connecting patients with healthcare providers.',
    ctaText: 'View Case Study',
    ctaLink: '#',
    image: 'https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220',
  },
];

export const PROJECTS_SECTION = {
  heading: 'Proof That We Deliver',
  intro: 'Real brands. Real impact. See how we turn hidden potential into visible success.',
  footerLink: 'Want to see more? Explore all projects →',
  footerLinkHref: '#',
};

// About Us Section Content
export const ABOUT_CONTENT = {
  heading: 'Who We Are',
  body: [
    "Zeelogics is a small but mighty team. We're designers, engineers, and automation specialists who share one belief: bold brands deserve to be seen.",
    "We don't just build things. We build systems — intelligent, powerful, and built to scale. Every project is an opportunity to help a brand stop hiding and start thriving.",
  ],
};

export const ABOUT_ATTRIBUTES: AboutAttribute[] = [
  {
    id: 'fast-moving',
    text: 'Small but fast-moving team',
    icon: 'Zap',
  },
  {
    id: 'big-picture',
    text: 'Big-picture thinking + hands-on execution',
    icon: 'Target',
  },
  {
    id: 'quality',
    text: 'Quality over quantity, always',
    icon: 'Award',
  },
];

// Why Choose Us Section Content
export const WHY_CHOOSE_US_CONTENT = {
  heading: 'Why Most Brands Stay Hidden',
  subheading: 'The real barriers to growth and how Zeelogics removes them.',
  closingStatement:
    "We're not just a service provider; we're problem solvers. We build for scale, integration, and visibility — so you don't stay hidden.",
};

export const PROBLEMS: Problem[] = [
  {
    id: 'visibility',
    title: 'They lack visibility',
    description: "Their message isn't reaching the right people.",
    icon: 'EyeOff',
  },
  {
    id: 'disconnected',
    title: 'Their systems are disconnected',
    description: 'Capturing leads but not following up.',
    icon: 'Unplug',
  },
  {
    id: 'scale',
    title: "They don't scale",
    description: 'Manual processes slow them down.',
    icon: 'TrendingDown',
  },
  {
    id: 'voice',
    title: "There's no consistent voice-driven experience",
    description: "Phone calls, chat, and web don't talk to each other.",
    icon: 'PhoneOff',
  },
];

// Services Section Content
export const SERVICES_CONTENT = {
  heading: 'What We Do — Services That Drive Growth',
  intro: "We don't just do work. We deliver impact.",
};

export const SERVICES: Service[] = [
  {
    id: 'ai-automations',
    title: 'AI Automations',
    description:
      'AI chatbots + flows that qualify leads 24/7, automate outreach, and book meetings — without you doing every step.',
    icon: 'Bot',
  },
  {
    id: 'voice-agents',
    title: 'Voice Agents',
    description:
      'Intelligent voice experiences that answer calls, triage customers, and free up your team.',
    icon: 'Phone',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Premium, conversion-optimized websites built to trust, persuade, and perform.',
    icon: 'Layout',
  },
  {
    id: 'crm-erp',
    title: 'CRM / ERP Integration',
    description:
      'We link systems — CRM, ERP, dashboards — so you have visibility & control.',
    icon: 'Database',
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Delivery',
    description:
      "Design + build + automate + maintain. We're your long-term digital partner.",
    icon: 'Layers',
  },
];

// How We Work Section Content
export const HOW_WE_WORK_CONTENT = {
  heading: 'How We Make It Happen',
  subtext: 'Transparent. Collaborative. Built to scale.',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    stepNumber: 1,
    title: 'Discovery',
    description: 'We dive deep into your brand, goals, and challenges.',
    icon: 'Search',
  },
  {
    id: 'strategy',
    stepNumber: 2,
    title: 'Strategy & Design',
    description: "We build a roadmap + UI / UX that aligns with your brand's mission.",
    icon: 'Compass',
  },
  {
    id: 'build',
    stepNumber: 3,
    title: 'Build & Automate',
    description: 'We develop your systems, website, bots, voice agents, and more.',
    icon: 'Hammer',
  },
  {
    id: 'launch',
    stepNumber: 4,
    title: 'Launch & Optimize',
    description: 'We launch, monitor, and tweak until everything works at peak performance.',
    icon: 'Rocket',
  },
  {
    id: 'scale',
    stepNumber: 5,
    title: 'Scale & Maintain',
    description: 'As you grow, we scale with you. Continuous improvements, updates, and insights.',
    icon: 'TrendingUp',
  },
];

// Testimonials Section Content
export const TESTIMONIALS_CONTENT = {
  heading: 'What Our Clients Say',
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'precision-tools',
    quote:
      'Zeelogics transformed our lead machine. We saw a 3× increase in qualified leads in just a few weeks.',
    author: 'A. Khan',
    role: 'Head of Sales',
    company: 'PrecisionTools',
  },
  {
    id: 'healthco',
    quote:
      'Their voice bot handles our inbound calls seamlessly. Our team is saving hours every week.',
    author: 'M. Roberts',
    role: 'CEO',
    company: 'HealthCo',
  },
  {
    id: 'boldcraft',
    quote:
      "We didn't just get a new website — we got a system that helps us run smarter.",
    author: 'R. Lee',
    role: 'Founder',
    company: 'BoldCraft',
  },
];

// Final CTA Section Content
export const FINAL_CTA_CONTENT = {
  heading: 'Ready to Be Seen?',
  body: "Let's talk about your brand's hidden potential, and how Zeelogics can make you matter.",
  primaryCTA: 'Book a Strategy Call',
  primaryCTALink: '#',
  secondaryCTA: 'Start with a Free Audit',
  secondaryCTALink: '#',
};

// Footer Section Content
export const FOOTER_CONTENT = {
  logo: 'Zeelogics',
  tagline: 'Design. Data. Automation. Voice.',
  navigation: [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: {
    email: 'hello@zeelogics.com',
    phone: '+1 (555) 123-4567',
  },
  social: [
    { platform: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { platform: 'Twitter', href: '#', icon: 'Twitter' },
    { platform: 'GitHub', href: '#', icon: 'Github' },
  ],
  copyright: `© ${new Date().getFullYear()} Zeelogics. All rights reserved.`,
};
