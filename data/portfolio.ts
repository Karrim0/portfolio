export const portfolioData = {
  personal: {
    name: "Kareem Mohamed",
    title: "Frontend Developer",
    bio: "I build fast, beautiful, and accessible web experiences using React & Next.js.",
    location: "Cairo, Egypt",
    email: "karimhnfy1@email.com",
    cvLink: "/cv.pdf",
    photo: "/01.png",
    availableForWork: true,
  },

  social: {
    github: "https://github.com/Karrim0",
    linkedin: "https://www.linkedin.com/in/karim74/",
    twitter: "https://twitter.com/kaghim_0",
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

    tools: [
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "Vercel",
      "Postman",
      "Chrome DevTools",
    ],
    learning: ["Three.js", "Node.js", "GraphQL"],
  },

  projects: [
    {
      id: 1,
      title: "FreshCart – Full Featured E-commerce Platform",
      description:
        "A modern e-commerce web application built with React and Next.js. Features include product browsing, category and brand filtering, wishlist management, shopping cart functionality, authentication, and user profile management. Designed with a clean UI and fully responsive layout to provide a smooth shopping experience across all devices.",

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
        "Authentication",
        "Responsive Design",
      ],

      liveUrl: "https://prime-cartt.vercel.app/",
      githubUrl: "https://github.com/Karrim0/prime-cart",
      featured: true,
    },

    {
      id: 2,
      title: "FourMap – Engineering Services Website with CMS",
      description:
        "A full-stack website developed for FourMap, a Saudi engineering services company. The platform includes a dynamic admin dashboard that allows managing content, images, contact information, and social media links without editing code. The website features multiple marketing pages, WhatsApp integration, and a fully responsive RTL Arabic interface.",

      image: "/4map.png",

      tags: [
        "PHP",
        "MySQL",
        "CMS",
        "Admin Dashboard",
        "Full Stack",
        "Responsive Design",
        "RTL Arabic",
        "WhatsApp Integration",
        "Dynamic Content",
      ],

      liveUrl: "https://aaadosry.info/fourmap10/",
      githubUrl: "https://github.com/Karrim0/fourmap-website",
      featured: true,
    },
  ],
  experience: [
    {
      role: "Freelance Frontend Developer",
      company: "Self-Employed",
      period: "Jun 2025 - Present",
      description:
        "Delivered multiple client projects including landing pages, service websites, and dynamic web applications. Focused on responsive UI, API integration, and performance optimization using React and Next.js.",
      type: "freelance" as const,
    },
    {
      role: "Frontend Developer (Personal Projects)",
      company: "Independent",
      period: "2025 ",
      description:
        "Built and maintained personal projects using React, Next.js, and TypeScript. Implemented state management with Redux Toolkit, React Query, and Context API. Focused on clean architecture and reusable components.",
      type: "project" as const,
    },
    {
      role: "Open Source & GitHub Projects",
      company: "GitHub",
      period: "2025 - Active",
      description:
        "Actively building and sharing projects on GitHub, exploring modern frontend patterns, performance optimization, and scalable component architecture.",
      type: "project" as const,
    },
  ],

  funFacts: [
    "I've shipped 5+ projects in my first year",
    "Obsessed with clean code & pixel-perfect UI",
    "Always learning something new in the frontend world",
  ],
};
