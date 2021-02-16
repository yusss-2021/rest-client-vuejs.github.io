module.exports = {
   purge: 
   { content:
     ['./public/**/*.html', './src/**/*.vue'] 
    }, 
    darkMode: false, 
    theme: {
      screens: {
        'md': [
          {'min': '430px'}
        ],
      }
    },
    variants: {},
    plugins: [],

  }