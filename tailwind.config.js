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
        'custom-gray': '#dddada',
      },
      spacing: {
        '0.5px': '0.03125rem',
      },
    }
  },
  variants: {},
  plugins: [],
}