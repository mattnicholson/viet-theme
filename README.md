# eleventy-tailwindcss-alpinejs-starter

A starter repository showing how to build a website with the [Eleventy](https://www.11ty.dev), [Tailwind CSS](https://tailwindcss.com), and [Alpine.js](https://alpinejs.dev).

## Getting Started

### 1. Install the dependencies

```
yarn
```

### 2. Run Eleventy

```
yarn dev
```

## Working with 11ty

### NPM packages

To use NPM packages, install anything you want as per usual. Then make the dist version of the script available by adding something like this to the `.eleventy.js` file:

```
eleventyConfig.addPassthroughCopy({
  './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
})
```

### Custom scripts

You can add custom JS by editing the file at `assets/js/plugin.js`. Alternatively, you can add additional scripts (eg `assets/js/extraThings.js`) then import it into the main `plugin.js` file with:

```
import extraThings form './extraThings.js'
```

On build, the bundler will concatenate all the scripts into a single file.

### Other assets

If you want to include other assets (eg, fonts or images etc), you can add them to the `assets/` directory. Then add a line like this to the `.eleventy.js` file:

```
eleventyConfig.addPassthroughCopy('assets/gfx')
```

This will ensure that every file in the `assets/gfx/` directory is copied to the public directory. They will then be available in to import in the code as absolute URLs, eg: `/gfx/logo.png`.

### Content Data

Any dynamic content can be stored in the `_data/` directory as a JSON file, for example the `_data/meta.json`. The contents of the JSON will then be available in the template files via the filename, eg `meta.title`.


## CSS

### Tailwind CSS

This site is setup to use [Tailwind CSS](https://tailwindcss.com). You can configure Tailwind using the config file in `styles/tailwind.config.js` according to [the Tailwind documentation](https://tailwindcss.com/docs/configuration).

### Other CSS

You can also include some style rules

## Deploying

You can create a deployment-ready version of the site by running `yarn build`. This will create a distributable version in the `_site/` directory.