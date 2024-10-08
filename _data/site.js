const fetch = require('node-fetch');
const staticData = require('./site-static.js');
const cms = require('../src/cms/index.js');

module.exports = async function() {

    try {

    	const site = await cms.getSite();

    	if(!site){

    		return staticData;

    	}else{

	        let forms = site.data.forms.reduce((acc, item) => {
			  acc[item.handle] = { action: item.action };
			  return acc;
			}, {});

			let partners = site.data.partners.filter(item=>(item.partner_url && item.partner_url !== '')).map((item) => {
			  return {
			  	title : item.partner_title,
			  	url : item.partner_url,
			  	icon:item.partner_icon_svg
			  }
			});

			let redirects = site.data.redirects.filter(item=>(item.from && item.from !== '')).map((item) => {
			  return {
			  	from : item.from,
			  	to:item.to
			  }
			});

	        let siteData = {
				"name" : site.data.name,
				"title": site.data.title,
				"description": site.data.description,
				"twitter": site.data.twitter,
				"instagram": site.data.instagram,
				"url": site.data.url,
				"meta_image" : site.data.meta_image.url,
				"icon" : site.data.icon.url,
				"logo" : site.data.logo,
				"mailchimp_submission_url" : site.data.mailchimp_submission_url,
				"mailchimp_user_id" : site.data.mailchimp_user_id,
				"mailchimp_list_id" : site.data.mailchimp_list_id,
				"scripts" : {
					"head" : site.data.head_scripts,
					"foot":site.data.footer_scripts
				},
				"forms" : forms,
				"partners": partners,
				"redirects":redirects
			}

			return siteData;
	      
    	}
    } catch (error) {
        throw new Error('Error fetching JSON: ' + error.message);
    }
};
