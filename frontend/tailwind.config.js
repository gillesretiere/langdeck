/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ff_nexus_mix: ["ff-nexus-mix, sans-serif"],
        neue_haas_grotesk_display: ["neue-haas-grotesk-display, sans-serif"],
        articulat_cf: ["articulat-cf, sans-serif"],
      },
      colors: {
        'regal-blue': '#243c5a',
        'primary-orange': '#f74216',
        'primary-blue': '#8ed0f0',
        'primary-green': '#3AAE5A',
        "slate-gray": "#6D6D6D",
        "special-green": "#619257",
        "special-orange": "#F86740",
        "special-gris-clair": "rgb(246,244,239)",
      },
    },
  },
  plugins: [],
}