// add dist/json folder
const fs = require('fs');
const path = require("path");

const defaultTheme = require('../src/colors/defaultTheme');
const themes = require('../src/colors/themes');
const {getColorObject} = require('../src/lib/helper.js');

const jsonFolder = path.resolve(__dirname, '../dist/json');
if (!fs.existsSync(jsonFolder)) fs.mkdirSync(jsonFolder, {recursive: true});

// gen themes.json
const genTheme = getColorObject(defaultTheme);
const genThemeData = JSON.stringify(getColorObject(genTheme), null, 2);
const genThemePath = path.resolve(__dirname, '../dist/json/genTheme.json');
fs.writeFileSync(genThemePath, genThemeData);

// gen defaultTheme.json
const allThemeColor = Object.values(themes).reduce((pre, curr) => {

  return {
    ...pre,
    ...curr
  }
}, {});
const allThemeColorData = JSON.stringify(getColorObject(allThemeColor), null, 2);
const allThemeColorPath = path.resolve(__dirname, '../dist/json/allThemeColor.json');
fs.writeFileSync(allThemeColorPath, allThemeColorData);
