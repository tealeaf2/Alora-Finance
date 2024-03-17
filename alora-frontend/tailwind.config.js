/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
        'outfit': 'Outfit Regular'
      },
      colors: {
        'login-green': '#d2e5ba',
        'register-input-green': '#C5E3C4',
        'register-green' : '#79AF82',
        'logo-green': '#79AF82',
        'logo-green-dark': '#54795A',
        'sky-blue': '#2493AF',
        'sky-blue-dark': '#068F92',
      },
      gridTemplateColumns: {
        'max-3' : 'repeat(3, max-content)'
      }
    },
  },
}

