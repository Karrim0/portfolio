"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Capabilities", href: "#capabilities", id: "capabilities" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

type NavigationTarget = "hero" | (typeof navLinks)[number]["id"];

type NavigationLock = {
  id: NavigationTarget;
  expiresAt: number;
};

function TechnicalArrow() {
  return (
    <span className="technical-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <circle className="technical-arrow-node" cx="5" cy="19" r="1.25" />
        <path className="technical-arrow-line" d="M6.5 17.5 18.5 5.5" />
        <path className="technical-arrow-head" d="M10.5 5.5h8v8" />
      </svg>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavigationTarget>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigationLock = useRef<NavigationLock | null>(null);
  const animationFrame = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const getHeaderOffset = useCallback(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    return (header?.getBoundingClientRect().height ?? 72) + 12;
  }, []);

  const updateActiveSection = useCallback(() => {
    const lock = navigationLock.current;

    if (lock && Date.now() < lock.expiresAt) {
      const lockedSection = document.getElementById(lock.id);
      const distanceFromTarget = lockedSection
        ? Math.abs(lockedSection.getBoundingClientRect().top - getHeaderOffset())
        : 0;

      if (distanceFromTarget > 18) {
        setActiveSection(lock.id);
        return;
      }

      navigationLock.current = null;
    }

    const headerOffset = getHeaderOffset();
    const marker = headerOffset + Math.min(window.innerHeight * 0.18, 150);
    const sections = ["hero", ...navLinks.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let nextSection: NavigationTarget = "hero";

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= marker) {
        nextSection = section.id as NavigationTarget;
      }

      if (rect.top <= marker && rect.bottom > marker) {
        nextSection = section.id as NavigationTarget;
        break;
      }
    }

    setActiveSection((current) => (current === nextSection ? current : nextSection));
  }, [getHeaderOffset]);

  useEffect(() => {
    const scheduleUpdate = () => {
      setScrolled(window.scrollY > 24);

      if (animationFrame.current !== null) return;

      animationFrame.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrame.current = null;
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const navigateToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: NavigationTarget,
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    navigationLock.current = {
      id,
      expiresAt: Date.now() + (reduceMotion ? 100 : 1600),
    };

    setActiveSection(id);
    setMobileOpen(false);

    const targetTop = section.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <header
  className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}
>
      <nav className="site-nav" aria-label="Primary navigation">
        <a
          href="#hero"
          className="brand-mark"
          aria-label="Kareem Hanafy — home"
          onClick={(event) => navigateToSection(event, "hero")}
        >
          <span className="brand-name">
            {portfolioData.personal.shortName}<span className="brand-dot">.</span>
          </span>
        </a>

        <div className="desktop-nav" aria-label="Page sections">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              aria-current={activeSection === link.id ? "location" : undefined}
              onClick={(event) => navigateToSection(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-contact" href={`mailto:${portfolioData.personal.email}`}>
          <span>Let&apos;s talk</span>
          <TechnicalArrow />
        </a>

        <button
          type="button"
          className="nav-menu-button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav-panel"
          >
            <div className="mobile-nav-inner">
              <p>Navigate</p>
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={activeSection === link.id ? "active" : ""}
                  aria-current={activeSection === link.id ? "location" : undefined}
                  onClick={(event) => navigateToSection(event, link.id)}
                >
                  <span>0{index + 1}</span>
                  {link.label}
                </a>
              ))}
              <a className="mobile-nav-contact" href={`mailto:${portfolioData.personal.email}`}>
                <span>{portfolioData.personal.email}</span>
                <TechnicalArrow />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
