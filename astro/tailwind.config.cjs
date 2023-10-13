/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // use safelist to avoid purging tonic-ui classes
  safelist: [
    {pattern: /.*/}
  ],

	theme: {
		extend: {},
	},
	plugins: [
    require('../dist/index.js'),
  ],
}
