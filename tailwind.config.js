// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend:  {
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'button-blue': '#3F3BE1',
      }
    }
  },
  variants: {},
  plugins: [],
}