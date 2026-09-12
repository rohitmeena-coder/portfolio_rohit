"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const isLight = localStorage.getItem("theme") === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    document.documentElement.classList.toggle("dark", !next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return <button data-cursor="pointer" onClick={toggle} aria-label="Toggle theme" aria-pressed={light} className={`theme-toggle ${light ? "is-light" : "is-dark"}`}><span className="theme-toggle-track"><span className="theme-toggle-knob" /></span><span className="theme-toggle-label">{light ? "light" : "dark"}</span></button>;
}
