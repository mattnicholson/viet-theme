const fetch = require('node-fetch');
const staticData = require('./entries-static.json');
const cms = require('../src/cms/index.js');

module.exports = async function() {

    try {

    	const site = await cms.getSite();

    	if(!site){

    		return staticData;

    	}else{

    		let entries = await cms.getSiteEntries();

    		let entryData = entries.map(entry=>{

    			let defaultEntry = {
					"url": `/${entry.data.handle}/`,
					"template":entry.type,
					"title" : entry.data.title,
					"body" : entry.data.body ? cms.richText(entry.data.body) : '',
					"meta": {
						"title": entry.data.meta_title ? entry.data.meta_title : '',
						"description": entry.data.meta_description ? entry.data.meta_description : '',
						"image": (entry.data.meta_image && entry.data.meta_image.url) ? entry.data.meta_image.url : ''
					}
				}

    			switch(entry.type){

    				case 'home':

    					return {
    						...defaultEntry,
    						"url" : entry.data.homepage ? "/" : `/${entry.data.handle}/`,
    						"template" : "index",
    						"content":{
    							"masthead_image" : (entry.data.masthead_image && entry.data.masthead_image.url) ? entry.data.masthead_image.url : '',
    							"hide_masthead_logo" : entry.data.hide_masthead_logo,
    							"ticker_text" : cms.richText(entry.data.ticker_text),
    							"menus_intro" : cms.richText(entry.data.menus_intro),
    							"show_teaser_1":entry.data.show_teaser_1,
    							"teaser_1_eyebrow":entry.data.teaser_1_eyebrow,
    							"teaser_1_title":entry.data.teaser_1_title,
    							"teaser_1_text":cms.richText(entry.data.teaser_1_text),
    							"teaser_1_cta":entry.data.teaser_1_cta,
    							"teaser_1_url":entry.data.teaser_1_url,
    							"teaser_1_image" : (entry.data.teaser_1_image && entry.data.teaser_1_image.url) ? entry.data.teaser_1_image.url : '',
    							"show_teaser_2":entry.data.show_teaser_2,
    							"teaser_2_eyebrow":entry.data.teaser_2_eyebrow,
    							"teaser_2_title":entry.data.teaser_2_title,
    							"teaser_2_text":cms.richText(entry.data.teaser_2_text),
    							"teaser_2_cta":entry.data.teaser_2_cta,
    							"teaser_2_url":entry.data.teaser_2_url,
    							"teaser_2_image" : (entry.data.teaser_2_image && entry.data.teaser_2_image.url) ? entry.data.teaser_2_image.url : '',
    							"show_teaser_3":entry.data.show_teaser_1,
    							"teaser_3_eyebrow":entry.data.teaser_3_eyebrow,
    							"teaser_3_title":entry.data.teaser_3_title,
    							"teaser_3_text":cms.richText(entry.data.teaser_3_text),
    							"teaser_3_cta":entry.data.teaser_3_cta,
    							"teaser_3_url":entry.data.teaser_3_url,
    							"teaser_3_image" : (entry.data.teaser_3_image && entry.data.teaser_3_image.url) ? entry.data.teaser_3_image.url : '',
    							"texture_media_image" : (entry.data.texture_media_image && entry.data.texture_media_image.url) ? entry.data.texture_media_image.url : '',
    							"texture_media_texture" : (entry.data.texture_media_texture && entry.data.texture_media_texture.url) ? entry.data.texture_media_texture.url : '',
								"collage_title":entry.data.collage_title,
								"collage_portrait" : (entry.data.collage_portrait && entry.data.collage_portrait.url) ? entry.data.collage_portrait.url : '',
    							"collage_landscape" : (entry.data.collage_landscape && entry.data.collage_landscape.url) ? entry.data.collage_landscape.url : '',
								"collage_illustration" : (entry.data.collage_illustration && entry.data.collage_illustration.url) ? entry.data.collage_illustration.url : '',
								"full_width_media_image" : (entry.data.full_width_media_image && entry.data.full_width_media_image.url) ? entry.data.full_width_media_image.url : '',
    							"full_width_media_stamp" : (entry.data.full_width_media_stamp && entry.data.full_width_media_stamp.url) ? entry.data.full_width_media_stamp.url : ''
							}
    					}

    				case 'blocks':

    					return {
    						...defaultEntry,
    						"content":{
    							blocks:entry.data.body
    						}
    					}

    				case 'story':

    					return {
    						...defaultEntry,
    						"template":"our-story",
    						"content":{
								"masthead_image" : (entry.data.masthead_image && entry.data.masthead_image.url) ? entry.data.masthead_image.url : '',
    							"intro_eyebrow":entry.data.intro_eyebrow,
    							"intro":cms.richText(entry.data.intro_text),
    							"media_image" : (entry.data.media_image && entry.data.media_image.url) ? entry.data.media_image.url : '',
    							"media_texture" : (entry.data.media_texture && entry.data.media_texture.url) ? entry.data.media_texture.url : '',
    							"media_illustration" : (entry.data.media_illustration && entry.data.media_illustration.url) ? entry.data.media_illustration.url : '',
								"collage_1_title":entry.data.collage_1_title,
    							"collage_1_text":cms.richText(entry.data.collage_1_text),
    							"collage_1_landscape" : (entry.data.collage_1_landscape && entry.data.collage_1_landscape.url) ? entry.data.collage_1_landscape.url : '',
    							"collage_1_portrait" : (entry.data.collage_1_portrait && entry.data.collage_1_portrait.url) ? entry.data.collage_1_portrait.url : '',
    							"collage_1_illustration" : (entry.data.collage_1_illustration && entry.data.collage_1_illustration.url) ? entry.data.collage_1_illustration.url : '',
								"collage_2_title":entry.data.collage_2_title,
    							"collage_2_text":cms.richText(entry.data.collage_2_text),
    							"collage_2_portrait" : (entry.data.collage_2_portrait && entry.data.collage_2_portrait.url) ? entry.data.collage_2_portrait.url : '',
    							"collage_2_illustration" : (entry.data.collage_2_illustration && entry.data.collage_2_illustration.url) ? entry.data.collage_2_illustration.url : '',
								"locations_text_1":cms.richText(entry.data.locations_text_1),
								"locations_text_2":cms.richText(entry.data.locations_text_2),
							}
    					}
    				case 'location':

    					return {
    						...defaultEntry,
    						"content":{
								"location" : entry.data.location_handle
							}
    					}
    				case 'groups':

    					return {
    						...defaultEntry,
    						"content" : {
								"masthead" : (entry.data.masthead_image && entry.data.masthead_image.url) ? entry.data.masthead_image.url : '',
								"brochureLink" : (entry.data.brochure_download && entry.data.brochure_download.url) ? entry.data.brochure_download.url : '',
								"intro" : cms.richText(entry.data.intro)
							}
    					}
    				case 'catering':

    					return {
    						...defaultEntry,
    						"content" : {
								"masthead" : (entry.data.masthead_image && entry.data.masthead_image.url) ? entry.data.masthead_image.url : '',
								"intro" : cms.richText(entry.data.intro)
							}
    					}

    				default:
    					return defaultEntry;

    			}
	    		
    		})

    		console.log(entryData);
    		return entryData;

    	}
    } catch (error) {
        throw new Error('Error fetching JSON: ' + error.message);
    }
};
