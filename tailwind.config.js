/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [],
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    //Defining custom font family
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },

    //By default making container to be center 
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
}


