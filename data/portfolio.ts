export type ProjectLinkKind = "live" | "github" | "download";

export type ProjectLink = {
  label: string;
  href: string;
  kind: ProjectLinkKind;
};

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  role: string;
  challenge: string;
  outcome: string;
  tags: readonly string[];
  cover: ProjectImage;
  gallery?: readonly ProjectImage[];
  links: readonly ProjectLink[];
  featured: boolean;
  mobileExtension?: boolean;
};

export const portfolioData = {
  personal: {
    name: "Kareem Mohamed Hanafy",
    shortName: "Kareem Hanafy",
    title: "Full-Stack Web Developer",
    headline:
      "I build web products that are clear, reliable, and ready for real business.",
    bio: "I specialize in React, Next.js, and TypeScript, building complete web experiences across responsive interfaces, APIs, databases, admin dashboards, multilingual flows, and production delivery.",
    location: "Menofia, Egypt",
    email: "karimhnfy1@gmail.com",
    cvLink: "/Kareem_Hanafy_Frontend_Engineer_CV.pdf",
    photo: "/kareem-hanafy.webp",
    availableForWork: true,
  },

  social: {
    github: "https://github.com/Karrim0",
    linkedin: "https://www.linkedin.com/in/karim74/",
  },

  heroLayers: [
    {
      number: "01",
      label: "Frontend",
      value: "Responsive, accessible product interfaces",
    },
    {
      number: "02",
      label: "Application",
      value: "APIs, authentication, and business workflows",
    },
    {
      number: "03",
      label: "Data",
      value: "PostgreSQL, Prisma, Supabase, and permissions",
    },
    {
      number: "04",
      label: "Delivery",
      value: "SEO, performance, verification, and deployment",
    },
  ],

  capabilities: [
    {
      number: "01",
      title: "Web Product Frontend",
      description:
        "Responsive interfaces designed around real user flows, reusable systems, API-driven states, accessibility, and multilingual RTL/LTR experiences.",
      items: [
        "React & Next.js",
        "TypeScript",
        "Tailwind & component systems",
        "Responsive UX",
      ],
    },
    {
      number: "02",
      title: "Backend & Data",
      description:
        "Server logic, authentication, databases, permissions, media, and administration workflows connected to the product instead of treated as separate pieces.",
      items: [
        "Node.js & REST APIs",
        "PostgreSQL",
        "Prisma & Supabase",
        "Auth, RLS & roles",
      ],
    },
    {
      number: "03",
      title: "Production Delivery",
      description:
        "Clean Git workflows, quality gates, performance work, technical SEO, deployment, and practical handoff for products that have to keep working after launch.",
      items: [
        "Git & GitHub",
        "TypeScript & ESLint",
        "SEO & performance",
        "Vercel & Docker",
      ],
    },
  ],

  mobileSignal: {
    title: "Native product extension",
    text: "I also built an Expo and React Native companion for Gym Crew, sharing the same Supabase data model with the web product and supporting offline workout flows.",
    stack: ["React Native", "Expo", "SQLite", "Offline sync"],
  },

  projects: [
    {
      id: "kidorly",
      title: "Kidorly",
      category: "Full-stack e-commerce",
      status: "Client product · Live",
      description:
        "A multilingual commerce platform built from scratch for a kids mobility company selling scooters, hoverboards, ride-on cars, and related products.",
      role: "End-to-end full-stack development",
      challenge:
        "Replace disconnected ordering and store operations with one maintainable platform that supports local customers, multilingual browsing, checkout, and day-to-day administration.",
      outcome:
        "A complete storefront and admin system covering catalog, brands, orders, discounts, media, homepage content, shipping, local payment instructions, and website or WhatsApp ordering.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "next-intl"],
      cover: {
        src: "/projects/kidorly/cover.webp",
        alt: "Kidorly multilingual e-commerce storefront",
        label: "Storefront",
      },
      gallery: [
        {
          src: "/projects/kidorly/cover.webp",
          alt: "Kidorly home page",
          label: "Home",
        },
        {
          src: "/projects/kidorly/storefront.webp",
          alt: "Kidorly product storefront",
          label: "Storefront",
        },
        {
          src: "/projects/kidorly/product.webp",
          alt: "Kidorly product details page",
          label: "Product",
        },
        {
          src: "/projects/kidorly/admin-dashboard.webp",
          alt: "Kidorly admin dashboard",
          label: "Admin",
        },
      ],
      links: [
        {
          label: "View live product",
          href: "https://kidorly.vercel.app/ar",
          kind: "live",
        },
        {
          label: "Source code",
          href: "https://github.com/Karrim0/KIDORLY",
          kind: "github",
        },
      ],
      featured: true,
    },
    {
      id: "menoufia-portal",
      title: "Menoufia University Portal",
      category: "Institutional web platform",
      status: "Collaborative project · Live",
      description:
        "A large multilingual university frontend expanded from a limited expatriates portal into a broader platform for university news, faculties, departments, sectors, units, and administrations.",
      role: "Complete frontend implementation",
      challenge:
        "Organize many API-driven content types and routes into a consistent university experience that remains usable across languages, devices, faculties, and sections.",
      outcome:
        "A responsive React architecture with dynamic routing, REST API integration, global search, reusable modules, theme palettes, and complete RTL/LTR behavior.",
      tags: ["React", "Vite", "REST APIs", "i18next", "Axios"],
      cover: {
        src: "/projects/menoufia/cover.webp",
        alt: "Menoufia University Portal home page",
        label: "University portal",
      },
      gallery: [
        {
          src: "/projects/menoufia/cover.webp",
          alt: "Menoufia University Portal home page",
          label: "Home",
        },
        {
          src: "/projects/menoufia/content.webp",
          alt: "Menoufia University content sections",
          label: "Content",
        },
        {
          src: "/projects/menoufia/faculties.webp",
          alt: "Menoufia University faculty page",
          label: "Faculties",
        },
        {
          src: "/projects/menoufia/global-search.webp",
          alt: "Menoufia University global search",
          label: "Search",
        },
      ],
      links: [
        {
          label: "View live platform",
          href: "https://stage.menofia.edu.eg/",
          kind: "live",
        },
        {
          label: "Source code",
          href: "https://github.com/Karrim0/Menoufia-University-Portal",
          kind: "github",
        },
      ],
      featured: true,
    },
    {
      id: "fourmap",
      title: "Fourmap",
      category: "Arabic business platform",
      status: "Saudi client · Delivered",
      description:
        "A complete Arabic business website and custom content system built from scratch to replace an outdated site with a clearer brand presence and manageable operations.",
      role: "Client project built end-to-end",
      challenge:
        "Modernize a weak legacy website and let the client control services, articles, media, partners, accreditations, settings, and search presentation without editing code.",
      outcome:
        "A responsive PHP and MySQL platform with a custom admin dashboard, inquiries, image uploads, and granular SEO controls for pages, services, and content.",
      tags: ["PHP", "MySQL", "PDO", "JavaScript", "Technical SEO"],
      cover: {
        src: "/projects/fourmap/cover.webp",
        alt: "Fourmap Arabic business website",
        label: "Business website",
      },
      gallery: [
        {
          src: "/projects/fourmap/cover.webp",
          alt: "Fourmap home page",
          label: "Home",
        },
        {
          src: "/projects/fourmap/services.webp",
          alt: "Fourmap services page",
          label: "Services",
        },
        {
          src: "/projects/fourmap/admin-dashboard.webp",
          alt: "Fourmap admin dashboard",
          label: "Admin",
        },
        {
          src: "/projects/fourmap/seo-management.webp",
          alt: "Fourmap SEO management screen",
          label: "SEO",
        },
      ],
      links: [
        {
          label: "View live project",
          href: "https://kaghim.wuaze.com/?i=1",
          kind: "live",
        },
        {
          label: "Source code",
          href: "https://github.com/Karrim0/fourmap-website",
          kind: "github",
        },
      ],
      featured: true,
    },
    {
      id: "mfm-egypt",
      title: "MFM Egypt",
      category: "Marketing & media website",
      status: "Client enhancement",
      description:
        "A broad UI/UX and frontend improvement pass across marketing pages, content presentation, events, images, videos, and responsive behavior.",
      role: "Frontend development and UI/UX enhancement",
      challenge:
        "Improve a content-heavy existing website without disrupting its established structure or media library.",
      outcome:
        "Clearer layouts, stronger visual hierarchy, updated content, and richer event-related interactions across the website.",
      tags: ["React", "TypeScript", "Vite", "Responsive UI"],
      cover: {
        src: "/projects/mfm/cover.webp",
        alt: "MFM Egypt marketing website",
        label: "Website",
      },
      links: [
        {
          label: "Live website",
          href: "https://mfm-bice.vercel.app/",
          kind: "live",
        },
        {
          label: "Source",
          href: "https://github.com/Karrim0/MFM",
          kind: "github",
        },
      ],
      featured: false,
    },
    {
      id: "shailla-farms",
      title: "Shailla Farms",
      category: "Saudi corporate website",
      status: "Frontend enhancement",
      description:
        "Frontend and UI improvements for a Saudi egg and poultry producer, focused on clearer company presentation, production credibility, and responsive content delivery.",
      role: "Frontend development and UI/UX enhancement",
      challenge:
        "Present the company's farms, standards, and brand trust through a polished corporate experience.",
      outcome:
        "A cleaner responsive website that communicates the company's identity and production story with stronger visual consistency.",
      tags: ["React", "TypeScript", "Responsive UI", "Corporate web"],
      cover: {
        src: "/projects/shailla/cover.webp",
        alt: "Shailla Farms corporate website",
        label: "Corporate website",
      },
      links: [
        {
          label: "Live website",
          href: "https://shailla.vercel.app/",
          kind: "live",
        },
      ],
      featured: false,
    },
    {
      id: "equiplink",
      title: "EquipLink Egypt",
      category: "Heavy-equipment marketplace",
      status: "Product in development",
      description:
        "A web marketplace for Egypt's heavy-equipment sector, designed around structured listings, parts and machinery discovery, seller workflows, media, and admin moderation.",
      role: "Product strategy and full-stack development",
      challenge:
        "Translate a relationship-driven industrial market into a clear and trustworthy digital workflow for buyers, sellers, and administrators.",
      outcome:
        "An evolving marketplace foundation with listings, image management, filters, moderation states, dashboards, permissions, RLS, and audit-ready workflows.",
      tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
      cover: {
        src: "/projects/equiplink/cover.webp",
        alt: "EquipLink Egypt marketplace interface",
        label: "Marketplace",
      },
      links: [
        {
          label: "Live preview",
          href: "https://heavyequipment-marketplace.vercel.app/",
          kind: "live",
        },
        {
          label: "Source",
          href: "https://github.com/Karrim0/heavy-equipment-marketplace-egypt",
          kind: "github",
        },
      ],
      featured: false,
    },
    {
      id: "gym-crew",
      title: "Gym Crew",
      category: "Web fitness product + native companion",
      status: "Web live · Native companion in development",
      description:
        "A web-first workout product built end-to-end with Next.js and Supabase, then extended into a React Native and Expo companion for faster in-gym logging and offline-first training flows.",
      role: "Web product architecture, full-stack development, and native extension",
      challenge:
        "Keep the web platform complete while making the highest-frequency workout actions faster on a phone inside the gym.",
      outcome:
        "A shared Supabase product model across web and mobile, with the native app acting as a focused companion rather than replacing the web experience.",
      tags: ["Next.js", "Supabase", "React Native", "Expo", "Offline-first"],
      cover: {
        src: "/projects/gym-crew/cover.webp",
        alt: "Gym Crew web and mobile product preview",
        label: "Web + mobile",
      },
      links: [
        {
          label: "Live web app",
          href: "https://gym-crew-one.vercel.app/",
          kind: "live",
        },
        {
          label: "Web source",
          href: "https://github.com/Karrim0/gym-crew",
          kind: "github",
        },
        {
          label: "Mobile source",
          href: "https://github.com/Karrim0/gym-crew-mobile",
          kind: "github",
        },
      ],
      featured: false,
      mobileExtension: true,
    },
    {
      id: "prime-cart",
      title: "Prime Cart",
      category: "API-driven e-commerce frontend",
      status: "Selected web work",
      description:
        "A responsive shopping application covering product discovery, authentication, cart, wishlist, checkout, orders, addresses, and reusable loading and empty states.",
      role: "Frontend product development",
      challenge:
        "Turn multiple API flows into one consistent shopping journey rather than a set of disconnected screens.",
      outcome:
        "A maintainable React interface with reusable components, protected routes, custom hooks, and clear product states.",
      tags: ["React", "TypeScript", "Vite", "REST APIs"],
      cover: {
        src: "/projects/prime-cart/cover.webp",
        alt: "Prime Cart e-commerce interface",
        label: "E-commerce",
      },
      links: [
        {
          label: "Live website",
          href: "https://prime-cartt.vercel.app/",
          kind: "live",
        },
      ],
      featured: false,
    },
  ] satisfies readonly PortfolioProject[],

  experience: {
    role: "Independent Web Developer",
    company: "Freelance & contract work · Egypt and remote",
    period: "2025 — Present · 1 year professional experience",
    description:
      "For the past year, I have delivered real web products for clients—from complete platforms built from scratch to frontend modernization inside existing applications. The work includes requirements, responsive frontend engineering, API integration, databases, admin dashboards, revisions, testing, deployment, and handoff.",
    metrics: [
      { value: "1 year", label: "Professional freelance delivery" },
      { value: "4+", label: "Client web projects" },
      { value: "2 markets", label: "Egyptian and Saudi clients" },
    ],
    timeline: [
      {
        period: "2025 — Present",
        title: "Independent Web Developer",
        subtitle: "Freelance, contract, and client product delivery",
        badge: "Professional experience",
        description:
          "I translate real client requirements into responsive web products and take responsibility for the work from interface decisions through integration, revisions, deployment, and final delivery.",
        highlights: [
          "Built Kidorly and Fourmap from initial requirements through full product delivery.",
          "Modernized existing React products for MFM Egypt and Shailla Farms.",
          "Worked directly with Egyptian and Saudi clients, feedback cycles, deadlines, and production constraints.",
        ],
      },
      {
        period: "Foundation period · Before paid client work",
        title: "Independent Product Development",
        subtitle: "Focused React, Next.js, and API-driven project building",
        badge: "Engineering foundation",
        description:
          "Before professional freelance delivery, I spent a focused period building complete projects to strengthen frontend architecture, API states, authentication, reusable components, responsive behavior, and product-level problem solving.",
        highlights: [
          "Built e-commerce and dashboard experiences beyond tutorial-level interfaces.",
          "Practiced application architecture, state management, authentication, and API integration.",
          "Developed the engineering foundation that now supports real client delivery.",
        ],
      },
    ],
    proof: [
      {
        title: "End-to-end client products",
        text: "Complete product ownership across frontend, backend logic, data, administration, deployment, and handoff.",
        projects: "Kidorly · Fourmap",
      },
      {
        title: "Large frontend ownership",
        text: "Complex responsive interfaces, multilingual architecture, API-driven modules, search, themes, and RTL/LTR behavior.",
        projects: "Menoufia University Portal",
      },
      {
        title: "Existing-product modernization",
        text: "UI/UX refinement, responsive fixes, content restructuring, media updates, and new frontend functionality in live codebases.",
        projects: "MFM Egypt · Shailla Farms",
      },
    ],
  },

  testimonials: [
    {
      author: "Rolmod C.",
      score: 5,
      projectAr: "تحويل كود HTML جاهز إلى موقع ROLMOD احترافي متكامل ومتجاوب",
      projectEn: "ROLMod — turning an existing HTML build into a complete responsive website",
      quoteAr:
        "مبرمج محترف جداً، متعاون وسريع في تنفيذ التعديلات، واهتم بالتفاصيل حتى الوصول للنتيجة النهائية. المشروع تم تنفيذه بشكل ممتاز والتعامل معه كان مريحاً واحترافياً. أنصح به وبكل تأكيد سيكون لنا تعاملات قادمة بإذن الله. ❤️",
      quoteEn:
        "A highly professional developer—collaborative, fast with revisions, and attentive to detail all the way to the final result. The project was delivered excellently and working with him was comfortable and professional. I recommend him and would definitely work with him again.",
    },
    {
      author: "محمد ا.",
      score: 5,
      projectAr: "تطوير منصة SaaS لحساب الكميات والتسعير — Tas3eer Pro",
      projectEn: "Tas3eer Pro — Full-Stack SaaS for quantity calculation and pricing",
      quoteAr:
        "تجربة ممتازة جداً مع المهندس كريم، مطور Full Stack محترف ومتمكن من أدواته، يمتلك حساً عالياً بالمسؤولية ويسعى دائماً لتقديم أفضل جودة ممكنة. كان متجاوباً وسريعاً في حل الملاحظات، وقدم دعماً فنياً رائعاً. شكراً جزيلاً لك كريم وأتطلع للعمل معك مجدداً في مشاريع قادمة.",
      quoteEn:
        "An excellent experience with Kareem. He is a skilled Full-Stack developer with a strong sense of responsibility and a constant focus on delivering the best quality possible. He was responsive, quick with feedback, and provided excellent technical support. I look forward to working with him again.",
    },
    {
      author: "أحمد ا.",
      score: 5,
      projectAr: "Full-Stack وتطوير واجهة مشروع ويب",
      projectEn: "Full-Stack development and web interface delivery",
      quoteAr:
        "مشكور مهندس كريم، يستحق التعامل معه، شخصية دقيقة في العمل جداً.",
      quoteEn:
        "Thank you, Kareem. He is absolutely worth working with and is extremely detail-oriented in his work.",
    },
    {
      author: "عبدالله الدوسري",
      score: 5,
      projectAr: "إنشاء موقع تعريفي",
      projectEn: "Corporate profile website",
      quoteAr:
        "كان متجاوب مع الملاحظات وأنجز المطلوب خلال مدة قصيرة.",
      quoteEn:
        "He was responsive to feedback and completed the required work within a short timeframe.",
    },
  ],

  about: {
    lead: "I started in frontend engineering and expanded into full-stack web development because strong interfaces depend on strong systems behind them.",
    paragraphs: [
      "My core focus is still the web: responsive React and Next.js products, API-driven experiences, e-commerce, dashboards, multilingual platforms, admin systems, and the backend and data workflows that support them.",
      "I also built a focused React Native and Expo companion for Gym Crew. It is presented as an extension of the web product—not a change in my main positioning as a web developer.",
    ],
    principles: [
      {
        title: "Clarity",
        text: "Make the next action and system state obvious.",
      },
      {
        title: "Ownership",
        text: "Understand and solve the complete workflow.",
      },
      {
        title: "Reliability",
        text: "Build for real content, data, permissions, and edge cases.",
      },
    ],
  },
} as const;
