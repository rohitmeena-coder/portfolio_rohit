"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const LINKS = [["01", "About", "#about"], ["02", "Skills", "#skills"], ["03", "Work", "#projects"], ["04", "Evidence", "#achievements"], ["05", "Contact", "#contact"]] as const;

function BrandMark() {
  return <img src="/icons/favicon.svg" alt="Rohit Kumar Meena" className="h-8 w-8" />;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="site-rail fixed inset-y-0 left-0 z-[100] hidden w-[88px] flex-col border-r border-white/10 bg-[#0b0f14] lg:flex">
        <a href="#home" className="flex h-24 items-center justify-center border-b border-white/10" aria-label="Home"><BrandMark /></a>
        <nav className="flex min-h-0 flex-1 flex-col items-center justify-between overflow-y-auto px-2 py-12">
          {LINKS.map(([number, label, href]) => <a key={href} href={href} className="group flex w-full flex-col items-center gap-1.5 text-muted transition-colors hover:text-white" title={label}><span className="font-mono text-[9px] text-muted opacity-70">{number}</span><span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] tracking-[.08em]">{label}</span></a>)}
        </nav>
        <div className="h-24 border-t border-white/10" />
      </aside>

      <header className="site-mobile-header fixed left-0 right-0 top-0 z-[100] flex h-16 items-center justify-between border-b border-white/10 bg-[#0b0f14]/95 px-5 backdrop-blur-md lg:hidden">
        <a href="#home" aria-label="Home"><BrandMark /></a>
        <button onClick={() => setOpen(true)} className="border border-white/15 px-3 py-2 font-mono text-[10px] text-ink">Index</button>
      </header>

      <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="site-mobile-menu fixed inset-0 z-[200] bg-[#0b0f14] p-6 lg:hidden"><div className="flex justify-between border-b border-white/10 pb-5"><span className="font-mono text-xs">SITE INDEX</span><button onClick={() => setOpen(false)} className="font-mono text-xs text-muted">Close</button></div><nav className="mt-16 flex flex-col gap-6">{LINKS.map(([number, label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 font-display text-4xl text-ink"><span className="font-mono text-xs text-muted">{number}</span>{label}</a>)}</nav></motion.div>}</AnimatePresence>
    </>
  );
}
