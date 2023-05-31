const Color = require('color');
const colorNames = require('./colorNames');

module.exports = {

  generateForegroundColorFrom: function(input, percentage = 0.8) {
    if (Color(input).isDark()) {
      const arr = Color(input).mix(Color('white'), percentage).saturate(10).hsl().array();
      return arr[0].toPrecision(5).replace(/\.?0+$/, '') + ' ' + arr[1].toPrecision(5).replace(/\.?0+$/, '') + '%' + ' ' + arr[2].toPrecision(5).replace(/\.?0+$/, '') + '%';
    } else {
      const arr = Color(input).mix(Color('black'), percentage).saturate(10).hsl().array();
      return arr[0].toPrecision(5).replace(/\.?0+$/, '') + ' ' + arr[1].toPrecision(5).replace(/\.?0+$/, '') + '%' + ' ' + arr[2].toPrecision(5).replace(/\.?0+$/, '') + '%';
    }
  },

  convertToHsl: function(input) {
    const resultObj = {};
    if (typeof input === 'object' && input !== null) {
      Object.entries(input).forEach(([rule, value]) => {
        if (colorNames.hasOwnProperty(rule)) {
          // const hslArray = Color(value).hsl().array();
          // resultObj[colorNames[rule]] = hslArray[0].toPrecision(5).replace(/\.?0+$/, '') + ' ' + hslArray[1].toPrecision(5).replace(/\.?0+$/, '') + '%' + ' ' + hslArray[2].toPrecision(5).replace(/\.?0+$/, '') + '%';
          resultObj[colorNames[rule]] = value;
        } else {
          resultObj[rule] = value;
        }
      });
      return resultObj;
    }
    return input;
  },

  injectThemes: function(addBase, config, themes) {
    const includedThemesObj = {};

    // add light themes
    if (config('tonicui.themes') == false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = this.convertToHsl(themes[theme]);
      });
    }

    // add default themes
    if (config('tonicui.themes') != false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = this.convertToHsl(themes[theme]);
      });
    }

    // add custom themes
    if (Array.isArray(config('tonicui.themes'))) {
      config('tonicui.themes').forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
            includedThemesObj['[data-theme=' + customThemeName + ']'] =
              this.convertToHsl(customThemevalue);
          });
        }
      });
    }


    let themeOrder = [];
    if (Array.isArray(config('tonicui.themes'))) {
      config('tonicui.themes').forEach((theme, index) => {
        if (typeof theme === 'object' && theme !== null) {
          Object.entries(theme).forEach(([customThemeName, customThemevalue]) => {
            themeOrder.push(customThemeName);
          });
        } else if (
          includedThemesObj.hasOwnProperty('[data-theme=' + theme + ']')
        ) {
          themeOrder.push(theme);
        }
      });
    } else if (config('tonicui.themes') != false) {
      themeOrder = [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
      ];
    } else if (config('tonicui.themes') == false) {
      themeOrder.push('light');
    }

    // inject themes in order
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        addBase({
          [':root']: includedThemesObj['[data-theme=' + themeName + ']'],
        });
      } else if (index === 1) {
        // auto dark
        if (config('tonicui.darkTheme')) {
          if (
            themeOrder[0] != config('tonicui.darkTheme') &&
            themeOrder.includes(config('tonicui.darkTheme'))
          ) {
            addBase({
              ['@media (prefers-color-scheme: dark)']: {
                [':root']:
                  includedThemesObj[
                      `[data-theme=${config('tonicui.darkTheme')}]`
                  ],
              },
            });
          }
        } else if (config('tonicui.darkTheme') === false ) {
          // disables prefers-color-scheme: dark
        } else {
          if (themeOrder[0] != 'dark' && themeOrder.includes('dark')) {
            addBase({
              ['@media (prefers-color-scheme: dark)']: {
                [':root']: includedThemesObj['[data-theme=dark]'],
              },
            });
          }
        }
        // theme 0 with name
        addBase({
          ['[data-theme=' + themeOrder[0] + ']']:
            includedThemesObj['[data-theme=' + themeOrder[0] + ']'],
        });
        // theme 1 with name
        addBase({
          ['[data-theme=' + themeOrder[1] + ']']:
            includedThemesObj['[data-theme=' + themeOrder[1] + ']'],
        });
      } else {
        addBase({
          ['[data-theme=' + themeName + ']']:
            includedThemesObj['[data-theme=' + themeName + ']'],
        });
      }
    });


    return {
      includedThemesObj: includedThemesObj,
      themeOrder: themeOrder,
    };
  },

};
