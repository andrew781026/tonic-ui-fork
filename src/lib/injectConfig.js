const {current} = require("../colors/defaultTheme");

const resolveInset = (extend, api) => {
  //  inset: ThemeConfig['spacing']

  return {}
}

const resolveFontSize = config => {
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
      if (typeof value === "string") return {[`--fontSize-${key}-0`]: value};
      else if (Array.isArray(value) && value[1] && typeof value[1] === "string") {
        return {
          [`--fontSize-${key}-0`]: value[0],
          [`--fontSize-${key}-1-lineHeight`]: value[1]
        }
      }
      else if (Array.isArray(value) && value[1] ) {
        return {
          [`--fontSize-${key}-0`]: value[0],
          [`--fontSize-${key}-1-lineHeight`]: value[1].lineHeight,
          [`--fontSize-${key}-1-letterSpacing`]: value[1].letterSpacing,
          [`--fontSize-${key}-1-fontWeight`]: value[1].fontWeight
        }
      }
      else throw new Error(`fontSize Config format error , config=${config}`);
    })
    .reduce( (pre,curr) => ({...pre, ...curr}) ,{});
}

const resolveAnimation = (extend, api) => {

  return {}
}

const resolveThemeExtensionAsCustomProps = (extend, api) => {

  /*
    fontFamily
    fontSize -> [ font-size , line-height ] or font-size
    spacing ->
    lineHeight ->
    borderRadius ->
    colors ->
    keyframes ->
    animation ->


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
   */

  const fontSizeConfig = resolveFontSize(extend.fontSize);

  return {
    ...fontSizeConfig,
  }
}

module.exports = {
  injectConfig: (option, api) => {

    const {addBase} = api;
    const {defaultTheme, themes, inShadowRoot} = option;
    const rootOrHost = inShadowRoot ? ':host' : ':root';

    // defaultTheme consider :root setting
    if (defaultTheme){
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
