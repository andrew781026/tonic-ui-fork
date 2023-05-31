export const createTypology = ({
  size = 'medium',
  color = 'red-10',
  label='Typology',
}) => {
  const colorCss = color.startsWith('#') ? `text-[${color}]` : `text-${color}`;
  const text = document.createElement('span');
  text.innerText = label;

  const colors = [
    'text-red-10',
    'text-red-20',
    'text-red-30',
    'text-red-40',
    'text-red-50',
    'text-red-60',
    'text-red-70',
    'text-red-80',
    'text-red-90',
    'text-red-100',
    'text-magenta-10',
    'text-magenta-20',
    'text-magenta-30',
    'text-magenta-40',
    'text-magenta-50',
    'text-magenta-60',
    'text-magenta-70',
    'text-magenta-80',
    'text-magenta-90',
    'text-magenta-100',
  ];

  text.className = colors.join(' ');
  text.className = [colorCss, size].join(' ');

  return text;
};
