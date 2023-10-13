/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // use safelist to avoid purging tonic-ui classes
  safelist: [{pattern: /(text)-(orange|red|magenta|purple|blue|green|teal|cyan|gray|yellow|primary)(-[1-9]0|-100|)/}],

	theme: {
		extend: {},
	},
	plugins: [
    require('../dist/index.js'),
  ],
}
