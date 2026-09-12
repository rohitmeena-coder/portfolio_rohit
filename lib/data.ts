// ─────────────────────────────────────────────────────────────
// Single source of truth for portfolio content.
// Edit this file to update the site — components just render it.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Rohit Kumar Meena",
  tagline: "Mathematics & Computing Student, IIT Patna | Software engineer | Full Stack Developer",
  location: "Patna, Bihar, India",
  email: "rohitkumarmeena11111@gmail.com",
  altEmail: "rohit_2401mc17@iitp.ac.in",
  phone: "+91-8690815588",
  // TODO: paste your real GitHub username / LinkedIn URL — the resume links
  // to "GitHub Profile" / "LinkedIn Profile" but the PDF text extraction
  // doesn't expose the actual URLs behind those hyperlinks.
  github: "https://github.com/rohitmeena-coder", // ← replace with your real GitHub username
  linkedin: "https://www.linkedin.com/in/rohit-meena-iit-patna/", // ← replace with real URL
  instagram: "https://www.instagram.com/rohit_____meena___?igsh=a2QzdTNxcWg3OW44",
  twitter: "https://x.com/mrrohit5588",
  resumeUrl: "/resume.pdf",
};

export const education = [
  {
    school: "Indian Institute of Technology, Patna",
    degree: "B.Tech, Mathematics and Computing",
    year: "2024 – 2028",
  },
  {
    school: "Madhav Bal Sr. Sec. School, Karauli, Rajasthan",
    degree: "Rajasthan Board of Secondary Education",
    year: "2024",
  },
];

export const counters = [
  { label: "Projects Shipped", value: 3 },
  { label: "Job Simulations", value: 4 },
  { label: "DSA Problems Solved", value: 150 },
  { label: "Technologies Used", value: 20 },
];

export const timeline = [
  {
    year: "2024",
    title: "Joined IIT Patna",
    desc: "Started B.Tech in Mathematics and Computing — the beginning of a pull toward algorithms, proofs, and shipped software.",
  },
  {
    year: "2025",
    title: "Weather Dashboard Pro",
    desc: "Built a responsive weather app with live conditions, dark mode, and local-storage persistence — my first end-to-end frontend build.",
  },
  {
    year: "2026",
    title: "DBMS Benchmark System — TinySQL Simulator",
    desc: "Built a custom database engine from scratch: sequential storage, hash indexing, B+ tree indexing, and a Flask dashboard to benchmark them against each other.",
  },
  {
    year: "2026",
    title: "Tewtr — Multi-Agent GenAI Pipeline",
    desc: "Built a multi-agent pipeline using LLaMA 4 Maverick and GPT-OSS 120B to convert PDFs into structured educational content, cutting processing latency from 30 minutes to 12 seconds.",
  },
  {
    year: "2026",
    title: "Job Simulations",
    desc: "Completed job simulations with Deloitte (Technology, Data Analytics) and Wells Fargo (Software Engineering) via Forage.",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 88 },
      { name: "C++", level: 82 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "HTML / CSS", level: 80 },
    ],
  },
  {
    category: "AI / ML Frameworks",
    skills: [
      { name: "PyTorch", level: 50 },
      { name: "TensorFlow", level: 40 },
      { name: "Scikit-Learn", level: 45 },
      { name: "Pandas", level: 40 },
      { name: "NumPy", level: 50 },
      { name: "Matplotlib", level: 60 },
    ],
  },
  {
    category: "Dev Skills",
    skills: [
      { name: "React.js", level: 60 },
      { name: "Next.js", level: 60 },
      { name: "Flask", level: 60 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 70 },
      { name: "VS Code", level: 80 },
      { name: "Jupyter Notebook", level: 70 },
      { name: "Google Colab", level: 80 },
      { name: "Docker", level: 60 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  image: string; // gradient key used for the card cover
  imageUrl: string;
};

export const projects: Project[] = [
  {
    slug: "tewtr",
    title: "Tewtr",
    description:
      "A multi-agent GenAI pipeline that converts PDFs into structured, context-aware educational content using a sliding-window inference system.",
    features: [
      "Multi-agent pipeline: LLaMA 4 Maverick (VLM) + GPT-OSS 120B (LLM)",
      "Sliding-window inference (3-page context) — 30 min → 12 sec latency",
      "High-throughput inference via SambaNova (600+ tokens/sec)",
      "Up to 5× faster processing with better cost-performance efficiency",
    ],
    stack: ["TypeScript", "GenAI", "LLaMA 4", "GPT-OSS 120B"],
    demoUrl:"",
    githubUrl: "https://github.com/rohitmeena-coder/tewtr.git",
    image: "from-electric to-violet",
    imageUrl: "/project-tewtr.png",
  },
  {
    slug: "tinysql-simulator",
    title: "DBMS Benchmark System — TinySQL Simulator",
    description:
      "A custom database engine built from scratch to compare storage and indexing strategies, with a web dashboard for live benchmarking.",
    features: [
      "Sequential storage, hash indexing, and B+ tree indexing engines",
      "Insert / Search / Delete with disk-based page management",
      "Custom Pager system for page-level storage and I/O tracking",
      "Flask + HTML/CSS/JS dashboard comparing execution time, disk reads, file size",
    ],
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    demoUrl: "https://sql-query-simulator.onrender.com/",
    githubUrl: "https://github.com/rohitmeena-coder/Tinysql.git",
    image: "from-violet to-electric-soft",
    imageUrl: "/project-dbms.png",
  },
  {
    slug: "weather-dashboard-pro",
    title: "Weather Dashboard Pro",
    description:
      "A responsive weather application showing real-time conditions for any city, with dark mode and persistent preferences.",
    features: [
      "Real-time temperature, humidity, and wind speed via Weather API",
      "City search with live weather conditions",
      "Dark mode with local-storage persistence",
      "Loading animations for a polished feel",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Weather API"],
    demoUrl: "https://wheather-rohitmeena.netlify.app/",
    githubUrl: "https://github.com/rohitmeena-coder/Weather-Dashboard.git",
    image: "from-electric-soft to-electric",
    imageUrl: "/project-weather.svg",
  },
];

export const certifications = [
  {
    title: "Software Engineering Job Simulation",
    company: "JPMorganChase",
    issuer: "Forage",
    year: "Completed June 13, 2026",
    logo: "/logo-jpmorgan.png",
  },
  {
    title: "Red Bull Role Match Quiz",
    company: "Red Bull",
    issuer: "Forage",
    year: "Completed June 12, 2026",
    logo: "/logo-redbull.png",
  },
  {
    title: "Software Engineering Job Simulation",
    company: "Wells Fargo",
    issuer: "Forage",
    year: "Completed June 12, 2026",
    logo: "/logo-wells-fargo.png",
  },
  {
    title: "Technology Job Simulation",
    company: "Deloitte Australia",
    issuer: "Forage",
    year: "Completed June 12, 2026",
    logo: "/logo-deloitte.png",
  },
  {
    title: "Data Analytics Job Simulation",
    company: "Deloitte Australia",
    issuer: "Forage",
    year: "Completed June 12, 2026",
    logo: "/logo-deloitte.png",
  },
];

export const achievements = [
  {
    year: "2026",
    title: "150+ DSA problems solved",
    desc: "Solved across LeetCode and Codeforces, building a consistent problem-solving habit.",
  },
  {
    year: "2026",
    title: "Codeforces rating 820+",
    desc: "Active competitive programmer, steadily climbing the rating ladder.",
  },
  {
    year: "2026",
    title: "4 Forage job simulations completed",
    desc: "Deloitte Technology, Deloitte Data Analytics, Wells Fargo Software Engineering and Software Engineering Job Simulation JPMorganChase .",
  },
];

export const codingProfiles = [
  { platform: "Codeforces", handle: "Rohitkumarmeena", url: "https://codeforces.com/profile/rohit__meena", stat: "Rating 820+" },
  { platform: "LeetCode", handle: "Rohitkumarmeena", url: "https://leetcode.com/u/meena_king/", stat: "150+ solved (combined)" },
];

export const testimonials: { name: string; role: string; quote: string }[] = [
  // Add real testimonials from mentors, professors, or teammates here —
  // left empty since none were provided. The Testimonials section hides
  // itself automatically if this array is empty.
];

export const socials = [
  { name: "GitHub", url: "https://github.com/rohitmeena-coder" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rohit-meena-iit-patna/" },
];
