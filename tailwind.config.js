/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'blue_black': '#262B3CE3',
        'green': '#66A060',
        'yellow': '#CEB02C',
        'gray': {
          50: '#939B9F',
          100: '#F3F3F3',
          200: '#F3F3F3',
          250: '#D3D6DA',
          300: '#939B9F',
          400: '#818181',
        },
        'blue-dark': {
          200: '#565F7E',
          300: '#3C4150',
          400: '#2B3041',
          500: '#262B3C'
        },

      },
      fontSize: {
        sm: '0.8rem',
        '2sm': '0.9rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '28px',
        '9': '32px',
        '10': '36px',
        '12': '44px',
        '13': '48px',
        '14': '52px',
        '44': '44px',
        '76': '76px',
        '256': '256px',
        '450': '450px',
        '568': '568px',
        '638': '638px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  }, plugins: [
    require('tailwindcss-animated')
  ],
}
