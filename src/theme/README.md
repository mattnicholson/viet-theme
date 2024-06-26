# 11ty THEME

This folder streamlines the spec & organisation of common theme functionality & components

## Automatic wrapper

`src/theme/inc/wrapper.njk` is written to *automatically* by a script that runs on `yarn dev`
Check `package.json`, and notice `write-theme-wrapper` — this node function runs each time the server is started

It reads `src/theme/components` folder and creates a wrapper that will automatically install all the macros for the components within those subdirectories.

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

For a page to make use of the theme functionality, you just need to extend the base theme, and put some content in its `body` block...

`page.njk`:

```
{% extends "src/theme/inc/theme.njk" %}
{%  block body %}
	<div>{{ theme.componentName.render() }}</div>
{% endblock %}

```

## Including styles and scripts

Make sure the auto-generated styles and scripts are included from the main css and js files:

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

eg — node src/theme/scripts/newComponent.js carousel

```

You can also specify possible modifiers for the component if these are known:

```
node src/theme/scripts/newComponent.js [componentName] [optional,modifier,list]

eg — node src/theme/scripts/newComponent.js carousel default,hero

```

You can even specify possible modifiers for an optional wrapper for the component if these are known,
This is used on the /spec/ page as different wrapper variants, and used by the `{% render 'componentName' %}` shortcode

```
node src/theme/scripts/newComponent.js [componentName] [optional,modifier,list] [optional,wrapper,modifiers]

eg — node src/theme/scripts/newComponent.js carousel default,hero default,alt

```

This will create the boilerplate files so that you can render components

## Rendering components

Once you've included all scripts and added new components, you can render components around the pages or from inside other components automatically  — whatever exists in the `src/theme/components` folder as a sub folder will be available as a component around the site, with css and javascript included automatically.

There are a few ways to render components:

You can see how these are used in `src/theme/pages/test.njk` or visiting `localhost:8000/test/`


```
nunjucks

{# This will render the default component, including its wrapper if a wrapper macro exists in teh component file. It will use the default props defined in the component #}

{% render 'componentName' %}

```

If you don't want to render the wrapper, you can skip it

```
{% render 'componentName',{
    skipWrapper:true
} %}
```

If you want to override default settings, you can pass props in #}
wrapper props are sent to teh wrapper, and render props are sent to the component
```
{% render 'componentName',{
    wrapper : {
        modifier:'alt'
    },
    render:{
        modifier:'default'
    }
} %}

```

If you want to inherit the default props and just override a couple, you can tell it to inherit props:

```
{% render 'componentName',{
    inheritProps:true,
    render:{
        overrideThisProp:'newValue'
    }
} %}

```

You can also call `render` as a filter, in case you need to render things into an object context, eg an array of components you want to join together:
The arguments are the same as the `{% render %}` shortcode

```
{% set output = [
    [
        'componentA' | render,
        'componentB' | render({
            wrapper : {
                modifier:'alt'
            },
            render:{
                modifier:'default'
            },
            inheritProps:true,
            skipWrapper:true
        })
    ] | join('')
] %}

{{ output | safe}}

```

You can also access the component macro and call its methods and access its variables using the global `_` function. This gives a more 'raw' access to the macro.

```

{% set com = _('componentName') %}

{{ com.render({
    modifier : 'alt'
}) }}

```

The function helps direct render fail more gracefully if a component doesn't exist:

```

{# This will output a log to the console that the component doesn't exist, but it will not break the page #}
{{ _('notAComponent').render() }}

```

Finally, there is a `components` variable in the global context where all registered components can be accessed.

*NOTE you need to be sure the component you want to call is actually registered / exists otherwise 11ty will fail, recommend using one of the globals above which fail gracefully*

```

{{ components.example.render() }}

```


## Updating boilerplate

If changes are required for the boilerplate components, edit the script that builds it in `src/theme/scripts/newComponent.js`

## Updating the wrapper

If changes are required for the wrapper, edit the script that builds it in `src/theme/scripts/createNunjucksComponentWrapper.js`

