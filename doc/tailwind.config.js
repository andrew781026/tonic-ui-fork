// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    './index.html',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  // use safelist to avoid purging tonic-ui classes
  safelist: [{pattern: /(text)-(orange|red|magenta|purple|blue|green|teal|cyan|gray|yellow|primary)(-[1-9]0|-100|)/}],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  tonicui: {
    themes: ['consumer', 'dark', 'cyberpunk', 'garden'],
  },
  plugins: [
    require('../dist/index.js'),
  ],
};
