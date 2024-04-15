/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        ff_nexus_mix: ["ff-nexus-mix, sans-serif"],
      },      
      colors: {
        'regal-blue': '#243c5a',
        'primary-orange': '#FA9D1C',
        'primary-blue':'#8ed0f0',
        'primary-green':'#3AAE5A',
        "slate-gray": "#6D6D6D",
      },     
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },       
    },
  },
  plugins: [],
}