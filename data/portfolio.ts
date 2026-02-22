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
      title: "FourMap – Full-Stack Engineering Services Website with CMS",
      description:
        "A complete PHP/MySQL website for FourMap, a Saudi engineering services company. Built with a dynamic admin panel that allows full content management — text, images, contact info, and social links — without touching the code. Includes marketing pages (Home, About, Services, Contact, Consultation) with WhatsApp integration and fully responsive RTL Arabic design.",
      image: "/4map.png",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "PHP",
        "MySQL",
        "CMS",
        "Admin Panel",
        "RTL",
        "Responsive",
        "WhatsApp Integration",
        "Dynamic Content",
        "Full Stack",
      ],
      liveUrl: "https://aaadosry.info/fourmap/",
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
