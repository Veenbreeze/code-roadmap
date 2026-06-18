import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(20, 184, 166, 0.24)",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(circle at 15% 15%, rgba(20,184,166,.22), transparent 28%), radial-gradient(circle at 80% 5%, rgba(245,158,11,.16), transparent 24%), radial-gradient(circle at 70% 80%, rgba(59,130,246,.18), transparent 30%)",
        "mesh-light":
          "radial-gradient(circle at 12% 12%, rgba(20,184,166,.22), transparent 30%), radial-gradient(circle at 82% 8%, rgba(249,115,22,.16), transparent 26%), radial-gradient(circle at 70% 82%, rgba(37,99,235,.14), transparent 32%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
