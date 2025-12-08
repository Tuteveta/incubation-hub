/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // use .dark to toggle dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you use src/ adjust accordingly
  ],
  theme: {
    extend: {
      // add any custom theme values mapped from your CSS variables if you want
      colors: {
        grafanaBG: "rgb(var(--background-start-rgb) / 1)",
      },
    },
  },
  plugins: [],
};
