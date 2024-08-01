/*

This script writes a .njk file that adds a macro import
for each component listed in src/theme/config.js

It will write the file into src/theme/inc/wrapper.njk

*/

const fs = require('fs');
const path = require('path');

// Get component folders
const componentSource = path.join(__dirname, `../components/`);
const componentFolders = fs.readdirSync(componentSource, { withFileTypes: true }).filter(dirent => dirent.isDirectory())

// Get template folders
const templateSource = path.join(__dirname, `../templates/`);
const templateFiles = fs.readdirSync(templateSource, { withFileTypes: true }).filter(dirent => !dirent.isDirectory())

// Output file paths
const outputWrapperPath = path.join(__dirname, '../inc/wrapper.njk');
const outputScriptsPath = path.join(__dirname, '../inc/components.js');
const outputStylesPath = path.join(__dirname, '../inc/components.css');
const outputTemplatesPath = path.join(__dirname, '../inc/templates.js');

// Initialize the final output strings
let wrapperOutput = `{# NOTE: This file is generated automatically, to make changes see src/theme/scripts/createNunjucksComponentWrapper #}\n`;
let scriptsOutput = `/* NOTE: This file is generated automatically, to make changes see src/theme/scripts/createNunjucksComponentWrapper */\n`;
let stylesOutput = `/* NOTE: This file is generated automatically, to make changes see src/theme/scripts/createNunjucksComponentWrapper */\n`;

let components = [];
let templates = [];

templateFiles.forEach(t => {

    let handle = t.name.split('.')[0];
    templates.push(handle);

});

// Loop through themeConfig.components
componentFolders.forEach(c => {

    let handle = c.name;
	 const componentFilePath = path.join(__dirname, `../components/${handle}/${handle}.njk`);
    
    // Check if the file exists
    if (fs.existsSync(componentFilePath)) {
    	components.push(handle);
        // Append the import statement if the file exists
        wrapperOutput += `{% import "src/theme/components/${handle}/${handle}.njk" as ${handle} with context %}\n`;
    }

    const scriptFilePath = path.join(__dirname, `../components/${handle}/${handle}.js`);
    
    // Check if the file exists
    if (fs.existsSync(scriptFilePath)) {
        // Append the import statement if the file exists
        scriptsOutput += `import '../components/${handle}/${handle}.js'\n`;
    }

    const styleFilePath = path.join(__dirname, `../components/${handle}/${handle}.css`);
    
    // Check if the file exists
    if (fs.existsSync(styleFilePath)) {
        // Append the import statement if the file exists
        stylesOutput += `@import '../components/${handle}/${handle}.css';\n`;
    }

});

wrapperOutput += `{% set components = saveComponents({`
wrapperOutput += components.map((c) =>`'${c}':${c}`).join(',')
wrapperOutput += `}) %}`

wrapperOutput += "{% block output %}{% endblock %}"

// Write the final outputs into src/theme/inc
fs.writeFileSync(outputWrapperPath, wrapperOutput);
fs.writeFileSync(outputScriptsPath, scriptsOutput);
fs.writeFileSync(outputStylesPath, stylesOutput);
fs.writeFileSync(outputTemplatesPath, `module.exports = ${JSON.stringify(templates)};`);

console.log('Nunjucks component wrapper and includes created successfully!');
