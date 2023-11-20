const themeConfig = require('../lib/themeConfig.js');
const {cssEscape} = require("../lib/cssEscape.js");

const shallowMerge = extendArr => {

  // const keys = extendArr
  //   .filter(extend => extend)
  //   .reduce((pre, curr) => [...pre, ...Object.keys(curr)], []);

  // const uniqueKeys = Array.from(new Set(keys));

  const keys = Object.keys(themeConfig);

  return extendArr
    .filter(extend => extend)
    .reduce((pre, curr) => {
      const result = {};

      for (const key of keys) {
        result[key] = {
          ...(pre[key] || {}),
          ...(curr[key] || {}),
        }
      }

      return result;
    }, {});
}

// so need additional resolve [ supports , data , colors , container , keyframes , fontFamily , fontSize , dropShadow ]


const getKeyValuePair = (config, type) => {

  // ResolvableTo<KeyValuePair>

  return Object.entries(config)
    .map(([key, value]) => {
      const escapedKey = cssEscape(key);

      // md: 1,  => md: 'var(--order-md)'
      if (typeof value === "number") return {[key]: `var(--${type}-${escapedKey})`};
      // xs: 'var(--ggg)', => xs: 'var(--ggg)'
      else if (typeof value === "string" && value.startsWith('var')) return {[key]: value};
      // xs: '12px', => xs: 'var(--spacing-xs)'
      else if (typeof value === "string" && !value.startsWith('var')) return {[key]: `var(--${type}-${escapedKey})`};
      // other type , not tailwind fontSize config
      else throw new Error(`fontSize Config format error , config=${config}`);
    })
    .reduce((pre, curr) => ({...pre, ...curr}), {});
}


// TODO : media query cannot using css variable , hard to theme switch
const getScreen = config => {
  // doc : https://tailwindcss.com/docs/screens
}

const getFontSize = config => {

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
      const escapedKey = cssEscape(key);

      // '5xl': 46px,  => '5xl': 'var(--fontSize-5xl-0)'
      if (typeof value === "string") {
        return {[key]: getVarObj(escapedKey, value, 'fontSize')};
      }

      // xs: ['10px', '16px'],  => xs: [ 'var(--fontSize-xs-0)' , 'var(--fontSize-xs-1-lineHeight)' ]
      else if (Array.isArray(value) && value[1] && (typeof value[1] === "string" || typeof value[1] === "number")) {
        return {
          [key]: [
            getVarObj(escapedKey, value[0], 'fontSize'),
            getVarObj(escapedKey, value[1], 'lineHeight')
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
            getVarObj(escapedKey, value[0], 'fontSize'),
            {
              lineHeight: getVarObj(escapedKey, value[1].lineHeight, 'lineHeight'),
              letterSpacing: getVarObj(escapedKey, value[1].letterSpacing, 'letterSpacing'),
              fontWeight: getVarObj(escapedKey, value[1].fontWeight, 'fontWeight'),
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

    // console.log(allExtend);


    const output = {
      ...allExtend,

      spacing: getKeyValuePair(allExtend.spacing, 'spacing'),
      inset: getKeyValuePair(allExtend.inset, 'inset'),
      zIndex: getKeyValuePair(allExtend.zIndex, 'zIndex'),
      order: getKeyValuePair(allExtend.order, 'order'),
      gridColumn: getKeyValuePair(allExtend.gridColumn, 'gridColumn'),
      gridColumnStart: getKeyValuePair(allExtend.gridColumnStart, 'gridColumnStart'),
      gridColumnEnd: getKeyValuePair(allExtend.gridColumnEnd, 'gridColumnEnd'),
      gridRow: getKeyValuePair(allExtend.gridRow, 'gridRow'),
      gridRowStart: getKeyValuePair(allExtend.gridRowStart, 'gridRowStart'),
      gridRowEnd: getKeyValuePair(allExtend.gridRowEnd, 'gridRowEnd'),
      margin: getKeyValuePair(allExtend.margin, 'margin'),
      aspectRatio: getKeyValuePair(allExtend.aspectRatio, 'aspectRatio'),
      height: getKeyValuePair(allExtend.height, 'height'),
      maxHeight: getKeyValuePair(allExtend.maxHeight, 'maxHeight'),
      minHeight: getKeyValuePair(allExtend.minHeight, 'minHeight'),
      width: getKeyValuePair(allExtend.width, 'width'),
      maxWidth: getKeyValuePair(allExtend.maxWidth, 'maxWidth'),
      minWidth: getKeyValuePair(allExtend.minWidth, 'minWidth'),
      flex: getKeyValuePair(allExtend.flex, 'flex'),
      flexShrink: getKeyValuePair(allExtend.flexShrink, 'flexShrink'),
      flexGrow: getKeyValuePair(allExtend.flexGrow, 'flexGrow'),
      flexBasis: getKeyValuePair(allExtend.flexBasis, 'flexBasis'),
      borderSpacing: getKeyValuePair(allExtend.borderSpacing, 'borderSpacing'),
      transformOrigin: getKeyValuePair(allExtend.transformOrigin, 'transformOrigin'),
      translate: getKeyValuePair(allExtend.translate, 'translate'),
      rotate: getKeyValuePair(allExtend.rotate, 'rotate'),
      skew: getKeyValuePair(allExtend.skew, 'skew'),
      scale: getKeyValuePair(allExtend.scale, 'scale'),
      animation: getKeyValuePair(allExtend.animation, 'animation'),
      // keyframes - not yet
      cursor: getKeyValuePair(allExtend.cursor, 'cursor'),
      scrollMargin: getKeyValuePair(allExtend.scrollMargin, 'scrollMargin'),
      scrollPadding: getKeyValuePair(allExtend.scrollPadding, 'scrollPadding'),
      listStyleType: getKeyValuePair(allExtend.listStyleType, 'listStyleType'),
      columns: getKeyValuePair(allExtend.columns, 'columns'),
      gridAutoColumns: getKeyValuePair(allExtend.gridAutoColumns, 'gridAutoColumns'),
      gridAutoRows: getKeyValuePair(allExtend.gridAutoRows, 'gridAutoRows'),
      gridTemplateColumns: getKeyValuePair(allExtend.gridTemplateColumns, 'gridTemplateColumns'),
      gridTemplateRows: getKeyValuePair(allExtend.gridTemplateRows, 'gridTemplateRows'),
      gap: getKeyValuePair(allExtend.gap, 'gap'),
      space: getKeyValuePair(allExtend.space, 'space'),
      divideWidth: getKeyValuePair(allExtend.divideWidth, 'divideWidth'),
      divideColor: getKeyValuePair(allExtend.divideColor, 'divideColor'),
      divideOpacity: getKeyValuePair(allExtend.divideOpacity, 'divideOpacity'),
      borderRadius: getKeyValuePair(allExtend.borderRadius, 'borderRadius'),
      borderWidth: getKeyValuePair(allExtend.borderWidth, 'borderWidth'),
      borderColor: getKeyValuePair(allExtend.borderColor, 'borderColor'),
      borderOpacity: getKeyValuePair(allExtend.borderOpacity, 'borderOpacity'),
      backgroundColor: getKeyValuePair(allExtend.backgroundColor, 'backgroundColor'),
      backgroundOpacity: getKeyValuePair(allExtend.backgroundOpacity, 'backgroundOpacity'),
      backgroundImage: getKeyValuePair(allExtend.backgroundImage, 'backgroundImage'),
      // gradientColorStops - not yet
      backgroundSize: getKeyValuePair(allExtend.backgroundSize, 'backgroundSize'),
      backgroundPosition: getKeyValuePair(allExtend.backgroundPosition, 'backgroundPosition'),
      // fill - not yet
      // stroke - not yet
      strokeWidth: getKeyValuePair(allExtend.strokeWidth, 'strokeWidth'),
      objectPosition: getKeyValuePair(allExtend.objectPosition, 'objectPosition'),
      padding: getKeyValuePair(allExtend.padding, 'padding'),
      textIndent: getKeyValuePair(allExtend.textIndent, 'textIndent'),
      // fontFamily - not yet
      fontSize: getFontSize(allExtend.fontSize),
      fontWeight: getKeyValuePair(allExtend.fontWeight, 'fontWeight'),
      lineHeight: getKeyValuePair(allExtend.lineHeight, 'lineHeight'),
      letterSpacing: getKeyValuePair(allExtend.letterSpacing, 'letterSpacing'),
      // textColor - not yet
      textOpacity: getKeyValuePair(allExtend.textOpacity, 'textOpacity'),
      // textDecorationColor - not yet
      textDecorationThickness: getKeyValuePair(allExtend.textDecorationThickness, 'textDecorationThickness'),
      textUnderlineOffset: getKeyValuePair(allExtend.textUnderlineOffset, 'textUnderlineOffset'),
      // placeholderColor - not yet
      placeholderOpacity: getKeyValuePair(allExtend.placeholderOpacity, 'placeholderOpacity'),
      // caretColor - not yet
      // accentColor - not yet
      opacity: getKeyValuePair(allExtend.opacity, 'opacity'),
      boxShadow: getKeyValuePair(allExtend.boxShadow, 'boxShadow'),
      // boxShadowColor - not yet
      outlineWidth: getKeyValuePair(allExtend.outlineWidth, 'outlineWidth'),
      outlineOffset: getKeyValuePair(allExtend.outlineOffset, 'outlineOffset'),
      // outlineColor - not yet
      ringWidth: getKeyValuePair(allExtend.ringWidth, 'ringWidth'),
      // ringColor - not yet
      ringOpacity: getKeyValuePair(allExtend.ringOpacity, 'ringOpacity'),
      ringOffsetWidth: getKeyValuePair(allExtend.ringOffsetWidth, 'ringOffsetWidth'),
      // ringOffsetColor - not yet
      blur: getKeyValuePair(allExtend.blur, 'blur'),
      brightness: getKeyValuePair(allExtend.brightness, 'brightness'),
      contrast: getKeyValuePair(allExtend.contrast, 'contrast'),
      // dropShadow - not yet
      grayscale: getKeyValuePair(allExtend.grayscale, 'grayscale'),
      hueRotate: getKeyValuePair(allExtend.hueRotate, 'hueRotate'),
      invert: getKeyValuePair(allExtend.invert, 'invert'),
      saturate: getKeyValuePair(allExtend.saturate, 'saturate'),
      sepia: getKeyValuePair(allExtend.sepia, 'sepia'),
      backdropBlur: getKeyValuePair(allExtend.backdropBlur, 'backdropBlur'),
      backdropBrightness: getKeyValuePair(allExtend.backdropBrightness, 'backdropBrightness'),
      backdropContrast: getKeyValuePair(allExtend.backdropContrast, 'backdropContrast'),
      backdropGrayscale: getKeyValuePair(allExtend.backdropGrayscale, 'backdropGrayscale'),
      backdropHueRotate: getKeyValuePair(allExtend.backdropHueRotate, 'backdropHueRotate'),
      backdropInvert: getKeyValuePair(allExtend.backdropInvert, 'backdropInvert'),
      backdropOpacity: getKeyValuePair(allExtend.backdropOpacity, 'backdropOpacity'),
      backdropSaturate: getKeyValuePair(allExtend.backdropSaturate, 'backdropSaturate'),
      backdropSepia: getKeyValuePair(allExtend.backdropSepia, 'backdropSepia'),
      transitionProperty: getKeyValuePair(allExtend.transitionProperty, 'transitionProperty'),
      transitionTimingFunction: getKeyValuePair(allExtend.transitionTimingFunction, 'transitionTimingFunction'),
      transitionDelay: getKeyValuePair(allExtend.transitionDelay, 'transitionDelay'),
      transitionDuration: getKeyValuePair(allExtend.transitionDuration, 'transitionDuration'),
      willChange: getKeyValuePair(allExtend.willChange, 'willChange'),
      content: getKeyValuePair(allExtend.content, 'content'),
    };

    // console.log(output);

    return output;
  }
}
