/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6741a3",
        "light-primary": "#f0e8fc",
        "dark-primary": "#492880",
      },
    },
  },
  plugins: [],
};
