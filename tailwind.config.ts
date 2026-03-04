import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.08)",
        lift: "0 18px 50px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-14px,0) scale(1.02)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(40px,-30px,0)" },
        },
        shimmer: {
          "0%": { opacity: "0.08" },
          "50%": { opacity: "0.16" },
          "100%": { opacity: "0.08" },
        },
      },
      animation: {
        floaty: "floaty 12s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite alternate",
        shimmer: "shimmer 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
