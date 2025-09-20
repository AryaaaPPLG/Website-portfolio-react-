/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Path ini memberitahu Tailwind file mana yang harus dipindai
  ],
  theme: {
    extend: {
        fontFamily: {
      'moderniz': ['Moderniz', 'sans-serif'], // custom font
    },

    },
  },
  plugins: [],
}
