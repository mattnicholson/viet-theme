const fetch = require('node-fetch');
const staticData = require('./linklists-static.json');
const cms = require('../src/cms/index.js');

module.exports = async function() {

    try {

    	const site = await cms.getSite();

    	if(!site){

    		return staticData;

    	}else{

    		let validLink = (item) => {
    			return (item.link_url && item.link_url !== '');
    		}
    		let mapToNav = (item) => {
    			return {
				"title": item.link_title,
				"url": item.link_url,
				"icon_label" : item.link_icon_label || null
				}
    		}

			let headerNav = site.data.header_nav.filter(validLink).map(mapToNav);
			let mobileHeaderNav = site.data.mobile_header_nav.filter(validLink).map(mapToNav);
			let mobileActionNav = site.data.mobile_action_nav.filter(validLink).map(mapToNav);
			let moreNav = site.data.more_nav.filter(validLink).map(mapToNav);
			let footerNav = site.data.footer_nav.filter(validLink).map(mapToNav);
			let floatingNav = site.data.floating_nav.filter(validLink).map(mapToNav);
			let groupsNav = site.data.groups_nav.filter(validLink).map(mapToNav);
			let legalNav = site.data.legal_nav.filter(validLink).map(mapToNav);

	        return {
				"shortcuts": headerNav,
				"mobileShortcuts": mobileHeaderNav,
				"groups": groupsNav,
				"floatingActionMenu": floatingNav,
				"actions": mobileActionNav,
				"main": moreNav,
				"footer": footerNav,
				"legal": legalNav
			}
	      
    	}
    } catch (error) {
        throw new Error('Error fetching JSON: ' + error.message);
    }
};
