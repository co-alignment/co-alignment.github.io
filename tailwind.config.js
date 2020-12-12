module.exports = {
  purge: {
    mode: 'layers',
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
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
          blue: '#1072ba'
        }
        
      }, 
      fontFamily: {
        landing: ['sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        comfortaa: ['Comfortaa' , 'sand-serif']
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
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
