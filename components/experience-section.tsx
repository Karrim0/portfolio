"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, User, FolderGit2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper, SectionHeading } from "./section-wrapper";

const typeIcons = {
  work: Briefcase,
  freelance: User,
  project: FolderGit2,
};

const typeColors = {
  work: "bg-primary/10 text-primary border-primary/20",
  freelance: "bg-primary/10 text-primary border-primary/20",
  project: "bg-secondary text-muted-foreground border-border",
};

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="experience" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="04" title="Experience" />

        <div ref={ref} className="relative mx-auto max-w-2xl">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-border to-transparent"
          />

          <div className="flex flex-col gap-10">
            {portfolioData.experience.map((exp, i) => {
              const Icon = typeIcons[exp.type] ?? Briefcase;
              const isLast = i === portfolioData.experience.length - 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative flex gap-8 pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-3 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.15 + 0.25 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-[0_0_16px_rgba(0,255,135,0.08)]"
                    >
                      <Icon size={16} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/20 hover:shadow-[0_0_40px_rgba(0,255,135,0.04)]">
                    {/* Header row */}
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                            typeColors[exp.type]
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="mb-1 text-base font-semibold">{exp.role}</h3>
                    <p className="mb-3 text-sm text-primary">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
