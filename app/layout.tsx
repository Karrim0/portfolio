import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { portfolioData } from "@/data/portfolio"
import { CustomCursor } from "@/components/cursor"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: portfolioData.personal.bio,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio,
    type: "website",
  },
  icons: {
    icon: "/00.png",
    apple: "/00.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable} dark`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}