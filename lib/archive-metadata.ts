import type { Metadata } from "next";
import { site, type Locale } from "@/data/site";
export function archiveMetadata(locale: Locale): Metadata {
  const title =
    locale === "ar"
      ? "كل المشاريع — كريم حنفي"
      : "All Projects — Kareem Hanafy";
  const description =
    locale === "ar"
      ? "استكشف مشاريع كريم حنفي: منصات Full-Stack، متاجر، مواقع شركات وتطبيقات ويب."
      : "Explore Kareem Hanafy’s full-stack platforms, online stores, client websites, and web applications.";
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: site.url + (locale === "ar" ? "/ar/work" : "/work"),
      languages: {
        en: site.url + "/work",
        ar: site.url + "/ar/work",
        "x-default": site.url + "/work",
      },
    },
    openGraph: {
      title,
      description,
      url: site.url + (locale === "ar" ? "/ar/work" : "/work"),
      type: "website",
      images: [site.url + "/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@kaghim_0",
      title,
      description,
      images: [site.url + "/opengraph-image"],
    },
  };
}
