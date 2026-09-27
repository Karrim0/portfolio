"use client";
import { useEffect, useRef, useState } from "react";
import { SignatureMark } from "./signature";
import type { Locale } from "@/data/site";
export function Intro({ locale }: { locale: Locale }) {
  const skipped = useRef(false);
  const [phase, setPhase] = useState<"hidden" | "enter" | "exit">("hidden");
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("kh-intro-v5") === "seen";
    } catch {}
    if (
      seen ||
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      location.hash
    )
      return;
    const frame = requestAnimationFrame(() => setPhase("enter"));
    const leave = setTimeout(() => {
      if (!skipped.current) setPhase("exit");
    }, 1650);
    const end = setTimeout(() => setPhase("hidden"), 2350);
    try {
      sessionStorage.setItem("kh-intro-v5", "seen");
    } catch {}
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(leave);
      clearTimeout(end);
    };
  }, []);
  if (phase === "hidden") return null;
  return (
    <div
      className={`intro intro-${phase}`}
      role="region"
      aria-label={
        locale === "ar" ? "مقدمة كريم حنفي" : "Kareem Hanafy introduction"
      }
    >
      <div className="intro-top">
        <span>PORTFOLIO / KAREEM HANAFY</span>
        <button
          onClick={() => {
            skipped.current = true;
            setPhase("hidden");
          }}
        >
          {locale === "ar" ? "تخطّي المقدمة" : "Skip intro"} ↗
        </button>
      </div>
      <div className="intro-center">
        <div className="intro-mark">
          <SignatureMark />
        </div>
        <div className="intro-name">
          <span>KAREEM</span>
          <span>
            HANAFY<span className="accent">.</span>
          </span>
        </div>
      </div>
      <div className="intro-bottom">
        <span>FULL-STACK WEB DEVELOPER</span>
        <span>INTERFACE. SYSTEM. PRODUCT.</span>
      </div>
      <div className="intro-line" />
    </div>
  );
}
