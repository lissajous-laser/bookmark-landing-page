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
        'firefox-btn-dark': 'rgb(107, 107, 119)'
      },
      fontSize: {
        'sm-xs': '13px', 
      },
      animation: {
        'blueBtnFade': 'blueBtnFade 0.1s linear',
        'redBtnFade': 'redBtnFade 0.1s linear',
        'firefoxBtnFade': 'firefoxBtnFade 0.1s linear'
      },
      keyframes: {
        expand: {
          '0%': {'height': '0',
            'margin-top': '0',
            'margin-bottom': '0'
          },
          '100%': {'height': '300px',
            'margin-top': '1.25rem',
            'margin-bottom': '2rem'
          }
        },
        blueBtnFade: {
          '0%': {
            'background-color': 'hsl(231, 69%, 60%)',
            'color': 'white'
          },
          '100%': {
            'background-color': 'white',
            'color': 'hsl(231, 69%, 60%)'
          }
        },
        redBtnFade: {
          '0%': {
            'background-color': 'hsl(0, 94%, 66%)',
            'color': 'white'
          },
          '100%': {
            'background-color': 'white',
            'color': 'hsl(0, 94%, 66%)'
          }
        },
        firefoxBtnFade: {
          '0%': {
            'background-color': 'rgb(247, 247, 247)',
            'border-color': 'rgb(247, 247, 247)'
          },
          '100%': {
            'background-color': 'white',
            'border-color': 'rgb(107, 107, 119)'
          }          
        }
      }
    },
  },
  plugins: [],
}
