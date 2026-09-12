"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { counters, timeline, education } from "@/lib/data";

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, { duration: 1.1, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.floor(v).toString(); } });
    return () => controls.stop();
  }, [inView, value]);
  return <div className="glass flex min-h-[108px] flex-col justify-center border-l border-l-white/50 px-4 py-4 text-center"><div className="font-mono text-3xl font-semibold tabular-nums text-gradient"><span ref={ref}>0</span><span>+</span></div><p className="mt-1 font-mono text-[10px] text-muted">{label}</p></div>;
}

export default function About() {
  return (
    <section id="about" className="section-pad relative py-14 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-stretch">
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-3"><span className="eyebrow text-[#b8bec7]">01 / about</span><span className="font-mono text-[10px] text-muted">IIT PATNA / 2024–28</span></div>
            <div className="grid gap-5 sm:grid-cols-2">
              {timeline.map((item, i) => <motion.div key={`${item.year}-${item.title}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .3, delay: i * .04 }} className="border-b border-white/10 pb-4 last:border-0"><span className="font-mono text-[10px] text-electric-soft">{item.year}</span><h3 className="mt-1 font-display text-base font-medium text-ink">{item.title}</h3><p className="mt-1 text-xs leading-5 text-muted">{item.desc}</p></motion.div>)}
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">{counters.map((counter) => <Counter key={counter.label} {...counter} />)}</div>
        <div className="mt-8 grid gap-2 sm:grid-cols-2">{education.map((item) => <div key={item.school} className="glass min-h-[88px] p-4"><span className="font-mono text-[10px] text-muted">{item.year}</span><h4 className="mt-1 font-display text-sm font-medium text-ink">{item.school}</h4><p className="mt-1 text-xs text-muted">{item.degree}</p></div>)}</div>
      </div>
    </section>
  );
}
