/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
  tonicui: {
    themes: ["dark","cupcake","cyberpunk"],
  },
	plugins: [
    require('../dist/index.js'),
  ],
}
