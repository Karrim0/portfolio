import localFont from "next/font/local";
const sans = localFont({
  src: [
    { path: "../public/fonts/dm-sans-400.woff2", weight: "400" },
    { path: "../public/fonts/dm-sans-500.woff2", weight: "500" },
    { path: "../public/fonts/dm-sans-700.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});
const display = localFont({
  src: [
    { path: "../public/fonts/space-grotesk-400.woff2", weight: "400" },
    { path: "../public/fonts/space-grotesk-500.woff2", weight: "500" },
    { path: "../public/fonts/space-grotesk-700.woff2", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});
const arabic = localFont({
  src: [
    { path: "../public/fonts/noto-sans-arabic-400.woff2", weight: "400" },
    { path: "../public/fonts/noto-sans-arabic-600.woff2", weight: "600" },
    { path: "../public/fonts/noto-sans-arabic-700.woff2", weight: "700" },
  ],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});
export const fontClasses = `${sans.variable} ${display.variable} ${arabic.variable}`;
