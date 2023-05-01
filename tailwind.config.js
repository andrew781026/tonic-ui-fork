// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins

const colors = require("./colors/index");
const base = require("../dist/base");
const styled = require("../dist/styled");

// ref - https://github.com/saadeghi/daisyui/blob/master/src/index.js
const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss,  e, prefix }) => {

    // Add your custom styles here

    // addUtilities(), for registering new utility styles
    // addComponents(), for registering new component styles
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
    // because rollupjs doesn't support dynamic require
    let file = styled;
    addComponents(file);
};

module.exports = require("tailwindcss/plugin")(mainFunction);
