"use client";

import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow">07 · Testimonials</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Said by people <span className="text-gradient">I've worked with.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col rounded-2xl p-7"
            >
              <FiMessageSquare className="text-violet-soft" size={22} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-ink/85">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-sm font-medium">{t.name}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
