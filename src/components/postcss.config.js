module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(
        require('postcss-nested')({
          bubble: ['screen'],
        }),
    ),
    require('tailwindcss')('./gen/components/tailwind.config.js'),
    require('autoprefixer'),
  ],
};
