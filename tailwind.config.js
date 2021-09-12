module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto','Arial','sans-serif']
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      textColor: ['active','responsive'],
      backgroundColor: ['active'],
      transitionProperty: ['hover', 'focus', 'responsive'],
      transitionTimingFunction: ['hover', 'focus'],
    },
  },
  plugins: [],
}
