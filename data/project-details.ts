import type { Locale } from "./site";
type Detail = [string, string];
const details: Record<string, { en: Detail[]; ar: Detail[] }> = {
  "nexus-capital": {
    en: [
      [
        "Searchable property discovery",
        "Properties and projects are presented through a searchable, multilingual React interface.",
      ],
      [
        "Database-backed operations",
        "Laravel/PHP and MySQL connect public content with the workflows behind property and project management.",
      ],
      [
        "Complete administration",
        "An administration system gives the operator control over the platform’s content and records.",
      ],
    ],
    ar: [
      [
        "الوصول للعقار المناسب",
        "واجهة React للبحث في العقارات والمشاريع وعرض المحتوى بأكثر من لغة.",
      ],
      [
        "تشغيل مرتبط بالبيانات",
        "Laravel/PHP وMySQL يربطوا المحتوى العام بتدفقات إدارة العقارات والمشاريع.",
      ],
      [
        "لوحة إدارة متكاملة",
        "نظام إدارة يتيح للمشغّل التحكم في محتوى المنصة وسجلاتها.",
      ],
    ],
  },
  "nexus-workspace": {
    en: [
      [
        "Projects and tasks together",
        "A shared workspace organizes project information alongside the tasks that move delivery forward.",
      ],
      [
        "Connected application layers",
        "Next.js and TypeScript provide the application layer, with Prisma and PostgreSQL for relational data.",
      ],
      [
        "A shared domain",
        "Team, project, and task workflows use a common application model across the interface and API.",
      ],
    ],
    ar: [
      [
        "المشاريع والمهام في مكان واحد",
        "مساحة عمل تجمع معلومات المشروع مع المهام المطلوبة لتنفيذه.",
      ],
      [
        "طبقات تطبيق مترابطة",
        "Next.js وTypeScript لطبقة التطبيق، مع Prisma وPostgreSQL للبيانات العلائقية.",
      ],
      [
        "نموذج عمل مشترك",
        "تدفقات الفريق والمشاريع والمهام مبنية على نموذج مشترك بين الواجهة والـAPI.",
      ],
    ],
  },
  ovrld: {
    en: [
      [
        "Training as a continuous workflow",
        "Plans, session logging, history, and progress form a connected training PWA.",
      ],
      [
        "Offline-aware storage",
        "IndexedDB supports local storage, alongside synchronization with Supabase and PostgreSQL.",
      ],
      [
        "Consistent rules and access",
        "Shared domain rules keep training behavior consistent, with row-level security in the data layer.",
      ],
    ],
    ar: [
      [
        "رحلة تمرين متصلة",
        "تطبيق PWA يربط الخطط وتسجيل التمرين والسجل ومتابعة التقدم.",
      ],
      [
        "تخزين يراعي انقطاع الاتصال",
        "IndexedDB للتخزين المحلي مع المزامنة باستخدام Supabase وPostgreSQL.",
      ],
      [
        "قواعد وصلاحيات متسقة",
        "قواعد مشتركة لتنظيم سلوك التمرين مع Row-Level Security في طبقة البيانات.",
      ],
    ],
  },
  kidorly: {
    en: [
      [
        "One commerce workflow",
        "Product discovery, cart, checkout, and orders connect the storefront to the day-to-day needs of the business.",
      ],
      [
        "A multilingual storefront",
        "Localized content and responsive layouts support customers across languages and screen sizes.",
      ],
      [
        "Tools for the operator",
        "Catalog, brands, discounts, shipping, media, and homepage content can be managed through the admin system.",
      ],
    ],
    ar: [
      [
        "رحلة شراء متكاملة",
        "اكتشاف المنتجات والسلة وإتمام الطلب والطلبات مترابطة مع احتياجات تشغيل المتجر اليومية.",
      ],
      [
        "متجر متعدد اللغات",
        "محتوى مترجم وواجهات متجاوبة تدعم العملاء باختلاف لغاتهم وأجهزتهم.",
      ],
      [
        "إدارة تخدم صاحب المتجر",
        "إدارة الكتالوج والبراندات والخصومات والشحن والصور ومحتوى الرئيسية من لوحة التحكم.",
      ],
    ],
  },
  fourmap: {
    en: [
      [
        "Client-owned content",
        "Services, articles, partners, and media are manageable without asking a developer to edit each page.",
      ],
      [
        "Arabic-first experience",
        "The public site and its content hierarchy are organized around the client’s Arabic business presence.",
      ],
      [
        "Custom administration",
        "A PHP and MySQL system connects site settings, inquiries, uploads, and page-level SEO controls.",
      ],
    ],
    ar: [
      [
        "المحتوى في يد العميل",
        "إدارة الخدمات والمقالات والشركاء والصور بدون الرجوع لمطور لتعديل كل صفحة.",
      ],
      [
        "تجربة تبدأ بالعربي",
        "الموقع العام وترتيب المحتوى مصممين حول حضور الشركة واحتياجاتها باللغة العربية.",
      ],
      [
        "إدارة مخصصة",
        "نظام PHP وMySQL يربط إعدادات الموقع والاستفسارات ورفع الصور والتحكم في SEO الصفحات.",
      ],
    ],
  },
  "menoufia-portal": {
    en: [
      [
        "A reusable frontend",
        "Shared React modules support a wide range of university sections, faculties, and content types.",
      ],
      [
        "Connected to real APIs",
        "Dynamic routes and REST integrations present news, departments, and institutional content within a consistent interface.",
      ],
      [
        "Language and navigation",
        "Global search, theme palettes, and RTL/LTR behavior support a varied audience and a large content structure.",
      ],
    ],
    ar: [
      [
        "واجهة قابلة لإعادة الاستخدام",
        "موديولات React مشتركة تدعم أقسام الجامعة وكلياتها وأنواع المحتوى المختلفة.",
      ],
      [
        "ربط فعلي بالـAPIs",
        "مسارات ديناميكية وREST APIs لعرض الأخبار والأقسام والمحتوى المؤسسي في واجهة متسقة.",
      ],
      [
        "اللغة وسهولة التنقل",
        "بحث شامل وثيمات ودعم RTL/LTR لخدمة جمهور متنوع وهيكل محتوى كبير.",
      ],
    ],
  },
  "gym-crew": {
    en: [
      [
        "Web as the foundation",
        "The Next.js product provides the core training experience, backed by a Supabase data model.",
      ],
      [
        "Focused mobile extension",
        "The React Native and Expo companion concentrates on frequent in-gym actions such as workout logging.",
      ],
      [
        "Shared product model",
        "Web and mobile build on the same Supabase foundation, with offline training flows in the companion’s development scope.",
      ],
    ],
    ar: [
      [
        "الويب هو الأساس",
        "منتج Next.js يقدم تجربة التمرين الأساسية مع نموذج بيانات Supabase.",
      ],
      [
        "تطبيق مرافق له هدف",
        "تطبيق React Native وExpo يركز على المهام المتكررة داخل الجيم مثل تسجيل التمرين.",
      ],
      [
        "نموذج بيانات مشترك",
        "الويب والموبايل مبنيين على نفس أساس Supabase، مع تدفقات تمرين Offline ضمن نطاق تطوير التطبيق المرافق.",
      ],
    ],
  },
};
export function projectDetails(id: string, locale: Locale) {
  return details[id]?.[locale] ?? [];
}
