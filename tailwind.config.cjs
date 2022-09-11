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
        'orange:': {
          300: '#FF9900',
          600: '#FF7C00'
        }
      },

      fontFamily: {
        'Roboto': 'Roboto'
      },
    },

    screens: {
      '2xl': {'max': '1640px'},
      // => @media (max-width: 1536px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'min-md': '769px',
      // => @media (min-width: 768px) { ... }
    }
  },

  plugins: [
    require('tailwind-scrollbar')
  ],
}
