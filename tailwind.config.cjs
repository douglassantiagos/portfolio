/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {      
      colors: {
        'white': '#FEFCFF',
        'purple': {
          300: '#AE8CFA',
          600: '#746CFE',
          900: '#171522',
        },
        'yellow': 'rgb(253 224 71 / var(--tw-bg-opacity))',
      },

      fontFamily: {
        'Roboto': 'Roboto'
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar')
  ],

  variants: {
    scrollbar: ['rounded']
  }
}
