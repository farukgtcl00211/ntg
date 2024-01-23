/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:'1320px'
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
        
      },
      
    },
  },
  plugins: [],
}
