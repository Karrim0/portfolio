"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, SectionWrapper } from "./section-wrapper";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();
  const { personal, about, social } = portfolioData;

  return (
    <SectionWrapper id="about" className="section-block">
      <div className="page-shell">
        <SectionHeading
          index="04"
          eyebrow="About"
          title="A web developer who thinks beyond the visible screen."
          description="My main craft is web engineering. I care about the interface, but also the API states, data, permissions, content operations, SEO, performance, and maintenance that make the experience trustworthy."
        />

        <div ref={ref} className="about-layout">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -22 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -22 }}
            transition={{ duration: 0.7 }}
            className="about-portrait-wrap"
          >
            <div className="about-portrait">
              <Image
                src={personal.photo}
                alt={`Portrait of ${personal.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <div className="portrait-gradient" />
              <div className="portrait-status">
                <span className="availability-dot" />
                Open to web opportunities
              </div>
            </div>
            <div className="portrait-meta">
              <span><MapPin size={14} /> {personal.location}</span>
              <span>GMT+3</span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 22 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 22 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="about-copy"
          >
            <p className="about-lead">{about.lead}</p>
            <div className="about-paragraphs">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="about-principles">
              {about.principles.map((principle, index) => (
                <div key={principle.title}>
                  <span>0{index + 1}</span>
                  <strong>{principle.title}</strong>
                  <p>{principle.text}</p>
                </div>
              ))}
            </div>

            <div className="about-links">
              <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
              <a href={social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
