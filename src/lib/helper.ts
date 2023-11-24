import {ThemeSetting} from "../type/define.d";
import {ThemeName} from "./const";

export const isThemeActive = (activeThemes: ThemeSetting[], themeName?: string): boolean => {
  if (!themeName) return true;
  const newActiveThemes = [
    ...activeThemes,
    {name: ThemeName.tailwind, disable: undefined},
    {name: ThemeName.consumerTonicUi, disable: undefined},
  ]

  // console.log('themeName=', themeName,'active=', !(newActiveThemes.find(item => item?.name === themeName)?.active === false))
  return !(newActiveThemes.find(item => item?.name === themeName)?.disable);
}
