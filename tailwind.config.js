/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0E141B",
        secondaryBg: "#252526",
        secondaryColor: "#2D2D2D",
        primaryColor: "#FFFFFF",
        highlight: "#FF5277",
      },
      fontFamily: {
        sans: "AR One Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
