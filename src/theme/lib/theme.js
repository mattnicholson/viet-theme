exports.init = function (eleventyConfig){
	 

	eleventyConfig.addFilter('setAttribute', function(dictionary, key, value) {
		let d = dictionary || {};
        d[key] = value;
        return d;
    });

}

