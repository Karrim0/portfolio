# Kareem Hanafy — Interactive Engineering Portfolio V2

A bilingual (English / Arabic) Next.js portfolio designed to communicate strong product engineering, not only visual polish.

## V2 highlights

- Recruiter / Client view that changes the hero positioning and CTA.
- Interactive full-stack system core in the hero with pointer depth.
- Global `Ctrl / Cmd + K` command palette for fast navigation and actions.
- Engineer Mode terminal with working commands: `help`, `whoami`, `stack`, `projects`, `contact`, `clear`.
- Sticky project storytelling for featured work.
- Dedicated case-study route for every project at `/work/[project-id]`.
- Case-study SEO metadata + project URLs in the sitemap.
- Product process section: Discover → Architect → Build → Ship.
- Full Arabic / English experience with real RTL / LTR behavior.
- Custom precision cursor, scroll motion, responsive fallbacks, and reduced-motion support.
- Project imagery is progressive: missing images fall back to engineered visuals without broken states.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production check

```bash
npm run typecheck
npm run lint
npm run build
```

## EmailJS

The contact form supports environment variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

If you already use the current EmailJS setup, the existing fallbacks remain in the component.

## Project images

Project image paths are defined in `data/portfolio.ts`, for example:

```text
/public/projects/kidorly/cover.webp
/public/projects/menoufia/cover.webp
```

Images are optional. If a project image is missing, the UI automatically falls back to the engineered product preview.

## Main implementation files

- `components/v3/portfolio-site.tsx` — main interactive experience
- `components/v3/case-study-page.tsx` — project case-study experience
- `components/v3/locale-provider.tsx` — Arabic/English state + RTL/LTR
- `data/portfolio-copy.ts` — localized UI and project copy
- `data/portfolio.ts` — projects and personal data
- `components/precision-cursor.tsx` — custom context-aware cursor
- `app/globals.css` — complete visual system, V2 interactions, responsive behavior, 3D and motion styling
- `app/work/[slug]/page.tsx` — statically generated case-study routes and metadata

## Deployment

The project follows the standard Vercel deployment flow. Add EmailJS environment variables in Vercel if you want to override the current fallback configuration.

## V2.2 interface refinement

This revision tightens the visual rhythm of the home page: a cleaner two-stage hero hierarchy, proof rail, denser featured-project storytelling, icon-only project actions, a more compact supporting-work grid, reduced dead space across sections, and a richer engineering identity panel in About. Existing bilingual RTL/LTR behavior, Engineer Mode, command palette, case studies, testimonials, and progressive project-image fallbacks are preserved.
