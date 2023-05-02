const tailwindColors = require('tailwindcss/colors')
// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins

const colors = require("./colors/index");
const base = require("../dist/base");
const component = require("../dist/component");

// ref - https://github.com/saadeghi/daisyui/blob/master/src/index.js
const mainFunction = ({addBase, addComponents, addUtilities, config, postcss, e, prefix}) => {

  // Add your custom styles here

  // addUtilities(), for registering new utility styles
  // addComponents(), for registering new components styles
  // addBase(), for registering new base styles
  // addVariant(), for registering custom variants
  // e(), for escaping strings meant to be used in class names
  // prefix(), for manually applying the user's configured prefix to parts of a selector
  // theme(), for looking up values in the user's theme configuration
  // variants(), for looking up values in the user's variants configuration
  // config(), for looking up values in the user's Tailwind configuration
  // postcss, for doing low-level manipulation with PostCSS directly


  // inject @base style
  addBase(base);

  // inject components
  addComponents(component);
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: {
    extend: {
      colors: {
        ...colors,
        ...require("./colors/themes")["[data-theme=light]"],
        // adding all Tailwind `neutral` shades here so they don't get overridden by daisyUI `neutral` color
        "neutral-50": tailwindColors.neutral[50],
        "neutral-100": tailwindColors.neutral[100],
        "neutral-200": tailwindColors.neutral[200],
        "neutral-300": tailwindColors.neutral[300],
        "neutral-400": tailwindColors.neutral[400],
        "neutral-500": tailwindColors.neutral[500],
        "neutral-600": tailwindColors.neutral[600],
        "neutral-700": tailwindColors.neutral[700],
        "neutral-800": tailwindColors.neutral[800],
        "neutral-900": tailwindColors.neutral[900],
      }
    }
  },
});
