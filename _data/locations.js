const fetch = require('node-fetch');
const staticData = require('./locations-static.json');
const cms = require('../src/cms/index.js');

module.exports = async function() {

    try {

    	const site = await cms.getSite();

    	if(!site){

    		return staticData;

    	}else{

			let venues = site.data.venues.filter(item=>(item.handle && item.handle !== '')).map((item) => {
			  return {
				"title": item.venue_title,
				"slug": item.handle,
				"url": item.venue_url,
				"content":{
					"heading" : item.venue_page_heading,
					"intro" : cms.richText(item.venue_page_intro),
					"masthead" : item.venue_page_masthead ? item.venue_page_masthead.url : '',
					"collageStyle":item.venue_page_collage_style,
					"collagePortrait" : item.venue_page_collage_portrait ? item.venue_page_collage_portrait.url : '',
					"collageLandscape" : item.venue_page_collage_landscape ? item.venue_page_collage_landscape.url : '',
					"collageIllustration" : item.venue_page_collage_illustration ? item.venue_page_collage_illustration.url : '',
					"mediaImage" : item.venue_page_media_image ? item.venue_page_media_image.url : '',
					"mediaTexture" : item.venue_page_media_texture ? item.venue_page_media_texture.url : '',
					"groupImage" :item.venue_group_image ? item.venue_group_image.url : '',
					"groupDescription" :  item.venue_group_description
				},
				
				"thumbnail" : item.venue_thumbnail ? item.venue_thumbnail.url : '',
				"bookingLink":item.venue_booking_link,
				"locationLatLng": item.venue_lat_lng,
				"locationAddress": cms.nl2br(item.venue_address),
				"locationMapUrl": item.venue_map_url,
				"locationTelephone":item.venue_telephone,
				"locationEmail": item.venue_email,
				"locationOpening": item.venue_opening,
				"menus": [
					{
						"title": item.menu_1_label,
						"pdf": item.menu_1_pdf ? item.menu_1_pdf.url : '',
						"image": item.menu_1_image ? item.menu_1_image.url : ''
					},
					{
						"title": item.menu_2_label,
						"pdf": item.menu_2_pdf ? item.menu_2_pdf.url : '',
						"image": item.menu_2_image ? item.menu_2_image.url : ''
					},
					{
						"title": item.menu_3_label,
						"pdf": item.menu_3_pdf ? item.menu_3_pdf.url : '',
						"image": item.menu_3_image ? item.menu_3_image.url : ''
					}
				
				],
				"deliveryUrl": item.venue_delivery_url,
				"deliveryPlatform": item.venue_delivery_platform,
				"deliveryTerms": cms.richText(item.venue_delivery_terms)
				}
			});
		

	        return venues
	      
    	}
    } catch (error) {
        throw new Error('Error fetching JSON: ' + error.message);
    }
};
