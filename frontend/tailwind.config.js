module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.pug'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': '"Alata", serif',
      'body': '"Poppins", sans-serif',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#121212',
      'secondary': '#ECE8C6'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#ECE8C6',
      'secondary': '#121212',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#ECE8C6',
      'secondary': '#121212',
    }),
    extend: {
    },
  },
  separator: '_',
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
