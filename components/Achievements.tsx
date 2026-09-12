"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">05 · Achievements</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Milestones <span className="text-gradient">worth noting.</span>
        </h2>

        <div className="mt-14 space-y-0">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-6 border-l border-white/10 pb-10 pl-8 last:pb-0"
              style={{ marginLeft: "-1px" }}
            >
              <div className="relative">
                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#30363d] font-mono text-[10px] font-semibold text-[#a5adb8]">
                  {i + 1}
                </span>
              </div>
              <div>
                <span className="font-mono text-xs text-electric-soft">{a.year}</span>
                <h3 className="mt-1 font-display text-lg font-medium text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
