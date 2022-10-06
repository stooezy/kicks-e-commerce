/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#FF3C78',
        'dark-blue': '#0A083A',
        magenta: '#FF3C78',
        'dark-grey': '#6C6B6B'
      },
    },
  },
  plugins: [],
}
