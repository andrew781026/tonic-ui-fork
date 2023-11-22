"use strict";
// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safelist = void 0;
const injectConfig_1 = require("./lib/injectConfig");
const mergeConfig_1 = require("./lib/mergeConfig");
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const themes_1 = require("./themes/themes");
// @ts-ignore
const config_full_js_1 = __importDefault(require("tailwindcss/stubs/config.full.js"));
const defaultOptions = {
    inShadowRoot: false, // setting used in shadow root or not ?
    defaultTheme: { extend: {} },
    themes: []
};
// ref - https://github.com/saadeghi/daisyui/blob/master/src/index.js
const mainFunction = (options) => (api) => {
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
    const { addBase, addComponents, addUtilities, config, e } = api;
    try {
        // inject @base style
        // @ts-ignore
        const base = require('./base.js');
        addBase(base);
        // inject components - button
        // @ts-ignore
        const component = require('./component.js');
        addComponents(component);
    }
    catch (e) {
        console.log('error');
    }
    // const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
    // themeInjector;
    (0, injectConfig_1.injectConfig)(options, api);
};
const tonicUiTheme = themes_1.consumerDefaultTheme;
exports.default = plugin_1.default.withOptions((options = {}) => mainFunction({ ...options, tonicUiTheme, tailwindTheme: config_full_js_1.default }), (options = {}) => {
    return {
        theme: {
            extend: (0, mergeConfig_1.mergeConfig)({
                ...options,
                tonicUiTheme,
                tailwindTheme: config_full_js_1.default,
            })
        }
    };
});
const responsiveRegex_1 = __importDefault(require("./lib/responsiveRegex"));
exports.safelist = responsiveRegex_1.default;
