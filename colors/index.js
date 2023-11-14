const withOpacityValue = (variable, fallbackColor) => {
  return ({opacityValue}) => {
    let fallbackColorValue = '';
    if (fallbackColor) {
      fallbackColorValue = `, var(${fallbackColor})`;
    }
    if (opacityValue === undefined) {
      return `hsl(var(${variable}${fallbackColorValue}))`;
    }
    return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
  };
};

const getColorObject = (theme) => {
  const resultObj = {};

  Object.entries(theme).forEach(([rule, value]) => {
    if (['color-scheme', 'transparent', 'current'].includes(rule)) 'do nothing';
    else if (value.startsWith('var')) resultObj[rule] = value;
    else if (rule.startsWith('--')) resultObj[rule] = `var(${rule})`;
    else resultObj[rule] = `var(--${rule})`;
  });

  return resultObj;
};

module.exports = {getColorObject};
