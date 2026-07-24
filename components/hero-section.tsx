"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const { personal, heroLayers } = portfolioData;
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />
      <div className="hero-noise" />

      <div className="hero-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="hero-copy"
        >
          <motion.div variants={reveal} className="hero-profile-strip">
            <span className="hero-profile-photo">
              <Image
                src={personal.photo}
                alt=""
                fill
                priority
                sizes="48px"
                className="object-cover object-top"
              />
            </span>

            <span className="hero-profile-identity">
              <strong>{personal.name}</strong>
              <small>{personal.title}</small>
            </span>

            <span className="hero-profile-availability">
              <i className="availability-dot" />
              Open to web opportunities
            </span>
          </motion.div>

          <motion.p variants={reveal} className="hero-kicker">
            Product-minded web engineering <span /> {personal.location}
          </motion.p>

          <motion.h1 variants={reveal}>{personal.headline}</motion.h1>

          <motion.p variants={reveal} className="hero-intro">
            {personal.bio}
          </motion.p>

          <motion.div variants={reveal} className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore selected web work <ArrowDownRight size={16} />
            </a>
            <a href={`mailto:${personal.email}`} className="button button-secondary">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div variants={reveal} className="hero-footnote">
            <span>Client work + independent products</span>
            <span>React · Next.js · TypeScript · Node.js · PostgreSQL</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="hero-system"
          aria-label="Kareem's web product engineering layers"
        >
          <div className="system-orbit system-orbit-large" />
          <div className="system-orbit system-orbit-small" />
          <div className="system-core">
            <span>WEB</span>
            <strong>PRODUCT</strong>
          </div>

          <div className="system-panel">
            <div className="system-panel-head">
              <div>
                <span>Kareem&apos;s engineering approach</span>
                <strong>One connected web product</strong>
              </div>
              <ArrowUpRight size={18} />
            </div>

            <div className="system-layers">
              {heroLayers.map((layer) => (
                <div className="system-layer" key={layer.number}>
                  <span>{layer.number}</span>
                  <div>
                    <small>{layer.label}</small>
                    <p>{layer.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <span className="system-label system-label-top">Frontend</span>
          <span className="system-label system-label-right">Backend</span>
          <span className="system-label system-label-bottom">Data</span>
        </motion.div>
      </div>

      <a href="#work" className="hero-scroll" aria-label="Scroll to selected work">
        <span>Scroll to work</span>
        <ArrowDownRight size={16} />
      </a>
    </section>
  );
}
