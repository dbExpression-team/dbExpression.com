const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['2rem', { lineHeight: '2.5rem' }],
      '3xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '4xl': ['3rem', { lineHeight: '3.5rem' }],
      '5xl': ['3.75rem', { lineHeight: '1' }],
      '6xl': ['4.5rem', { lineHeight: '1.1' }],
      '7xl': ['6rem', { lineHeight: '1' }],
      '8xl': ['8rem', { lineHeight: '1' }],
      '9xl': ['10rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        blue: {
          100: '#0F72BD',
          200: '#0E66AA',
          300: '#0C5B97',
          400: '#0B4F84',
          500: '#094471',
          600: '#08395E',
          700: '#062D48',
          800: '#052239',
          900: '#031625'
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '888rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
