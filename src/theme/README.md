# 11ty THEME

This folder streamlines the spec & organisation of common theme functionality & components

## Automatic wrapper

`src/theme/inc/wrapper.njk` is written to *automatically* by a script that runs on `yarn dev`
Check `package.json`, and notice `write-theme-wrapper` — this node function runs each time the server is started

It reads `_config.js` and creates a wrapper that will automatically install all the macros for the components within that file.

If there is no script in `package.json`, it will need to be added as both a script, and part of the concurrently call in the `dev` script:

```
package.json

"scripts": {
    "write-theme-wrapper":"node src/theme/scripts/createNunjucksComponentWrapper.js",
    "dev": "NODE_ENV=development concurrently  \"npm run write-theme-wrapper\" \"ELEVENTY_ENV=development eleventy --serve --port 8000\"  \"npm:watch-*\""
    ...
  },
  ...

```

## Extending and Accessing the theme

For a page to make use of the theme functionality, you just need to extend the base theme...

`page.njk`:

```
{% extends "src/theme/inc/theme.njk" %}
{%  block body %}
	<div>{{ theme.componentName.render() }}</div>
{% endblock %}

```

## Including styles and scripts

Make sure the auto-generated styles and scripts are included from teh main css and js files:

```
css

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Import the components - only need to do this once, the contents of the include are auto generated */
@import '../src/theme/inc/components.css';

```

```
js

import Alpine from 'alpinejs'
import Swup from 'swup'
import SwupFragmentPlugin from '@swup/fragment-plugin'

import Lenis from '@studio-freight/lenis'

// Utils
import { ready } from './utils/dom'

/* Import the components - only need to do this once, the contents of the include are auto generated */
import '../../src/theme/inc/components.js'

// Make sure there is a global global
window.global = window

// App
ready(() => {

});

```

## Adding new components

To add new components run this command from the project root:

```

node src/theme/scripts/newComponent.js [componentName]

eg node src/theme/scripts/newComponent.js carousel

```

This will create the boilerplate files

## Updating the wrapper

If changes are required for the wrapper, edit the script that builds it in `src/theme/scripts/createNunjucksComponentWrapper.js`

