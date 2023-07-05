/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {

      minHeight: {
        '500': '500px',
      },
    

    extend: {
      height:{
        '27screen':'27vw'
      },

      dropShadow: {
        '3xl': '0 35px 35px rgba(1, 1, 1, 0.5)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

