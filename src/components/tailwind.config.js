const responsiveRegex = require('../lib/responsiveRegex');

module.exports = {
  content: [
    {raw: ''},
  ],
  safelist: responsiveRegex,
  plugins: [
    require('../../gen/index.js'),
  ],
};
