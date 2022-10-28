/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(231, 69%, 60%)',
        'soft-red': 'hsl(0, 94%, 66%)',
        'grayish-blue': 'hsl(229, 8%, 60%)',
        'very-dark-blue': 'hsl(229, 31%, 21%)',
        'firefox-btn-light': 'rgb(247, 247, 247)',
        'firefox-btn-dark': 'rgb(97, 97, 107)'
      },
      fontSize: {
        'sm-xs': '13px', 
      }
    },
  },
  plugins: [],
}
