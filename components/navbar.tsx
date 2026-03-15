"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-wider text-primary"
        >
          {`<${portfolioData.personal.name.split(" ")[0]} />`}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative z-10 block rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-md bg-primary/10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,255,135,0.15)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}