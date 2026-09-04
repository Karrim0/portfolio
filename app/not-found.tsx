"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="v3-not-found">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="v3-not-found-card"
      >
        <span>404 / ROUTE NOT FOUND</span>
        <h1>This page is outside the system.</h1>
        <p>The route may have moved or never existed. Head back to the portfolio and continue from there.</p>
        <div>
          <Link href="/"><Home size={15} /> Go home</Link>
          <button type="button" onClick={() => window.history.back()}><ArrowLeft size={15} /> Go back</button>
        </div>
      </motion.div>
    </main>
  );
}
