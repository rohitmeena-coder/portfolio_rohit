"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type GhProfile = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
};

export default function GithubStats() {
  const [gh, setGh] = useState<GhProfile | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.github}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then(setGh)
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="section-pad relative bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow">06 · GitHub</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Commits don&apos;t <span className="text-gradient">lie.</span>
        </h2>

        {!error && gh && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-6 font-mono text-sm text-muted"
          >
            <span>
              <span className="text-ink">{gh.public_repos}</span> public repos
            </span>
            <span>
              <span className="text-ink">{gh.followers}</span> followers
            </span>
            <span>
              <span className="text-ink">{gh.following}</span> following
            </span>
          </motion.div>
        )}
        {error && (
          <p className="mt-8 text-sm text-muted">
            Live stats need a real GitHub username — set <code className="text-electric-soft">profile.github</code>{" "}
            in <code className="text-electric-soft">lib/data.ts</code>.
          </p>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="glass overflow-hidden rounded-2xl p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${profile.github}&show_icons=true&theme=transparent&hide_border=true&title_color=8B5CF6&text_color=9198A8&icon_color=2E7CF6`}
              alt="GitHub stats"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass overflow-hidden rounded-2xl p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.github}&layout=compact&theme=transparent&hide_border=true&title_color=8B5CF6&text_color=9198A8`}
              alt="Top languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass overflow-hidden rounded-2xl p-4 lg:col-span-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${profile.github}&theme=transparent&hide_border=true&ring=8B5CF6&fire=2E7CF6&currStreakLabel=F5F5F7`}
              alt="GitHub streak"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
