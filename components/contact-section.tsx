"use client";

import emailjs from "@emailjs/browser";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./section-wrapper";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_n13gtdk";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_nf9ejta";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "yDhIDrL00NYW2rN_l";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || status === "sending") return;

    const formData = new FormData(formRef.current);
    if (formData.get("company_website")) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      formRef.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" className="contact-section">
      <div ref={ref} className="page-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75 }}
          className="contact-panel"
        >
          <div className="contact-glow" />
          <div className="contact-copy">
            <div className="section-kicker contact-kicker"><span>05</span><span>Contact</span></div>
            <h2>Have a web product to build, improve, or finally ship?</h2>
            <p>Share the current product, the users, and the web challenge. I will reply with a clear technical next step.</p>
            <a className="contact-email" href={`mailto:${portfolioData.personal.email}`}>
              {portfolioData.personal.email} <ArrowUpRight size={18} />
            </a>
            <div className="contact-socials">
              <SocialLink href={portfolioData.social.linkedin} label="LinkedIn" icon={<Linkedin size={15} />} />
              <SocialLink href={portfolioData.social.github} label="GitHub" icon={<Github size={15} />} />
              <SocialLink href={`mailto:${portfolioData.personal.email}`} label="Email" icon={<Mail size={15} />} />
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-head">
              <span>PROJECT BRIEF</span>
              <span>Usually replies within 24–48 hours</span>
            </div>
            <div className="form-grid">
              <Field label="Name" name="from_name" type="text" placeholder="Your name" autoComplete="name" />
              <Field label="Email" name="from_email" type="email" placeholder="you@company.com" autoComplete="email" />
            </div>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="company_website">Company website</label>
              <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" rows={7} required placeholder="What web product are you building, and where do you need help?" />
            </div>
            <button type="submit" disabled={status === "sending"} className="contact-submit">
              {status === "sending" ? "Sending..." : "Send project details"}
              {status !== "sending" ? <Send size={16} /> : null}
            </button>
            <p aria-live="polite" className={`form-status form-status-${status}`}>
              {status === "sent" ? "Message sent. I’ll get back to you soon." : null}
              {status === "error" ? "The form could not send. Please use the direct email link." : null}
            </p>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function Field({ label, name, type, placeholder, autoComplete }: {
  label: string;
  name: string;
  type: "text" | "email";
  placeholder: string;
  autoComplete: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {icon} {label}
    </a>
  );
}
