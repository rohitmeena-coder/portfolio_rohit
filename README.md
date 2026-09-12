# Rohit Meena — Portfolio

A dark, glassmorphic portfolio built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS**, and **Framer Motion**. Black / dark-grey base, electric-blue → violet
gradient accent, and a live node-graph animation in the hero as a nod to graph theory.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Almost everything on the site — name, tagline, projects, skills, certifications,
achievements, coding profiles, testimonials, social links — lives in one file:

```
lib/data.ts
```

Edit that file and every section updates. No need to touch component code for content
changes.

### Things you must personalize before deploying

| What | Where |
|---|---|
| GitHub username (powers live stats) | `profile.github` in `lib/data.ts` |
| Social links, email | `profile` object in `lib/data.ts` |
| Profile photo | drop a file at `public/profile.jpg` (falls back to "RM" monogram if missing) |
| Resume PDF | drop a file at `public/resume.pdf` |
| EmailJS keys (contact form) | copy `.env.example` → `.env.local` and fill in your service/template/public key from emailjs.com |
| OG image for social previews | `public/og-image.png` (1200×630) |
| App icons | `public/icons/icon-192.png`, `icon-512.png`, `apple-touch-icon.png` |

## Folder structure

```
rohit-portfolio/
├─ app/
│  ├─ layout.tsx        # fonts, SEO metadata, global chrome (loader, cursor, progress bar)
│  ├─ page.tsx           # assembles all sections in order
│  ├─ not-found.tsx      # custom 404
│  ├─ sitemap.ts         # auto-generated sitemap.xml
│  └─ globals.css        # design tokens, glass/neumorphism utilities
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ GraphNetwork.tsx   # signature canvas node-graph background
│  ├─ About.tsx
│  ├─ Skills.tsx
│  ├─ Projects.tsx
│  ├─ Certifications.tsx
│  ├─ Achievements.tsx
│  ├─ GithubStats.tsx    # live GitHub API + github-readme-stats images
│  ├─ CodingProfiles.tsx
│  ├─ Resume.tsx
│  ├─ Testimonials.tsx
│  ├─ Contact.tsx        # EmailJS-wired form
│  ├─ Footer.tsx
│  ├─ ThemeToggle.tsx
│  ├─ CustomCursor.tsx
│  ├─ ScrollProgress.tsx
│  ├─ PageLoader.tsx
│  └─ BackToTop.tsx
├─ lib/
│  └─ data.ts            # all content — single source of truth
├─ public/
│  ├─ icons/, site.webmanifest, robots.txt
│  └─ (add profile.jpg, resume.pdf, og-image.png here)
└─ tailwind.config.ts     # color tokens, fonts, keyframes
```

## What's fully implemented vs. scaffolded

**Fully implemented:** hero with typing animation + interactive canvas graph, sticky
glass navbar with mobile menu, about with animated counters and timeline, skills with
animated progress bars, project cards with hover-tilt, certifications, achievements
timeline, live GitHub stats (API + github-readme-stats), coding-profile cards, resume
preview/download, testimonials, EmailJS contact form, footer, dark/light theme, custom
cursor, scroll progress bar, page loader, back-to-top, custom 404, SEO metadata,
sitemap, and a basic web manifest.

**Scaffolded / your call to extend:**
- **Three.js / Spline 3D** — the brief lists these as stack options; the hero's
  `GraphNetwork.tsx` canvas covers the "impressive interactive background" need without
  the extra bundle weight. Swap it for a Spline embed or `@react-three/fiber` scene if
  you want true 3D — the component boundary is already isolated for a clean swap.
- **Full offline PWA (service worker precaching)** — `site.webmanifest` is in place;
  add `next-pwa` if you want true offline caching.
- **Music toggle** — omitted by default (autoplaying audio hurts most portfolios'
  first impression); add a small `<audio>` + toggle button in `Navbar.tsx` if you want
  it back.
- **GitHub contribution *calendar* graph** — the stats/streak/top-langs cards are live;
  a full calendar heatmap needs a small serverless proxy (GitHub's GraphQL API isn't
  CORS-open for client-side calls) — see comments in `GithubStats.tsx`.

## Deployment

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js, no config needed.

```bash
# or via CLI
npm i -g vercel
vercel
```

### GitHub Pages (static export)

GitHub Pages only serves static files, so this needs a static export. Note: the
live GitHub-stats fetch and EmailJS form still work (they're client-side), but
Next's Image Optimization API does not — this config disables it.

1. Add to `next.config.js`:
   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
     basePath: "/your-repo-name", // only if deploying to a project page
   };
   ```
2. Build and export:
   ```bash
   npm run build
   ```
   Static files land in `/out`.
3. Push `/out` to a `gh-pages` branch (or use the `peaceiris/actions-gh-pages` GitHub
   Action) and enable Pages in repo settings, pointing at that branch.

## Performance & accessibility notes

- Fonts are loaded via `next/font/google` (self-hosted, no layout shift, no external
  request).
- Motion respects `prefers-reduced-motion` (see `globals.css` and `GraphNetwork.tsx`).
- Custom cursor is disabled on touch/coarse-pointer devices automatically.
- All interactive elements are real `<a>`/`<button>` elements with visible focus
  states inherited from Tailwind defaults — don't strip `outline` globally if you
  extend this.
- Images use `next/image`-friendly patterns where practical; the GitHub stat images
  are external SVG/PNG generated by github-readme-stats and are marked `lazy`.

## License

Personal portfolio template — free to adapt for your own use.
