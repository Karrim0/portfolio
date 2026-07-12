export const portfolioData = {
  personal: {
    name: "Kareem Hanafy",
    title: "Frontend Developer",
    bio: "I build clean, responsive, and accessible web interfaces using React, Next.js, TypeScript, and Tailwind CSS — with a solid understanding of APIs, dashboards, and backend integration.",
    location: "Cairo, Egypt",
    email: "karimhnfy1@gmail.com",
    cvLink: "/Kareem_Hanafy_Frontend_Engineer_CV.pdf",
    photo: "/01.png",
    availableForWork: true,
  },

  social: {
  github: "https://github.com/Karrim0",
  linkedin: "https://www.linkedin.com/in/karim74/",
  twitter: "https://twitter.com/kaghim_0",
  facebook: "https://www.facebook.com/kareem.mohmmed.9279/",
  instagram: "https://www.instagram.com/kaghim_0/",
},

skills: {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
  ],

  frontendEngineering: [
    "Responsive Design",
    "Accessibility",
    "API Integration",
    "State Management",
    "Reusable Components",
    "Performance Optimization",
    "Clean UI Implementation",
  ],

  tools: [
    "Git",
    "GitHub",
    "Figma",
    "VS Code",
    "Vercel",
    "Postman",
    "Chrome DevTools",
  ],

  exploring: ["Three.js", "Node.js", "GraphQL"],
},

projects: [
  {
    id: 1,
    title: "Kidorly – Full-Stack Multilingual E-commerce Platform",
    description:
      "A production-ready full-stack e-commerce platform built from scratch using Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, and shadcn/ui. The platform features a multilingual storefront (Arabic RTL, English, and German), product catalog, filtering, cart, checkout, local payment options, WhatsApp ordering, SEO optimization, and a complete admin dashboard for managing products, categories, brands, orders, homepage sections, media, discounts, shipping, and store settings.",

    image: "/kidorly.png",

    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Full-Stack",
      "E-commerce",
      "Admin Dashboard",
      "RTL",
      "i18n",
      "SEO",
    ],

    liveUrl: "https://kidorly.vercel.app/",
    githubUrl: "https://github.com/Karrim0/KIDORLY",
    featured: true,
  },

  {
    id: 2,
    title: "Menoufia University Portal – Multilingual University Platform",
    description:
      "A large-scale multilingual university portal rebuilt using React, Vite, TypeScript, JavaScript, i18next, and REST APIs. The project transformed an expatriates-focused portal into a complete university platform featuring dynamic news, faculties, departments, university sectors, special units, general administrations, global search, multilingual support, RTL/LTR layouts, theme palettes, responsive design, and centralized API integration.",

    image: "/portal.png",

    tags: [
      "React",
      "Vite",
      "TypeScript",
      "JavaScript",
      "REST API",
      "i18next",
      "University Portal",
      "Multilingual",
      "RTL",
      "Dynamic Routing",
      "Theme System",
      "Responsive",
    ],

    liveUrl: "https://stage.menofia.edu.eg/",
    githubUrl: "https://github.com/Karrim0/Menoufia-University-Portal",
    featured: true,
  },

  {
    id: 3,
    title: "FourMap – Business Website with CMS & Admin Dashboard",
    description:
      "A complete business website developed for a Saudi engineering services company using PHP and MySQL. The project includes a responsive RTL Arabic interface, custom CMS, admin dashboard, content management, services, articles, SEO settings, image uploads, contact management, WhatsApp integration, and backend logic for managing dynamic website content.",

    image: "/4map.png",

    tags: [
      "PHP",
      "MySQL",
      "CMS",
      "Admin Dashboard",
      "RTL",
      "Responsive",
      "SEO",
      "Business Website",
      "Dynamic Content",
      "WhatsApp",
      "Client Project",
    ],

    liveUrl: "https://kaghim.wuaze.com/",
    githubUrl: "https://github.com/Karrim0/fourmap-website",
    featured: true,
  },

  {
    id: 4,
    title: "Prime Cart – E-commerce Frontend Platform",
    description:
      "A modern e-commerce frontend built with React, TypeScript, Vite, Tailwind CSS, and real REST APIs. The application includes authentication, product browsing, categories, brands, shopping cart, wishlist, checkout flow, user profile, order history, reusable UI components, custom hooks, loading states, and a responsive shopping experience across all devices.",

    image: "/primecart.png",

    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "REST API",
      "E-commerce",
      "Authentication",
      "Wishlist",
      "Shopping Cart",
      "Checkout",
      "Responsive",
      "Frontend",
    ],

    liveUrl: "https://prime-cartt.vercel.app/",
    githubUrl: "https://github.com/Karrim0/prime-cart",
    featured: true,
  },

  {
    id: 5,
    title: "MFM Egypt – Marketing & Media Website",
    description:
      "A responsive corporate website developed for a marketing and media company using React, TypeScript, Vite, and modern frontend practices. The platform showcases company services, events, galleries, white papers, media monitoring, influencers marketing, client showcases, and promotional content with an optimized responsive user experience.",

    image: "/mfm.png",

    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Marketing",
      "Corporate Website",
      "Responsive",
      "Media",
      "Events",
      "Gallery",
      "White Papers",
      "Frontend",
    ],

    liveUrl: "https://mfm-bice.vercel.app/",
    githubUrl: "https://github.com/Karrim0/mfm-egypt",
    featured: true,
  },
],
  experience: [
  {
    role: "Frontend Developer — Freelance Projects",
    company: "Self-Employed",
    period: "Jun 2025 - Present",
    description:
        "Built responsive websites, landing pages, and web application interfaces using React, Next.js, TypeScript, and Tailwind CSS. Worked on reusable components, API integration, performance optimization, and clean UI implementation.",
    type: "freelance" as const,
  },
  {
    role: "Frontend Developer — Personal Projects",
    company: "Independent",
    period: "2025",
    description:
      "Developed frontend projects focused on e-commerce flows, authentication UI, dashboards, state management, and responsive layouts. Used Redux Toolkit, React Query, and Context API to manage data and improve user experience.",
    type: "project" as const,
  },
  {
    role: "Open Source & GitHub Projects",
    company: "GitHub",
    period: "2025 - Active",
    description:
      "Building and sharing frontend projects on GitHub while improving React patterns, component architecture, accessibility, performance, and maintainable code structure.",
    type: "project" as const,
  },
],

  funFacts: [
  "Built responsive interfaces for e-commerce and service websites",
  "Focused on clean components, reusable UI, and smooth user experience",
  "Always improving my React, Next.js, and frontend engineering skills",
],
};
