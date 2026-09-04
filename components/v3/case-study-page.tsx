"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Languages } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { projectArabic } from "@/data/portfolio-copy";
import { useLocale } from "./locale-provider";

export function CaseStudyPage() {
  const { locale, toggleLocale } = useLocale();
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const projectIndex = portfolioData.projects.findIndex((item) => item.id === slug);
  const project = portfolioData.projects[projectIndex];

  if (!project) {
    return (
      <main className="v4-case">
        <div className="v3-shell">
          <div className="v3-not-found-card">
            <span>404 / CASE STUDY</span>
            <h1>{locale === "ar" ? "المشروع غير موجود." : "Project not found."}</h1>
            <div><a href="/#work">{locale === "ar" ? "العودة للمشاريع" : "Back to work"}</a></div>
          </div>
        </div>
      </main>
    );
  }

  const ar = projectArabic[project.id];
  const p = locale === "ar" && ar ? ar : project;
  const next = portfolioData.projects[(projectIndex + 1) % portfolioData.projects.length];
  const labels = locale === "ar"
    ? { back: "كل المشاريع", case: "دراسة حالة", role: "دوري", challenge: "التحدي", outcome: "النتيجة", stack: "التقنيات", overview: "نظرة عامة", thinking: "القرار الهندسي", result: "ما تم تسليمه", links: "شاهد المنتج", next: "المشروع التالي", live: "الموقع", source: "الكود", status: "الحالة" }
    : { back: "All work", case: "CASE STUDY", role: "Role", challenge: "Challenge", outcome: "Outcome", stack: "Stack", overview: "Overview", thinking: "Engineering decision", result: "What shipped", links: "Explore product", next: "Next project", live: "Live product", source: "Source", status: "Status" };

  return (
    <main className="v4-case">
      <div className="v3-ambient" aria-hidden="true"><div className="v3-noise" /><div className="v3-grid-plane" /><div className="v3-glow v3-glow-a" /></div>
      <header className="v4-case-nav">
        <div className="v4-case-nav-inner">
          <a href="/#work" data-cursor="BACK">{locale === "ar" ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}<span>{labels.back}</span></a>
          <strong dir="ltr">KAREEM HANAFY / {project.title.toUpperCase()}</strong>
          <button type="button" onClick={toggleLocale}><Languages size={14} />{locale === "en" ? "AR" : "EN"}</button>
        </div>
      </header>

      <div className="v3-shell">
        <section className="v4-case-hero">
          <div className="v4-case-hero-copy">
            <div className="v4-case-kicker"><span>0{projectIndex + 1}</span><span>{labels.case}</span><span>{p.category}</span></div>
            <h1>{project.title}</h1>
            <p>{p.description}</p>
          </div>
          <dl className="v4-case-meta">
            <div><dt>{labels.role}</dt><dd>{p.role}</dd></div>
            <div><dt>{labels.stack}</dt><dd>{project.tags.join(" · ")}</dd></div>
            <div><dt>{labels.status}</dt><dd>{p.status}</dd></div>
          </dl>
        </section>

        <section className="v4-case-visual" aria-label={`${project.title} engineering visual`}>
          <div className="v4-case-visual-core"><strong>{project.title}</strong></div>
        </section>

        <div className="v4-case-sections">
          <section className="v4-case-section"><span>01 / {labels.overview}</span><div><h2>{locale === "ar" ? "المنتج والسياق" : "The product and context"}</h2><p>{p.description}</p><div className="v4-case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></section>
          <section className="v4-case-section"><span>02 / {labels.challenge}</span><div><h2>{locale === "ar" ? "المشكلة التي كان يجب حلها" : "The problem worth solving"}</h2><p>{p.challenge}</p></div></section>
          <section className="v4-case-section"><span>03 / {labels.thinking}</span><div><h2>{locale === "ar" ? "ملكية المنتج من الواجهة للنظام" : "Owning the flow beyond the interface"}</h2><p>{locale === "ar" ? `دوري في ${project.title} كان ${p.role}. لذلك تعاملت مع التجربة كتدفق منتج كامل: واجهة واضحة، حالات حقيقية، تكاملات موثوقة، وقرارات يمكن صيانتها مع نمو المشروع.` : `My role on ${project.title} was ${p.role}. I approached the work as a complete product flow: clear interface decisions, real application states, dependable integrations, and engineering choices that stay maintainable as the product grows.`}</p></div></section>
          <section className="v4-case-section"><span>04 / {labels.result}</span><div><h2>{locale === "ar" ? "النتيجة" : "The shipped outcome"}</h2><p>{p.outcome}</p><div className="v4-case-actions">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" data-cursor="OPEN">{link.kind === "github" ? <Github size={15} /> : <ArrowUpRight size={15} />}<span>{link.kind === "github" ? labels.source : labels.live}</span><ArrowUpRight size={13} /></a>)}</div></div></section>
        </div>

        <a className="v4-case-next" href={`/work/${next.id}`} data-cursor="NEXT"><span>{labels.next}</span><strong>{next.title}</strong>{locale === "ar" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}</a>
      </div>
    </main>
  );
}
