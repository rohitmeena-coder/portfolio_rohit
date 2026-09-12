"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow">04 · Certifications</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Credentials that <span className="text-gradient">back the work.</span>
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass relative flex min-h-[190px] flex-col overflow-hidden p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white p-1">
                <img src={cert.logo} alt={`${cert.title.split(" ")[0]} logo`} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-4 font-display text-base font-medium leading-snug text-ink">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted">{cert.company} · {cert.issuer}</p>
              <span className="mt-3 inline-block font-mono text-[11px] text-electric-soft">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
