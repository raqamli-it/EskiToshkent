/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1024px" },
      lg: { max: "870px" },
      md: { max: "680px" },
      sm: { max: "480px" },
    },
  },
  plugins: [],
};
