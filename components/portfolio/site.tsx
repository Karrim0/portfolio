import Link from "next/link";

import Image from "next/image";

import {

  ArrowUpRight,

  ArrowDown,

  ArrowUp,

  ArrowLeft,

  Download,

  Github,

  Linkedin,

  Instagram,

} from "lucide-react";

import {

  copy,

  site,

  projects,

  featuredIds,

  projectAccent,

  homePath,

  workPath,

  type Locale,

} from "@/data/site";

import { portfolioData, type PortfolioProject } from "@/data/portfolio";

import { imageSizes } from "@/data/image-sizes";

import { projectDetails } from "@/data/project-details";

import { engineeringNotes } from "@/data/engineering";

import { Navigation, EmailCopy, RevealObserver } from "./interactions";

import { Intro } from "./intro";

import { ProjectShowcase, SystemDiagram } from "./work-explorer";

import { ContactForm } from "./contact-form";



function SocialLinks() {

  return (

    <div className="social-links">

      <a href={site.social.github} target="_blank" rel="me noreferrer">

        <Github size={16} />

        GitHub

        <ArrowUpRight size={13} />

      </a>

      <a href={site.social.linkedin} target="_blank" rel="me noreferrer">

        <Linkedin size={16} />

        LinkedIn

        <ArrowUpRight size={13} />

      </a>

      <a href={site.social.instagram} target="_blank" rel="me noreferrer">

        <Instagram size={16} />

        Instagram

        <ArrowUpRight size={13} />

      </a>

      <a href={site.social.twitter} target="_blank" rel="me noreferrer">

        <span aria-hidden className="x-icon">

          𝕏

        </span>



        <ArrowUpRight size={13} />

      </a>

    </div>

  );

}

export function Footer({ locale }: { locale: Locale }) {

  const c = copy[locale];

  return (

    <footer className="footer section">

      <div className="footer-top">

        <Link href={homePath(locale)} className="footer-name">

          KAREEM MOHAMED HANAFY<span>© {new Date().getFullYear()}</span>

        </Link>

        <SocialLinks />

      </div>

      <div className="footer-bottom">

        <span>{c.footer}</span>

        <span>FULL-STACK WEB DEVELOPER</span>

        <a href="#top">

          {c.top}

          <ArrowUp size={15} />

        </a>

      </div>

    </footer>

  );

}

export function Contact({ locale }: { locale: Locale }) {

  const c = copy[locale];

  return (

    <section className="contact-section section" id="contact">

      <div className="contact-copy">

        <span className="eyebrow">{c.contactLabel}</span>

        <h2>

          {c.contactTitle.split("\n").map((t) => (

            <span key={t}>{t}</span>

          ))}

        </h2>

        <p>{c.contactText}</p>

        <div className="contact-direct">

          <span className="availability">

            <i />

            {c.available}

          </span>

          <div className="email-row">

            <a href={`mailto:${site.email}`}>{site.email}</a>

            <EmailCopy locale={locale} />

          </div>

          <a className="text-link" href={site.cv} download>

            {c.cv}

            <Download size={16} />

          </a>

        </div>

      </div>

      <ContactForm locale={locale} />

    </section>

  );

}

export function PortfolioHome({ locale }: { locale: Locale }) {

  const c = copy[locale],

    all = projects(locale),

    featured = all.filter((p) => p.featured),

    archive = all.filter((p) => !p.featured);

  return (

    <div

      className="site-shell"

      id="top"

      lang={locale}

      dir={locale === "ar" ? "rtl" : "ltr"}

    >

      <a className="skip-link" href="#main">

        {locale === "ar" ? "انتقل للمحتوى" : "Skip to content"}

      </a>

      <Intro locale={locale} />

      <Navigation locale={locale} />

      <main id="main">

        <section className="hero section">

          <div className="hero-topline">

            <span className="eyebrow">

              <span className="code-symbol">&lt;/&gt;</span>

              {c.eyebrow}

            </span>

            <span className="availability">

              <i />

              {c.available}

            </span>

          </div>

          <div className="hero-grid">

            <div className="hero-identity">

              <span className="hero-hello">

                <Image

                  className="hello-portrait"

                  src={site.portrait}

                  alt=""

                  width={48}

                  height={48}

                />

                {locale === "ar" ? "أهلًا، أنا" : "HELLO, I’M"}

              </span>

              <h1>

                <span>KAREEM</span>

                <span>

                  HANAFY<span className="name-dot">.</span>

                </span>

              </h1>

              <div className="hero-tagline">

                <span className="line-marker" />

                <p>{c.heroText}</p>

              </div>

              <div className="hero-actions">

                <a href="#work" className="button primary">

                  {c.viewWork}

                  <ArrowDown size={18} />

                </a>

                <a href={site.cv} download className="text-link">

                  {c.cv}

                  <Download size={16} />

                </a>

              </div>

            </div>

            <div className="hero-editorial">

              <div className="hero-portrait">

                <Image

                  src={site.portrait}

                  alt={

                    locale === "ar"

                      ? "كريم محمد حنفي، مطور ويب Full-Stack من مصر"

                      : "Kareem Mohamed Hanafy, Full-Stack Web Developer based in Egypt"

                  }

                  fill

                  sizes="(max-width: 760px) 1px, 40vw"

                  preload

                />

                <span className="portrait-label">

                  KAREEM MOHAMED HANAFY / مصر — EGYPT

                </span>

                <span className="portrait-signature">Kareem.</span>

              </div>

              <div className="hero-caption">

                <span>

                  {locale === "ar"

                    ? "من الواجهة لقاعدة البيانات."

                    : "From interface to database."}

                </span>

                <a href="#about">

                  {locale === "ar" ? "اعرفني" : "Meet the developer"}

                  <ArrowUpRight size={16} />

                </a>

              </div>

            </div>

          </div>

          <div className="hero-bottom">

            <span className="micro">{c.based}</span>

            <div className="hero-stack">

              <span>REACT</span>

              <span>NEXT.JS</span>

              <span>NODE.JS</span>

              <span>POSTGRESQL</span>

            </div>

            <a href="#work" className="scroll-prompt">

              <span>

                {locale === "ar" ? "الشغل يبدأ هنا" : "THE WORK STARTS HERE"}

              </span>

              <ArrowDown size={15} />

            </a>

          </div>

        </section>

        <section className="work-section section" id="work">

          <div className="section-heading">

            <div>

              <span className="eyebrow">{c.workLabel}</span>

              <h2>

                {c.workTitle.split("\n").map((t) => (

                  <span key={t}>{t}</span>

                ))}

              </h2>

            </div>

            <div className="section-intro">

              <p>{c.workText}</p>

              <span className="micro">

                SELECTED WORK / {String(featuredIds.length).padStart(2, "0")}

              </span>

            </div>

          </div>

          <ProjectShowcase items={featured} locale={locale} />

          <div className="archive-bridge">

            <div>

              <span className="eyebrow">

                {locale === "ar" ? "وفيه شغل تاني" : "ALSO IN THE ARCHIVE"}

              </span>

              <p>

                {archive.map((p, i) => (

                  <span key={p.id}>

                    <Link href={workPath(locale, p.id)}>{p.title}</Link>

                    {i < archive.length - 1 && <span aria-hidden> / </span>}

                  </span>

                ))}

              </p>

            </div>

            <Link

              className="button secondary"

              href={locale === "ar" ? "/ar/work" : "/work"}

            >

              {locale === "ar" ? "كل المشاريع" : "All projects"}

              <span>{all.length}</span>

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </section>

        <section className="engineering-section section" id="approach">

          <div className="section-heading">

            <div>

              <span className="eyebrow">{c.craftLabel}</span>

              <h2>

                {c.craftTitle.split("\n").map((t) => (

                  <span key={t}>{t}</span>

                ))}

              </h2>

            </div>

            <p>{c.craftText}</p>

          </div>

          <div className="engineering-notes">

            {engineeringNotes[locale].map((n, i) => (

              <article key={n.id} data-reveal>

                <div className="note-top">

                  <span>0{i + 1}</span>

                  <span>{n.label}</span>

                  <span className="note-corner">↗</span>

                </div>

                <h3>{n.title}</h3>

                <p>{n.body}</p>

                <div className="tags">

                  {n.tags.map((t) => (

                    <span key={t}>{t}</span>

                  ))}

                </div>

                <Link href={workPath(locale, n.id)}>

                  {all.find((p) => p.id === n.id)?.title}

                  <ArrowUpRight size={17} />

                </Link>

              </article>

            ))}

          </div>

        </section>

        <section className="about-section section" id="about">

          <div className="about-portrait">

            <div className="portrait-wrap">

              <Image

                src={site.portrait}

                alt={

                  locale === "ar"

                    ? "كريم محمد حنفي — مطور ويب Full-Stack"

                    : "Kareem Mohamed Hanafy — Full-Stack Web Developer"

                }

                fill

                sizes="(max-width: 700px) 90vw, 38vw"

              />

              <span className="portrait-corner">KH / EGYPT</span>

              <div className="portrait-caption">

                <span>

                  {locale === "ar"

                    ? "المطور وراء المنتج"

                    : "THE DEVELOPER BEHIND THE PRODUCT"}

                </span>

                <strong>Kareem.</strong>

              </div>

            </div>

            <div className="portrait-foot">

              <span>BUILDING FOR THE WEB.</span>

              <span>↗</span>

            </div>

          </div>

          <div className="about-copy">

            <span className="eyebrow">{c.aboutLabel}</span>

            <h2>

              {c.aboutTitle.split("\n").map((t) => (

                <span key={t}>{t}</span>

              ))}

            </h2>

            <p className="micro">
              {locale === "ar" ? "كريم محمد حنفي" : "Kareem Mohamed Hanafy"}
            </p>
            <p className="about-lead">{c.aboutLead}</p>

            <p>{c.aboutText}</p>

            <div className="experience">

              <div>

                <h3>{c.experienceTitle}</h3>

                <span>{c.experienceTime}</span>

              </div>

              <p>{c.experienceText}</p>

            </div>

            <div className="tech-groups">

              {[

                ["INTERFACE", "React · Next.js · TypeScript · Tailwind"],

                ["APPLICATION", "Node.js · REST APIs · PHP · Laravel"],

                ["DATA", "PostgreSQL · Prisma · Supabase · MySQL"],

                ["DELIVERY", "Git · Docker · Vercel · SEO"],

              ].map(([label, value]) => (

                <div key={label}>

                  <span>{label}</span>

                  <p>{value}</p>

                </div>

              ))}

            </div>

            <a className="text-link cv-link" href={site.cv} download>

              {c.cv}

              <Download size={16} />

            </a>

          </div>

        </section>

        <section className="feedback-section section">

          <div>

            <span className="eyebrow">{c.feedbackLabel}</span>

            <h2>{c.feedbackTitle}</h2>

          </div>

          <div className="quotes">

            {[portfolioData.testimonials[1], portfolioData.testimonials[3]].map(

              (t) => (

                <figure key={t.author}>

                  <span className="quote-mark" aria-hidden>

                    “

                  </span>

                  <blockquote>

                    {locale === "ar" ? t.quoteAr : t.quoteEn}

                  </blockquote>

                  <figcaption>

                    <strong>{t.author}</strong>

                    <span>{locale === "ar" ? t.projectAr : t.projectEn}</span>

                  </figcaption>

                </figure>

              ),

            )}

          </div>

        </section>

        <Contact locale={locale} />

      </main>

      <Footer locale={locale} />

      <RevealObserver />

    </div>

  );

}



export function CaseStudy({

  locale,

  project,

}: {

  locale: Locale;

  project: PortfolioProject;

}) {

  const c = copy[locale],

    all = projects(locale),

    next = all[(all.findIndex((p) => p.id === project.id) + 1) % all.length],

    details = projectDetails(project.id, locale),

    gallery =

      project.gallery?.filter((im) => im.src !== project.cover.src) ?? [];

  const schema = {

    "@context": "https://schema.org",

    "@type": "CreativeWork",

    name: project.title,

    description: project.description,

    url: site.url + workPath(locale, project.id),

    image: site.url + project.cover.src,

    inLanguage: locale === "ar" ? "ar-EG" : "en",

    author: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      url: site.url,
    },

  };

  const breadcrumbs = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      {

        "@type": "ListItem",

        position: 1,

        name: c.work,

        item: site.url + (locale === "ar" ? "/ar/work" : "/work"),

      },

      {

        "@type": "ListItem",

        position: 2,

        name: project.title,

        item: site.url + workPath(locale, project.id),

      },

    ],

  };

  return (

    <div

      className="site-shell"

      id="top"

      lang={locale}

      dir={locale === "ar" ? "rtl" : "ltr"}

    >

      <a className="skip-link" href="#main">

        {locale === "ar" ? "انتقل للمحتوى" : "Skip to content"}

      </a>

      <Navigation locale={locale} slug={project.id} />

      <main id="main" className="case-main">

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html: JSON.stringify([schema, breadcrumbs]).replace(

              /</g,

              "\\u003c",

            ),

          }}

        />

        <section className="case-intro section">

          <Link

            className="back-link"

            href={locale === "ar" ? "/ar/work" : "/work"}

          >

            <ArrowLeft size={16} />

            {c.back}

          </Link>

          <div className="case-kicker">

            <span className="eyebrow">{project.category}</span>

            <span className="case-status">{project.status}</span>

          </div>

          <h1>

            {project.title}

            <span className="accent">.</span>

          </h1>

          <p className="case-description">{project.description}</p>

          <div className="case-links">

            {project.links.map((link) => (

              <a

                key={link.href}

                href={link.href}

                target="_blank"

                rel="noreferrer"

                className={

                  link.kind === "live" ? "button primary" : "button secondary"

                }

              >

                {link.kind === "live" ? c.live : c.source}

                <ArrowUpRight size={17} />

              </a>

            ))}

          </div>

        </section>

        <div

          className="case-cover section"

          style={

            {

              "--project-accent": projectAccent[project.id],

            } as React.CSSProperties

          }

        >

          <Image

            src={project.cover.src}

            alt={project.cover.alt}

            width={imageSizes[project.cover.src]?.[0] ?? 1200}

            height={imageSizes[project.cover.src]?.[1] ?? 760}

            sizes="(max-width: 700px) 100vw, 90vw"

            preload

          />

          <span className="micro">

            {c.visualNote}

          </span>

        </div>

        <section className="case-story section">

          <aside>

            <div>

              <span className="eyebrow">{c.role}</span>

              <p>{project.role}</p>

            </div>

            <div>

              <span className="eyebrow">{c.stack}</span>

              <div className="tags">

                {project.tags.map((t) => (

                  <span key={t}>{t}</span>

                ))}

              </div>

            </div>

          </aside>

          <div className="case-narrative">

            <article>

              <span className="micro">01 / CONTEXT</span>

              <h2>{c.challenge}</h2>

              <p>{project.challenge}</p>

            </article>

            <article>

              <span className="micro">02 / DELIVERY</span>

              <h2>{c.solution}</h2>

              <p>{project.outcome}</p>

            </article>

          </div>

        </section>

        {project.featured && (

          <section className="case-system section">

            <span className="eyebrow">03 / {c.system}</span>

            <SystemDiagram id={project.id} locale={locale} />

          </section>

        )}

        {details.length > 0 && (

          <section className="case-details section">

            <div className="section-heading">

              <h2>{locale === "ar" ? "داخل التنفيذ." : "Inside the build."}</h2>

            </div>

            <div className="case-detail-grid">

              {details.map(([title, text], i) => (

                <article key={title}>

                  <span className="micro">0{i + 1}</span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                </article>

              ))}

            </div>

          </section>

        )}

        {gallery.length > 0 && (

          <section className="case-gallery section">

            <div className="section-heading">

              <h2>{c.gallery}</h2>

              <span className="micro">0{gallery.length} / VIEWS</span>

            </div>

            <div className="gallery-grid">

              {gallery.map((im, i) => (

                <figure key={im.src}>

                  <Image

                    src={im.src}

                    alt={im.alt}

                    width={imageSizes[im.src]?.[0] ?? 1448}

                    height={imageSizes[im.src]?.[1] ?? 1086}

                    sizes="(max-width: 700px) 94vw, 44vw"

                  />

                  <figcaption>

                    <span>

                      0{i + 1} / {im.label}

                    </span>

                    <ArrowUpRight size={17} />

                  </figcaption>

                </figure>

              ))}

            </div>

          </section>

        )}

        <Link className="next-project section" href={workPath(locale, next.id)}>

          <span className="eyebrow">{c.next}</span>

          <div>

            <h2>{next.title}</h2>

            <ArrowUpRight size={55} />

          </div>

        </Link>

        <Contact locale={locale} />

      </main>

      <Footer locale={locale} />

    </div>

  );

}



export function ProjectIndex({ locale }: { locale: Locale }) {

  const all = projects(locale);

  const featured = all.filter((p) => p.featured),

    archive = all.filter((p) => !p.featured);

  const schema = {

    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name:
      locale === "ar"
        ? "مشاريع كريم محمد حنفي — مطور ويب Full-Stack"
        : "Kareem Mohamed Hanafy — Full-Stack Web Development Projects",
    description:
      locale === "ar"
        ? "مجموعة من مشاريع كريم محمد حنفي في تطوير الويب Full-Stack، التجارة الإلكترونية، العقارات، والمنصات الرقمية."
        : "A collection of Full-Stack Web Development projects by Kareem Mohamed Hanafy across e-commerce, real estate, business platforms, and digital products.",
    url: site.url + (locale === "ar" ? "/ar/work" : "/work"),
    inLanguage: locale === "ar" ? "ar-EG" : "en",
    author: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      url: site.url,
    },

    mainEntity: {

      "@type": "ItemList",

      itemListElement: all.map((p, i) => ({

        "@type": "ListItem",

        position: i + 1,

        name: p.title,

        url: site.url + workPath(locale, p.id),

      })),

    },

  };

  return (

    <div className="site-shell" id="top" dir={locale === "ar" ? "rtl" : "ltr"}>

      <a className="skip-link" href="#main">

        {locale === "ar" ? "انتقل للمحتوى" : "Skip to content"}

      </a>

      <Navigation locale={locale} index />

      <main id="main" className="project-directory section">

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),

          }}

        />

        <Link className="back-link" href={homePath(locale)}>

          <ArrowLeft size={16} />

          {locale === "ar" ? "الرئيسية" : "Back to portfolio"}

        </Link>

        <div className="directory-heading">

          <span className="eyebrow">

            {locale === "ar"

              ? "المشاريع / الأرشيف الكامل"

              : "WORK / THE COMPLETE INDEX"}

          </span>

          <h1>

            {locale === "ar"

              ? "كل مشروع، وله حكاية."

              : "Different briefs. One builder."}

          </h1>

          <p>

            {locale === "ar"

              ? "المشاريع الأساسية وأعمال سابقة، مع توضيح دوري في كل واحد."

              : "Selected platforms and earlier work, with my role documented in each."}

          </p>

          <nav

            className="directory-jumps"

            aria-label={locale === "ar" ? "أقسام المشاريع" : "Project groups"}

          >

            <a href="#selected">

              {locale === "ar" ? "المشاريع الأساسية" : "Selected work"}{" "}

              <span>06</span>

            </a>

            <a href="#archive">

              {locale === "ar" ? "المشاريع السابقة" : "Earlier work"}{" "}

              <span>05</span>

            </a>

          </nav>

        </div>

        <section id="selected">

          <h2>{copy[locale].work}</h2>

          <ProjectShowcase items={featured} locale={locale} compact />

        </section>

        <section id="archive">

          <div className="section-heading">

            <h2>{locale === "ar" ? "المشاريع السابقة." : "Earlier work."}</h2>

            <p>

              {locale === "ar"

                ? "أعمال العملاء وتجارب المنتجات اللي كانت جزء من الرحلة."

                : "Client work and product explorations from the wider portfolio."}

            </p>

          </div>

          <ProjectShowcase items={archive} locale={locale} compact />

        </section>

      </main>

      <Footer locale={locale} />

    </div>

  );

}
