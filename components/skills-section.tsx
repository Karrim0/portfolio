"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, SectionWrapper } from "./section-wrapper";

const stackRows = [
  { label: "Frontend", values: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix / shadcn"] },
  { label: "Backend & data", values: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Supabase", "MySQL"] },
  { label: "Web quality", values: ["Responsive UX", "Accessibility", "RTL / LTR", "SEO", "Performance"] },
  { label: "Delivery", values: ["Git & GitHub", "Docker", "Vercel", "TypeScript", "ESLint", "Build checks"] },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="capabilities" className="section-block">
      <div className="page-shell">
        <SectionHeading
          index="02"
          eyebrow="Web capabilities"
          title="Strong frontend engineering, connected to the systems behind the interface."
          description="The focus is modern web development: React and Next.js architecture, API-driven flows, databases, admin systems, multilingual products, quality, and production delivery."
        />

        <div ref={ref} className="capabilities-layout">
          <div className="capability-list">
            {portfolioData.capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.08 }}
                className="capability-row"
              >
                <span className="capability-number">{capability.number}</span>
                <div className="capability-copy">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="capability-tags">
                    {capability.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <ArrowUpRight className="capability-arrow" size={20} />
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="stack-console"
          >
            <div className="stack-console-top">
              <span>WEB STACK / WORKING SET</span>
              <i />
            </div>
            <div className="stack-command">
              <span>$</span> ship-web-product --accessible --reliable --production
            </div>
            <div className="stack-rows">
              {stackRows.map((row, index) => (
                <div className="stack-row" key={row.label}>
                  <div><span>0{index + 1}</span><strong>{row.label}</strong></div>
                  <p>{row.values.join(" · ")}</p>
                </div>
              ))}
            </div>

            <div className="stack-native-note">
              <div className="stack-native-icon"><Smartphone size={15} /></div>
              <div>
                <span>{portfolioData.mobileSignal.title}</span>
                <p>{portfolioData.mobileSignal.text}</p>
                <small>{portfolioData.mobileSignal.stack.join(" · ")}</small>
              </div>
            </div>

            <div className="stack-console-bottom">
              <span className="console-status" />
              Web-first, production-focused
            </div>
          </motion.aside>
        </div>
      </div>
    </SectionWrapper>
  );
}
