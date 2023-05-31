// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    // './index.html',
    // './stories/**/*.{js,jsx,ts,tsx}',
  ],
  // safelist: [{pattern: /./, variants: ['sm', 'md', 'lg', 'xl', '2xl']}],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  tonicui: {
    themes: ['consumer', 'dark', 'cupcake', 'cyberpunk'],
  },
  plugins: [
    require('../dist/index.js'),
  ],
};
