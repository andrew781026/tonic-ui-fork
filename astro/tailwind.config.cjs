const colors = require('consumer-tonic-design-system/default_gen_default_theme.json');
const {getColorObject} = require('consumer-tonic-ui/colors/index.js');

const darkColor = {...getColorObject(require('consumer-tonic-ui/colors/themes')['[data-theme=dark]'])};
const bgColors = Object.entries({...colors,...darkColor}).map(([key,value]) => `bg-${key}`);


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

  tonicui: {
    themes: ['consumer','dark'],
    darkTheme: ['dark'],
  },

	theme: {
		extend: {},
	},
	plugins: [
    require('consumer-tonic-ui'),
  ],
}
