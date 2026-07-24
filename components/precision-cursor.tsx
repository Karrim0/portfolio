"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], summary, input[type='checkbox'], input[type='radio'], select";
const TEXT_SELECTOR = "input:not([type]), input[type='text'], input[type='email'], input[type='search'], textarea, [contenteditable='true']";

export function PrecisionCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add("precision-cursor-enabled");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const render = () => {
      const easing = reducedMotion.matches ? 1 : 0.32;
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };

    const updateTargetState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      cursor.classList.toggle("is-interactive", Boolean(element?.closest(INTERACTIVE_SELECTOR)));
      cursor.classList.toggle("is-text", Boolean(element?.closest(TEXT_SELECTOR)));
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
      updateTargetState(event.target);
    };

    const onPointerDown = () => cursor.classList.add("is-pressed");
    const onPointerUp = () => cursor.classList.remove("is-pressed");
    const onPointerLeave = () => cursor.classList.remove("is-visible");
    const onPointerEnter = () => cursor.classList.add("is-visible");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    document.documentElement.addEventListener("mouseenter", onPointerEnter);

    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("precision-cursor-enabled");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.documentElement.removeEventListener("mouseenter", onPointerEnter);
    };
  }, []);

  return (
    <div ref={cursorRef} className="precision-cursor" aria-hidden="true">
      <span className="precision-cursor-ring" />
      <span className="precision-cursor-cross precision-cursor-cross-x" />
      <span className="precision-cursor-cross precision-cursor-cross-y" />
      <span className="precision-cursor-dot" />
    </div>
  );
}
