const plugin = require('tailwindcss/plugin');
const default_button_gen_float = require('consumer-tonic-design-system/default_button_gen_float.json');
const default_gen_float = require('consumer-tonic-design-system/default_gen_float.json');
const responsiveRegex = require('../lib/responsiveRegex');

module.exports = {
  content: [
    {raw: ''},
  ],
  safelist: responsiveRegex,
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
    },
  },
  plugins: [
    plugin(function({addBase, addUtilities}) {
      addBase(require('../../dist/base'));
    }),
    require('../index.js'),
  ],
};
