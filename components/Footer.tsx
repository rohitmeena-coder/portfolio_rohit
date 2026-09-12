import { profile } from "@/lib/data";

const LINKS = [
  { label: "GitHub", url: profile.github },
  { label: "LinkedIn", url: profile.linkedin },
  { label: "Instagram", url: profile.instagram },
  { label: "X", url: profile.twitter },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div><span className="font-mono text-sm">RM<span className="text-[#b5f36b]">/</span>26</span><p className="mt-2 text-[11px] text-muted">© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] text-muted">{LINKS.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="hover:text-[#b5f36b]">{link.label}</a>)}</nav>
      </div>
    </footer>
  );
}
