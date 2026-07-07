export const portfolioData = {
  personal: {
    name: "Kareem Mohamed",
    title: "Frontend Developer",
    bio: "I build clean, responsive, and accessible web interfaces using React, Next.js, TypeScript, and Tailwind CSS — with a solid understanding of APIs, dashboards, and backend integration.",
    location: "Cairo, Egypt",
    email: "karimhnfy1@gmail.com",
    cvLink: "/cv.pdf",
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
    title: "Kidorly – Multilingual Kids E-commerce Platform",
    description:
      "A production-quality kids e-commerce platform built from A to Z using Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, and shadcn/ui. The platform includes a multilingual public store with Arabic RTL, English, and German support, product catalog, filtering, cart system, guest checkout, payment options, WhatsApp order flow, SEO metadata, and a full admin dashboard for managing products, orders, categories, discounts, homepage content, settings, and media uploads.",

    image: "/kidorly.png",

    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Full Project",
      "E-commerce",
      "Admin Dashboard",
      "RTL Arabic",
      "i18n",
      "SEO",
    ],

    liveUrl: "https://kidorly.vercel.app/",
    githubUrl: "https://github.com/Karrim0/KIDORLY",
    featured: true,
  },

  {
    id: 2,
    title: "FreshCart – E-commerce Frontend Platform",
    description:
      "A modern e-commerce frontend application built with React, Next.js, and TypeScript. It includes product browsing, category and brand filtering, wishlist management, shopping cart flow, authentication UI, and user profile pages. The project focuses on responsive layouts, clean component structure, API integration, and a smooth shopping experience across devices.",

    image: "/freshcart.png",

    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "E-commerce",
      "Product Filtering",
      "Wishlist",
      "Shopping Cart",
      "Authentication UI",
      "Responsive Design",
    ],

    liveUrl: "https://prime-cartt.vercel.app/",
    githubUrl: "https://github.com/Karrim0/prime-cart",
    featured: true,
  },

  {
    id: 3,
    title: "FourMap – Full Project Website with CMS & Admin Dashboard",
    description:
      "A complete website developed from A to Z for FourMap, a Saudi engineering services company. I handled the frontend implementation, responsive RTL Arabic interface, custom CMS, admin dashboard, database structure, and backend logic for managing content, images, contact information, and social links. The project also includes multiple marketing pages, WhatsApp integration, and dynamic content management.",

    image: "/4map.png",

    tags: [
      "Full Project",
      "Frontend Implementation",
      "Responsive Design",
      "RTL Arabic",
      "CMS",
      "Admin Dashboard",
      "PHP",
      "MySQL",
      "Dynamic Content",
      "WhatsApp Integration",
    ],

    liveUrl: "https://aaadosry.info/fourmap10/",
    githubUrl: "https://github.com/Karrim0/fourmap-website",
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
