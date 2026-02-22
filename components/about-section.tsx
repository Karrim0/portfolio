"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
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
          {/* Photo + Info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Photo with glow border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto h-64 w-64 lg:mx-0"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-sm" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-secondary">
                <Image
                  src={portfolioData.personal.photo}
                  alt={`Photo of ${portfolioData.personal.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-start justify-center"
            >
              <MapPin size={14} className="text-primary" />
              {portfolioData.personal.location}
            </motion.div>
          </div>

          {/* Description + Fun Facts + Tech */}
          <div className="flex flex-col gap-10 lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {portfolioData.personal.bio}
            </motion.p>

            {/* Fun facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              {portfolioData.funFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/50 px-4 py-3"
                >
                  <Sparkles
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="text-sm text-foreground/80">{fact}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech stack icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {allSkills.map((skill) => (
                  <div
                    key={skill}
                    className="group relative flex items-center gap-2 rounded-md border border-border/50 bg-secondary/50 px-3 py-2 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
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
