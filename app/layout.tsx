import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { portfolioData } from "@/data/portfolio";
import { PrecisionCursor } from "@/components/precision-cursor";
import "./globals.css";

const siteUrl = "https://kaghim.vercel.app";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kareem Mohamed Hanafy | Full-Stack Web Developer",
    template: "%s | Kareem Hanafy",
  },
  description:
    "Full-stack web engineer building premium, production-ready React, Next.js and Node.js products for companies and clients in Egypt, Saudi Arabia and remote markets.",
  keywords: [
    "Kareem Mohamed Hanafy",
    "Full-Stack Web Developer Egypt",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Engineer",
    "Node.js Developer",
    "E-commerce Developer",
    "مطور ويب فل ستاك",
    "مطور Next.js",
    "مطور React",
    "مطور مواقع السعودية",
  ],
  authors: [{ name: portfolioData.personal.name, url: siteUrl }],
  creator: portfolioData.personal.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Kareem Mohamed Hanafy | Full-Stack Web Developer",
    description: "Web products built from polished interface to reliable delivery.",
    url: siteUrl,
    siteName: "Kareem Hanafy Portfolio",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kareem Mohamed Hanafy | Full-Stack Web Developer",
    description: "Production-ready web engineering with React, Next.js, TypeScript, APIs, and data systems.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: portfolioData.personal.name,
      jobTitle: portfolioData.personal.title,
      description: portfolioData.personal.bio,
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Menofia",
        addressCountry: "EG",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "REST APIs",
        "E-commerce",
        "Admin dashboards",
        "Multilingual web applications",
        "Responsive web development",
      ],
      sameAs: [portfolioData.social.github, portfolioData.social.linkedin],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceMono.variable}`}>
      <body className="antialiased">
        <PersonJsonLd />
        {children}
        <PrecisionCursor />
        <Analytics />
      </body>
    </html>
  );
}
