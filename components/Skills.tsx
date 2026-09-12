"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow">02 · Skills</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          A stack built for <span className="text-gradient">shipping fast.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass border-t-2 border-t-[#b5f36b] p-7"
            >
              <h3 className="font-display text-lg font-medium text-ink">{group.category}</h3>
              <div className="mt-6 space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-ink/90">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: si * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-grad-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
