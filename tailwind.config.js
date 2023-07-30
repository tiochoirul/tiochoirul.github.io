/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#A0C1B8',
        darkbg: '#525252',
        lightbg: '#DDDDDD',
        secondary: "#C0C0C0",
        dark: '#313131'
      }
    },
  },
  plugins: [],
}

