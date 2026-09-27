import type { Locale } from "./site";
export const systems: Record<string, [string, string, string, string]> = {
  "nexus-capital": ["React / Vite", "Laravel / PHP", "MySQL", "Custom admin"],
  fourmap: ["Arabic RTL UI", "PHP / PDO", "MySQL", "CMS & SEO controls"],
  kidorly: [
    "Next.js storefront",
    "Checkout / Auth",
    "Prisma / PostgreSQL",
    "Protected admin",
  ],
  "nexus-workspace": [
    "Next.js workspace",
    "REST endpoints",
    "Prisma / PostgreSQL",
    "Projects / Tasks / Team",
  ],
  "menoufia-portal": [
    "React frontend",
    "Existing REST APIs",
    "Institutional content",
    "Search / RTL / LTR",
  ],
  ovrld: [
    "Next.js PWA",
    "Auth / Domain rules",
    "PostgreSQL / RLS",
    "IndexedDB / Sync",
  ],
};
export const engineeringNotes: Record<
  Locale,
  { id: string; label: string; title: string; body: string; tags: string[] }[]
> = {
  en: [
    {
      id: "kidorly",
      label: "COMMERCE / TRUST BOUNDARY",
      title: "Checkout belongs on the server.",
      body: "Kidorly uses server-verified checkout alongside catalog, order, shipping, and discount workflows. The interface is one part of the transaction.",
      tags: ["Server verification", "Prisma", "Orders"],
    },
    {
      id: "fourmap",
      label: "CONTENT / OPERATIONS",
      title: "Build for the person running it.",
      body: "FourMap’s custom CMS gives the business control of services, articles, uploads, settings, and SEO. The product includes the operator’s daily workflow.",
      tags: ["Custom CMS", "Authentication", "Uploads"],
    },
    {
      id: "ovrld",
      label: "PRODUCT / CONSISTENCY",
      title: "One product. Consistent rules.",
      body: "OVRLD connects workout plans, logging, history, and progress through a shared data model, with RLS and offline-aware storage and synchronization.",
      tags: ["RLS", "IndexedDB", "Domain rules"],
    },
  ],
  ar: [
    {
      id: "kidorly",
      label: "التجارة / التحقق",
      title: "الـCheckout مكانه السيرفر.",
      body: "Kidorly يستخدم checkout يتم التحقق منه على السيرفر، بجانب إدارة الكتالوج والطلبات والشحن والخصومات. الواجهة جزء من عملية الشراء الكاملة.",
      tags: ["Server verification", "Prisma", "Orders"],
    },
    {
      id: "fourmap",
      label: "المحتوى / التشغيل",
      title: "أبني للي هيدير المنتج.",
      body: "نظام FourMap بيدي الشركة التحكم في الخدمات والمقالات والملفات والإعدادات والـSEO. شغل المسؤول اليومي جزء من المنتج.",
      tags: ["Custom CMS", "Authentication", "Uploads"],
    },
    {
      id: "ovrld",
      label: "المنتج / الاتساق",
      title: "منتج واحد. وقواعد متسقة.",
      body: "OVRLD يربط الخطط وتسجيل التمرين والتاريخ والتقدم بنموذج بيانات مشترك، مع RLS وتخزين ومزامنة مدركين لحالة الاتصال.",
      tags: ["RLS", "IndexedDB", "Domain rules"],
    },
  ],
};
