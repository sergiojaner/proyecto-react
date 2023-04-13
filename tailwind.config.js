/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      'xs':'100px',
      'sm':'500px'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

