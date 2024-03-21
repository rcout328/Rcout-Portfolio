/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "300px", max: "470px" },
        mid: { min: "471px", max: "579px" },
        mac: { min: "580px", max: "767px" },
        mal: { min: "768px", max: "1175px" },
        mad: { min: "1175px", max: "2500px" },
      },
      colors: {
        white: "#Ffffff",
        purple: "#6E00F2",
      },
    },
  },
  plugins: [],
};
