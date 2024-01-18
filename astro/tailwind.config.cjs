const {consumerDefaultTheme, consumerDarkTheme, idpExtraTheme} = require('@consumer-tonic-ui/tailwind/themes/themes.js');
const {addDynamicIconSelectors} = require('@iconify/tailwind');
const starlightPlugin = require('@astrojs/starlight-tailwind').default;

const bgColors = Object.entries({
  ...consumerDefaultTheme.extend.colors,
  ...consumerDarkTheme.extend.colors
}).map(([key]) => `bg-${key}`);

const iconNames =
  Object.keys(require('@consumer-tonic-ui/tailwind/iconSet.json').icons)
    .map(name => `icon-[consumer-tonic-ui--${name}]`);

/*

   Step 1. deep merge extend object make tailwind know that config name

   Step 2. add base to :root / :host

   selectors   -> merge extend object make tailwind know that config name

   mediaQuery  -> used :root to defined

 */

// ========= tailwindcss-themer configs might need to add to plugin settings =========
const themerExampleConfig = {
  inShadowRoot: false, // :root , :host
  // defaultTheme: {extend: tailwindTheme},
  themes: [
    {
      name: 'default',
      selectors: [`[data-theme="default"]`],
      mediaQuery: '@media (prefers-color-scheme: dark)',

      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
          xs: ['12px', '16px'], // [ font-size , line-height ]
          sm: ['14px', '20px'],
          base: ['16px', '24px'],
          lg: ['18px', '28px'],
          xl: ['20px', '28px'],
          '2xl': ['24px', '32px'],
          '2.5xl': ['28px', 'normal'],
          '3xl': ['30px', '36px'],
          '4xl': ['36px', '40px'],
          '5xl': ['48px', 1],
          '6xl': ['60px', 1],
          '7xl': ['72px', 1],
          '8xl': ['96px', 1],
          '9xl': ['128px', 1],
        },
        spacing: {
          0.5: '2px',
          1: '4px',
          1.5: '6px',
          2: '8px',
          2.5: '10px',
          3: '12px',
          3.5: '14px',
          4: '16px',
          5: '20px',
          6: '24px',
          7: '28px',
          8: '32px',
          9: '36px',
          10: '40px',
          11: '44px',
          12: '48px',
          14: '56px',
          16: '64px',
          20: '80px',
          24: '96px',
          28: '112px',
          32: '128px',
          36: '144px',
          40: '160px',
          44: '176px',
          48: '192px',
          50: '200px',
          52: '208px',
          56: '224px',
          60: '240px',
          64: '256px',
          72: '288px',
          80: '320px',
          96: '384px',
        },
        lineHeight: {
          normal: '16px',
          3: '12px',
          4: '16px',
          4.5: '18px',
          5: '20px',
          6: '24px',
          7: '28px',
          8: '32px',
          9: '36px',
          10: '40px',
        },
        borderRadius: {
          none: '0px',
          sm: '2px',
          DEFAULT: '4px',
          md: '6px',
          lg: '8px',
          xl: '12px',
          '2xl': '16px',
          '3xl': '24px',
          full: '9999px',
        },
        colors: {
          primary: '#222',
          secondary: '#555',
          tertiary: '#8E8E8E',
          'gray-80': '#303030',
          'trend-red': '#D71920',
        },
        keyframes: {
          completeIconAnimation: {
            '50%': {transform: 'scale(1.2)'},
            '100%': {transform: 'scale(1)'},
          },
          completeFadeInAnimation: {
            from: {
              height: '0px',
              opacity: 0,
              visibility: 'hidden',
            },
            to: {
              height: 'auto',
              opacity: 1,
              visibility: 'visible',
            },
          },
          popupFadeInAnimation: {
            from: {
              transform: 'translateX(10px)',
              opacity: 0,
            },
            to: {
              transform: 'translateX(0px)',
              opacity: 1,
            },
          },
        },
        animation: {
          'complete-icon': 'completeIconAnimation 0.3s linear 0.6s',
          'complete-my-browser': 'completeFadeInAnimation 1s ease-in-out 1s',
          'popup-fade-in': 'popupFadeInAnimation 0.5s ease',
        },
      },
    },
    {
      name: 'ja',
      selectors: [`[data-theme="ja"]`, '.ja'],
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
          xs: ['10px', '16px'],
          sm: ['12px', '20px'],
          base: ['14px', '24px'],
          lg: ['16px', '28px'],
          xl: ['18px', '28px'],
          '2xl': ['22px', '32px'],
          '2.5xl': ['26px', 'normal'],
          '3xl': ['28px', '36px'],
          '4xl': ['34px', '40px'],
          '5xl': ['46px', 1],
          '6xl': ['58px', 1],
          '7xl': ['70px', 1],
          '8xl': ['94px', 1],
          '9xl': ['126px', 1],
        },
        spacing: {
          0.5: '2px',
          1: '4px',
          1.5: '6px',
          2: '8px',
          2.5: '10px',
          3: '12px',
          3.5: '14px',
          4: '16px',
          5: '20px',
          6: '24px',
          7: '28px',
          8: '32px',
          9: '36px',
          10: '40px',
          11: '44px',
          12: '48px',
          14: '56px',
          16: '64px',
          20: '80px',
          24: '96px',
          28: '112px',
          32: '128px',
          36: '144px',
          40: '160px',
          44: '176px',
          48: '192px',
          50: '200px',
          52: '208px',
          56: '224px',
          60: '240px',
          64: '256px',
          72: '288px',
          80: '320px',
          96: '384px',
        },
        lineHeight: {
          normal: '16px',
          3: '12px',
          4: '16px',
          4.5: '18px',
          5: '20px',
          6: '24px',
          7: '28px',
          8: '32px',
          9: '36px',
          10: '40px',
        },
        borderRadius: {
          none: '0px',
          sm: '2px',
          DEFAULT: '4px',
          md: '6px',
          lg: '8px',
          xl: '12px',
          '2xl': '16px',
          '3xl': '24px',
          full: '9999px',
        },
        colors: {
          primary: '#222',
          secondary: '#555',
          tertiary: '#8E8E8E',
          'gray-80': '#303030',
          'trend-red': '#D71920',
        },
        keyframes: {
          completeIconAnimation: {
            '50%': {transform: 'scale(1.2)'},
            '100%': {transform: 'scale(1)'},
          },
          completeFadeInAnimation: {
            from: {
              height: '0px',
              opacity: 0,
              visibility: 'hidden',
            },
            to: {
              height: 'auto',
              opacity: 1,
              visibility: 'visible',
            },
          },
          popupFadeInAnimation: {
            from: {
              transform: 'translateX(10px)',
              opacity: 0,
            },
            to: {
              transform: 'translateX(0px)',
              opacity: 1,
            },
          },
        },
        animation: {
          'complete-icon': 'completeIconAnimation 0.3s linear 0.6s',
          'complete-my-browser': 'completeFadeInAnimation 1s ease-in-out 1s',
          'popup-fade-in': 'popupFadeInAnimation 0.5s ease',
        },
      },
    },
    consumerDarkTheme,
    idpExtraTheme
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // use safelist to avoid purging tonic-ui classes
  safelist: [
    ...bgColors,
    ...iconNames,
  ],

  theme: {
    extend: {},
  },
  plugins: [
    starlightPlugin(),

    // require('tailwindcss-themer')(themerExampleConfig),
    require('../dist/index')(themerExampleConfig),

    // add svg to tailwind css
    addDynamicIconSelectors({
      iconSets: {
        'consumer-tonic-ui': require('@consumer-tonic-ui/tailwind/iconSet.json'),
      },
    })
  ],
}

