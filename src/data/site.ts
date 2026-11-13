export const site = {
  name: "Afaq Karim",
  role: "Senior Full-Stack Engineer",
  tagline: "Full-stack product engineer for startups & growing businesses",
  url: "https://afaqkarim.vercel.app",
  email: "ashfaqhunzai15@gmail.com",
  location: "Gilgit, Pakistan",
  timezone: "PKT (UTC+5) — overlaps with EU & US mornings",
  availability: "Available for new projects",
  description:
    "Afaq Karim is a senior full-stack engineer with 8+ years of experience building scalable web, mobile and AI-powered products — from MVP to 800K+ users. React, Next.js, Vue, Node.js, NestJS, Python, React Native, AWS & Kubernetes.",
  socials: {
    linkedin: "https://www.linkedin.com/in/afaq-karim/",
    github: "https://github.com/afaq-karim",
    x: "https://x.com/karim_afaq",
  },
  upwork: "https://www.upwork.com/freelancers/~0132d7ad009fd790a8",
};

export const upworkStats = [
  { value: "100%", label: "Job success" },
  { value: "5.0", label: "Avg. rating" },
  { value: "11", label: "Jobs" },
  { value: "870+", label: "Hours" },
];

export const testimonials = [
  {
    quote:
      "Thrilled with the outstanding work delivered by Afaq during software frontend and backend development contract. His exceptional technical skills, combined with his proactive approach and strong work ethic, resulted in the successful completion of our project well before the timeline. Afaq demonstrated a deep understanding of our requirements and consistently provided innovative solutions to complex challenges. His clear communication and collaborative nature made them invaluable. I highly recommend Afaq to anyone seeking a skilled and dedicated software engineer.",
    name: "Rehan A.",
    project: "Stripe payments with Nuxt & FastAPI",
    date: "Feb 2024",
  },
  {
    quote:
      "Working with Afaq was a smooth and professional experience. He consistently delivered well-crafted full-stack solutions on schedule, maintained clear and proactive communication throughout, and was responsive to feedback. I'd definitely recommend him and look forward to collaborating again in the future.",
    name: "Upwork client",
    project: "Full-stack development contract",
    date: "Apr 2025",
  },
  {
    quote:
      "Afaq helps us to build our MVP and we are really thankfully for that. He build a nice product with all of his skills and give us good feedback and nice solutions for our problems. Thank you!",
    name: "Adrian S.",
    project: "AI-first CRM MVP with Fireflies integration",
    date: "Mar 2026",
  },
  {
    quote:
      "Great, diligent, and timely completion of tasks. Have collaborated for a few years and never regretted the choice of the contractor!",
    name: "Michael H.",
    project: "Long-term contract",
    date: "Upwork",
  },
  {
    quote:
      "Great freelancer, very attentive and helpful. Completed all tickets to our complete satisfaction and on time. Highly recommended!!!",
    name: "Socorro G.",
    project: "Next.js developer with AI experience",
    date: "Nov 2024",
  },
  {
    quote:
      "Afaq did an amazing job configuring DNS and smoothly managing the transition between hosting providers. Highly recommended!",
    name: "Muhammad F.",
    project: "DNS & hosting migration",
    date: "Feb 2025",
  },
];

export const stats = [
  { value: "8+", label: "Years shipping production software" },
  { value: "800K+", label: "Users reached on products I built" },
  { value: "500K+", label: "Play Store downloads (GilgitApp)" },
  { value: "3", label: "Platforms: Web, iOS & Android" },
];

export const clients = [
  "eAngels.de",
  "Junction Net AI",
  "GilgitApp",
  "Remote Ambition",
  "My Gilgit-Baltistan",
  "Ecofiney",
];

export const services = [
  {
    icon: "rocket",
    title: "MVP & Product Development",
    body: "From idea to a launched, revenue-ready product. I scope ruthlessly, ship in weeks, and build on foundations that won't need a rewrite at 10x scale.",
    points: ["Product scoping", "Next.js / React / Vue", "Node.js & NestJS APIs"],
  },
  {
    icon: "bot",
    title: "AI Agents & Automation",
    body: "AI features that do real work — CRM intelligence, content pipelines and workflow automation that save your team hours every week.",
    points: ["LLM integrations", "Python & Make.com", "Scraping & data pipelines"],
  },
  {
    icon: "layers",
    title: "SaaS & Multi-Tenant Platforms",
    body: "CRMs, POS and admin portals with role-based access, SSO, dynamic forms and tenant-aware data models — architected to scale cleanly.",
    points: ["RBAC & SSO", "Nx monorepos", "PostgreSQL & Prisma"],
  },
  {
    icon: "smartphone",
    title: "Mobile Apps",
    body: "Cross-platform iOS & Android apps with React Native and Expo — real-time chat, push notifications and the polish users expect.",
    points: ["React Native & Expo", "Firebase", "App Store & Play Store"],
  },
  {
    icon: "cloud",
    title: "DevOps & Cloud",
    body: "Reliable infrastructure you don't have to think about: containerised deploys, CI/CD, monitoring and cost-aware AWS setups.",
    points: ["Docker & Kubernetes", "AWS (EC2, S3, RDS)", "CI/CD & load testing"],
  },
  {
    icon: "palette",
    title: "Frontend Architecture",
    body: "Design systems and component libraries that keep large apps fast, consistent and easy for teams to extend.",
    points: ["Design systems", "Storybook", "Performance tuning"],
  },
];

export type Project = {
  title: string;
  client: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  url?: string;
  metric?: { value: string; label: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "GilgitApp — Marketplace for Northern Pakistan",
    client: "Founder & Lead Developer",
    year: "2019 – 2023",
    summary:
      "Designed, built and scaled a full-stack classifieds marketplace across Web, iOS and Android — buy/sell listings for cars, property, electronics and more, with real-time chat and buyer request flows.",
    highlights: [
      "Grew to 800,000+ users and 500K+ Play Store downloads",
      "Real-time chat, push notifications and buyer-request flows",
      "Owned product, engineering and infrastructure end-to-end",
    ],
    stack: ["React Native", "React", "Node.js", "MongoDB", "Firebase", "AWS"],
    url: "https://gilgit.app",
    metric: { value: "800K+", label: "users" },
    featured: true,
  },
  {
    title: "AI-Driven CRM — Admin & Customer Portals",
    client: "eAngels.de",
    year: "2025 – 2026",
    summary:
      "Architected and built an AI-powered CRM for a German company, with separate admin and customer portals. Owned full-stack development, infrastructure and DevOps end-to-end.",
    highlights: [
      "AI-assisted workflows inside the CRM",
      "Admin + customer portals on one platform",
      "Infrastructure, CI/CD and DevOps owned end-to-end",
    ],
    stack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "AI / LLMs"],
    url: "https://www.eangels.de",
    metric: { value: "E2E", label: "ownership" },
  },
  {
    title: "Multi-Tenant SaaS Frontend Architecture",
    client: "Junction Net AI",
    year: "2023 – Present",
    summary:
      "Leading frontend architecture for scalable multi-tenant web applications — reusable design systems, advanced authentication, smart filters and dynamic forms in an Nx monorepo.",
    highlights: [
      "Shared design system across React & Vue apps",
      "Multi-tenant auth, RBAC and SSO",
      "Dynamic form engine and smart filtering",
    ],
    stack: ["React", "Vue", "Nx", "TypeScript", "NestJS", "Storybook"],
    url: "https://junctionnet.ai",
  },
  {
    title: "Smart POS & Accounting System",
    client: "Product build",
    year: "Recent",
    summary:
      "A modern point-of-sale platform with integrated accounting, smart filters and transaction analytics for retail businesses.",
    highlights: ["Integrated accounting module", "Real-time transaction analytics"],
    stack: ["Vue.js", "NestJS", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI Content Automation Agent",
    client: "Internal R&D",
    year: "Recent",
    summary:
      "An AI agent that researches, writes and schedules daily blog and social content automatically — being evolved into a SaaS product.",
    highlights: ["Hands-off daily publishing pipeline", "Web scraping + LLM generation"],
    stack: ["Python", "Make.com", "LLMs", "Scraping"],
  },
  {
    title: "My Gilgit-Baltistan",
    client: "Travel platform",
    year: "Live",
    summary:
      "A sustainable-tourism platform showcasing unexplored destinations across Gilgit-Baltistan, with travel guides, blogs and video — SEO-first.",
    highlights: ["SEO-optimised content platform", "Social & video integrations"],
    stack: ["Next.js", "Headless CMS", "SEO"],
    url: "https://www.mygilgitbaltistan.com/",
  },
  {
    title: "Ecofiney",
    client: "Fintech content & app",
    year: "Live",
    summary:
      "Personal finance and budgeting guides for Pakistan — salaries, savings, banking and taxes explained simply — plus a companion app to track it all.",
    highlights: ["Content platform + budgeting app", "Built for the Pakistani market"],
    stack: ["Web", "Mobile", "SEO"],
    url: "https://www.ecofiney.com/",
  },
  {
    title: "Remote Ambition — AI Job Matching",
    client: "Remote Ambition",
    year: "2020 – 2022",
    summary:
      "Web platforms with AI-based job matching and analytics. Designed APIs and microservices in Node.js and Python with a performance-tuned React frontend.",
    highlights: ["AI-based candidate/job matching", "Node.js & Python microservices"],
    stack: ["React", "Node.js", "Python", "Microservices"],
    url: "https://remoteambition.com",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer & DevOps Engineer",
    company: "eAngels.de",
    period: "2025 – 2026",
    body: "Architected and built an AI-driven CRM (Admin + Customer portals), owning full-stack development, infrastructure and DevOps end-to-end.",
  },
  {
    role: "Senior Frontend Developer",
    company: "Junction Net AI",
    period: "2023 – Present",
    body: "Leading frontend architecture with React, Vue and Nx. Building reusable design systems and scalable multi-tenant apps with advanced auth, smart filters and dynamic forms.",
  },
  {
    role: "Founder & Lead Developer",
    company: "GilgitApp",
    period: "2019 – 2023",
    body: "Designed and scaled a full-stack marketplace across Web, iOS and Android, reaching 800,000+ users with listings, real-time chat and buyer requests.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Remote Ambition",
    period: "2020 – 2022",
    body: "Built and deployed platforms with AI-based job matching and analytics; designed APIs and microservices in Node.js and Python.",
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Svelte", "TypeScript", "Tailwind CSS", "Storybook", "Zustand", "Redux Toolkit"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "Django", "FastAPI", "GraphQL", "REST", "Go", "Rust"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Nginx", "CI/CD", "Vercel", "JMeter", "Nx"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Android", "Firebase", "Push Notifications"],
  },
  {
    group: "AI & Emerging",
    items: ["AI Agents", "LLM APIs", "Make.com", "Python Automation", "Smart Contracts", "Subgraphs"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "A free call to understand your goals, users and constraints. You get a clear scope, timeline and estimate — no jargon.",
  },
  {
    step: "02",
    title: "Design & Architect",
    body: "We agree on the user flows and the technical blueprint, so the first line of code is already pointed at the right outcome.",
  },
  {
    step: "03",
    title: "Build in the open",
    body: "Weekly demos, a live staging link and async updates. You always know what shipped and what's next.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    body: "Production deploy, monitoring and handover docs — then ongoing support as your product and user base grow.",
  },
];

export const engagements = [
  {
    title: "Fixed-scope project",
    body: "Best for MVPs, new features or a well-defined build. Clear deliverables, timeline and price agreed up front.",
    points: ["Scoped milestones", "Weekly demos", "Handover & docs"],
  },
  {
    title: "Dedicated engineer",
    body: "A senior engineer embedded in your team on a monthly basis — shipping features, reviewing code and owning infra.",
    points: ["Monthly retainer", "Joins your stand-ups & tools", "Flexible hours / week"],
    highlight: true,
  },
  {
    title: "Technical consulting",
    body: "Architecture reviews, performance audits, AI strategy or a second opinion before you commit to a big build.",
    points: ["Architecture & code audits", "Scaling & cost reviews", "AI feasibility"],
  },
];

export const faqs = [
  {
    q: "What kinds of projects do you take on?",
    a: "Web apps, SaaS platforms, mobile apps and AI automation — usually for startups and SMBs that need a senior engineer who can own the product end-to-end, from architecture to deployment.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes — most of my recent work is with international teams, including Germany. I work fully remotely with good overlap with European and US-East working hours.",
  },
  {
    q: "Can you take over or improve an existing codebase?",
    a: "Absolutely. I often start with a short audit, fix the highest-impact issues (performance, reliability, DX) and then continue shipping new features.",
  },
  {
    q: "How do we get started?",
    a: "Send me a short message about your project. I'll reply within 24 hours to set up a free intro call and then share a scope and estimate.",
  },
];
