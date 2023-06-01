export const createTypology = ({
  size = 'medium',
  color = 'red-10',
  label='Typology',
}) => {
  const colorCss = color.startsWith('#') ? `text-[${color}]` : `text-${color}`;
  const text = document.createElement('span');
  text.innerText = label;
  text.className = [colorCss, size].join(' ');

  return text;
};
