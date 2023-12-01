export const getRgba = bgColor => {

  if (!bgColor) return {};

  const hasA = bgColor.indexOf('a') > -1;
  let sep = bgColor.indexOf(",") > -1 ? "," : " ";
  let rgb = bgColor.substr(hasA ? 5 : 4).split(")")[0].split(sep);

  for (let R in rgb) {
    let r = rgb[R];
    if (r.indexOf("%") > -1)
      rgb[R] = Math.round(r.substr(0, r.length - 1) / 100 * 255);
  }

  const [r, g, b, a] = rgb;
  return {r, g, b, a};
}

/*
  // ref : https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/
  --light =
  --threshold: 65 => the threshold at which colors are considered "light". Range: integers from 0 to 100, recommended 50 - 70
  --switch: calc((var(--light) - var(--threshold)) * -100%);
    color: hsl(0, 0%, var(--switch));
  item.color => calc(--switch)
 */
export const textColorSwitcher = bgColor => {
  const threshold = 65;

  const {r, g, b, a} = getRgba(bgColor);
  const {h, s, l} = rgbToHsl(r, g, b);
  // console.log('bgColor=',bgColor,'~ light=',l * 100,' >> l * 100 >  threshold',l * 100 >  threshold);
  return (l * 100 > threshold) ? 'text-black' : 'text-white';
}

export const getHex = bgColor => {
  if (bgColor?.startsWith('var')) return bgColor;
  const {r, g, b, a} = getRgba(bgColor);
  return rgbToHex(r, g, b);
}

// ref: https://css-tricks.com/converting-color-spaces-in-javascript/
//      https://gist.github.com/mjackson/5311256
export function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {h, s, l};
}

export function rgbToHex(r, g, b) {
  const hexR = parseInt(r).toString(16).padStart(2, '0');
  const hexG = parseInt(g).toString(16).padStart(2, '0');
  const hexB = parseInt(b).toString(16).padStart(2, '0');
  return "#" + hexR + hexG + hexB;
}
