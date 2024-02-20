import {
  SVG,
  IconSet,
  blankIconSet,
  cleanupSVG,
  isEmptyColor,
  parseColorsSync,
  runSVGO
} from "@iconify/tools";
import * as glob from "glob";
import * as fs from 'fs';
import path from "path";

interface Params {
  isColorful: boolean;
  target?: IconSet;
  svgPath: string | string[]; // glob pattern
  workDir?: string;
  prefix?: string;
}

// import monotone/colorful SVG - using glob & workDir
const importSVG = ({isColorful, target, svgPath, workDir = '', prefix = ''}: Params): IconSet => {

  const result = target || blankIconSet('consumer-tonic-ui');

  const svgFiles = glob.sync(svgPath);

  svgFiles.forEach((file) => {

    // Read icon, create SVG instance
    const content = fs.readFileSync(path.resolve(workDir, file), 'utf8');
    const svg = new SVG(content);
    if (!svg) return;

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

      // Add icon to icon set
      result.fromSVG(`${prefix}${path.basename(file,'.svg')}`, svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${file}:`, err);
      return;
    }
  })

  return result;
}

export default importSVG;
