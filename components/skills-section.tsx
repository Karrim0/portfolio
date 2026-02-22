"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Wrench, BookOpen } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const categories = [
  {
    key: "frontend" as const,
    label: "Frontend",
    icon: Code2,
    description: "Core technologies I work with daily",
  },
  {
    key: "tools" as const,
    label: "Tools",
    icon: Wrench,
    description: "My development toolkit",
  },
  {
    key: "learning" as const,
    label: "Currently Learning",
    icon: BookOpen,
    description: "Expanding my skillset",
  },
]

const proficiencyMap: Record<string, number> = {
  React: 5,
  "Next.js": 5,
  TypeScript: 4,
  "Tailwind CSS": 5,
  "Framer Motion": 4,
  Git: 4,
  Figma: 3,
  "VS Code": 5,
  Vercel: 4,
  Postman: 3,
  "Three.js": 2,
  "Node.js": 2,
  GraphQL: 2,
}

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            i < level ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper id="skills" className="relative py-32">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="02" title="Skills & Expertise" />

        <div ref={ref} className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon
            const skills = portfolioData.skills[cat.key]

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

                <div className="flex flex-col gap-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.15 + skillIndex * 0.08,
                      }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-foreground/80">
                        {skill}
                      </span>
                      <ProficiencyDots
                        level={proficiencyMap[skill] ?? 3}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
