/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      "white": "#fff",
      "primary": "#d5c3a4",
      "secondary": "#f5efe5",
      "link": "#ff4a4a",
    }
  },
  plugins: [],
};
