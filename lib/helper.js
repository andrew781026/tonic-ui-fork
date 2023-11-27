"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThemeActive = void 0;
const const_1 = require("./const");
const isThemeActive = (activeThemes, themeName) => {
    if (!themeName)
        return true;
    const newActiveThemes = [
        ...activeThemes,
        { name: const_1.ThemeName.tailwind, disable: undefined },
        { name: const_1.ThemeName.consumerTonicUi, disable: undefined },
    ];
    // console.log('themeName=', themeName,'active=', !(newActiveThemes.find(item => item?.name === themeName)?.active === false))
    return !(newActiveThemes.find(item => item?.name === themeName)?.disable);
};
exports.isThemeActive = isThemeActive;
