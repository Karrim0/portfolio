"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper, SectionHeading } from "./section-wrapper";

const CATEGORIES = [
  { label: "All", value: null },
  { label: "Full Project", value: "Full Project" },
  { label: "Frontend", value: "Frontend" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Dashboard", value: "Dashboard" },
  { label: "Client Work", value: "Client Work" },
];

type Project = (typeof portfolioData.projects)[number];

const PROJECT_CATEGORIES: Record<number, string[]> = {
  1: ["Full Project", "E-commerce", "Dashboard"],
  2: ["Frontend"],
  3: ["Full Project", "Dashboard", "Client Work"],
  4: ["Frontend", "E-commerce"],
  5: ["Frontend", "Client Work"],
};

function getProjectCategories(project: Project) {
  return PROJECT_CATEGORIES[project.id] ?? ["Frontend"];
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!activeCategory) return portfolioData.projects;

    return portfolioData.projects.filter((project) =>
      getProjectCategories(project).includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <SectionWrapper id="projects" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

<div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading label="03" title="Projects" />
          
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(0,255,135,0.18)]"
                      : "border border-border/60 bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

       <div
  ref={ref}
  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
>
          {filteredProjects.map((project, index) => {
            const categories = getProjectCategories(project);
            const hasLiveUrl = Boolean(project.liveUrl);
            const hasGithubUrl = Boolean(project.githubUrl);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/70 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_0_60px_rgba(0,255,135,0.09)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-background/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <a
                      href={hasLiveUrl ? project.liveUrl : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur transition hover:bg-primary hover:text-primary-foreground ${
                        !hasLiveUrl ? "pointer-events-none opacity-40" : ""
                      }`}
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={hasGithubUrl ? project.githubUrl : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground backdrop-blur transition hover:border-primary/40 hover:text-primary ${
                        !hasGithubUrl ? "pointer-events-none opacity-40" : ""
                      }`}
                      aria-label={`View source code of ${project.title}`}
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col p-4">
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {categories.slice(0, 2).map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 text-muted-foreground/45 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </div>

                  <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 bg-secondary/70 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <a
                      href={hasLiveUrl ? project.liveUrl : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-[11px] font-semibold text-primary-foreground transition hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,255,135,0.18)] ${
                        !hasLiveUrl ? "pointer-events-none opacity-40" : ""
                      }`}
                    >
                      <ExternalLink size={12} />
                      Live
                    </a>

                    <a
                      href={hasGithubUrl ? project.githubUrl : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-2 text-[11px] font-semibold text-secondary-foreground transition hover:border-primary/40 hover:text-primary ${
                        !hasGithubUrl ? "pointer-events-none opacity-40" : ""
                      }`}
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-2xl border border-border/50 bg-card/60 p-8 text-center text-sm text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}