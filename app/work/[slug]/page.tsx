import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/v3/case-study-page";
import { LocaleProvider } from "@/components/v3/locale-provider";
import { portfolioData } from "@/data/portfolio";

const siteUrl = "https://kaghim.vercel.app";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} Case Study`,
    description: project.description,
    alternates: { canonical: `${siteUrl}/work/${project.id}` },
    openGraph: {
      title: `${project.title} — Kareem Hanafy`,
      description: project.description,
      url: `${siteUrl}/work/${project.id}`,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!portfolioData.projects.some((project) => project.id === slug)) notFound();
  return <LocaleProvider><CaseStudyPage /></LocaleProvider>;
}
