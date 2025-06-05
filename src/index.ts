// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins

import {injectConfig} from './lib/injectConfig';
import {mergeConfig} from './lib/mergeConfig';
import plugin from 'tailwindcss/plugin';
import {MultiThemePluginOptions} from "@/type/define";
import {PluginAPI} from "tailwindcss/types/config";
import {consumerDefaultTheme} from './themes/themes';

// @ts-ignore
import tailwindTheme from 'tailwindcss/stubs/config.full.js';
import fs from "fs";

const defaultOptions = {
  inShadowRoot: false, // setting used in shadow root or not ?
  defaultTheme: {extend: {}},
  themes: []
}

// ref - https://github.com/saadeghi/daisyui/blob/master/src/index.js
const mainFunction = (options: MultiThemePluginOptions) => (api: PluginAPI) => {
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

  const {addBase, addComponents, addUtilities, config, e} = api;
  const {isTailwind4,isBuildComponent} = options;

  if (!isBuildComponent){
    try {
      // inject @base style
      const base = JSON.parse(fs.readFileSync( './base.js' ,{ encoding: 'utf8' })); // require('./base.json');
      addBase(base);

      // inject components - button
      const componentFile = isTailwind4 ? './component-v4.json' : './component.json'; // require('./component-v4.json');
      const component = JSON.parse(fs.readFileSync( componentFile,{ encoding: 'utf8' }));
      addComponents(component);
    } catch (e) {
      console.warn('error=',e);
    }
  }

  // const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
  // themeInjector;

  injectConfig(options, api);
};

const tonicUiTheme = consumerDefaultTheme

const consumerTonicUiPlugin = plugin.withOptions(
  (options: MultiThemePluginOptions = {}) => mainFunction({...options, tonicUiTheme, tailwindTheme}),
  (options: MultiThemePluginOptions = {}) => {

    return {
      theme:
        {
          extend: mergeConfig({
            ...options,
            tonicUiTheme,
            tailwindTheme,
          })
        }
    };
  }
)

export default consumerTonicUiPlugin;
