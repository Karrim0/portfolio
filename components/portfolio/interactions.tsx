"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SignatureMark } from "./signature";
import { ArrowUpRight, Menu, X, Copy, Check } from "lucide-react";
import { copy, site, homePath, type Locale } from "@/data/site";

export function Navigation({
  locale,
  slug,
  index = false,
}: {
  locale: Locale;
  slug?: string;
  index?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const c = copy[locale];
  const home = homePath(locale);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-button")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link
          href={home}
          className="brand"
          aria-label={
            locale === "ar" ? "كريم حنفي — الرئيسية" : "Kareem Hanafy — home"
          }
        >
          <span className="brand-symbol">
            <SignatureMark />
          </span>
          <span>
            KAREEM
            <br />
            HANAFY
          </span>
        </Link>
        <nav
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {(
            [
              ["work", c.work],
              ["about", c.about],
              ["approach", c.craft],
            ] as const
          ).map(([id, label]) => (
            <Link
              key={id}
              onClick={() => setOpen(false)}
              href={`${home}#${id}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href={`${home}#contact`}
            onClick={() => setOpen(false)}
            className="nav-contact"
          >
            {c.contact}
            <ArrowUpRight size={16} />
          </Link>
        </nav>
        <div className="nav-controls">
          <Link
            href={`${locale === "ar" ? "" : "/ar"}${slug ? `/work/${slug}` : index ? "/work" : locale === "ar" ? "/" : ""}`}
            lang={locale === "ar" ? "en" : "ar"}
            hrefLang={locale === "ar" ? "en" : "ar"}
            className="language"
          >
            {locale === "ar" ? "EN" : "عربي"}
          </Link>
          <button
            id="menu-button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? c.close : c.menu}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function EmailCopy({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const c = copy[locale];
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  }
  return (
    <div className="copy-wrap">
      <button
        className="copy-button"
        onClick={handleCopy}
        aria-label={c.copyEmail}
      >
        {status === "copied" ? <Check size={19} /> : <Copy size={19} />}
      </button>
      <span className="copy-feedback" role="status">
        {status === "copied"
          ? c.copied
          : status === "failed"
            ? c.copyFailed
            : ""}
      </span>
    </div>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
