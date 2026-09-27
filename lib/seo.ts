import type { Metadata } from "next";
import {
  site,
  homePath,
  workPath,
  type Locale,
  type projects,
} from "@/data/site";

type Project = ReturnType<typeof projects>[number];

const homeSeo = {
  en: {
    title: "Kareem Mohamed Hanafy | Full-Stack Web Developer",
    description:
      "Kareem Mohamed Hanafy is a Full-Stack Web Developer based in Egypt, building modern web applications, e-commerce platforms, real estate systems, multilingual products, APIs, databases, and custom admin tools.",
  },

  ar: {
    title: "كريم محمد حنفي | مطور ويب Full-Stack",
    description:
      "كريم محمد حنفي مطور ويب Full-Stack من مصر، يبني تطبيقات ويب ومتاجر إلكترونية ومنصات عقارية ومنتجات متعددة اللغات، من الواجهات والـ APIs إلى قواعد البيانات ولوحات الإدارة.",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    description: string;
  }
>;

const homeKeywords = {
  en: [
    "Kareem Mohamed Hanafy",
    "Kareem Hanafy",
    "Kareem Mohamed",
    "Karim Hanafy",
    "Kaghim",
    "kaghim_0",
    "Kareem Web Developer",
    "Kareem Full Stack Developer",
    "Kareem Full-Stack Web Developer",
    "Full Stack Developer Egypt",
    "Full-Stack Web Developer Egypt",
    "Web Developer Egypt",
    "Next.js Developer Egypt",
    "React Developer Egypt",
  ],

  ar: [
    "كريم محمد حنفي",
    "كريم حنفي",
    "كريم محمد",
    "كريم مطور ويب",
    "كريم ويب ديفيلوبر",
    "كريم مطور مواقع",
    "مطور ويب Full-Stack",
    "مطور ويب في مصر",
    "Kareem Mohamed Hanafy",
    "Kareem Hanafy",
    "Kaghim",
    "kaghim_0",
  ],
} satisfies Record<Locale, string[]>;

export function pageMetadata(
  locale: Locale,
  project?: Project,
): Metadata {
  const isArabic = locale === "ar";

  const title = project
    ? isArabic
      ? `${project.title} — دراسة حالة`
      : `${project.title} — Case Study`
    : homeSeo[locale].title;

  const description = project
    ? project.description
    : homeSeo[locale].description;

  const path = project
    ? workPath(locale, project.id)
    : homePath(locale);

  const canonicalUrl = site.url + path;

  const englishUrl =
    site.url + (project ? workPath("en", project.id) : "/");

  const arabicUrl =
    site.url + (project ? workPath("ar", project.id) : "/ar");

  const image = project
    ? `${site.url}/api/og/${project.id}`
    : `${site.url}/opengraph-image`;

  const imageAlt = project
    ? isArabic
      ? `${project.title} — مشروع بواسطة كريم محمد حنفي`
      : `${project.title} — Project by Kareem Mohamed Hanafy`
    : isArabic
      ? "كريم محمد حنفي — مطور ويب Full-Stack"
      : "Kareem Mohamed Hanafy — Full-Stack Web Developer";

  const keywords = project
    ? [
        project.title,
        `${project.title} case study`,
        ...project.tags,
        "Kareem Mohamed Hanafy",
        "Kareem Hanafy",
        "Full-Stack Web Developer",
      ]
    : homeKeywords[locale];

  return {
    title: project ? title : { absolute: title },

    description,

    keywords,

    authors: [
      {
        name: site.fullName,
        url: site.url,
      },
    ],

    creator: site.fullName,
    publisher: site.fullName,

    alternates: {
      canonical: canonicalUrl,

      languages: {
        en: englishUrl,
        ar: arabicUrl,
        "x-default": englishUrl,
      },
    },

    openGraph: {
      title,
      description,

      url: canonicalUrl,

      siteName: "Kareem Mohamed Hanafy",

      locale: isArabic ? "ar_EG" : "en_US",

      alternateLocale: isArabic
        ? ["en_US"]
        : ["ar_EG"],

      type: project ? "article" : "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      creator: "@kaghim_0",

      title,
      description,

      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
  };
}