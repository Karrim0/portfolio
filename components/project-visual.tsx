import Image from "next/image";
import { Smartphone } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <div className="project-image-visual">
      <div className="browser-chrome">
        <span />
        <span />
        <span />
        <div className="browser-address">{project.id}.web-product</div>
      </div>
      <div className="project-image-frame">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="object-cover"
        />
        {project.mobileExtension ? (
          <div className="project-mobile-extension">
            <Smartphone size={14} /> Native companion
          </div>
        ) : null}
      </div>
    </div>
  );
}
