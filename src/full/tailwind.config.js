const responsiveRegex = require('../lib/responsiveRegex');
module.exports = {
  content: [
    {raw: ''},
  ],
  safelist: responsiveRegex,
  // corePlugins doc - https://tailwindcss.com/docs/configuration#core-plugins
  corePlugins: [
    'flex',
    'gap',
    'animation',
    'backgroundColor',
    'backgroundImage',
    'backgroundOpacity',
    'backdropOpacity',
    'borderColor',
    'borderOpacity',
    'divideColor',
    'divideOpacity',
    'gradientColorStops',
    'opacity',
    'placeholderColor',
    'preflight',
    'ringColor',
    'ringOffsetColor',
    'ringOffsetWidth',
    'ringOpacity',
    'ringWidth',
    'textColor',
    'textOpacity',
    'transitionProperty',
  ],
  plugins: [
    require('../../gen/index.js'),
  ],
};
