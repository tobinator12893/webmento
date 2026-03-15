import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        paper: "#f5f2ec",
        card: "#edeae2",
        accent: "#2a5cff",
        "accent-dark": "#1a3fd4",
        "accent2": "#ff4d1c",
        mid: "#6b6b6b",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "rotate-slow": "rotateSlow 8s linear infinite",
        "rotate-reverse": "rotateReverse 10s linear infinite",
        "float-card": "floatCard 6s ease-in-out infinite",
        "float-badge": "floatBadge 5s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        rotateSlow: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        rotateReverse: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0px) rotate(0.5deg)" },
          "50%": { transform: "translateY(-14px) rotate(-0.5deg)" },
        },
        floatBadge: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(42,92,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(42,92,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "hero-grid": "48px 48px",
      },
    },
  },
  plugins: [],
};
export default config;
