module.exports = {
  purge:["dist/**/*.html"] ,
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {

      },
      colors: {
        crystal: {
          cyan: '#52b0c2',
          gray: '#191718',
          green: '#8DF4C3',
          blue: '#1A5EE2',
          purple: {
            '1': '#6A3FC5',
            '2': '#9033D9',
            '3': '#D83AD1'
          }
        },
        threefold: {
          green: '#57be8e',
          blue: '#1072ba',
        },
        coaligned: {
          darkblue: '#0B464D',
          teal: '#137680',
          pink: '#e04890',
          white: '#fff9e9',
          darkteal1: '#10626a',
          darkteal2: '#0c4d54',
          darkteal3: '#09393d'
        },
        
      }, 
      fontFamily: {
        landing: ['sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        comfortaa: ['Comfortaa' , 'sand-serif'],
        Raleway:['Raleway', 'sans-serif']
      },
      boxShadow: {
        '2xl-white': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'xl-white': '0 20px 25px -5px rgba(255, 255, 255, 0.15), 0 10px 10px -5px rgba(255, 255, 255, 0.05)',
        'lg-white': '0 10px 15px -3px rgba(255, 255, 255, 0.15), 0 4px 6px -2px rgba(255, 255, 255, 0.06)',
      },
      zIndex: {
        '-10' : '-10'
      },
      backgroundImage: theme => ({
        'tongues' : "url('../img/bg-tongue.jpg')", 
        'derp' : "url('../img/bg-derp.jpg')", 
        'mountain-desktop' : "url('../img/bg-mountain-desktop.jpg')",
        'mountain-mobile' : "url('../img/bg-mountain-mobile.jpg')",
        'neon-leaf' : "url('../img/bg-neon-leaf.jpg')",
        'neon-waves' : "url('../img/neon-brainwaves.jpg')",
        'wordcloud' : "url('../worldcloud/img/glitch-animation.gif')",
        'wordcloud-test' : "url('../img/glitch-animation.gif')",
        'gr-left-to-dark' : "url('../img/gradients/left-white-to-dark.png')",
        'gr-left-to-dark-2' : "url('../img/gradients/left-to-dark2.png')",
        'gr-right-to-dark' : "url('../img/gradients/right-white-to-dark.png')",
        'gr-right-to-dark-2' : "url('../img/gradients/right-to-dark-2.png')",
      }),
      height: {
        'aligned-section': '36rem',
        'aligned-section-xl': '64rem',
        'aligned-section-2xl': '88rem',
      }
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
