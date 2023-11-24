import {mock} from 'jest-mock-extended';
import {PluginAPI, ResolvableTo} from 'tailwindcss/types/config';
import multiThemePlugin from '../index';
import {MultiThemePluginOptions} from "@/type/define";

type PluginUtils = Parameters<Exclude<ResolvableTo<string>, string>>[0];
type Theme = PluginUtils['theme'];

describe('multiThemePlugin', () => {
  let api: PluginAPI

  beforeEach(() => {
    api = mock<PluginAPI>({
      e: jest.fn(x => `escaped-${x}`),
      theme: jest.fn(x => x) as PluginAPI['theme']
    })
  })

  describe('styles', () => {
    it('adds the custom vars for each theme', () => {
      const config: MultiThemePluginOptions = {
        settings: [
          {name: 'tailwind', disable: true},
          {name: 'consumerTonicUi', disable: true},
        ],
        defaultTheme: {
          extend: {
            colors: {
              primary: 'thing'
            }
          }
        },
        themes: [
          {
            name: 'dark',
            extend: {
              colors: {
                primary: 'another',
                secondary: 'something'
              },
            }
          },
          {
            name: 'neon',
            extend: {
              colors: {
                primary: 'red',
                secondary: 'blue'
              },
              spacing: {
                '0.5': '10px'
              }
            }
          }
        ]
      }
      multiThemePlugin(config).handler(api)

      expect(api.addBase).toHaveBeenCalledWith({
        ':root': {
          "--colors--primary": "thing",
        }
      })
      expect(api.addBase).toHaveBeenCalledWith({
        ':root': {
          '--colors--primary': 'another',
          '--colors--secondary': 'something',
        }
      })
      expect(api.addBase).toHaveBeenCalledWith({
        ':root': {
          "--colors--primary": "red",
          "--colors--secondary": "blue",
          "--spacing-0\\.5": "10px",
        }
      })
    })

    it('adds the custom vars for each theme using selectors if provided', () => {
      const config: MultiThemePluginOptions = {
        defaultTheme: {
          extend: {
            colors: {
              primary: 'thing'
            }
          }
        },
        themes: [
          {
            name: 'darkTheme',
            selectors: ['.dark-mode', '[data-theme="dark"]'],
            extend: {
              colors: {
                primary: 'first'
              }
            }
          },
          {
            name: 'neon',
            selectors: ['.high-contrast', '[data-theme="high-contrast"]'],
            extend: {
              colors: {
                primary: 'second'
              }
            }
          }
        ]
      }

      multiThemePlugin(config).handler(api)

      expect(api.addBase).toHaveBeenCalledWith({
        '.dark-mode, [data-theme="dark"]': {
          '--colors-primary': 'first'
        }
      })
      expect(api.addBase).toHaveBeenCalledWith({
        '.high-contrast, [data-theme="high-contrast"]': {
          '--colors-primary': 'second'
        }
      })
    })

    it('doesnt add a style when no selectors given', () => {
      const config: MultiThemePluginOptions = {
        defaultTheme: {
          extend: {
            colors: {
              primary: 'thing'
            }
          }
        },
        themes: [
          {
            name: 'darkTheme',
            selectors: [],
            extend: {
              colors: {
                primary: 'first'
              }
            }
          }
        ]
      }

      multiThemePlugin(config).handler(api)

      expect(api.addBase).toHaveBeenCalledWith({
        ':root': {
          '--colors-primary': 'thing'
        }
      })
      expect(api.addBase).toHaveBeenCalledTimes(1)
    })

    it('adds a media query if one given', () => {
      const config: MultiThemePluginOptions = {
        defaultTheme: {
          extend: {
            colors: {
              primary: 'thing'
            }
          }
        },
        themes: [
          {
            name: 'darkTheme',
            selectors: ['[data-theme="dark"]'],
            mediaQuery: '@media (prefers-color-scheme: dark)',
            extend: {
              colors: {
                primary: 'first'
              }
            }
          }
        ]
      }

      multiThemePlugin(config).handler(api)

      expect(api.addBase).toHaveBeenCalledWith({
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--colors-primary': 'first'
          }
        }
      })
    })

    it('does not a media query if none given', () => {
      const config: MultiThemePluginOptions = {
        defaultTheme: {
          extend: {
            colors: {
              primary: 'thing'
            }
          }
        },
        themes: [
          {
            name: 'darkTheme',
            selectors: ['[data-theme="dark"]'],
            extend: {
              colors: {
                primary: 'first'
              }
            }
          }
        ]
      }

      multiThemePlugin(config).handler(api)

      expect(api.addBase).not.toHaveBeenCalledWith({
        '@media (prefers-color-scheme: dark)': expect.anything()
      })
    })
  })

  describe('config', () => {
    it('extends the theme', () => {
      expect(
        multiThemePlugin({
          defaultTheme: {
            extend: {
              colors: {
                primary: 'thing'
              }
            }
          },
          themes: [
            {
              name: 'dark',
              extend: {
                colors: {
                  primary: 'another',
                  secondary: 'something'
                }
              }
            }
          ]
        }).config
      ).toEqual({
        theme: {
          extend: {
            colors: {
              primary: 'var(--colors-primary)',
              secondary: 'var(--colors-secondary)'
            }
          }
        }
      })
    })

  })
})
