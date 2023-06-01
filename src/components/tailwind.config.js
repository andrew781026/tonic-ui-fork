const plugin = require('tailwindcss/plugin');
const responsiveRegex = require('../lib/responsiveRegex');
const {getColorObject} = require('../colors'); // use for from-{color} and text-{color}
module.exports = {
  content: [
    {raw: ''},
  ],
  safelist: responsiveRegex,
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
    },
    extend: {
      colors: {
        ...getColorObject(require('../colors/defaultTheme')),
      },
    },
  },
  plugins: [
    plugin(function({addBase, addUtilities}) {
      addBase(require('../../dist/base'));
    }),
  ],
};
