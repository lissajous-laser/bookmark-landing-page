/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '125': '580px',
        '160': '640px',
        '177': '708px',
        '19/20': '95%',
      },
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
      screens: {
        'break-1': '1300px',
        'break-2': '1200px', 
        'break-3': '1080px',
        'break-4': '880px',
        'break-6': '640px',
        'break-7': '480px'
      },
      animation: {
        'blueBtnFade': 'blueBtnFade 0.1s linear',
        'redBtnFade': 'redBtnFade 0.1s linear',
        'firefoxBtnFade': 'firefoxBtnFade 0.1s linear',
        'menuFadeIn': 'menuFadeIn 0.1s linear'
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
        },
        menuFadeIn: {
          '0%': {
            'opacity': '0'
          },
          '100%': {
            'opacity': 1
          }
        },
        menuFadeOut: {
          '0%': {
            'opacity': '0'
          },
          '100%': {
            'opacity': 1
          }
        }
      }
    },
  },
  plugins: [],
}
