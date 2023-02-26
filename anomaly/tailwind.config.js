/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Audiowide': ['Audiowide', 'sans-serif'],
        'Michroma': ['Michroma', 'sans-serif'],
        'Teko': ['Teko', 'sans-serif']
      }
    },
  },
  plugins: [],
}