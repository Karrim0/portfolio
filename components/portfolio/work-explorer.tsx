import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { copy, conceptIds, workPath, type Locale } from "@/data/site";
import type { PortfolioProject } from "@/data/portfolio";
import { systems } from "@/data/engineering";
const evidence: Record<string, { en: string; ar: string }[]> = {
  "nexus-capital": [
    { en: "Property & project search", ar: "بحث العقارات والمشاريع" },
    { en: "Multilingual content", ar: "محتوى متعدد اللغات" },
    { en: "Complete admin", ar: "لوحة إدارة متكاملة" },
  ],
  fourmap: [
    { en: "Arabic-first experience", ar: "تجربة تبدأ بالعربي" },
    { en: "Custom content management", ar: "إدارة محتوى مخصصة" },
    { en: "Consultations & enquiries", ar: "استشارات واستفسارات" },
  ],
  kidorly: [
    { en: "AR / EN / DE storefront", ar: "متجر عربي / إنجليزي / ألماني" },
    { en: "Server-verified checkout", ar: "Checkout بتحقق من السيرفر" },
    { en: "Catalog & order operations", ar: "إدارة الكتالوج والطلبات" },
  ],
  "nexus-workspace": [
    { en: "Projects, tasks & team", ar: "مشاريع ومهام وفريق" },
    { en: "Shared application model", ar: "نموذج بيانات مشترك" },
    { en: "Prisma / PostgreSQL", ar: "Prisma / PostgreSQL" },
  ],
  "menoufia-portal": [
    { en: "Complete React frontend", ar: "واجهة React كاملة" },
    { en: "REST API integration", ar: "ربط REST APIs" },
    { en: "Multilingual / RTL", ar: "لغات متعددة وRTL" },
  ],
  ovrld: [
    { en: "Plans, logging & progress", ar: "خطط وتسجيل ومتابعة تقدم" },
    { en: "Offline-aware PWA", ar: "PWA يراعي انقطاع الاتصال" },
    { en: "PostgreSQL / RLS", ar: "PostgreSQL / RLS" },
  ],
};
export function SystemDiagram({ id, locale }: { id: string; locale: Locale }) {
  const nodes = systems[id] ?? [
    "Interface",
    "Application",
    "Data",
    "Operations",
  ];
  return (
    <div className="system-diagram">
      <span className="diagram-heading">
        {locale === "ar" ? "مكونات المشروع" : "PROJECT COMPONENTS"}
      </span>
      <div className="system-flow">
        {nodes.map((n, i) => (
          <div className="system-node" key={n}>
            <span>0{i + 1}</span>
            <strong>{n}</strong>
          </div>
        ))}
      </div>
      <p>
        {locale === "ar"
          ? "نظرة مبسطة على المكونات والمسؤوليات داخل المشروع."
          : "A high-level view of the product’s components and responsibilities."}
      </p>
    </div>
  );
}
export function ProjectShowcase({
  items,
  locale,
  compact = false,
}: {
  items: PortfolioProject[];
  locale: Locale;
  compact?: boolean;
}) {
  const c = copy[locale];
  return (
    <div className={`project-showcase ${compact ? "showcase-compact" : ""}`}>
      {items.map((p, i) => (
        <article
          className={`project-card ${!compact && (i === 0 || i === 5) ? "project-wide" : ""}`}
          key={p.id}
          id={`project-${p.id}`}
        >
          <Link
            className="project-cover-link"
            href={workPath(locale, p.id)}
            aria-label={`${c.caseStudy}: ${p.title}`}
          >
            <div className="project-cover">
              <Image
  src={p.cover.src}
  alt={p.cover.alt}
  fill
  sizes={
    compact
      ? "(max-width: 760px) 94vw, 44vw"
      : i === 0 || i === 5
        ? "(max-width: 760px) 94vw, 55vw"
        : "(max-width: 760px) 94vw, 44vw"
  }
  className="project-cover-image"
/>
              <span className="cover-open">
                <ArrowUpRight size={22} />
              </span>
            </div>
            {conceptIds.includes(p.id) && (
              <span className="project-concept">{c.concept}</span>
            )}
          </Link>
          <div className="project-card-copy">
            <div className="project-card-kicker">
              <span>
                {String(i + 1).padStart(2, "0")} / {p.category}
              </span>
              <span className="project-state">{p.status}</span>
            </div>
            <h3>
              <Link href={workPath(locale, p.id)}>{p.title}</Link>
            </h3>
            <p className="project-role">{p.role}</p>
            <p className="project-summary">{p.description}</p>
            {evidence[p.id] && (
              <ul className="project-evidence">
                {evidence[p.id].map((n) => (
                  <li key={n.en}>{n[locale]}</li>
                ))}
              </ul>
            )}
            <div className="tags">
              {p.tags.slice(0, 4).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-card-links">
              <Link href={workPath(locale, p.id)}>
                {c.caseStudy}
                <ArrowUpRight size={17} />
              </Link>
              {p.links.find((l) => l.kind === "live") && (
                <a
                  href={p.links.find((l) => l.kind === "live")!.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.live}
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
