/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Geist'", "'Inter'", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};