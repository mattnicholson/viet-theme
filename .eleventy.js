const theme = require('./src/theme/lib/theme')
const htmlmin = require('html-minifier')

const now = String(Date.now())

module.exports = function (eleventyConfig) {
  
  eleventyConfig.setQuietMode(true); // Don't log every page

  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/*.css')
  eleventyConfig.addWatchTarget('./styles/**/*.css')
  eleventyConfig.addWatchTarget('./src/**/*.css')
  eleventyConfig.addWatchTarget('./src/**/*.njk')
  eleventyConfig.addWatchTarget('./src/**/*.js')
  eleventyConfig.addWatchTarget('./src/theme/**/*.css')
  eleventyConfig.addWatchTarget('./src/theme/**/*.njk')
  eleventyConfig.addWatchTarget('./src/theme/**/*.js')
  eleventyConfig.addWatchTarget('./assets/js/**/*.js')

  // EXPORT STATIC THINGS
  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/gfx')
  eleventyConfig.addPassthroughCopy('assets/img')
  eleventyConfig.addPassthroughCopy('assets/pdf')

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value);
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })

  // Add 11ty functions from the theme...
  theme.init(eleventyConfig);
}
