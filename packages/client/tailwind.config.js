/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#15142a',
      secondary: '#272238',
      cherYellow: '#f4c530',
      cherPink: '#f39abb',
      cherRed: '#e73245',
      cherBlue: '#4169e2',
      cherGreen: '#00a692',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        mplus: ['M+PLUS+Rounded+1c'],
      },
    },
  },
  plugins: [],
};
