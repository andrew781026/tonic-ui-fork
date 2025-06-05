// docs of tailwind.config.js plugin - https://v1.tailwindcss.com/docs/plugins

import {mergeConfig} from '../lib/mergeConfig';
import plugin from 'tailwindcss/plugin';
import {MultiThemePluginOptions} from "@/type/define";
import {consumerDefaultTheme} from '../themes/themes';

// @ts-ignore
import tailwindTheme from 'tailwindcss/stubs/config.full.js';

const defaultOptions = {
  inShadowRoot: false, // setting used in shadow root or not ?
  defaultTheme: {extend: {}},
  themes: []
}

const tonicUiTheme = consumerDefaultTheme

const componentPlugin = plugin.withOptions(
  () => () => {}, // do nothing but still valid
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

export default componentPlugin;
