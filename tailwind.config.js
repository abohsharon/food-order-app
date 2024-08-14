/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {

      'xs': '360px',
      // => @media (min-width: 360px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      'colors': {
        'custom-red' : 'hsl(14, 86%, 42%)',
        'custom-green' : 'hsl(159, 69%, 38%)',
        'custom-rose-50' : 'hsl(20, 50%, 98%)',
        'custom-rose-100' : 'hsl(13, 31%, 94%)',
        'custom-rose-300' : 'hsl(14, 25%, 72%)',
        'custom-rose-400' : 'hsl(7, 20%, 60%)',
        'custom-rose-500' : 'hsl(12, 20%, 44%)',
        'custom-rose-900' : 'hsl(14, 65%, 9%)',
         'custom-bg' : 'rgb(252, 249, 247)'
      }

    },
   
  },
  plugins: [],
}

