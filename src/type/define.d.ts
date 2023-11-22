
export {ThemeConfig} from 'tailwindcss/types/config'
export * from 'tailwindcss/types/config'

export interface DefaultThemeConfig {
  name: String
  selectors?: String | String[],
  mediaQuery?: String | String[],
  extend?: ThemeConfig
  theme?: ThemeConfig
}

export interface MultiThemePluginOptions {
  inShadowRoot?: Boolean
  defaultTheme?: DefaultThemeConfig
  tonicUiTheme?: DefaultThemeConfig
  tailwindTheme?: DefaultThemeConfig
  themes?: ThemeConfig[]
}
