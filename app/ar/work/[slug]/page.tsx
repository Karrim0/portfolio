import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/portfolio/site";
import { projects } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects("ar").map((p) => ({ slug: p.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects("ar").find((p) => p.id === slug);
  if (!p) notFound();
  return pageMetadata("ar", p);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects("ar").find((p) => p.id === slug);
  if (!p) notFound();
  return <CaseStudy locale="ar" project={p} />;
}
