import {
  importDirectorySync,
  cleanupSVG,
  runSVGO,
  parseColorsSync,
  isEmptyColor,
  IconSet,
  blankIconSet,
} from '@iconify/tools';
import * as fs from 'fs';
import * as path from 'path';

const emptyIconSet = blankIconSet('consumer-tonic-ui');

// Validate, clean up, fix palette and optimise
const forEachIconSet = (originIconSet: IconSet, targetIconSet: IconSet, namePrefix: string, isColorful: boolean = false) => {

  originIconSet.forEachSync((name, type) => {
    if (type !== 'icon') {
      return;
    }

    const svg = originIconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
      originIconSet.remove(name);
      return;
    } else originIconSet.remove(name);

    // Clean up and optimise icons
    try {
      // Clean up icon code
      cleanupSVG(svg);

      // Assume icon is monotone: replace color with currentColor, add if missing
      // If icon is not monotone, remove this code
      if (!isColorful) {
        parseColorsSync(svg, {
          defaultColor: 'currentColor',
          callback: (attr, colorStr, color) => {
            return !color || isEmptyColor(color)
              ? colorStr
              : 'currentColor';
          },
        });
      }

      // Optimise
      runSVGO(svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err);
      originIconSet.remove(name);
      return;
    }

    // Update icon
    targetIconSet.fromSVG(`${namePrefix}${name}`, svg);
  });
}

// Import icons
forEachIconSet(importDirectorySync('src/svg/general/16px', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'small-');
forEachIconSet(importDirectorySync('src/svg/general/24px', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'middle-');
forEachIconSet(importDirectorySync('src/svg/color/line', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'color-line-');
forEachIconSet(importDirectorySync('src/svg/color/outline', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'color-outline-');
forEachIconSet(importDirectorySync('src/svg/color/solid', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'color-solid-');

const smallIconNames = Object.keys(emptyIconSet.export().icons)
  .filter(name => name.startsWith('small'))
  .map(name => ({
    name: name.replace('small-', ''),
    clazz: `icon-[consumer-tonic-ui--${name}]`
  }));

const middleIconNames = Object.keys(emptyIconSet.export().icons)
  .filter(name => name.startsWith('middle'))
  .map(name => ({
    name: name.replace('middle-', ''),
    clazz: `icon-[consumer-tonic-ui--${name}]`
  }));

// Export
fs.writeFileSync(path.resolve(__dirname, '../dist', 'iconSet.json'), JSON.stringify(emptyIconSet.export()));
fs.writeFileSync(path.resolve(__dirname, '../dist', 'smallIconNames.json'), JSON.stringify(smallIconNames));
fs.writeFileSync(path.resolve(__dirname, '../dist', 'middleIconNames.json'), JSON.stringify(middleIconNames));
