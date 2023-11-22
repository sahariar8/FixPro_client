/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho:"'Rancho', cursive",
        slobo:"'Slabo 27px',serif"
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin'),[require("rippleui")]],
}

