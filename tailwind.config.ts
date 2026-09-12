import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05050A",
        surface: "#0C0C14",
        "surface-2": "#12121C",
        border: "rgba(255,255,255,0.08)",
        electric: {
          DEFAULT: "#D7DCE2",
          soft: "#A5ADB8",
        },
        violet: {
          DEFAULT: "#D7DCE2",
          soft: "#A5ADB8",
        },
        ink: "#F5F5F7",
        muted: "#9198A8",
        paper: "#FAFAFC",
        "paper-muted": "#5B6270",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #F5F5F7 0%, #A5ADB8 100%)",
        "grad-radial": "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 60%)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
