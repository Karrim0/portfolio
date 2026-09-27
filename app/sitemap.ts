import type { MetadataRoute } from "next";
import { projects, site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", ...projects("en").map((p) => `/work/${p.id}`)].flatMap(
    (path) => {
      const en = site.url + (path || "/");
      const ar = site.url + "/ar" + path;
      return [
        { url: en, alternates: { languages: { en, ar, "x-default": en } } },
        { url: ar, alternates: { languages: { en, ar, "x-default": en } } },
      ];
    },
  );
}
