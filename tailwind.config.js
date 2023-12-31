/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'home-bg': '#392d4d',
        'card-bg': '#ffe976',
        'card-bg-hover': '#fed87d',
        'card-name': '#ffce96',
        'card-font-color': '#985046',
        'card-name-bg': '#cca05a',
        'card-border-color': '#ae7240'
      },
    },
  },
  plugins: [],
}
