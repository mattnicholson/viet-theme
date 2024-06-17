/*

This script creates boilerplate files for a new component

Usage:

node [path/to/script] [nameOfComponent]
e.g node src/theme/scripts/newComponent.js carousel

will create src/theme/components/
carousel.js
carousel.njk
carousel.css

*/

const fs = require('fs');
const path = require('path');

// Get component name from script
const componentName = process.argv[2];

if(!componentName){
    console.error('Component name is required');
    return;
}

function js(component){
    return (
`import Alpine from 'alpinejs'

import { init } from '../../../../assets/js/utils/alpine'

/*

Description:
--------------
${component} component

Example Usage:
---------------
<div x-data="${component}">Lorem ipsum dolor<br />sit amet</div>

*/

init(() => {
    Alpine.data('${component}', () => ({
        init(args) {
            // this.$el.dataset
        },
        destroy() {
            
        },
    }))
})
`)
}

function css(component){
    return (
`
@layer utilities {
    :root {
    }
}

@layer components {
    .${component} {
        
    }
}
`)
}

function njk(component){
    return (
`{# Anything defined in here will be available at the theme level #}
{% set defaultProps = {} %}

{# Anything defined in here will be available at the theme level #}
{% set modifiers = ['default'] %}

{# Render the component #}
{% macro render(props) %}
<div class="${component}" x-data="${component}">[[ ${component} ]]</div>
{% endmacro %}
`)
}

let jsFile = js(componentName);
let cssFile = css(componentName);
let njkFile = njk(componentName);


// Get component folders
const componentSource = path.join(__dirname, `../components/${componentName}/`);

if (fs.existsSync(componentSource)) {
    console.error(`'${componentName}' component already exists`);
    return;
}

// Make the directory
fs.mkdirSync(componentSource);

// Output file paths
const outputNjkPath = path.join(__dirname, `../components/${componentName}/${componentName}.njk`);
const outputJsPath = path.join(__dirname, `../components/${componentName}/${componentName}.js`);
const outputCssPath = path.join(__dirname, `../components/${componentName}/${componentName}.css`);



// Write the final outputs into src/theme/inc
fs.writeFileSync(outputNjkPath, njkFile);
fs.writeFileSync(outputJsPath, jsFile);
fs.writeFileSync(outputCssPath, cssFile);

console.log(`${componentName} boilerplate created successfully!`);
