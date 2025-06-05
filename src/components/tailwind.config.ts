import {mergeConfig} from '../lib/mergeConfig';
import plugin from 'tailwindcss/plugin';
import {consumerDefaultTheme} from '../themes/themes';

// @ts-ignore
import tailwindTheme from 'tailwindcss/stubs/config.full.js';
import {MultiThemePluginOptions} from "../type/define";

const responsiveRegex = [
  {
    pattern: /.*/,
  },
  {
    // responsive utilites for daisyUI responsive modifiers
    pattern: /.(sm|md|lg|xl)/,
    variants: [
      'sm',
      'md',
      'lg',
      'xl',
    ],
  },
  {
    // responsive utilites for daisyUI components
    pattern: /(modal-middle|card-side|stats)/,
    variants: [
      'sm',
      'md',
      'lg',
      'xl',
    ],
  },
  {
    // color utilities for daisyUI colors
    pattern: /(bg|to|via|from|text|fill|stroke|border|outline)-((primary|secondary|accent|neutral)(-focus|-content|))|((info|success|warning|error)(-content|))|(base)(-100|-200|-300|-content)/,
    variants: [

      'hover',
      'focus',

    ],
  },
];

const tonicUiTheme = consumerDefaultTheme;

const componentPlugin = plugin.withOptions(
  () => () => {
  }, // do nothing but still valid
  (options: MultiThemePluginOptions = {}) => {
    return {
      theme:
        {
          extend: mergeConfig({
            ...options,
            tonicUiTheme,
            tailwindTheme,
          }),
        },
    };
  },
);

export default {
  content: [
    {raw: ''},
  ],
  safelist: responsiveRegex,
  plugins: [
    componentPlugin({isBuildComponent: true}),
  ],
};
