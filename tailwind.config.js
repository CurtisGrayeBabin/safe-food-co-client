module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
       }
    },
  },
  variants: {
    extend: {
      textColor: ['active','responsive'],
      backgroundColor: ['active'],
      transitionProperty: ['hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce'],
      transform: ['motion-safe','hover', 'focus'],
      animation: ['motion-safe'],
      transitionTimingFunction: ['hover', 'focus'],
      scale: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
}
