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

	Return a value from the global data context (_data/{key})
	
	{{ data('theme').settings }}

	*/
    eleventyConfig.addNunjucksGlobal('data', function(key) {
		let d= this.ctx[key]
		return d;
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
	By default if render props are passed in, defaultProps are ignore, but you can set inheritProps to true to merge defaults with whatever is passed in
	
	{% render 'someComponent' , {
		wrapper : {
			propForWrapper : 'foo'
		},
		render:{
			propForComponent: 'bar'
		}
		skipWrapper:true/false,
		inheritProps:true/false
	} %}

	*/

	const render = (key,props) => {
		if(components[key]){
			let c = components[key];
			let skipWrapper = false;
			if(props && props.skipWrapper) skipWrapper = true;

			if(c.wrapper && !skipWrapper){
				let renderProps = props && props.render ? props.render : c.defaultProps;
				let wrapperProps = props && props.wrapper ? props.wrapper : {};

				if(props && props.render && props.inheritProps){
					renderProps = {...c.defaultProps,...props.render};
				}

				// Render the content...
				let content = nunjucks.renderString('{{ _c.render(_renderProps) | safe }}',{...this.ctx,_c:c,_renderProps:renderProps});
				wrapperProps.content = content;
				// Render the wrapper with the content inside...
				return nunjucks.renderString('{{ _c.wrapper(_wrapperProps) | safe }}',{...this.ctx,_c:c,_wrapperProps:wrapperProps});
			}else{
				let renderProps = props && props.render ? props.render : c.defaultProps;

				if(props && props.render && props.inheritProps){
					renderProps = {...c.defaultProps,...props.render};
				}

				let rendered = nunjucks.renderString('{{ _c.render(_renderProps) | safe }}',{...this.ctx,_c:c,_renderProps:renderProps});
				return rendered;
			}

		}

		console.error(`{% render %}: '${key}' component does not exist!`)
		return '';
	}

    eleventyConfig.addShortcode('render', function(key,props) {
    	
		return render(key,props)
    });

    /*
		
		render filter does same as shortcode...

		'nameOfComponent' | render
		'nameOfComponent' | render({
			render : {
	
			},
			wrapper : {
	
			},
			skipWrapper,
			inheritProps
		})
	
	*/

    eleventyConfig.addFilter('render', function(key, props) {
		return render(key,props)
    });

    /*

    Simple nunjucks rendering for a string eg
	
	{
		value : "Title is {{ title }}" | nunjucks({title:'Foo'})
	}

    */


    eleventyConfig.addFilter('nunjucks', function(string, context) {


		return this.env.renderString(string,{...this.ctx,...context});

    });
	

	 /*

    Map an array of object to another set of values, parsing each key with the current item with nunjucks
	
	{% set tabs = [
		title : 'Title',
		content:''
	]%}
	
	Thr filter will also provide an index value of the current iteration

	{%  set links = tabs | map({
			onClick : "active = {{ index }};",
			text : '{{ title }}',
			class : "active === {{ index }} ? 'active' : 'inactive'"
	}) %}

	You can also send in a list of keys that should be converted back into an object...

	{%  set links = items | map({
		
			data : '{{ data | json | safe }}'
			
	},{
		jsonKeys: ['data']
	}) %}

	The matching keys will be converted back into objects with JSON.decode() - make sure they were encoded in the first pass, and the JSON is valid and was rendered 'safe'!

    */


    eleventyConfig.addFilter('map', function(array, schema, opts) {
		return array.map((i,ix)=>{

			let out = {};

			Object.keys(schema).forEach(key => {
  				let value = schema[key];
  				let rendered = this.env.renderString(value,{...this.ctx,...i,index:ix});

  				out[key] = rendered;

  				if(opts && opts.jsonKeys){
  					if(opts.jsonKeys.indexOf(key) !== -1){
  						out[key] = JSON.parse(rendered)
  					}
  				}
			});

			return out;
		});
    });
	

	/*
		
		add a key to an object

		{% set obj = obj | setAttribute('key',val) %}
		
	
	*/
	eleventyConfig.addFilter('setAttribute', function(dictionary, key, value) {
		let d = dictionary || {};
        d[key] = value;
        return d;
    });

    

}

