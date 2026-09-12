"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3 bg-white/70" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[1fr_260px] lg:items-center lg:px-24 lg:py-24">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .05 }} className="max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-.055em] text-[#f5f5f7] sm:text-7xl lg:text-[6.8rem]">
            Rohit Kumar<br />Meena.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .15 }} className="mt-7 max-w-xl text-base leading-7 text-[#a5adb8] sm:text-lg">
            Mathematics and Computing student at IIT Patna. I build software that makes complex systems easier to use, measure, and improve.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .25 }} className="mt-9 flex flex-wrap gap-2">
            <a href="#projects" data-cursor="pointer" className="btn-primary">See selected work</a>
            <a href={profile.resumeUrl} download data-cursor="pointer" className="btn-ghost">Download resume</a>
            <a href="#contact" data-cursor="pointer" className="btn-ghost">Contact Rohit</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55, delay: .2 }} className="w-full max-w-[260px] justify-self-center">
          <div className="aspect-[4/5] overflow-hidden border border-white/20 bg-[#151a20] p-2">
            <img src="/profile.jpg" alt="Rohit Kumar Meena" className="h-full w-full object-cover grayscale" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
