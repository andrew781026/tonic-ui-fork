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

  describe('fontSize', () => {
    it('idp extension config', () => {
      const config: MultiThemePluginOptions = {
        defaultTheme: {
          name: 'defaultTheme',
          extend: {
            fontSize: {
              xs: ['12px', '16px'],
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
          }
        },
        themes: [
          {
            name: 'other',
            extend: {
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
            }
          },
          {
            name: 'extra',
            extend: {
              fontSize: {
                xl: ['18px', '28px'],
                '2,xl': ['22px', '32px'],
                '2.5xl': ['26px', 'normal'],
                '3+xl': ['28px', '36px'],
                '4~xl': ['34px', '40px'],
                '#5xl': ['46px', 1],
                '6$xl': ['46px', 1],
              },
            }
          },
        ]
      }

      const expect01 = {
          "xs": ["var(--fontSize-xs-0)", "var(--fontSize-xs-1-lineHeight)"],
          "sm": ["var(--fontSize-sm-0)", "var(--fontSize-sm-1-lineHeight)"],
          "base": ["var(--fontSize-base-0)", "var(--fontSize-base-1-lineHeight)"],
          "lg": ["var(--fontSize-lg-0)", "var(--fontSize-lg-1-lineHeight)"],
          "xl": ["var(--fontSize-xl-0)", "var(--fontSize-xl-1-lineHeight)"],
          "2xl": ["var(--fontSize-\\32xl-0)", "var(--fontSize-\\32xl-1-lineHeight)"],
          "2.5xl": ["var(--fontSize-\\32\\.5xl-0)", "var(--fontSize-\\32\\.5xl-1-lineHeight)"],
          "3xl": ["var(--fontSize-\\33xl-0)", "var(--fontSize-\\33xl-1-lineHeight)"],
          "4xl": ["var(--fontSize-\\34xl-0)", "var(--fontSize-\\34xl-1-lineHeight)"],
          "5xl": ["var(--fontSize-\\35xl-0)", "var(--fontSize-\\35xl-1-lineHeight)"],
          "6xl": ["var(--fontSize-\\36xl-0)", "var(--fontSize-\\36xl-1-lineHeight)"],
          "7xl": ["var(--fontSize-\\37xl-0)", "var(--fontSize-\\37xl-1-lineHeight)"],
          "8xl": ["var(--fontSize-\\38xl-0)", "var(--fontSize-\\38xl-1-lineHeight)"],
          "9xl": ["var(--fontSize-\\39xl-0)", "var(--fontSize-\\39xl-1-lineHeight)"],
          "2,xl": ["var(--fontSize-\\32\\2c xl-0)", "var(--fontSize-\\32\\2c xl-1-lineHeight)"],
          "3+xl": ["var(--fontSize-\\33\\+xl-0)", "var(--fontSize-\\33\\+xl-1-lineHeight)"],
          "4~xl": ["var(--fontSize-\\34\\~xl-0)", "var(--fontSize-\\34\\~xl-1-lineHeight)"],
          "#5xl": ["var(--fontSize-\\#5xl-0)", "var(--fontSize-\\#5xl-1-lineHeight)"],
          "6$xl": ["var(--fontSize-\\36\\$xl-0)", "var(--fontSize-\\36\\$xl-1-lineHeight)"]
        };

      expect(mergeConfig(config).fontSize).toStrictEqual(expect01);
    })
  })
})
