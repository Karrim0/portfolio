# Validation — v5.0.0

Checked 27 September 2026 against a local production build.

## Build

- TypeScript type check, ESLint, and Next.js production build pass.
- 11 projects generate 22 case-study pages plus two homepages and two project-directory pages.

## Browser and HTTP

86 automated assertions passed in Chromium. Exact results are in `browser-checks.json`.

- First-visit intro, skip, and same-session suppression.
- No decorative canvas; six projects appear directly on the homepage.
- All 11 projects present in the directory; five earlier projects have visual cards and homepage links.
- Six featured projects in the requested order, with readable implementation highlights.
- Instagram and X footer links.
- English/Arabic home, project directory and long-title case page at widths 320, 390, 768, 1024, 1440: no document horizontal overflow.
- Mobile menu and Escape focus return; locale switching preserves case route.
- 26 sitemap URLs return 200 with canonical, language alternates, structured data and correct direction.
- Full-stack metadata, 404 status, homepage/project PNG sharing images, and unchanged CV bytes.
- Contact form blocks empty submission; intercepted provider success resets input; failure retains it; one request and expected template variables verified.
- No browser page errors recorded. Production server logs a Next.js `NoFallbackError` diagnostic for the intentionally unknown project path while correctly returning HTTP 404.

Desktop, mobile, Arabic, directory and case-study screenshots were visually reviewed. All image assets loaded successfully in these captures. The Arabic overflow caused by an off-screen honeypot was corrected using clipped positioning. Screenshots in `previews/` show the current version; the retained intro uses the same shared KH identity as the navigation and favicon.

The hero's CTA was checked within the first 1440×1000 viewport. Mobile captures also show the CTA in the first screen. No production performance score is claimed.

## Limits

- EmailJS network responses were mocked; **no real email was sent**. Inbox delivery, template configuration, account quota and production origin allowlist require an owner test after deployment.
- No Lighthouse score, Core Web Vitals field measurement, search ranking, or rich-result eligibility claim is made.
- No live production deployment was performed. External project uptime was not audited.
- Chromium QA does not replace real-device Safari/Firefox testing.
- Three project covers are explicitly marked illustrative concepts and await final screenshots. Existing imagery was preserved; project component views summarize supplied facts rather than audit infrastructure.
