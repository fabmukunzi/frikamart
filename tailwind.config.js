/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'app-slate': "#2C3E50"
      }
    },
    screens: {
      xs: { max: '425px' },
      sm: { min: '426px' },
      md: { min: '769px' },
      smd: { min: '920px' }, // semi medium for tablet mode
      mlg: { min: '1140px' }, // medium large for tablet mode
      lg: { min: '1440px' },
      xl: { min: '2560px' },
    },
  },
  plugins: [],
};