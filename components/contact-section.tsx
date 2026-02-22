"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react"
import emailjs from "@emailjs/browser"
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const EMAILJS_SERVICE_ID  = "service_n13gtdk"
const EMAILJS_TEMPLATE_ID = "template_nf9ejta"
const EMAILJS_PUBLIC_KEY  = "yDhIDrL00NYW2rN_l"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus("sending")

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus("sent")
      formRef.current.reset()
      setTimeout(() => setStatus("idle"), 4000)
    } catch (err) {
      console.error(err)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const socialLinks = [
    { icon: Github,   href: portfolioData.social.github,              label: "GitHub" },
    { icon: Linkedin, href: portfolioData.social.linkedin,            label: "LinkedIn" },
    { icon: Twitter,  href: portfolioData.social.twitter,             label: "Twitter / X" },
    { icon: Mail,     href: `mailto:${portfolioData.personal.email}`, label: portfolioData.personal.email },
  ]

  return (
    <SectionWrapper id="contact" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="05" title="Get In Touch" />

        <div ref={ref} className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {"I'm always open to new opportunities and interesting projects. Whether you have a question, a proposal, or just want to say hi - my inbox is always open."}
            </p>

            {portfolioData.personal.availableForWork && (
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card px-4 py-3 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,135,0.04)]"
                  >
                    <Icon size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {link.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,255,135,0.2)] disabled:opacity-60"
              >
                {status === "sending" && "Sending..."}
                {status === "sent"    && "Message Sent! ✓"}
                {status === "error"   && "Failed, try again"}
                {status === "idle"    && (<><Send size={14} /> Send Message</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}