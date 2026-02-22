"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(
    new Set(portfolioData.projects.flatMap((p) => p.tags))
  )

  const filtered = activeTag
    ? portfolioData.projects.filter((p) => p.tags.includes(activeTag))
    : portfolioData.projects

  return (
    <SectionWrapper id="projects" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="03" title="Featured Projects" />

        {/* Tag filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              activeTag === null
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-[0_0_60px_rgba(0,255,135,0.06)]"
            >
              {/* Image area */}
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-secondary" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-muted-foreground/40">
                  {project.title}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition-transform hover:scale-105"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
