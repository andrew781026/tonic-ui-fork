const gen_default_theme = require('consumer-tonic-design-system/default_gen_default_theme.json');

module.exports = {
  'color-scheme': 'light',
  'transparent': 'transparent',
  'current': 'currentColor',
  'primary': '#343232',

  'loading': 'var(--tcsmd-gray-28)',

  'enabled-primary-start': 'var(--tcsmd-red-60)',
  'enabled-primary-end': 'var(--tcsmd-red-70)',
  'hover-primary-start': 'var(--tcsmd-red-70)',
  'hover-primary-end': 'var(--tcsmd-red-80)',
  'active-primary-start': 'var(--tcsmd-red-80)',
  'active-primary-end': 'var(--tcsmd-red-90)',

  'enabled-default-start': 'var(--tcsmd-gray-10)',
  'enabled-default-end': 'var(--tcsmd-gray-20)',
  'hover-default-start': 'var(--tcsmd-gray-22)',
  'hover-default-end': 'var(--tcsmd-gray-24)',
  'active-default-start': 'var(--tcsmd-gray-26)',
  'active-default-end': 'var(--tcsmd-gray-28)',

  'enabled-emphasis-start': 'var(--tcsmd-blue-60)',
  'enabled-emphasis-end': 'var(--tcsmd-blue-70)',
  'hover-emphasis-start': 'var(--tcsmd-blue-70)',
  'hover-emphasis-end': 'var(--tcsmd-blue-80)',
  'active-emphasis-start': 'var(--tcsmd-blue-80)',
  'active-emphasis-end': 'var(--tcsmd-blue-90)',

  'hover-ghost-start': '#ececec',
  'hover-ghost-end': '#e7e7e7',
  'active-ghost-start': '#DBDBDB',
  'active-ghost-end': '#D6D6D6',

  // generated
 ...gen_default_theme
};
