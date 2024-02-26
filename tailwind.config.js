/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        "signika-negative": ["Signika Negative", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "signika-negative": ["Signika Negative", "sans-serif"],
      },
    },
  },
  plugins: [],
};
