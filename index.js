// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins

const {injectConfig} = require('./lib/injectConfig.js');
const {mergeConfig} = require('./lib/mergeConfig.js');
const plugin = require('tailwindcss/plugin');
const tailwindTheme = require('tailwindcss/stubs/config.full.js');
const {consumerDefaultTheme} = require('./themes/themes.js');

const defaultOptions = {
  inShadowRoot: false, // setting used in shadow root or not ?
  defaultTheme: {extend: {}},
  themes: []
}

// ref - https://github.com/saadeghi/daisyui/blob/master/src/index.js
const mainFunction = options => api => {
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

  const {addBase, addComponents, addUtilities, config, postcss, e, prefix} = api;

  try {
    // inject @base style
    addBase(require('./base.js'));

    // inject components - button
    addComponents(require('./component.js'));
  } catch (e) {
  }


  // const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
  // themeInjector;

  injectConfig(options, api);
};

// const tonicUiTheme = {
//   extend: {
//     height: {
//       'btn-xs': default_button_gen_float["tcsmd-comp-button-size-xs"],
//       'btn-sm': default_button_gen_float["tcsmd-comp-button-size-sm"],
//       'btn-md': default_button_gen_float["tcsmd-comp-button-size-md"],
//       'btn-lg': default_button_gen_float["tcsmd-comp-button-size-lg"],
//     },
//     borderRadius: {
//       none: '0px',
//       xs: default_gen_float["tcsmd-ref-radius-xs"],
//       DEFAULT: default_gen_float["tcsmd-ref-radius-sm"],
//       sm: default_gen_float["tcsmd-ref-radius-sm"],
//       md: default_gen_float["tcsmd-ref-radius-md"],
//       lg: default_gen_float["tcsmd-ref-radius-lg"],
//       full: default_gen_float["tcsmd-ref-radius-circle"],
//     },
//     borderWidth: {
//       'extra-thin': default_gen_float["tcsmd-ref-border-extra-thin"],
//       'thin': default_gen_float["tcsmd-ref-border-thin"],
//       'thick': default_gen_float["tcsmd-ref-border-thick"],
//     },
//     colors: {
//       ...getColorObject(Object.values(require('./colors/themes')).reduce((pre, curr) => {
//
//         return {
//           ...pre,
//           ...curr
//         }
//       }, {})),
//       ...getColorObject(require('./colors/defaultTheme')),
//     },
//   },
// };

const tonicUiTheme = consumerDefaultTheme

module.exports = plugin.withOptions(
  (options = {}) => mainFunction({...options, tonicUiTheme, tailwindTheme}),
  (options = {}) => {

    return {
      theme:
        {
          extend: mergeConfig({
            ...options,
            tonicUiTheme: tonicUiTheme.extend,
            tailwindTheme: tailwindTheme.theme,
          })
        }
    };
  }
)

module.safelist = require('./lib/responsiveRegex.js');
