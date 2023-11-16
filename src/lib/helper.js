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
