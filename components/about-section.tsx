"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Zap, Eye, BookMarked } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper, SectionHeading } from "./section-wrapper";

const techIcons: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Framer Motion":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Three.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
};

// Different icon per fact — more personality than 3× same Sparkles
const factIcons = [Zap, Eye, BookMarked];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const allSkills = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.tools,
  ];

  return (
    <SectionWrapper id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="01" title="About Me" />

        <div ref={ref} className="grid gap-16 lg:grid-cols-5">
          {/* Photo + location */}
          <div className="flex flex-col items-center gap-6 lg:col-span-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glow border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-sm" />

              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-secondary">
                <Image
                  src={portfolioData.personal.photo}
                  alt={`Photo of ${portfolioData.personal.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>

              {/* Availability dot ON the photo — bottom-right corner */}
              {portfolioData.personal.availableForWork && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/90 px-2.5 py-1 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-[10px] font-medium text-foreground">
                    Available
                  </span>
                </div>
              )}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin size={14} className="text-primary" />
              {portfolioData.personal.location}
            </motion.div>
          </div>

          {/* Bio + facts + stack */}
          <div className="flex flex-col gap-10 lg:col-span-3">

            {/* Bio — different from hero, more personal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I build things I'm proud to put my name on — fast, clean, and built to last.
            </motion.p>

            {/* Fun facts — each with a distinct icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              {portfolioData.funFacts.map((fact, i) => {
                const Icon = factIcons[i] ?? Zap;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/50 px-4 py-3 transition-colors hover:border-primary/20"
                  >
                    <Icon size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{fact}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-center gap-2 rounded-md border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                  >
                    {techIcons[skill] && (
                      <Image
                        src={techIcons[skill]}
                        alt={skill}
                        width={14}
                        height={14}
                        className="opacity-70 transition-opacity group-hover:opacity-100"
                        unoptimized
                      />
                    )}
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}