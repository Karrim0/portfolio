"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Monitor, Smartphone } from "lucide-react";
import { useRef } from "react";
import type { PortfolioProject } from "@/data/portfolio";
import styles from "./gym-crew-spotlight.module.css";

export function GymCrewSpotlight({ project }: { project: PortfolioProject }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();

  const liveLink = project.links.find((link) => link.kind === "live");
  const repositoryLinks = project.links.filter((link) => link.kind === "github");

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={styles.spotlight}
      aria-labelledby="gym-crew-title"
    >
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Web-first product · Native companion</span>
          <h3 id="gym-crew-title">One product, engineered across web and mobile.</h3>
        </div>
        <span className={styles.status}>{project.status}</span>
      </div>

      <div className={styles.layout}>
        <div className={styles.visualColumn}>
          <div className={styles.browserFrame}>
            <div className={styles.browserBar} aria-hidden="true">
              <span />
              <span />
              <span />
              <div>gym-crew-one.vercel.app</div>
            </div>
            <div className={styles.imageFrame}>
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.productSplit}>
            <div>
              <Monitor size={16} aria-hidden="true" />
              <span>Primary product</span>
              <strong>Next.js web platform</strong>
            </div>
            <div>
              <Smartphone size={16} aria-hidden="true" />
              <span>Product extension</span>
              <strong>React Native companion</strong>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <span className={styles.projectLabel}>Gym Crew</span>
          <h4>Built end-to-end, then extended for the gym floor.</h4>
          <p>{project.description}</p>

          <div className={styles.proofGrid}>
            <div>
              <span>Web product</span>
              <p>Training plans, personal and group workflows, progress tracking, dashboards, authentication, and shared product data.</p>
            </div>
            <div>
              <span>Native companion</span>
              <p>Focused in-gym logging, Expo and React Native delivery, offline-first flows, and the same Supabase backend.</p>
            </div>
          </div>

          <div className={styles.tags}>
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          <div className={styles.links}>
            {liveLink ? (
              <a href={liveLink.href} target="_blank" rel="noreferrer" className={styles.primaryLink}>
                Open web app <ArrowUpRight size={16} />
              </a>
            ) : null}

            {repositoryLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
                <Github size={16} /> {link.label}
              </a>
            ))}
          </div>

          <p className={styles.note}>Android preview is being prepared as a direct beta download.</p>
        </div>
      </div>
    </motion.article>
  );
}
