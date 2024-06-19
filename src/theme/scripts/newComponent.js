/*

This script creates boilerplate files for a new component

Usage:

node [path/to/script] [nameOfComponent]
e.g node src/theme/scripts/newComponent.js carousel

will create src/theme/components/
carousel.js
carousel.njk
carousel.css

You can optionally pass in modifiers for this component, and optional wrapper types:
node [path/to/script] [nameOfComponent] [comma,separated,modifiers] [comma,separated,wrappers]

node src/theme/scripts/newComponent.js carousel default,hero,small default,alt


*/

const fs = require('fs');
const path = require('path');

// Get component name from script
const componentName = process.argv[2];

// Optional modifiers from script
const modifiers = process.argv[3];

// Optional wrapper modifiers from script
const wrapperModifiers = process.argv[4];

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

function css(component,modifiers,wrapperModifiers){

    let mods = ['default'];
    if(modifiers && modifiers.length) mods = modifiers.split(',');

    let wrapperMods = [];
    if(wrapperModifiers && wrapperModifiers.length) wrapperMods = wrapperModifiers.split(',');

    let wrapperCSS = wrapperMods.map(m=>{

        return (
            `.${component}-wrapper.${component}-wrapper--${m} {\n\t\t\n\t}\n\n\t`
        )

    }).join('');

    let modsCSS = mods.map(m=>{

        return (
            `.${component}.${component}--${m} {\n\t\t\n\t}\n\n\t`
        )

    }).join('');

    return (
`
@layer utilities {
    :root {
    }
}

@layer components {

    ${wrapperCSS}
    .${component} {
        
    }

    ${modsCSS}
}
`)
}

function njk(component,modifiers,wrapperModifiers){

    let mods = ['default'];
    if(modifiers && modifiers.length) mods = modifiers.split(',');

    let hasWrapper = wrapperModifiers && wrapperModifiers.length;

    let wrapperNjk = '';
    let wrapperMods = '';
    if(hasWrapper){
        wrapperMods = `
{# Different types of wrapper #}
{% set wrapperModifiers = ${JSON.stringify(wrapperModifiers.split(','))} %}

`;
        wrapperNjk = `
{# Wrapper for different wrapper types - used ofr spec or {% render '${component}' %} shortcode #}
{% macro wrapper(props) %}
<div class="${component}-wrapper {% if props.modifier %}${component}-wrapper--{{props.modifier}}{% endif %} relative">{{ props.content | safe }}</div>
{%  endmacro %}
        `
    }

    return (
`{# Anything defined in here will be available at the theme level #}
{% set defaultProps = {} %}

{# Anything defined in here will be available at the theme level #}
{% set modifiers = ${JSON.stringify(mods)} %}

${wrapperMods}

{# Render the component #}
{% macro render(props) %}
<div class="${component} {% if props.modifier %}${component}--{{ props.modifier }}{% endif %}" x-data="${component}">[[ ${component} ]]</div>
{% endmacro %}

${wrapperNjk}
`)
}

let jsFile = js(componentName,modifiers,wrapperModifiers);
let cssFile = css(componentName,modifiers,wrapperModifiers);
let njkFile = njk(componentName,modifiers,wrapperModifiers);


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
