/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#050A30',
        navyblue: '#000C66',
        blue: '#0000FF',
        babyblue: '#7EC8E3'
      }
    },
  },
  plugins: [],
}
