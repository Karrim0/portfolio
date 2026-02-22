"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, User, FolderGit2 } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const typeIcons = {
  work: Briefcase,
  freelance: User,
  project: FolderGit2,
}

const typeColors = {
  work: "bg-primary/10 text-primary border-primary/20",
  freelance: "bg-accent text-accent-foreground border-accent-foreground/20",
  project: "bg-secondary text-muted-foreground border-border",
}

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper id="experience" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="04" title="Experience" />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-border to-transparent md:left-1/2"
          />

          <div className="flex flex-col gap-16">
            {portfolioData.experience.map((exp, i) => {
              const Icon = typeIcons[exp.type] ?? Briefcase
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-0 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-[0_0_20px_rgba(0,255,135,0.1)]"
                    >
                      <Icon size={18} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 flex-1 md:ml-0 ${
                      isLeft ? "md:pr-20 md:text-right" : "md:pl-20"
                    }`}
                  >
                    <div
                      className={`rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/20 ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-3 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span
                          className={`rounded-full border px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                            typeColors[exp.type]
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold">{exp.role}</h3>
                      <p className="mb-3 text-sm text-primary">{exp.company}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for the other side */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
