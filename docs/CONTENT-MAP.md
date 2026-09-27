# Content and asset map — v5

Project facts come from the supplied source/CV. Existing roles and client quotes are retained. Three new vector covers are illustrative UI concepts, not screenshots or proof of shipped visual design.

## Assets

| Project / asset            | Path                                                                    | Notes                                                                        |
| -------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Portrait                   | `public/profile/kareem-portrait.webp`                                   | Existing portrait; source PNG retained. Use a portrait-oriented replacement. |
| CV                         | `public/Kareem_Hanafy_Full_Stack_CV.pdf`                                | Supplied CV, unchanged                                                       |
| Nexus Capital Red Sea      | `public/projects/nexus-capital/cover.svg`                               | Replace illustrative concept                                                 |
| Nexus Workspace            | `public/projects/nexus-workspace/cover.svg`                             | Replace illustrative concept                                                 |
| OVRLD                      | `public/projects/ovrld/cover.svg`                                       | Replace illustrative concept                                                 |
| Kidorly                    | `public/projects/kidorly/`                                              | Existing cover, storefront, product, admin-dashboard WebP images             |
| FourMap                    | `public/projects/fourmap/`                                              | Existing cover, services, admin-dashboard, seo-management WebP images        |
| Menoufia University Portal | `public/projects/menoufia/`                                             | Existing cover, content, faculties, global-search WebP images                |
| Archive                    | `public/projects/gym-crew`, `mfm`, `shailla`, `equiplink`, `prime-cart` | Existing covers                                                              |

For a new real screenshot: put `cover.webp` in the relevant folder, change the project's `cover.src` and `cover.alt` in `data/portfolio.ts`, add its width/height to `data/image-sizes.ts`, and remove that project's ID from `conceptIds` in `data/site.ts`. Keep the concept label until the real asset is installed. Add detail screenshots through the project's optional `gallery` list. Do not rename a bitmap file with an SVG extension.

## Editing

| Content                                   | Location                                                                                                    |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Hero, about, contact and UI copy          | `data/site.ts` → `copy.en` / `copy.ar`                                                                      |
| Name, email, socials                      | `data/portfolio.ts`; shared settings in `data/site.ts`                                                      |
| Six featured projects and order           | `data/site.ts` → `featuredIds`                                                                              |
| Project role, challenge, delivery, links  | `data/portfolio.ts`                                                                                         |
| Arabic project content                    | `data/project-arabic.ts`                                                                                    |
| Case-study detail                         | `data/project-details.ts`                                                                                   |
| Engineering notes and component summaries | `data/engineering.ts`                                                                                       |
| Client quotes                             | `data/portfolio.ts` → `testimonials`                                                                        |
| Intro timing and identity                 | `components/portfolio/intro.tsx`                                                                            |
| Unified vector KH mark                    | `components/portfolio/signature.tsx`                                                                        |
| Email configuration                       | Optional `NEXT_PUBLIC_EMAILJS_*` environment variables; original public fallback in `lib/contact-config.ts` |
| Production domain                         | `NEXT_PUBLIC_SITE_URL`                                                                                      |
| Metadata                                  | `lib/seo.ts`, `lib/base-metadata.ts`, profile schema component                                              |
| Social image design                       | `app/opengraph-image/route.tsx`, `app/api/og/[slug]/route.tsx`                                              |

Nexus Workspace has no public URL supplied; its link list intentionally stays empty. CV project URLs are used where available; external project uptime has not been certified. Component diagrams are high-level summaries, not audited deployment architecture.

Adding a project requires English data, Arabic translation, and image dimensions. Routes, sitemap, and project-specific metadata derive from the project list. Run the build after editing.

## Project archive

`/work` and `/ar/work` show all 11 projects, grouped into six selected projects and five earlier projects: MFM Egypt, Shailla Farms, EquipLink Egypt, Gym Crew, and Prime Cart. Homepage archive links are intentionally quieter than the six featured presentations. All original project assets are retained.
