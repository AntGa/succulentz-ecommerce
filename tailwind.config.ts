/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'deep-forest-green': 'rgba(47, 79, 79, 0.7)',
        'soft-ivory': '#F7F1E3',
        'charcoal-gray': '#333333',
      },
      fontFamily: {
        playFair: ['var(--font-playFair)'],
        geist: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
}
