"use client";

import { motion } from "framer-motion";

import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group flex h-full flex-col border border-white/10 bg-surface/90 p-3 transition-colors hover:border-[#b5f36b]/60"
    >
      <div className="relative h-36 overflow-hidden border border-white/10 bg-[#18222a]">
        <img src={project.imageUrl} alt={`${project.title} project preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <span className="absolute bottom-2 left-2 bg-[#0d1117]/85 px-2 py-1 font-mono text-[9px] text-[#b5f36b]">WORK / {String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight text-ink">{project.title}</h3>
          <span className="shrink-0 font-mono text-[10px] text-muted">0{index + 1}</span>
        </div>
        <p className="mt-2 text-xs leading-5 text-muted">{project.description}</p>
        <ul className="mt-3 space-y-1.5">
          {project.features.slice(0, 2).map((feature) => <li key={feature} className="flex gap-2 text-[11px] leading-4 text-muted"><span className="mt-1.5 h-1 w-1 shrink-0 bg-[#ff8a5b]" />{feature}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.stack.map((stack) => <span key={stack} className="border border-white/10 px-2 py-1 font-mono text-[9px] text-muted">{stack}</span>)}
        </div>
        <div className="mt-4 flex gap-2">
          {project.demoUrl && project.demoUrl !== "#" && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center bg-[#b5f36b] py-2 text-[11px] font-semibold text-[#0d1117] hover:bg-[#d8fca8]">Open demo</a>}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center border border-white/15 py-2 text-[11px] font-semibold text-ink hover:border-[#b5f36b] hover:text-[#b5f36b]">View source</a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5">
          <div><span className="eyebrow">03 / selected work</span><h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Built to be used.</h2></div>
          <p className="hidden max-w-xs text-right text-xs leading-5 text-muted sm:block">A small set of systems, interfaces, and experiments with a bias toward shipping.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
