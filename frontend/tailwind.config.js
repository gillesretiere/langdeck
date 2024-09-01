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
        artifex_cf: ["artifex-cf, serif"],
        primary_font: ["articulat-cf, sans-serif"],
        secondary_font: ["artifex-cf, serif"],
      },
      colors: {
        'regal-blue': '#243c5a',
        'primary-orange': '#f44336',
        'primary-pale-orange': '#BFB8AA',
        'sky-blue': ' #D2E8E3',
        'prussian-blue':'#5A878C',
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