/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"]
      },
      colors: {
        'login-green': '#E3ECD7'
      }
    },
  },
  plugins: [],
}

