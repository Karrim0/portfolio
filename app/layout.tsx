import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { CustomCursor } from "@/components/cursor";

const siteUrl = "https://kaghim.vercel.app/";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Kareem Mohamed Hanafy | Frontend Developer",
  description:
    "Kareem Mohamed Hanafy is a Frontend Developer based in Cairo, Egypt, specializing in React, Next.js, TypeScript, Tailwind CSS, responsive interfaces, API integration, and frontend performance.",

  keywords: [
    "Kareem Mohamed Hanafy",
    "Kareem Mohamed",
    "Karim Mohamed",
    "Karim Hanafy",
    "Kareem Hanafy",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "Frontend Developer Cairo",
    "React Developer Egypt",
    "Next.js Portfolio",
  ],

  authors: [{ name: "Kareem Mohamed Hanafy" }],
  creator: "Kareem Mohamed Hanafy",
  publisher: "Kareem Mohamed Hanafy",

  openGraph: {
    title: "Kareem Mohamed Hanafy | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, responsive UI, API integration, and performance-focused web interfaces.",
    url: siteUrl,
    siteName: "Kareem Mohamed Hanafy Portfolio",
    type: "profile",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kareem Mohamed Hanafy - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kareem Mohamed Hanafy | Frontend Developer",
    description:
      "React, Next.js, TypeScript, and Tailwind CSS Frontend Developer based in Cairo, Egypt.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/00.png",
    apple: "/00.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Kareem Mohamed Hanafy",
      alternateName: [
        "Kareem Mohamed",
        "Karim Mohamed",
        "Karim Hanafy",
        "Kareem Hanafy",
      ],
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer based in Cairo, Egypt, specializing in React, Next.js, TypeScript, Tailwind CSS, responsive web interfaces, API integration, and performance optimization.",
      url: siteUrl,
      image: `${siteUrl}/og.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Frontend Development",
        "Responsive Design",
        "Accessibility",
        "API Integration",
        "Performance Optimization",
      ],
      sameAs: [
        portfolioData.social.github,
        portfolioData.social.linkedin,
        portfolioData.social.twitter,
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} dark`}
    >
      <body className="font-sans antialiased">
        <PersonJsonLd />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}