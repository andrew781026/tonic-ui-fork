// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins

const colors = require('./colors/index');
const themes = require('./colors/themes');
const colorFunctions = require('./colors/functions.js');
const base = require('./base.js'); // using base.js in dist folder , but for dependency need ./
const component = require('./component.js'); // using component.js in dist folder , but for dependency need ./
const {getColorObject} = require('./colors/index.js');

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

  // inject components - button
  addComponents(component);

  const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
  themeInjector;
};

module.exports = require('tailwindcss/plugin')(mainFunction, {
  theme: {
    extend: {
      colors: {
        ...colors,
        ...getColorObject(Object.values(require('./colors/themes')).reduce((pre, curr) => {

          return {
            ...pre,
            ...curr
          }
        }, {})),
        ...getColorObject(require('./colors/defaultTheme')),
      },
    },
  },
});

module.safelist = require('./lib/responsiveRegex.js');
