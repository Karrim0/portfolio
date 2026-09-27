import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

const description =
  "Kareem Mohamed Hanafy is a Full-Stack Web Developer based in Egypt, building modern web applications, e-commerce platforms, real estate systems, and digital products with Next.js, React, TypeScript, Node.js, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  applicationName: "Kareem Hanafy Portfolio",

  title: {
    default: "Kareem Mohamed Hanafy | Full-Stack Web Developer",
    template: "%s | Kareem Hanafy",
  },

  description,

  keywords: [
    "Kareem Mohamed Hanafy",
    "Kareem Hanafy",
    "Kareem Mohamed",
    "Kareem Web Developer",
    "Kareem Full Stack Developer",
    "Kareem Full-Stack Developer",
    "karim Mohamed Hanafy",
    "karim Mohamed ",
    "karim Hanafy",
    "Kaghim",
    "kaghim_0",

    "كريم محمد حنفي",
    "كريم حنفي",
    "كريم محمد",
    "كريم",
    "كريم ويب ديفيلوبر",
    "كريم مطور ويب",
    "كريم مطور مواقع",
    "كريم مطور Full Stack",

    "Full-Stack Web Developer",
    "Full Stack Developer Egypt",
    "Web Developer Egypt",
    "Frontend Developer Egypt",
    "Next.js Developer Egypt",
    "React Developer Egypt",
    "TypeScript Developer",
    "Node.js Developer",
  ],

  authors: [
    {
      name: site.fullName,
      url: site.url,
    },
  ],

  creator: site.fullName,
  publisher: site.fullName,

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],

    url: site.url,
    siteName: "Kareem Hanafy",

    title: "Kareem Mohamed Hanafy | Full-Stack Web Developer",

    description,

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kareem Mohamed Hanafy — Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kareem Mohamed Hanafy | Full-Stack Web Developer",
    description,
    creator: "@kaghim_0",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0f10",
  width: "device-width",
  initialScale: 1,
};