import type { Metadata } from "next";
import { site } from "@/data/site";
import NotFound from "@/components/portfolio/not-found";
import { fontClasses } from "@/lib/fonts";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Page not found | Kareem Hanafy",
  robots: { index: false, follow: false },
};
export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontClasses}>
      <body>
        <NotFound />
      </body>
    </html>
  );
}
