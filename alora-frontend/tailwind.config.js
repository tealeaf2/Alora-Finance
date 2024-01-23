/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"]
      },
      colors: {
        'login-green': '#d2e5ba'
      }
    },
  },
  plugins: [],
}

