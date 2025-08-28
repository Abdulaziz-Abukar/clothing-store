// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        body: "var(--font-body)",
        heading: "var(--font-heading)",
        accent: "var(--font-accent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
