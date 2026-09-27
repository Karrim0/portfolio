import type { ReactNode } from "react";
import { fontClasses } from "@/lib/fonts";
import "@/app/globals.css";
export { metadata, viewport } from "@/lib/base-metadata";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
