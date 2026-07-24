"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="grid min-h-screen place-items-center px-5">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">404 / Route not found</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-7xl">This page is outside the system.</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
          The route may have moved or never existed. Head back to the portfolio and continue from there.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="button button-primary"><Home size={15} /> Go home</Link>
          <button type="button" onClick={() => window.history.back()} className="button button-secondary"><ArrowLeft size={15} /> Go back</button>
        </div>
      </motion.div>
    </main>
  );
}
