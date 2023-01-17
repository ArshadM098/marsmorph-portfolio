/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'accent' : '#00DBFF',
      'accent-fade' : '#182A2D',
      'dark' : '#0C0C0C',
      'white' : '#ffffff',
      'black' : '#000000',
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
