const plugin = require('tailwindcss/plugin');
const default_button_gen_float = require('consumer-tonic-design-system/default_button_gen_float.json');
const default_gen_float = require('consumer-tonic-design-system/default_gen_float.json');
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
      minHeight: {
        'btn-xs': default_button_gen_float["tcsmd-comp-button-size-xs"],
        'btn-sm': default_button_gen_float["tcsmd-comp-button-size-sm"],
        'btn-md': default_button_gen_float["tcsmd-comp-button-size-md"],
        'btn-lg': default_button_gen_float["tcsmd-comp-button-size-lg"],
      },
      borderRadius: {
        none: '0px',
        xs: default_gen_float["tcsmd-ref-radius-xs"],
        DEFAULT: default_gen_float["tcsmd-ref-radius-sm"],
        sm: default_gen_float["tcsmd-ref-radius-sm"],
        md: default_gen_float["tcsmd-ref-radius-md"],
        lg: default_gen_float["tcsmd-ref-radius-lg"],
        full: default_gen_float["tcsmd-ref-radius-circle"],
      },
      borderWidth: {
        'extra-thin': default_gen_float["tcsmd-ref-border-extra-thin"],
        'thin': default_gen_float["tcsmd-ref-border-thin"],
        'thick': default_gen_float["tcsmd-ref-border-thick"],
      },
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
