const plugin = require("tailwindcss/plugin");
const responsiveRegex = require("../lib/responsiveRegex"); // use for from-{color} and text-{color}
module.exports = {
  content: [
    {raw: ''},
  ],
  safelist: responsiveRegex,
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
    },
    extend: {
      colors: {
        ...require("../colors/themes")["[data-theme=light]"],
      }
    }
  },
  plugins: [
    plugin(function ({addBase, addUtilities}) {
      addBase(require("../../dist/base"));
      // addUtilities(require("tailwindcss/utilities"));
    }),
  ],
};
