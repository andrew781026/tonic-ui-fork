const colors = require('../src/gen_default_theme.json');
const bgColors = Object.entries(colors).map(([key,value]) => `bg-${key}`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // safelist: [
  //   {pattern: /.*/}
  // ],

  // use safelist to avoid purging tonic-ui classes
  safelist: [
    ...bgColors,
  ],

	theme: {
		extend: {},
	},
	plugins: [
    require('consumer-tonic-ui'),
  ],
}
