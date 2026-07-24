"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, Github } from "lucide-react";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { portfolioData, type PortfolioProject, type ProjectLinkKind } from "@/data/portfolio";
import { ProjectGallery } from "./project-gallery";
import { ProjectVisual } from "./project-visual";
import { SectionHeading, SectionWrapper } from "./section-wrapper";
import { GymCrewSpotlight } from "./gym-crew-spotlight";

export function ProjectsSection() {
  const featuredProjects = portfolioData.projects.filter((project) => project.featured);
  const gymCrewProject = portfolioData.projects.find((project) => project.id === "gym-crew");
  const selectedProjects = portfolioData.projects.filter((project) => !project.featured && project.id !== "gym-crew");

  return (
    <SectionWrapper id="work" className="section-block section-block-work">
      <div className="page-shell">
        <SectionHeading
          index="01"
          eyebrow="Selected web work"
          title="Three projects that show how I handle real web product complexity."
          description="The featured work focuses on the responsibilities a technical team actually evaluates: frontend architecture, API and data flows, business operations, multilingual UX, maintainability, and delivery."
        />

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {gymCrewProject ? <GymCrewSpotlight project={gymCrewProject} /> : null}

        <div className="selected-work-heading">
          <div>
            <span>MORE SELECTED WEB WORK</span>
            <h3>Client improvements and product builds across different business contexts.</h3>
          </div>
          <p>
            These supporting projects show how I improve existing interfaces, work inside established codebases,
            and build focused web products around real content and operational needs.
          </p>
        </div>

        <div className="selected-project-grid">
          {selectedProjects.map((project, index) => (
            <SelectedProject key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function FeaturedProject({ project, index }: { project: PortfolioProject; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();
  const reverse = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`featured-project ${reverse ? "featured-project-reverse" : ""}`}
    >
      <div className="featured-project-visual">
        <ProjectGallery project={project} />
        <div className="visual-caption">
          <span>{project.status}</span>
          <span>{project.category}</span>
        </div>
      </div>

      <div className="featured-project-copy">
        <div className="project-number">0{index + 1}</div>
        <div className="project-meta-line">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-responsibility">
          <span>My role</span>
          <p>{project.role}</p>
        </div>

        <div className="project-story-grid">
          <div>
            <span>Challenge</span>
            <p>{project.challenge}</p>
          </div>
          <div>
            <span>Outcome</span>
            <p>{project.outcome}</p>
          </div>
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function SelectedProject({ project, index }: { project: PortfolioProject; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const reduceMotion = useReducedMotion();
  const style = { "--card-index": index } as CSSProperties;

  return (
    <motion.article
      ref={ref}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.05 }}
      className={`selected-project-card ${project.mobileExtension ? "selected-project-card-mobile" : ""}`}
    >
      <div className="selected-project-image">
        <ProjectVisual project={project} />
      </div>
      <div className="selected-project-body">
        <div className="project-meta-line">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="selected-project-footer">
          <div className="project-tags compact">
            {project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <ProjectLinks project={project} compact />
        </div>
      </div>
    </motion.article>
  );
}

function linkIcon(kind: ProjectLinkKind, compact: boolean): ReactNode {
  const size = compact ? 16 : 15;
  if (kind === "github") return <Github size={size} />;
  if (kind === "download") return <Download size={size} />;
  return compact ? <ExternalLink size={size} /> : <ArrowUpRight size={16} />;
}

function ProjectLinks({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  if (!project.links.length) return null;

  return (
    <div className={`project-links ${compact ? "project-links-compact" : ""}`}>
      {project.links.map((link, index) => (
        <a
          key={`${project.id}-${link.label}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${link.label} — ${project.title}`}
          title={compact ? link.label : undefined}
          className={index === 0 ? "project-link-primary" : ""}
        >
          {compact ? linkIcon(link.kind, true) : (
            <>
              {link.kind !== "live" ? linkIcon(link.kind, false) : null}
              {link.label}
              {link.kind === "live" ? linkIcon(link.kind, false) : null}
            </>
          )}
        </a>
      ))}
    </div>
  );
}
