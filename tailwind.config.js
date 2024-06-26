// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend:  {
      colors: {
        'button-blue': '#3F3BE1',
        'custom-gray': '#dddada',
        'dropdown-blue': '#EEEEFF',
        'onclick-btnblue': '#3431BB',
        'dropdown-heading': '#576175',
      },
      spacing: {
        '0.5px': '0.03125rem',
      },
    }
  },
  variants: {},
  plugins: [],
}