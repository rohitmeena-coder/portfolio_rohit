"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-electric/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[480px] w-[480px] rounded-full bg-violet/20 blur-[130px]" />

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="eyebrow"
      >
        error 404
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-7xl font-semibold text-gradient sm:text-8xl"
      >
        ¬∃(page)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-sm text-sm text-muted"
      >
        No proof exists for a page at this route. Let&apos;s get you back to solid ground.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
