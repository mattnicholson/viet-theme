module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting'),
		require('tailwindcss')('./styles/tailwind.config.js'),
		require('autoprefixer'),
		require('cssnano'),
		// Add other PostCSS plugins here if needed
	],
}
