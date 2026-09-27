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
    bio: "Full-Stack Web Developer building and shipping responsive interfaces, APIs, authentication, relational data, administration systems, and multilingual web products.",
    location: "Menofia, Egypt",
    email: "karimhnfy1@gmail.com",
    photo: "/profile/kareem-portrait.webp",
    availableForWork: true,
    cvLink: "/Kareem_Hanafy_Full_Stack_CV.pdf",
  },
  social: {
    github: "https://github.com/Karrim0",
    linkedin: "https://www.linkedin.com/in/karim74/",
    instagram: "https://www.instagram.com/kaghim_0/",
    twitter: "https://x.com/kaghim_0",
  },
  projects: [
    {
      id: "nexus-capital",
      title: "Nexus Capital Red Sea",
      category: "Real estate platform",
      status: "Client platform · Delivered",
      description:
        "A complete real-estate platform connecting property and project discovery to multilingual content and a custom business administration system.",
      role: "End-to-end full-stack development",
      challenge:
        "Bring searchable property and project experiences, multilingual content, and business content management into one database-backed platform.",
      outcome:
        "A React and Vite frontend connected to a Laravel/PHP and MySQL backend, with searchable real-estate experiences and a complete custom admin dashboard.",
      tags: ["React", "Vite", "Laravel", "PHP", "MySQL"],
      // Nexus Capital
cover: {
  src: "/projects/nexus-capital/cover.webp",
  alt: "Nexus Capital Red Sea real-estate platform interface",
  label: "Real-estate platform",
},
      links: [
        {
          label: "Live platform",
          href: "https://nexuscapitalredsea.com/",
          kind: "live",
        },
      ],
      featured: true,
    },
    {
      id: "kidorly",
      title: "Kidorly",
      category: "Full-stack e-commerce",
      status: "Client product · Live",
      description:
        "A mobile-first Arabic, English, and German commerce platform with a protected admin system and server-verified checkout.",
      role: "End-to-end full-stack development",
      challenge:
        "Replace disconnected ordering and store operations with one maintainable platform that supports local customers, multilingual browsing, checkout, and day-to-day administration.",
      outcome:
        "A Next.js storefront and protected admin system with catalog and order management, server-verified checkout, authentication, localized SEO, shipping, discounts, and media workflows.",
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
          src: "/projects/kidorly/cover.webp",
          alt: "Kidorly product storefront",
          label: "Storefront",
        },
        {
          src: "/projects/kidorly/cover.webp",
          alt: "Kidorly product details page",
          label: "Product",
        },
        {
          src: "/projects/kidorly/admin-cover.webp",
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
          src: "/projects/menoufia/cover.webp",
          alt: "Menoufia University content sections",
          label: "Content",
        },
        {
          src: "/projects/menoufia/cover.webp",
          alt: "Menoufia University faculty page",
          label: "Faculties",
        },
        {
          src: "/projects/menoufia/cover.webp",
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
      title: "FourMap",
      category: "Engineering platform & CMS",
      status: "Saudi client · Delivered",
      description:
        "An Arabic RTL engineering business platform with services, articles, consultations, uploads, authentication, and a complete custom content management system.",
      role: "Client project built end-to-end",
      challenge:
        "Modernize a weak legacy website and let the client control services, articles, media, partners, accreditations, settings, and search presentation without editing code.",
      outcome:
        "A responsive PHP and MySQL platform with a custom admin dashboard, inquiries, image uploads, and granular SEO controls for pages, services, and content.",
      tags: ["PHP", "MySQL", "PDO", "JavaScript", "Bootstrap"],
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
          src: "/projects/fourmap/cover.webp",
          alt: "Fourmap services page",
          label: "Services",
        },
        {
          src: "/projects/fourmap/admin-cover.webp",
          alt: "Fourmap admin dashboard",
          label: "Admin",
        },
        {
          src: "/projects/fourmap/cover.webp",
          alt: "Fourmap SEO management screen",
          label: "SEO",
        },
      ],
      links: [
        {
          label: "View live project",
          href: "https://fourmap.66ghz.com/",
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
    {
      id: "nexus-workspace",
      title: "Nexus Workspace",
      category: "Project & team workspace",
      status: "Independent product",
      description:
        "A workspace project bringing project organization, tasks, and team views into a connected Next.js application.",
      role: "Full-stack product development",
      challenge:
        "Organize projects, tasks, and team information in a clear application structure with a shared domain and data layer.",
      outcome:
        "A Next.js workspace with project, task, and team views, shared data structures, API endpoints, and a Prisma/PostgreSQL foundation.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs"],
      // Nexus Workspace
cover: {
  src: "/projects/nexus-workspace/cover.webp",
  alt: "Nexus Workspace project, task, and team management interface",
  label: "Workspace product",
},
      links: [],
      featured: true,
    },
    {
      id: "ovrld",
      title: "OVRLD",
      category: "Training product · PWA",
      status: "Independent product",
      description:
        "A mobile-first training PWA bringing workout plans, logging, history, and progress into a consistent product experience.",
      role: "Full-stack product architecture & development",
      challenge:
        "Keep training plans, workout logging, progress, and offline-aware storage consistent across one shared data model.",
      outcome:
        "A Next.js training product with authentication, PostgreSQL-backed data, RLS, and IndexedDB storage supporting offline-aware synchronization and consistent workout domain rules.",
      tags: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "RLS",
        "IndexedDB",
      ],
      // OVRLD
cover: {
  src: "/projects/ovrld/cover.webp",
  alt: "OVRLD mobile-first fitness training dashboard and workout logging interface",
  label: "Training product",
},
      links: [
        {
          label: "Live product",
          href: "https://ovrld.vercel.app/",
          kind: "live",
        },
      ],
      featured: true,
    },
  ],
  testimonials: [
    {
      author: "Rolmod C.",
      score: 5,
      projectAr: "تحويل كود HTML جاهز إلى موقع ROLMOD احترافي متكامل ومتجاوب",
      projectEn:
        "ROLMod — turning an existing HTML build into a complete responsive website",
      quoteAr:
        "مبرمج محترف جداً، متعاون وسريع في تنفيذ التعديلات، واهتم بالتفاصيل حتى الوصول للنتيجة النهائية. المشروع تم تنفيذه بشكل ممتاز والتعامل معه كان مريحاً واحترافياً. أنصح به وبكل تأكيد سيكون لنا تعاملات قادمة بإذن الله. ❤️",
      quoteEn:
        "A highly professional developer—collaborative, fast with revisions, and attentive to detail all the way to the final result. The project was delivered excellently and working with him was comfortable and professional. I recommend him and would definitely work with him again.",
    },
    {
      author: "محمد ا.",
      score: 5,
      projectAr: "تطوير منصة SaaS لحساب الكميات والتسعير — Tas3eer Pro",
      projectEn:
        "Tas3eer Pro — Full-Stack SaaS for quantity calculation and pricing",
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
      quoteAr: "كان متجاوب مع الملاحظات وأنجز المطلوب خلال مدة قصيرة.",
      quoteEn:
        "He was responsive to feedback and completed the required work within a short timeframe.",
    },
  ],
} as const;
