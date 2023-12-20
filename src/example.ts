import {
  importDirectorySync,
  cleanupSVG,
  runSVGO,
  parseColorsSync,
  isEmptyColor, IconSet,
} from '@iconify/tools';
import * as fs from 'fs';
import * as path from 'path';

// Import icons
const iconSet = importDirectorySync('svg/general/16px', {
  prefix: 'icons',
});

const iconSet2 = importDirectorySync('svg/general/24px', {
  prefix: 'icons',
});

const forEachIconSet = (originIconSet: IconSet, targetIconSet: IconSet, namePrefix: string) => {

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
      parseColorsSync(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color)
            ? colorStr
            : 'currentColor';
        },
      });

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

// Validate, clean up, fix palette and optimise
forEachIconSet(iconSet, iconSet, 'small-');
forEachIconSet(iconSet2, iconSet, 'middle-');

// Export
// console.log(iconSet.export());
fs.writeFileSync(path.resolve(__dirname, '../dist', 'iconSet.json'), JSON.stringify(iconSet.export()));
