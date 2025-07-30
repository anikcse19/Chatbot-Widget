/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./chatbot.js"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base reset since it's in a widget
  },
  plugins: [],
};
