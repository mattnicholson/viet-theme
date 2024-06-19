const nunjucks = require("nunjucks");

exports.init = function (eleventyConfig){
	 
	let components = {};

	/* Output current year */
	eleventyConfig.addNunjucksGlobal('currentYear', function() {
		return new Date().getFullYear();
    });

	/* Store an object of nunjucks key => macros as an object */
	eleventyConfig.addNunjucksGlobal('saveComponents', function(macros) {
		components = macros;
		return macros;
    });

	/* 

	Return the component macro for a given key.
	It fails gracefully so you can call a non existent component and it will still render the page
	
	{{ _('componentName').render() }}

	*/
    eleventyConfig.addNunjucksGlobal('_', function(key) {
    	
		if(components[key]) return components[key];

		const defaultComponent = {
			defaultProps:{},
			modifiers:['default'],
			render:()=>('')
		}

		console.error(`_(): '${key}' component does not exist!`)
		return defaultComponent;
    });

    /* 

	Render a component by name, using its wrapper and default props.
	By default the wrapper will be rendered unless skipWrapper flag is true
	
	{% render 'someComponent' , {
		wrapper : {
			propForWrapper : 'foo'
		},
		render:{
			propForComponent: 'bar'
		}
		skipWrapper:true/false
	} %}

	*/
    eleventyConfig.addShortcode('render', function(key,props) {
    	
		if(components[key]){
			let c = components[key];
			let skipWrapper = false;
			if(props && props.skipWrapper) skipWrapper = true;

			if(c.wrapper && !skipWrapper){
				let renderProps = props && props.render ? props.render : c.defaultProps;
				let wrapperProps = props && props.wrapper ? props.wrapper : {};

				// Render the content...
				let content = nunjucks.renderString('{{ _c.render(_renderProps) | safe }}',{...this.ctx,_c:c,_renderProps:renderProps});
				wrapperProps.content = content;
				// Render the wrapper with the content inside...
				return nunjucks.renderString('{{ _c.wrapper(_wrapperProps) | safe }}',{...this.ctx,_c:c,_wrapperProps:wrapperProps});
			}else{
				let renderProps = props && props.render ? props.render : c.defaultProps;
				let rendered = nunjucks.renderString('{{ _c.render(_renderProps) | safe }}',{...this.ctx,_c:c,_renderProps:renderProps});
				return rendered;
			}

		}

		console.error(`{% render %}: '${key}' component does not exist!`)
		return '';
    });
	
	eleventyConfig.addFilter('setAttribute', function(dictionary, key, value) {
		let d = dictionary || {};
        d[key] = value;
        return d;
    });

}

