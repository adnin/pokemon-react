/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'home-bg': '#392d4d',
        'card-container': '#cca05a',
        'card-name': '#ffce96',
        'card-font-color': '#985046',
        'card-name-bg': '#fed87d',
        'card-border-color': '#ae7240'
      },
    },
  },
  plugins: [],
}
