import {mergeConfig} from '../lib/mergeConfig'
import {MultiThemePluginOptions} from "@/type/define";

// ref: https://github.com/RyanClementsHax/tailwindcss-themer/blob/main/src/index.spec.ts
describe('multiThemePlugin', () => {

  describe('keyframe', () => {
    it('idp extension config', () => {
      const config: MultiThemePluginOptions = {
        defaultTheme: {
          name: 'defaultTheme',
          extend: {
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
          }
        },
        themes: [
          {
            name: 'other',
            extend: {
              keyframes: {
                completeIconAnimation: {
                  '50%': {transform: 'scale(1.2)'},
                  '70%': {transform: 'scale(1.1)'},
                  '100%': {transform: 'scale(1)'},
                },
                wave: {
                  '0%': {transform: 'rotate(0.0deg)'},
                  '10%': {transform: 'rotate(14deg)'},
                  '20%': {transform: 'rotate(-8deg)'},
                  '30%': {transform: 'rotate(14deg)'},
                  '40%': {transform: 'rotate(-4deg)'},
                  '50%': {transform: 'rotate(10.0deg)'},
                  '60%': {transform: 'rotate(0.0deg)'},
                  '100%': {transform: 'rotate(0.0deg)'},
                },
                bounce: {
                  '0%': {transform: 'translateY(0)'},
                  '50%': {transform: 'translateY(-30px);'},
                  '100%': {transform: 'translateY(0);'}
                },
              },
            }
          },
          {
            name: 'extra',
            extend: {
              keyframes: {
                bounce: {
                  '0%': {transform: 'translateY(0)'},
                  '50%': {transform: 'translateY(-30px);'},
                  '70%': {transform: 'translateY(-70px);'},
                  '100%': {transform: 'translateY(0);'}
                },
              },
            }
          },
        ]
      }

      const expect01 = {
        "screens": {},
        "supports": {},
        "data": {},
        "colors": {},
        "spacing": {},
        "container": {},
        "inset": {},
        "zIndex": {},
        "order": {},
        "gridColumn": {},
        "gridColumnStart": {},
        "gridColumnEnd": {},
        "gridRow": {},
        "gridRowStart": {},
        "gridRowEnd": {},
        "margin": {},
        "aspectRatio": {},
        "height": {},
        "maxHeight": {},
        "minHeight": {},
        "width": {},
        "maxWidth": {},
        "minWidth": {},
        "flex": {},
        "flexShrink": {},
        "flexGrow": {},
        "flexBasis": {},
        "borderSpacing": {},
        "transformOrigin": {},
        "translate": {},
        "rotate": {},
        "skew": {},
        "scale": {},
        "animation": {},
        "keyframes": {
          "completeIconAnimation": {"50%": {"transform": "scale(1.2)"}, "100%": {"transform": "scale(1)"}},
          "wave": {
            "0%": {"transform": "rotate(0.0deg)"},
            "10%": {"transform": "rotate(14deg)"},
            "20%": {"transform": "rotate(-8deg)"},
            "30%": {"transform": "rotate(14deg)"},
            "40%": {"transform": "rotate(-4deg)"},
            "50%": {"transform": "rotate(10.0deg)"},
            "60%": {"transform": "rotate(0.0deg)"},
            "100%": {"transform": "rotate(0.0deg)"}
          },
          "bounce": {
            "0%": {"transform": "translateY(0)"},
            "50%": {"transform": "translateY(-30px);"},
            "70%": {"transform": "translateY(-70px);"},
            "100%": {"transform": "translateY(0);"}
          },
          "completeFadeInAnimation": {
            "from": {"height": "0px", "opacity": 0, "visibility": "hidden"},
            "to": {"height": "auto", "opacity": 1, "visibility": "visible"}
          },
          "popupFadeInAnimation": {
            "from": {"transform": "translateX(10px)", "opacity": 0},
            "to": {"transform": "translateX(0px)", "opacity": 1}
          }
        },
        "cursor": {},
        "scrollMargin": {},
        "scrollPadding": {},
        "listStyleType": {},
        "columns": {},
        "gridAutoColumns": {},
        "gridAutoRows": {},
        "gridTemplateColumns": {},
        "gridTemplateRows": {},
        "gap": {},
        "space": {},
        "divideWidth": {},
        "divideColor": {},
        "divideOpacity": {},
        "borderRadius": {},
        "borderWidth": {},
        "borderColor": {},
        "borderOpacity": {},
        "backgroundColor": {},
        "backgroundOpacity": {},
        "backgroundImage": {},
        "gradientColorStops": {},
        "backgroundSize": {},
        "backgroundPosition": {},
        "fill": {},
        "stroke": {},
        "strokeWidth": {},
        "objectPosition": {},
        "padding": {},
        "textIndent": {},
        "fontFamily": {},
        "fontSize": {},
        "fontWeight": {},
        "lineHeight": {},
        "letterSpacing": {},
        "textColor": {},
        "textOpacity": {},
        "textDecorationColor": {},
        "textDecorationThickness": {},
        "textUnderlineOffset": {},
        "placeholderColor": {},
        "placeholderOpacity": {},
        "caretColor": {},
        "accentColor": {},
        "opacity": {},
        "boxShadow": {},
        "boxShadowColor": {},
        "outlineWidth": {},
        "outlineOffset": {},
        "outlineColor": {},
        "ringWidth": {},
        "ringColor": {},
        "ringOpacity": {},
        "ringOffsetWidth": {},
        "ringOffsetColor": {},
        "blur": {},
        "brightness": {},
        "contrast": {},
        "dropShadow": {},
        "grayscale": {},
        "hueRotate": {},
        "invert": {},
        "saturate": {},
        "sepia": {},
        "backdropBlur": {},
        "backdropBrightness": {},
        "backdropContrast": {},
        "backdropGrayscale": {},
        "backdropHueRotate": {},
        "backdropInvert": {},
        "backdropOpacity": {},
        "backdropSaturate": {},
        "backdropSepia": {},
        "transitionProperty": {},
        "transitionTimingFunction": {},
        "transitionDelay": {},
        "transitionDuration": {},
        "willChange": {},
        "content": {}
      }

      expect(mergeConfig(config)).toStrictEqual(expect01);
    })
  })

})
