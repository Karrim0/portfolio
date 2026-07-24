"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Quote, Star } from "lucide-react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, SectionWrapper } from "./section-wrapper";
import styles from "./experience-section.module.css";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();
  const { experience, feedback } = portfolioData;

  return (
    <SectionWrapper id="experience" className="section-block section-block-muted">
      <div className="page-shell">
        <SectionHeading
          index="03"
          eyebrow="Professional experience"
          title="One year of professional freelance delivery—built on a serious product foundation."
          description="Paid client work is the headline. The independent projects that came before it show the deliberate engineering practice behind that professional year."
        />

        <div ref={ref} className={styles.experienceShell}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7 }}
            className={styles.summary}
          >
            <div className={styles.summaryHeader}>
              <div>
                <span className={styles.period}>{experience.period}</span>
                <h3>{experience.role}</h3>
                <p className={styles.company}>{experience.company}</p>
              </div>
              <span className={styles.availability}>Professional client work</span>
            </div>

            <p className={styles.description}>{experience.description}</p>

            <div className={styles.metrics} aria-label="Professional experience summary">
              {experience.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className={styles.timeline}>
            {experience.timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, x: 22 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 22 }}
                transition={{ duration: 0.58, delay: reduceMotion ? 0 : 0.08 + index * 0.1 }}
                className={styles.timelineItem}
              >
                <div className={styles.timelineRail} aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeading}>
                    <div>
                      <span>{item.period}</span>
                      <h4>{item.title}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                    {item.badge ? <strong>{item.badge}</strong> : null}
                  </div>
                  <p className={styles.timelineDescription}>{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}><Check size={13} /> <span>{highlight}</span></li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className={styles.proofGrid}>
          {experience.proof.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.52, delay: reduceMotion ? 0 : 0.18 + index * 0.08 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <small>{item.projects}</small>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className={styles.feedback}
        >
          <div className={styles.feedbackIdentity}>
            <div className={styles.feedbackLabel}><Quote size={16} /> Verified client feedback</div>
            <strong>{feedback.author}</strong>
            <span>{feedback.context}</span>
          </div>

          <blockquote dir="rtl" lang="ar">“{feedback.quote}”</blockquote>

          <div className={styles.rating} aria-label={`${feedback.score} client rating`}>
            <span>{feedback.score}</span>
            <div aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={13} fill="currentColor" />)}
            </div>
          </div>
        </motion.div>

        <a href={`mailto:${portfolioData.personal.email}`} className={styles.experienceLink}>
          Discuss a web role or project <ArrowUpRight size={16} />
        </a>
      </div>
    </SectionWrapper>
  );
}
