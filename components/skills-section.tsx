"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Compass, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper, SectionHeading } from "./section-wrapper";

const categories = [
  {
    key: "frontend" as const,
    label: "Core Frontend",
    icon: Code2,
    description: "Main technologies I use to build interfaces",
    dotClass: "bg-primary",
  },
  {
    key: "frontendEngineering" as const,
    label: "Frontend Engineering",
    icon: Layers,
    description: "How I structure and improve frontend work",
    dotClass: "bg-emerald-400",
  },
  {
    key: "tools" as const,
    label: "Tools",
    icon: Wrench,
    description: "My development workflow and toolkit",
    dotClass: "bg-muted-foreground/50",
  },
  {
    key: "exploring" as const,
    label: "Currently Exploring",
    icon: Compass,
    description: "Technologies I’m expanding into",
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

        <div ref={ref} className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            const skills = portfolioData.skills[cat.key] ?? [];

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
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">{cat.label}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>

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
className="flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border/50 bg-secondary/60 px-2.5 py-1.5 text-xs text-foreground/80 transition-all hover:border-primary/30 hover:text-foreground"                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${cat.dotClass}`}
                      />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

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
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Frontend practices
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            Tools & workflow
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Currently exploring
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}