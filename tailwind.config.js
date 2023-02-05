/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'accent' : '#C5FF00',
      'accent-fade' : '#182A2D',
      'dark' : '#00191f',
      'white' : '#ffffff',
      'black' : '#000000',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
}
