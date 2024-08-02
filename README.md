# Vietnamese Kitchen Theme

An 11ty site that uses prismic to load content & config for multiple sites from the same codebase.

## How it is set up

- Same code is deployed to 2 different netlify sites
- Each of those have different `.env` variables to define the handle of a 'site' type page in Prismic
- 11ty loads the site with that handle from prismic, and then all the config and other pages need to be linked to that page to be rendered into a given domain

## FAQ

Q. What's the TLDR?
A. The entry type in Prismic will map to a file in `src/theme/templates`. That will render the file with `entry` object passed in (check `_data/entries.js` for its properties), it will be a set of components each of which which can be edited in `src/theme/components/<handle>`. If you need to edit the main layout / wrapper, it's in `src/theme/inc/theme`

Q. How are pages built dynamically?
A. All pages are defined in `/pages/` . Static ones have a .njk with their permalink defined in frontmatter file, and dynamic ones are defined by looping through `entries` in `@entries.njk` which gets its data from `_data/entries.js`, which loads from Prismic.

Q. So how do I edit how a page looks?
A. Pages from prismic define a `template` based on their page `type`, this loads a file from `src/theme/templates` . If a matching handle exists, or it loads `basic.njk` if not. Inside there you will have access to the `entry` object and any site data with the `data('<handle>')` nunjuck global

Q. There's no markup in the template files?
A. There can be, it's just that these templates are build purely by nesting components using the `<component name> | render(props)` filter. Components are referenced by their handle, and their markup, styles and javascript are defined in the component folder in `src/theme/components/`

## Things to know

- The dev script builds some include files for javascript and nunjucks.
- This is because it's not always possible to read the filesystem at build time, so these are compiled on dev and then they can be committed as if they are static files
- Check the `package.json` to see what scripts are running in the dev command
- This site has built some extensions on top of 11ty, which are defined in `src/theme/lib/theme.js` there are some filters and functions in there
- There is also an opinionated framework of components, defining default props and rendering syntax which is documented in more detail in `src/theme/README.md`
- Besides that, it's standard 11ty

A starter repository showing how to build a website with the [Eleventy](https://www.11ty.dev), [Tailwind CSS](https://tailwindcss.com), and [Alpine.js](https://alpinejs.dev).

## Getting Started

### 1. Install the dependencies

```
yarn
```

### 2a. Run Eleventy

```
yarn dev
```

### 2b. Run Netlify Dev

This will allow you to use Netlify functions

```
netlify dev
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