/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'dark': '#232A3C',
        'medium': '#293245',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

