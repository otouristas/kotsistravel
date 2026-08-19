import type { Config } from "tailwindcss";

const rgb = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: rgb("--navy-950"),
          900: rgb("--navy-900"),
          800: rgb("--navy-800"),
          700: rgb("--navy-700"),
        },
        brand: {
          DEFAULT: rgb("--brand"),
          700: rgb("--brand-700"),
          600: rgb("--brand-600"),
          400: rgb("--brand-400"),
          300: rgb("--brand-300"),
          100: rgb("--brand-100"),
        },
        accent: {
          DEFAULT: rgb("--accent"),
          700: rgb("--accent-700"),
          600: rgb("--accent-600"),
          400: rgb("--accent-400"),
          100: rgb("--accent-100"),
        },
        paper: { DEFAULT: rgb("--paper"), 2: rgb("--paper-2") },
        ink: { DEFAULT: rgb("--ink"), soft: rgb("--ink-soft") },
        rule: rgb("--rule"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display scale tuned for Inter, whose Greek caps run wide.
        "display-xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.038em" }],
        "display-lg": ["clamp(2rem, 4.4vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.032em" }],
        "display-md": ["clamp(1.65rem, 3vw, 2.35rem)", { lineHeight: "1.14", letterSpacing: "-0.026em" }],
        "display-sm": ["clamp(1.3rem, 2vw, 1.6rem)", { lineHeight: "1.22", letterSpacing: "-0.02em" }],
      },
      maxWidth: { measure: "68ch" },
      transitionTimingFunction: { swift: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
        drift: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        drift: "drift 9s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
