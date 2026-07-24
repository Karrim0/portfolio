"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectGallery({
  project,
}: {
  project: PortfolioProject;
}) {
  const images = useMemo(() => {
    if (project.gallery && project.gallery.length > 0) {
      return project.gallery;
    }

    return [project.cover];
  }, [project.cover, project.gallery]);

  const [activeSrc, setActiveSrc] = useState(images[0]?.src ?? "");

  useEffect(() => {
    setActiveSrc(images[0]?.src ?? "");
  }, [project.id, images]);

  const activeImage =
    images.find((image) => image.src === activeSrc) ?? images[0];

  if (!activeImage) {
    return null;
  }

  return (
    <div className="project-gallery">
      <div className="project-gallery-window">
        <div className="browser-chrome">
          <span />
          <span />
          <span />

          <div className="browser-address">
            {project.id}.web-product
          </div>

          <div className="browser-view-label">
            {activeImage.label}
          </div>
        </div>

        <div className="project-gallery-stage">
          <Image
            key={`${project.id}-${activeImage.src}`}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={project.id === "kidorly"}
            sizes="(max-width: 940px) 100vw, 58vw"
            className="project-gallery-image"
          />
        </div>
      </div>

      <div
        className="project-gallery-thumbnails"
        aria-label={`${project.title} project views`}
      >
        {images.map((image, index) => {
          const isActive = image.src === activeImage.src;

          return (
            <button
              key={`${project.id}-${image.src}-${index}`}
              type="button"
              onClick={() => setActiveSrc(image.src)}
              className={isActive ? "active" : ""}
              aria-pressed={isActive}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Show ${image.label} view`}
            >
              <span className="project-gallery-thumb-image">
                <Image
                  src={image.src}
                  alt={`${project.title} ${image.label} preview`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </span>

              <span>{image.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}