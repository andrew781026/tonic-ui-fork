export {ThemeConfig} from 'tailwindcss/types/config'
export * from 'tailwindcss/types/config'

export interface DefaultThemeConfig {
  name: String
  selectors?: String | String[],
  mediaQuery?: String | String[],
  extend?: ThemeConfig
  theme?: ThemeConfig
}

export interface ThemeSetting {
  name: String
  disable: Boolean
}

export interface MultiThemePluginOptions {
  isTailwind4?: Boolean
  inShadowRoot?: Boolean
  settings?: ThemeSetting[]
  defaultTheme?: Partial<DefaultThemeConfig, 'name'>
  tonicUiTheme?: DefaultThemeConfig
  tailwindTheme?: DefaultThemeConfig
  themes?: ThemeConfig[]
}

