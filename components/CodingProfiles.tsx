"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { codingProfiles } from "@/lib/data";

export default function CodingProfiles() {
  return (
    <section id="leetcode" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow">06 · Competitive Programming</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Solving problems, <span className="text-gradient">one judge at a time.</span>
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
          {codingProfiles.map((p, i) => (
            <motion.a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass group flex flex-col justify-between rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-medium">{p.platform}</h3>
                <FiExternalLink
                  size={15}
                  className="text-muted transition-colors group-hover:text-electric-soft"
                />
              </div>
              <p className="mt-6 font-mono text-sm text-gradient">{p.stat}</p>
              <p className="mt-1 text-xs text-muted">@{p.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
