/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            white: "#fff",
            primary: "#47a8ca",
            secondary: "#47A8CA",
            link: "#ff4a4a",
        },
    },
    plugins: [],
};
