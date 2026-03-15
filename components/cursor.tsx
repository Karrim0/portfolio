"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    // Scale ring on hoverable elements
    const onEnter = () => ring.classList.add("cursor-hover");
    const onLeave = () => ring.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Small solid dot — snaps instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ willChange: "transform" }}
      />
      {/* Larger ring — follows with lag */}
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 transition-[width,height,border-color] duration-200"
        style={{ willChange: "transform" }}
      />
      <style>{`
        body { cursor: none; }
        a, button, [role="button"] { cursor: none; }
        .cursor-ring.cursor-hover {
          width: 3rem;
          height: 3rem;
          border-color: rgb(var(--primary) / 0.7);
        }
      `}</style>
    </>
  );
}
