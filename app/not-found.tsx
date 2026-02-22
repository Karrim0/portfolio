"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        {/* Large 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-8xl font-bold text-primary md:text-9xl"
        >
          404
        </motion.h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Page not found
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            {"The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,255,135,0.2)]"
          >
            <Home size={14} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <ArrowLeft size={14} />
            Go Back
          </button>
        </div>

        {/* Decorative element */}
        <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      </motion.div>
    </div>
  )
}
