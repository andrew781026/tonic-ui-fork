
module.exports = {
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // add component to tailwind css
    require("../dist/index.js")({
      inShadowRoot: false, // :root , :host
    }),
  ],
}
