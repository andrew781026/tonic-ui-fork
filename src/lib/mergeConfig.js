// const {mergeDeep} = require('../lib/deepMerge');
const merge = require('deepmerge');

const shallowMerge = extendArr => {

  const keys = extendArr
    .filter(extend => extend)
    .reduce((pre, curr) => [...pre, ...Object.keys(curr)], []);

  const uniqueKeys = Array.from(new Set(keys));

  return extendArr
    .filter(extend => extend)
    .reduce((pre, curr) => {
      const result = {};

      for (const uniqueKey of uniqueKeys) {
        result[uniqueKey] = {
          ...(pre[uniqueKey] || {}),
          ...(curr[uniqueKey] || {}),
        }
      }

      return result;
    }, {});
}

const getFontSize = config => {
  // console.log(CSS.escape('--Button.onHover')) // --Button\.onHover

  /*
  fontSize: ResolvableTo<
    KeyValuePair<
      string,
      | string
      | [fontSize: string, lineHeight: string]
      | [
          fontSize: string,
          configuration: Partial<{
            lineHeight: string
            letterSpacing: string
            fontWeight: string | number
          }>
        ]
    >
  >
   */

  /*
  fontSize: {
    xs: ['10px', '16px'],  => [ 'var(--fontSize-xs-0)' , 'var(--fontSize-xs-1-lineHeight)' ]
    '2xl': ['var(tcsmd-ref-text-sxl)', '32px'],
    '2.5xl': ['26px', 'normal'],
    '5xl': 46px,  =>  'var(--fontSize-5xl)'
    '8xl': ['126px', { lineHeight : '16px' , letterSpacing : '0px' , fontWeight : '700' }], =>  ['var(--fontSize-8xl-0)', { lineHeight : 'var(--fontSize-8xl-1-lineHeight)' , letterSpacing : 'var(--fontSize-8xl-1-letterSpacing)' , fontWeight : 'var(--fontSize-8xl-1-fontWeight)' }],
    '9xl': ['126px', 1],
  },
   */

  const getVarObj = (key, value, type) => {
    if (typeof value === "string" && value.startsWith('var')) return value;
    else if (type === 'fontSize') return `var(--fontSize-${key}-0)`;
    else if (type === 'lineHeight') return `var(--fontSize-${key}-1-lineHeight)`;
    else if (type === 'letterSpacing') return `var(--fontSize-${key}-1-letterSpacing)`;
    else if (type === 'fontWeight') return `var(--fontSize-${key}-1-fontWeight)`;
    else return value;
  }

  return Object.entries(config)
    .map(([key, value]) => {

      // '5xl': 46px,  => '5xl': 'var(--fontSize-5xl-0)'
      if (typeof value === "string") {
        return {[key]: getVarObj(key, value, 'fontSize')};
      }

      // xs: ['10px', '16px'],  => xs: [ 'var(--fontSize-xs-0)' , 'var(--fontSize-xs-1-lineHeight)' ]
      else if (Array.isArray(value) && value[1] && (typeof value[1] === "string" || typeof value[1] === "number")) {
        return {
          [key]: [
            getVarObj(key, value[0], 'fontSize'),
            getVarObj(key, value[1], 'lineHeight')
          ]
        }
      }
      /*
        '8xl': ['126px', { lineHeight : '16px' , letterSpacing : '0px' , fontWeight : '700' }],
        ---------------------------------------------------------------------
        '8xl': [
            'var(--fontSize-8xl-0)',
            {
              lineHeight:  'var(--fontSize-8xl-1-lineHeight)',
              letterSpacing: 'var(--fontSize-8xl-1-letterSpacing)',
              fontWeight:  'var(--fontSize-8xl-1-fontWeight)',
            }
          ]
       */
      else if (Array.isArray(value) && value[1]) {
        return {
          [key]: [
            getVarObj(key, value[0], 'fontSize'),
            {
              lineHeight: getVarObj(key, value[1].lineHeight, 'lineHeight'),
              letterSpacing: getVarObj(key, value[1].letterSpacing, 'letterSpacing'),
              fontWeight: getVarObj(key, value[1].fontWeight, 'fontWeight'),
            }
          ]
        }
      }
      // other type , not tailwind fontSize config
      else throw new Error(`fontSize Config format error , config=${config}`);
    })
    .reduce((pre, curr) => ({...pre, ...curr}), {});
}

module.exports = {
  mergeConfig: (option, tonicUiTheme) => {
    const {defaultTheme, themes = []} = option;

    const defaultExtend = defaultTheme?.extend || {};
    if (!themes || !Array.isArray(themes)) return defaultExtend;

    const themeExtends = themes.map(theme => theme?.extend).filter(extend => extend);

    // need shallow merge as every KeyValuePair ( extend.fontSize . extend.minWidth . extend.width ... )
    const allExtend = shallowMerge([tonicUiTheme, ...themeExtends, defaultExtend]);

    // TODO : fontSize 在 merge 時會出現 [ '12px' , '16px' , '14px' , '16px' ] 的情況，需要做修正
    console.log(allExtend);

    // change all extend config to var
    const fontSize = getFontSize(allExtend.fontSize);

    const output = {
      ...allExtend,
      fontSize
    };

    console.log(output);

    return {
      ...allExtend,
      fontSize
    }
  }
}
