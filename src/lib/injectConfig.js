const {cssEscape} = require("../lib/cssEscape.js");

const resolveFontSize = config => {

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

      if (typeof value === "string" || typeof value === "number") return {[`--fontSize-${escapedKey}-0`]: value};
      else if (Array.isArray(value) && value[1] && (typeof value[1] === "string" || typeof value === "number")) {
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
      } else throw new Error(`fontSize Config format error , config=${config}`);
    })
    .reduce((pre, curr) => ({...pre, ...curr}), {});
}

const resolveColor = (extend, api) => {

  // colors: ResolvableTo<RecursiveKeyValuePair> => can Recursive KeyValuePair

  return {}
}

const resolveKeyframes = (config={}) => {

  //   keyframes: ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>>

  /*
    keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
   */

  const result = {};

  for (const [key, value] of Object.entries(config)) {
    const escapedKey = cssEscape(key);
    if (typeof value === "string" || typeof value === "number") result[`--keyframes-${escapedKey}`] = value;
    else throw new Error(`keyframes Config error on (key,value)=(${key},${value}) , config=${config}`);
  }

  return result;
}


const resolveKeyValuePair = (config = {}, type) => {

  const result = {};

  for (const [key, value] of Object.entries(config)) {
    const escapedKey = cssEscape(key);
    if (typeof value === "string" || typeof value === "number") result[`--${type}-${escapedKey}`] = value;
    else throw new Error(`${type} Config error on (key,value)=(${key},${value}) , config=${config}`);
  }

  return result;
}


const resolveThemeExtensionAsCustomProps = (extend, api) => {

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

  /*
   // Responsiveness
  screens: ResolvableTo<ScreensConfig>
  supports: ResolvableTo<Record<string, string>>
  data: ResolvableTo<Record<string, string>>

  // Reusable base configs
  colors: ResolvableTo<RecursiveKeyValuePair> => can Recursive KeyValuePair
  spacing: ResolvableTo<KeyValuePair>

  // Components
  container: ResolvableTo<
    Partial<{
      screens: ScreensConfig
      center: boolean
      padding: string | Record<string, string>
    }>
  >

  // Utilities
  inset: ThemeConfig['spacing']
  zIndex: ResolvableTo<KeyValuePair>
  order: ResolvableTo<KeyValuePair>
  gridColumn: ResolvableTo<KeyValuePair>
  gridColumnStart: ResolvableTo<KeyValuePair>
  gridColumnEnd: ResolvableTo<KeyValuePair>
  gridRow: ResolvableTo<KeyValuePair>
  gridRowStart: ResolvableTo<KeyValuePair>
  gridRowEnd: ResolvableTo<KeyValuePair>
  margin: ThemeConfig['spacing']
  aspectRatio: ResolvableTo<KeyValuePair>
  height: ThemeConfig['spacing']
  maxHeight: ThemeConfig['spacing']
  minHeight: ResolvableTo<KeyValuePair>
  width: ThemeConfig['spacing']
  maxWidth: ResolvableTo<KeyValuePair>
  minWidth: ResolvableTo<KeyValuePair>
  flex: ResolvableTo<KeyValuePair>
  flexShrink: ResolvableTo<KeyValuePair>
  flexGrow: ResolvableTo<KeyValuePair>
  flexBasis: ThemeConfig['spacing']
  borderSpacing: ThemeConfig['spacing']
  transformOrigin: ResolvableTo<KeyValuePair>
  translate: ThemeConfig['spacing']
  rotate: ResolvableTo<KeyValuePair>
  skew: ResolvableTo<KeyValuePair>
  scale: ResolvableTo<KeyValuePair>
  animation: ResolvableTo<KeyValuePair>
  keyframes: ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>>
  cursor: ResolvableTo<KeyValuePair>
  scrollMargin: ThemeConfig['spacing']
  scrollPadding: ThemeConfig['spacing']
  listStyleType: ResolvableTo<KeyValuePair>
  columns: ResolvableTo<KeyValuePair>
  gridAutoColumns: ResolvableTo<KeyValuePair>
  gridAutoRows: ResolvableTo<KeyValuePair>
  gridTemplateColumns: ResolvableTo<KeyValuePair>
  gridTemplateRows: ResolvableTo<KeyValuePair>
  gap: ThemeConfig['spacing']
  space: ThemeConfig['spacing']
  divideWidth: ThemeConfig['borderWidth']
  divideColor: ThemeConfig['borderColor']
  divideOpacity: ThemeConfig['borderOpacity']
  borderRadius: ResolvableTo<KeyValuePair>
  borderWidth: ResolvableTo<KeyValuePair>
  borderColor: ThemeConfig['colors']
  borderOpacity: ThemeConfig['opacity']
  backgroundColor: ThemeConfig['colors']
  backgroundOpacity: ThemeConfig['opacity']
  backgroundImage: ResolvableTo<KeyValuePair>
  gradientColorStops: ThemeConfig['colors']
  backgroundSize: ResolvableTo<KeyValuePair>
  backgroundPosition: ResolvableTo<KeyValuePair>
  fill: ThemeConfig['colors']
  stroke: ThemeConfig['colors']
  strokeWidth: ResolvableTo<KeyValuePair>
  objectPosition: ResolvableTo<KeyValuePair>
  padding: ThemeConfig['spacing']
  textIndent: ThemeConfig['spacing']
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
  fontWeight: ResolvableTo<KeyValuePair>
  lineHeight: ResolvableTo<KeyValuePair>
  letterSpacing: ResolvableTo<KeyValuePair>
  textColor: ThemeConfig['colors']
  textOpacity: ThemeConfig['opacity']
  textDecorationColor: ThemeConfig['colors']
  textDecorationThickness: ResolvableTo<KeyValuePair>
  textUnderlineOffset: ResolvableTo<KeyValuePair>
  placeholderColor: ThemeConfig['colors']
  placeholderOpacity: ThemeConfig['opacity']
  caretColor: ThemeConfig['colors']
  accentColor: ThemeConfig['colors']
  opacity: ResolvableTo<KeyValuePair>
  boxShadow: ResolvableTo<KeyValuePair>
  boxShadowColor: ThemeConfig['colors']
  outlineWidth: ResolvableTo<KeyValuePair>
  outlineOffset: ResolvableTo<KeyValuePair>
  outlineColor: ThemeConfig['colors']
  ringWidth: ResolvableTo<KeyValuePair>
  ringColor: ThemeConfig['colors']
  ringOpacity: ThemeConfig['opacity']
  ringOffsetWidth: ResolvableTo<KeyValuePair>
  ringOffsetColor: ThemeConfig['colors']
  blur: ResolvableTo<KeyValuePair>
  brightness: ResolvableTo<KeyValuePair>
  contrast: ResolvableTo<KeyValuePair>
  dropShadow: ResolvableTo<KeyValuePair<string, string | string[]>>
  grayscale: ResolvableTo<KeyValuePair>
  hueRotate: ResolvableTo<KeyValuePair>
  invert: ResolvableTo<KeyValuePair>
  saturate: ResolvableTo<KeyValuePair>
  sepia: ResolvableTo<KeyValuePair>
  backdropBlur: ThemeConfig['blur']
  backdropBrightness: ThemeConfig['brightness']
  backdropContrast: ThemeConfig['contrast']
  backdropGrayscale: ThemeConfig['grayscale']
  backdropHueRotate: ThemeConfig['hueRotate']
  backdropInvert: ThemeConfig['invert']
  backdropOpacity: ThemeConfig['opacity']
  backdropSaturate: ThemeConfig['saturate']
  backdropSepia: ThemeConfig['sepia']
  transitionProperty: ResolvableTo<KeyValuePair>
  transitionTimingFunction: ResolvableTo<KeyValuePair>
  transitionDelay: ResolvableTo<KeyValuePair>
  transitionDuration: ResolvableTo<KeyValuePair>
  willChange: ResolvableTo<KeyValuePair>
  content: ResolvableTo<KeyValuePair>

  // Custom
  [key: string]: any
   */

  const result = {
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
    divideColor: resolveKeyValuePair(extend.divideColor, 'divideColor'),
    divideOpacity: resolveKeyValuePair(extend.divideOpacity, 'divideOpacity'),
    borderRadius: resolveKeyValuePair(extend.borderRadius, 'borderRadius'),
    borderWidth: resolveKeyValuePair(extend.borderWidth, 'borderWidth'),
    borderColor: resolveKeyValuePair(extend.borderColor, 'borderColor'),
    borderOpacity: resolveKeyValuePair(extend.borderOpacity, 'borderOpacity'),
    backgroundColor: resolveKeyValuePair(extend.backgroundColor, 'backgroundColor'),
    backgroundOpacity: resolveKeyValuePair(extend.backgroundOpacity, 'backgroundOpacity'),
    backgroundImage: resolveKeyValuePair(extend.backgroundImage, 'backgroundImage'),
    // gradientColorStops - not yet
    backgroundSize: resolveKeyValuePair(extend.backgroundSize, 'backgroundSize'),
    backgroundPosition: resolveKeyValuePair(extend.backgroundPosition, 'backgroundPosition'),
    // fill - not yet
    // stroke - not yet
    strokeWidth: resolveKeyValuePair(extend.strokeWidth, 'strokeWidth'),
    objectPosition: resolveKeyValuePair(extend.objectPosition, 'objectPosition'),
    padding: resolveKeyValuePair(extend.padding, 'padding'),
    textIndent: resolveKeyValuePair(extend.textIndent, 'textIndent'),
    // fontFamily - not yet
    fontSize: resolveFontSize(extend.fontSize),
    fontWeight: resolveKeyValuePair(extend.fontWeight, 'fontWeight'),
    lineHeight: resolveKeyValuePair(extend.lineHeight, 'lineHeight'),
    letterSpacing: resolveKeyValuePair(extend.letterSpacing, 'letterSpacing'),
    // textColor - not yet
    textOpacity: resolveKeyValuePair(extend.textOpacity, 'textOpacity'),
    // textDecorationColor - not yet
    textDecorationThickness: resolveKeyValuePair(extend.textDecorationThickness, 'textDecorationThickness'),
    textUnderlineOffset: resolveKeyValuePair(extend.textUnderlineOffset, 'textUnderlineOffset'),
    // placeholderColor - not yet
    placeholderOpacity: resolveKeyValuePair(extend.placeholderOpacity, 'placeholderOpacity'),
    // caretColor - not yet
    // accentColor - not yet
    opacity: resolveKeyValuePair(extend.opacity, 'opacity'),
    boxShadow: resolveKeyValuePair(extend.boxShadow, 'boxShadow'),
    // boxShadowColor - not yet
    outlineWidth: resolveKeyValuePair(extend.outlineWidth, 'outlineWidth'),
    outlineOffset: resolveKeyValuePair(extend.outlineOffset, 'outlineOffset'),
    // outlineColor - not yet
    ringWidth: resolveKeyValuePair(extend.ringWidth, 'ringWidth'),
    // ringColor - not yet
    ringOpacity: resolveKeyValuePair(extend.ringOpacity, 'ringOpacity'),
    ringOffsetWidth: resolveKeyValuePair(extend.ringOffsetWidth, 'ringOffsetWidth'),
    // ringOffsetColor - not yet
    blur: resolveKeyValuePair(extend.blur, 'blur'),
    brightness: resolveKeyValuePair(extend.brightness, 'brightness'),
    contrast: resolveKeyValuePair(extend.contrast, 'contrast'),
    // dropShadow - not yet
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

module.exports = {
  injectConfig: (option, api) => {

    const {addBase} = api;
    const {defaultTheme, themes, inShadowRoot} = option;
    const rootOrHost = inShadowRoot ? ':host' : ':root';

    // defaultTheme consider :root setting
    if (defaultTheme) {
      addBase({
        [rootOrHost]: resolveThemeExtensionAsCustomProps(defaultTheme.extend, api)
      })
    }

    themes.forEach(theme => {
      const {mediaQuery, selectors} = theme;

      if (mediaQuery && selectors.length > 0) {
        addBase({
          [mediaQuery]: {
            [selectors.join(', ')]: resolveThemeExtensionAsCustomProps(theme.extend, api)
          }
        })
      } else if (selectors.length > 0) {
        addBase({
          [selectors.join(', ')]: resolveThemeExtensionAsCustomProps(theme.extend, api)
        })
      } else if (mediaQuery) {
        addBase({
          [mediaQuery]: {
            [rootOrHost]: resolveThemeExtensionAsCustomProps(theme.extend, api)
          }
        })
      }
    });

  }
}
