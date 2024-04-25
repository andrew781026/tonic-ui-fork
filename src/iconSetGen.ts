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
import importSVG from './svg/importSVG';

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
// forEachIconSet(importDirectorySync('src/svg/general/16px', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'small-');
// forEachIconSet(importDirectorySync('src/svg/general/24px', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'middle-');
// forEachIconSet(importDirectorySync('src/svg/color/line', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'color-line-', true);
// forEachIconSet(importDirectorySync('src/svg/color/outline', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'color-outline-', true);
// forEachIconSet(importDirectorySync('src/svg/color/solid', {prefix: 'consumer-tonic-ui'}), emptyIconSet, 'color-solid-', true);

importSVG({
  isColorful: false,
  svgPath: 'src/svg/general/16px/*.svg',
  prefix: 'small-',
  target: emptyIconSet
});

importSVG({
  isColorful: false,
  svgPath: 'src/svg/general/24px/*.svg',
  prefix: 'middle-',
  target: emptyIconSet
});

importSVG({
  isColorful: true,
  svgPath: 'src/svg/color/line/*.svg',
  prefix: 'status-line-',
  target: emptyIconSet
});

importSVG({
  isColorful: true,
  svgPath: 'src/svg/color/outline/*.svg',
  prefix: 'status-outline-',
  target: emptyIconSet
});

importSVG({
  isColorful: true,
  svgPath: 'src/svg/color/solid/*.svg',
  prefix: 'status-solid-',
  target: emptyIconSet
});

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

const colorIconNames = (() => {

  const result = [];

  const paths = ['line', 'outline', 'solid'];
  const types = ['danger', 'info', 'protected', 'risk', 'unknown'];

  for (const type of types) {
    for (const path of paths) {
      result.push({
        clazz: `icon-[consumer-tonic-ui--status-${path}-${type}]`,
        name: `status-${path}-${type}`,
      })
    }
  }

  return result
})()

// Export
fs.writeFileSync(path.resolve(__dirname, '../dist', 'iconSet.json'), JSON.stringify(emptyIconSet.export()));
fs.writeFileSync(path.resolve(__dirname, '../dist', 'smallIconNames.json'), JSON.stringify(smallIconNames));
fs.writeFileSync(path.resolve(__dirname, '../dist', 'middleIconNames.json'), JSON.stringify(middleIconNames));
fs.writeFileSync(path.resolve(__dirname, '../dist', 'colorIconNames.json'), JSON.stringify(colorIconNames));
