// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  tonicui: {
    themes: ['dark', 'cupcake', 'cyberpunk'],
  },
  plugins: [
    require('../dist/index.js'),
  ],
};
