import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

const siteUrl = "https://kaghim.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolioData.projects.map((project) => ({
      url: `${siteUrl}/work/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.75,
    })),
  ];
}
