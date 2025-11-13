/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{css,js}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#b91c1c",
          gold: "#d4af37",
          bg: "#050505"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
