const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    { raw: '' },
  ],
  theme: {
    colors: require("tailwindcss/colors"),
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase(require("../../dist/base"));
      // addUtilities(require("tailwindcss/utilities"));
    }),
  ],
};
