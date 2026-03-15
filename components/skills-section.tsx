"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper, SectionHeading } from "./section-wrapper";

const categories = [
  {
    key: "frontend" as const,
    label: "Frontend",
    icon: Code2,
    description: "Core technologies I work with daily",
    // green dot — primary stack
    dotClass: "bg-primary",
  },
  {
    key: "tools" as const,
    label: "Tools",
    icon: Wrench,
    description: "My development toolkit",
    // muted dot — supporting tools
    dotClass: "bg-muted-foreground/50",
  },
  {
    key: "learning" as const,
    label: "Currently Learning",
    icon: BookOpen,
    description: "Expanding my skillset",
    // purple dot — in progress
    dotClass: "bg-violet-500",
  },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="02" title="Skills & Expertise" />

        <div ref={ref} className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            const skills = portfolioData.skills[cat.key];

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: catIndex * 0.15,
                  ease: "easeOut",
                }}
                className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,255,135,0.05)]"
              >
                {/* Card header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{cat.label}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Chips — replace proficiency dots */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.15 + skillIndex * 0.06,
                      }}
                      className="flex items-center gap-1.5 rounded-md border border-border/50 bg-secondary/60 px-2.5 py-1.5 text-xs text-foreground/80 transition-all hover:border-primary/30 hover:text-foreground"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${cat.dotClass} shrink-0`}
                      />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Core stack
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            Tools & workflow
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Currently learning
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
