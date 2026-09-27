import { portfolioData, type PortfolioProject } from "./portfolio";
import { projectArabic } from "./project-arabic";

export type Locale = "en" | "ar";

export const site = {
  name: "Kareem Hanafy",
  fullName: "Kareem Mohamed Hanafy",
  email: portfolioData.personal.email,
  social: portfolioData.social,
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://kaghim.vercel.app"
  ).replace(/\/$/, ""),
  portrait: "/profile/kareem-portrait.webp",
  cv: "/Kareem_Hanafy_Full_Stack_CV.pdf",
};

export const featuredIds = [
  "nexus-capital",
  "fourmap",
  "kidorly",
  "nexus-workspace",
  "menoufia-portal",
  "ovrld",
];

export const projectAccent: Record<string, string> = {
  "nexus-capital": "#a8d7d8",
  fourmap: "#ddcc92",
  kidorly: "#ffb39b",
  "nexus-workspace": "#b2acf7",
  "menoufia-portal": "#c9d5ee",
  ovrld: "#d3ff80",
  "gym-crew": "#beb7ec",
  "mfm-egypt": "#a0dbdd",
  "shailla-farms": "#b8d3a3",
  equiplink: "#f0c580",
  "prime-cart": "#ddd7cc",
};

/**
 * Kept for compatibility with existing components.
 * Empty because all project covers now use real assets.
 */
export const conceptIds: string[] = [];

export function projects(locale: Locale): PortfolioProject[] {
  const order = [
    ...featuredIds,
    ...portfolioData.projects
      .map((project) => project.id)
      .filter((id) => !featuredIds.includes(id)),
  ];

  return order.map((id) => {
    const project = portfolioData.projects.find(
      (project) => project.id === id
    );

    if (!project) {
      throw new Error(`Project not found: ${id}`);
    }

    return {
      ...project,
      ...(locale === "ar" ? projectArabic[project.id] : {}),
      featured: featuredIds.includes(project.id),
    };
  });
}

export const homePath = (locale: Locale) =>
  locale === "ar" ? "/ar" : "/";

export const workPath = (locale: Locale, id: string) =>
  `${locale === "ar" ? "/ar" : ""}/work/${id}`;

export const copy = {
  en: {
    work: "Selected work",
    about: "About",
    craft: "Engineering",
    contact: "Let’s talk",

    menu: "Open navigation",
    close: "Close navigation",

    available: "Available for meaningful work",

    eyebrow: "FULL-STACK WEB DEVELOPER",

    heroText:
      "I build property platforms, online stores, and web applications — from the interface and API to the database and admin tools.",

    viewWork: "Explore the work",
    cv: "Download CV",

    based: "BASED IN EGYPT / WORKING WORLDWIDE",

    workLabel: "01 — SELECTED SYSTEMS",
    workTitle: "Selected work.",
    workText:
      "Six projects. Explore the interface, the system, and my role in each.",

    caseStudy: "Explore case study",
    product: "Product view",
    system: "System view",

    more: "Further explorations",
    archive: "More projects",

    aboutLabel: "03 — THE PERSON",
    aboutTitle: "Kareem Hanafy.\nDeveloper. Builder.",

    aboutLead:
      "I’m a Full-Stack Web Developer based in Egypt, building products for businesses and people.",

    aboutText:
      "My work spans real estate, e-commerce, engineering platforms, institutional websites, and independent products. I work across the full lifecycle: requirements, interfaces, APIs, authentication, data, administration, testing, and deployment.",

    experienceTitle: "Independent Web Developer",
    experienceTime: "2025 — present",

    experienceText:
      "Freelance & contract work for Egyptian and Saudi businesses. Direct collaboration, from the brief to production handoff.",

    craftLabel: "02 — ENGINEERING NOTES",
    craftTitle: "The thinking\nbehind the screen.",

    craftText:
      "A closer look at the decisions and responsibilities behind the interface.",

    feedbackLabel: "CLIENT PERSPECTIVE",
    feedbackTitle: "Good work is a conversation.",

    contactLabel: "04 — OPEN A CONVERSATION",
    contactTitle: "Have something\nin mind?",

    contactText:
      "A product to build, a system to improve, or a team to join. Tell me what you’re working on.",

    emailMe: "Email directly",
    copyEmail: "Copy email",
    copied: "Copied",
    copyFailed: "Copy the email address below",

    footer: "Designed & developed with intent.",
    top: "Back to top",

    back: "All projects",
    role: "My role",
    stack: "Stack",
    challenge: "The challenge",
    solution: "The delivery",
    gallery: "In the product",
    next: "Next project",

    live: "Live website",
    source: "Source code",

    visualNote: "Project presentation",

    // Kept for compatibility with existing UI.
    concept: "Project presentation",

    motion: "Pause motion",
    resume: "Resume motion",

    form: {
      name: "Your name",
      email: "Email address",

      type: "What brings you here?",

      options: [
        "A project",
        "A role / collaboration",
        "Something else",
      ],

      message: "Tell me about it",

      placeholder:
        "What are you building, and where can I help?",

      send: "Send message",
      sending: "Sending…",

      success:
        "Message sent. Thanks for reaching out.",

      error:
        "Your message could not be sent. Please try again or use the email link.",

      invalid:
        "Check your name, email, and message (at least 20 characters).",

      note:
        "Your details are used only to reply to your enquiry.",
    },
  },

  ar: {
    work: "المشاريع",
    about: "عني",
    craft: "الهندسة",
    contact: "نتكلم؟",

    menu: "فتح القائمة",
    close: "إغلاق القائمة",

    available: "متاح لفرص وتعاون",

    eyebrow: "مطور ويب FULL-STACK",

    heroText:
      "أبني منصات عقارات ومتاجر وتطبيقات ويب؛ من الواجهة والـAPI لقاعدة البيانات ولوحة الإدارة.",

    viewWork: "استكشف الشغل",
    cv: "تحميل الـCV",

    based: "من مصر / للعمل مع العالم",

    workLabel: "01 — مشاريع مختارة",
    workTitle: "مشاريع مختارة.",

    workText:
      "ستة مشاريع. شوف الواجهة والنظام اللي وراها، ودوري في كل واحد.",

    caseStudy: "تفاصيل المشروع",
    product: "المنتج",
    system: "النظام",

    more: "مشاريع وتجارب أخرى",
    archive: "باقي المشاريع",

    aboutLabel: "03 — عني",
    aboutTitle: "كريم حنفي.\nمطور. وباني منتجات.",

    aboutLead:
      "أنا كريم، مطور ويب Full-Stack من مصر. أبني منتجات للأعمال وللناس اللي بتستخدمها.",

    aboutText:
      "شغلي يشمل العقارات والتجارة الإلكترونية والمنصات الهندسية والمواقع المؤسسية والمنتجات المستقلة. بشتغل على دورة المنتج كاملة: المتطلبات، الواجهات، APIs، تسجيل الدخول، البيانات، الإدارة، الاختبار، والنشر.",

    experienceTitle: "مطور ويب مستقل",
    experienceTime: "2025 — حتى الآن",

    experienceText:
      "عمل حر وتعاقدات مع شركات مصرية وسعودية، وتعاون مباشر من فهم المطلوب لتسليم المنتج.",

    craftLabel: "02 — من داخل التنفيذ",
    craftTitle: "التفكير اللي\nورا الواجهة.",

    craftText:
      "نظرة على القرارات والمسؤوليات اللي بتخلي الواجهة جزء من منتج كامل.",

    feedbackLabel: "من منظور العملاء",
    feedbackTitle: "الشغل الكويس حوار.",

    contactLabel: "04 — نبدأ كلام",
    contactTitle: "عندك حاجة\nفي بالك؟",

    contactText:
      "منتج عايز تبنيه، نظام محتاج تطوير، أو فريق أقدر أكون جزء منه. احكيلي.",

    emailMe: "إيميل مباشر",
    copyEmail: "نسخ الإيميل",
    copied: "تم النسخ",
    copyFailed: "انسخ عنوان الإيميل بالأسفل",

    footer: "تصميم وتنفيذ باهتمام.",
    top: "للأعلى",

    back: "كل المشاريع",
    role: "دوري",
    stack: "التقنيات",
    challenge: "التحدي",
    solution: "التنفيذ",
    gallery: "داخل المنتج",
    next: "المشروع التالي",

    live: "زيارة الموقع",
    source: "الكود",

    visualNote: "عرض المشروع",

    // متروك للتوافق مع الـ components الحالية.
    concept: "عرض المشروع",

    motion: "إيقاف الحركة",
    resume: "تشغيل الحركة",

    form: {
      name: "اسمك",
      email: "الإيميل",

      type: "عايز نتكلم عن إيه؟",

      options: [
        "مشروع",
        "فرصة عمل / تعاون",
        "موضوع تاني",
      ],

      message: "احكيلي التفاصيل",

      placeholder:
        "بتبني إيه ومحتاج مساعدة في إيه؟",

      send: "إرسال الرسالة",
      sending: "جاري الإرسال…",

      success:
        "رسالتك اتبعتت. شكرًا لتواصلك.",

      error:
        "تعذر إرسال الرسالة. جرّب تاني أو استخدم رابط الإيميل.",

      invalid:
        "راجع الاسم والإيميل والرسالة (20 حرف على الأقل).",

      note:
        "بياناتك بتستخدم للرد على استفسارك فقط.",
    },
  },
};