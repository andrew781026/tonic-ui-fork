import {cssEscape} from "./cssEscape";
import {TonicConfigError} from "../error/error";
import {
  KeyValuePair,
  MultiThemePluginOptions,
  PluginAPI,
  ResolvableTo,
  ThemeConfig,
} from '../type/define.d'
import {isThemeActive} from "./helper";
import {ThemeName} from "./const";

const resolveFontSize = (config = {}) => {

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
    xs: ['10px', '16px'],  =>  --fontSize-xs-0: 10px; / --fontSize-xs-1: 16px;
    '2xl': ['22px', '32px'],
    '2.5xl': ['26px', 'normal'],
    '5xl': 46px,  =>  --fontSize-5xl: 46px;
    '8xl': ['126px', { lineHeight : '16px' , letterSpacing : '0px' , fontWeight : '700' }], =>  --fontSize-xs-0: 10px; / --fontSize-xs-1: 16px;
    '9xl': ['126px', 1],
  },
   */

  return Object.entries(config)
    .map(([key, value]) => {
      const escapedKey = cssEscape(key);

      if (!value) return {};
      else if (typeof value === "function") return {};
      else if (typeof value === "string" || typeof value === "number") return {[`--fontSize-${escapedKey}-0`]: value};
      else if (Array.isArray(value) && value[1] && (typeof value[1] === "string" || typeof value[1] === "number")) {
        return {
          [`--fontSize-${escapedKey}-0`]: value[0],
          [`--fontSize-${escapedKey}-1-lineHeight`]: value[1]
        }
      } else if (Array.isArray(value) && value[1]) {
        return {
          [`--fontSize-${escapedKey}-0`]: value[0],
          [`--fontSize-${escapedKey}-1-lineHeight`]: value[1].lineHeight,
          [`--fontSize-${escapedKey}-1-letterSpacing`]: value[1].letterSpacing,
          [`--fontSize-${escapedKey}-1-fontWeight`]: value[1].fontWeight
        }
      } else throw new TonicConfigError({type: 'fontSize', key, value});
    })
    .reduce((pre, curr) => ({...pre, ...curr}), {});
}

const resolveFontFamily = (config = {}) => {

  /*
  fontFamily: ResolvableTo<
    KeyValuePair<
      string,
      | string
      | string[]
      | [
          fontFamily: string | string[],
          configuration: Partial<{
            fontFeatureSettings: string
            fontVariationSettings: string
          }>
        ]
    >
  >
   */

  /*
  fontFamily: {
    'mono': 'Helvetica, Arial, sans-serif',
    'body': ['Helvetica', 'Arial', 'sans-serif'],
     sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
     display: [
        ['ui-sans-serif', 'system-ui'],
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
  },
   */

  return Object.entries(config)
    .map(([key, value]) => {
      const escapedKey = cssEscape(key);

      if (!value) return {};
      else if (typeof value === "function") return {};
      else if (typeof value === "string") return {[`--fontFamily-${escapedKey}-0`]: value};
      else if (Array.isArray(value) && (value[1]?.fontFeatureSettings || value[1]?.fontVariationSettings)) {
        return {
          [`--fontFamily-${escapedKey}-0`]: (typeof value[0] === "string") ? value[0] : value[0].join(','),
          [`--fontFamily-${escapedKey}-1-fontFeatureSettings`]: value[1]?.fontFeatureSettings,
          [`--fontFamily-${escapedKey}-1-fontVariationSettings`]: value[1]?.fontVariationSettings,
        }
      } else if (Array.isArray(value)) {
        // 'body': ['Helvetica', 'Arial', 'sans-serif'], => :root { --fontFamily-body-0 : "'Helvetica', 'Arial', 'sans-serif'" }
        return {
          [`--fontFamily-${escapedKey}-0`]: value.join(','),
        }
      } else throw new TonicConfigError({type: 'fontFamily', key, value});
    })
    .reduce((pre, curr) => ({...pre, ...curr}), {});
}

const resolveColor = (config = {}, type: string, result: KeyValuePair = {}, prefix = '') => {

  // colors: ResolvableTo<RecursiveKeyValuePair> => can Recursive KeyValuePair

  /*
   colors: {
        'regal-blue': '#243c5a',
        'tahiti': {
            100: '#cffafe',
            200: '#a5f3fc',
            light: '#67e8f9',
            dark: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
        },
   },
 */

  for (const [key, value] of Object.entries(config)) {
    const escapedKey = cssEscape(key);

    if (!value) continue;
    else if (typeof value === "function") continue;
    else if (typeof value === "string" && value.startsWith('var')) result[`--${type}-${prefix}-${escapedKey}`] = value;
    else if (typeof value === "string" && value.includes('var')) continue;
    else if (typeof value === "string" && !value.includes('var')) result[`--${type}-${prefix}-${escapedKey}`] = value;
    else if (typeof value === "object") resolveColor(value, type, result, `${prefix}-${escapedKey}`);
    else throw new TonicConfigError({type, key, value});
  }

  return result;
}

const resolveKeyframes = (config = {}): ResolvableTo<KeyValuePair> => {

  //   keyframes: ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>>

  /*
    keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
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
      }
   */

  const result: ResolvableTo<KeyValuePair> = {};

  for (const [key, value] of Object.entries(config)) {
    const escapedKey = cssEscape(key);
    if (typeof value === "function") continue;
    else if (typeof value === "string" || typeof value === "number") result[`--keyframes-${escapedKey}`] = value.toString();
    else throw new Error(`keyframes Config error on (key,value)=(${key},${value}) , config=${config}`);
  }

  return result;
}

const resolveDropShadow = (config = {}): KeyValuePair => {

  //   dropShadow: ResolvableTo<KeyValuePair<string, string | string[]>>
  /*
    dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
   */

  const result: KeyValuePair = {};

  for (const [key, value] of Object.entries(config)) {
    const escapedKey = cssEscape(key);
    if (typeof value === "function") continue;
    else if (typeof value === "string" && value.includes('var')) continue;
    else if (typeof value === "string" && !value.includes('var')) result[`--dropShadow-${escapedKey}`] = value;
    else if (Array.isArray(value)) result[`--dropShadow-${escapedKey}`] = value.join(',');
    else throw new TonicConfigError({type: 'DropShadow', key, value});
  }

  return result;
}

const resolveKeyValuePair = (config = {}, type: string) => {

  const result: ResolvableTo<KeyValuePair> = {};

  for (const [key, value] of Object.entries(config)) {
    const escapedKey = cssEscape(key);

    if (!value) continue;
    else if (typeof value === "function") continue;
    else if (typeof value === "string" && value.includes('var')) continue;
    else if (typeof value === "string" || typeof value === "number") result[`--${type}-${escapedKey}`] = value.toString();
    else throw new TonicConfigError({type, key, value});
  }

  return result;
}

const resolveAllProps = (extend: ThemeConfig, api: PluginAPI) => {

  /*
    ThemeConfig ref map :
      ThemeConfig['spacing'] = ResolvableTo<KeyValuePair>
      ThemeConfig['borderWidth'] = ResolvableTo<KeyValuePair>
      ThemeConfig['borderColor'] = ThemeConfig['colors'] = ResolvableTo<RecursiveKeyValuePair>
      ThemeConfig['borderOpacity'] = ThemeConfig['opacity'] = ResolvableTo<KeyValuePair>
      ThemeConfig['blur'] = ResolvableTo<KeyValuePair>
      ThemeConfig['brightness'] = ResolvableTo<KeyValuePair>
      ThemeConfig['contrast'] = ResolvableTo<KeyValuePair>
      ThemeConfig['grayscale'] = ResolvableTo<KeyValuePair>
      ThemeConfig['hueRotate'] = ResolvableTo<KeyValuePair>
      ThemeConfig['hueRotate'] = ResolvableTo<KeyValuePair>
      ThemeConfig['invert'] = ResolvableTo<KeyValuePair>
      ThemeConfig['saturate'] = ResolvableTo<KeyValuePair>
      ThemeConfig['sepia'] = ResolvableTo<KeyValuePair>
   */
  // so need additional resolve [ supports , data , colors , container , keyframes , fontFamily , fontSize , dropShadow ]

  const result = {
    colors: resolveColor(extend.colors, 'colors'),
    spacing: resolveKeyValuePair(extend.spacing, 'spacing'),
    inset: resolveKeyValuePair(extend.inset, 'inset'),
    zIndex: resolveKeyValuePair(extend.zIndex, 'zIndex'),
    order: resolveKeyValuePair(extend.order, 'order'),
    gridColumn: resolveKeyValuePair(extend.gridColumn, 'gridColumn'),
    gridColumnStart: resolveKeyValuePair(extend.gridColumnStart, 'gridColumnStart'),
    gridColumnEnd: resolveKeyValuePair(extend.gridColumnEnd, 'gridColumnEnd'),
    gridRow: resolveKeyValuePair(extend.gridRow, 'gridRow'),
    gridRowStart: resolveKeyValuePair(extend.gridRowStart, 'gridRowStart'),
    gridRowEnd: resolveKeyValuePair(extend.gridRowEnd, 'gridRowEnd'),
    margin: resolveKeyValuePair(extend.margin, 'margin'),
    aspectRatio: resolveKeyValuePair(extend.aspectRatio, 'aspectRatio'),
    height: resolveKeyValuePair(extend.height, 'height'),
    maxHeight: resolveKeyValuePair(extend.maxHeight, 'maxHeight'),
    minHeight: resolveKeyValuePair(extend.minHeight, 'minHeight'),
    width: resolveKeyValuePair(extend.width, 'width'),
    maxWidth: resolveKeyValuePair(extend.maxWidth, 'maxWidth'),
    minWidth: resolveKeyValuePair(extend.minWidth, 'minWidth'),
    flex: resolveKeyValuePair(extend.flex, 'flex'),
    flexShrink: resolveKeyValuePair(extend.flexShrink, 'flexShrink'),
    flexGrow: resolveKeyValuePair(extend.flexGrow, 'flexGrow'),
    flexBasis: resolveKeyValuePair(extend.flexBasis, 'flexBasis'),
    borderSpacing: resolveKeyValuePair(extend.borderSpacing, 'borderSpacing'),
    transformOrigin: resolveKeyValuePair(extend.transformOrigin, 'transformOrigin'),
    translate: resolveKeyValuePair(extend.translate, 'translate'),
    rotate: resolveKeyValuePair(extend.rotate, 'rotate'),
    skew: resolveKeyValuePair(extend.skew, 'skew'),
    scale: resolveKeyValuePair(extend.scale, 'scale'),
    animation: resolveKeyValuePair(extend.animation, 'animation'),
    // keyframes - not yet
    cursor: resolveKeyValuePair(extend.cursor, 'cursor'),
    scrollMargin: resolveKeyValuePair(extend.scrollMargin, 'scrollMargin'),
    scrollPadding: resolveKeyValuePair(extend.scrollPadding, 'scrollPadding'),
    listStyleType: resolveKeyValuePair(extend.listStyleType, 'listStyleType'),
    columns: resolveKeyValuePair(extend.columns, 'columns'),
    gridAutoColumns: resolveKeyValuePair(extend.gridAutoColumns, 'gridAutoColumns'),
    gridAutoRows: resolveKeyValuePair(extend.gridAutoRows, 'gridAutoRows'),
    gridTemplateColumns: resolveKeyValuePair(extend.gridTemplateColumns, 'gridTemplateColumns'),
    gridTemplateRows: resolveKeyValuePair(extend.gridTemplateRows, 'gridTemplateRows'),
    gap: resolveKeyValuePair(extend.gap, 'gap'),
    space: resolveKeyValuePair(extend.space, 'space'),
    divideWidth: resolveKeyValuePair(extend.divideWidth, 'divideWidth'),
    divideColor: resolveColor(extend.divideColor, 'divideColor'),
    divideOpacity: resolveKeyValuePair(extend.divideOpacity, 'divideOpacity'),
    borderRadius: resolveKeyValuePair(extend.borderRadius, 'borderRadius'),
    borderWidth: resolveKeyValuePair(extend.borderWidth, 'borderWidth'),
    borderColor: resolveColor(extend.borderColor, 'borderColor'),
    borderOpacity: resolveKeyValuePair(extend.borderOpacity, 'borderOpacity'),
    backgroundColor: resolveColor(extend.backgroundColor, 'backgroundColor'),
    backgroundOpacity: resolveKeyValuePair(extend.backgroundOpacity, 'backgroundOpacity'),
    backgroundImage: resolveKeyValuePair(extend.backgroundImage, 'backgroundImage'),
    gradientColorStops: resolveColor(extend.gradientColorStops, 'gradientColorStops'),
    backgroundSize: resolveKeyValuePair(extend.backgroundSize, 'backgroundSize'),
    backgroundPosition: resolveKeyValuePair(extend.backgroundPosition, 'backgroundPosition'),
    fill: resolveColor(extend.fill, 'fill'),
    stroke: resolveColor(extend.stroke, 'stroke'),
    strokeWidth: resolveKeyValuePair(extend.strokeWidth, 'strokeWidth'),
    objectPosition: resolveKeyValuePair(extend.objectPosition, 'objectPosition'),
    padding: resolveKeyValuePair(extend.padding, 'padding'),
    textIndent: resolveKeyValuePair(extend.textIndent, 'textIndent'),
    fontFamily: resolveFontFamily(extend.fontFamily),
    fontSize: resolveFontSize(extend.fontSize),
    fontWeight: resolveKeyValuePair(extend.fontWeight, 'fontWeight'),
    lineHeight: resolveKeyValuePair(extend.lineHeight, 'lineHeight'),
    letterSpacing: resolveKeyValuePair(extend.letterSpacing, 'letterSpacing'),
    textColor: resolveColor(extend.textColor, 'textColor'),
    textOpacity: resolveKeyValuePair(extend.textOpacity, 'textOpacity'),
    textDecorationColor: resolveColor(extend.textDecorationColor, 'textDecorationColor'),
    textDecorationThickness: resolveKeyValuePair(extend.textDecorationThickness, 'textDecorationThickness'),
    textUnderlineOffset: resolveKeyValuePair(extend.textUnderlineOffset, 'textUnderlineOffset'),
    placeholderColor: resolveColor(extend.placeholderColor, 'placeholderColor'),
    placeholderOpacity: resolveKeyValuePair(extend.placeholderOpacity, 'placeholderOpacity'),
    caretColor: resolveColor(extend.caretColor, 'caretColor'),
    accentColor: resolveColor(extend.accentColor, 'accentColor'),
    opacity: resolveKeyValuePair(extend.opacity, 'opacity'),
    boxShadow: resolveKeyValuePair(extend.boxShadow, 'boxShadow'),
    boxShadowColor: resolveColor(extend.boxShadowColor, 'boxShadowColor'),
    outlineWidth: resolveKeyValuePair(extend.outlineWidth, 'outlineWidth'),
    outlineOffset: resolveKeyValuePair(extend.outlineOffset, 'outlineOffset'),
    outlineColor: resolveColor(extend.outlineColor, 'outlineColor'),
    ringWidth: resolveKeyValuePair(extend.ringWidth, 'ringWidth'),
    ringColor: resolveColor(extend.ringColor, 'ringColor'),
    ringOpacity: resolveKeyValuePair(extend.ringOpacity, 'ringOpacity'),
    ringOffsetWidth: resolveKeyValuePair(extend.ringOffsetWidth, 'ringOffsetWidth'),
    ringOffsetColor: resolveColor(extend.ringOffsetColor, 'ringOffsetColor'),
    blur: resolveKeyValuePair(extend.blur, 'blur'),
    brightness: resolveKeyValuePair(extend.brightness, 'brightness'),
    contrast: resolveKeyValuePair(extend.contrast, 'contrast'),
    dropShadow: resolveDropShadow(extend.dropShadow),
    grayscale: resolveKeyValuePair(extend.grayscale, 'grayscale'),
    hueRotate: resolveKeyValuePair(extend.hueRotate, 'hueRotate'),
    invert: resolveKeyValuePair(extend.invert, 'invert'),
    saturate: resolveKeyValuePair(extend.saturate, 'saturate'),
    sepia: resolveKeyValuePair(extend.sepia, 'sepia'),
    backdropBlur: resolveKeyValuePair(extend.backdropBlur, 'backdropBlur'),
    backdropBrightness: resolveKeyValuePair(extend.backdropBrightness, 'backdropBrightness'),
    backdropContrast: resolveKeyValuePair(extend.backdropContrast, 'backdropContrast'),
    backdropGrayscale: resolveKeyValuePair(extend.backdropGrayscale, 'backdropGrayscale'),
    backdropHueRotate: resolveKeyValuePair(extend.backdropHueRotate, 'backdropHueRotate'),
    backdropInvert: resolveKeyValuePair(extend.backdropInvert, 'backdropInvert'),
    backdropOpacity: resolveKeyValuePair(extend.backdropOpacity, 'backdropOpacity'),
    backdropSaturate: resolveKeyValuePair(extend.backdropSaturate, 'backdropSaturate'),
    backdropSepia: resolveKeyValuePair(extend.backdropSepia, 'backdropSepia'),
    transitionProperty: resolveKeyValuePair(extend.transitionProperty, 'transitionProperty'),
    transitionTimingFunction: resolveKeyValuePair(extend.transitionTimingFunction, 'transitionTimingFunction'),
    transitionDelay: resolveKeyValuePair(extend.transitionDelay, 'transitionDelay'),
    transitionDuration: resolveKeyValuePair(extend.transitionDuration, 'transitionDuration'),
    willChange: resolveKeyValuePair(extend.willChange, 'willChange'),
    content: resolveKeyValuePair(extend.content, 'content'),
  }

  return Object.values(result).reduce((pre, curr) => ({...pre, ...curr}), {});
}

export const injectConfig = (option: MultiThemePluginOptions, api: PluginAPI) => {

  const {addBase} = api;
  const {settings = [], defaultTheme, themes, inShadowRoot, tonicUiTheme, tailwindTheme} = option;
  const rootOrHost = inShadowRoot ? ':host' : ':root';

  // defaultTheme :root setting
  if (defaultTheme && defaultTheme.extend) {
    addBase({
      [rootOrHost]: resolveAllProps(defaultTheme.extend, api)
    })
  }

  // tailwindTheme :root setting
  if (isThemeActive(settings, ThemeName.tailwind) && tailwindTheme?.theme) {
    addBase({
      [rootOrHost]: resolveAllProps(tailwindTheme.theme, api)
    })
  }

  // tonicUiTheme :root setting
  if (isThemeActive(settings, ThemeName.consumerTonicUi) && tonicUiTheme?.extend) {
    addBase({
      [rootOrHost]: resolveAllProps(tonicUiTheme.extend, api)
    })
  }

  Array.isArray(themes) && themes.forEach(theme => {
    if (!isThemeActive(settings, theme.name)) return;

    const {mediaQuery, selectors = []} = theme;

    if (mediaQuery && selectors.length > 0) {
      addBase({
        [mediaQuery]: {
          [selectors.join(', ')]: resolveAllProps(theme.extend, api)
        }
      })
    } else if (selectors.length > 0) {
      addBase({
        [selectors.join(', ')]: resolveAllProps(theme.extend, api)
      })
    } else if (mediaQuery) {
      addBase({
        [mediaQuery]: {
          [rootOrHost]: resolveAllProps(theme.extend, api)
        }
      })
    } else {
      addBase({
        [rootOrHost]: resolveAllProps(theme.extend, api)
      })
    }
  });
}
