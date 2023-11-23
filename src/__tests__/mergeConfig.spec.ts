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
                  '10%': {transform: 'translateY(-10px)'},
                  '70%': {transform: 'translateY(-70px);'},
                  '100%': {transform: 'translateY(0);'}
                },
              },
            }
          },
        ]
      }

      const expect01 = {
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
          '10%': {transform: 'translateY(-10px)'},
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
      };

      expect(mergeConfig(config).keyframes).toStrictEqual(expect01);
    })
  })

})
