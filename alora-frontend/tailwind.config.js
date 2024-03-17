/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
        outfit: "Outfit Regular",
      },
      colors: {
        "login-green": "#d2e5ba",
        "register-input-green": "#C5E3C4",
        "register-green": "#79AF82",
        "plant-green": "#68b17e",
        "water-blue": "#0e87b3",
        'logo-green': '#79AF82',
        'logo-green-dark': '#54795A',
        'water-blue-dark': '#068F92',
        'button-orange': '#ef7a43',
        'button-blue':'#0e87b3',
        'button-yellow':'#eea930',
        'button-green':'#3a8989',
        'sky-blue':'#83cdc8',
        'sky-blue-dark': '#068F92',
      },
      gridTemplateColumns: {
        'max-3' : 'repeat(3, max-content)'
      },
    },
  },
  plugins: [],
};


