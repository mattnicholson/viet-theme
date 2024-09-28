const fetch = require('node-fetch');
const staticData = require('./theme-static.json');
const cms = require('../src/cms/index.js');

module.exports = async function() {

    try {

    	const site = await cms.getSite();

    	if(!site){

    		return staticData;

    	}else{

	        let BG = site.data.bg ? site.data.bg : '#FFF';
	        let FG = site.data.fg ? site.data.fg : '#000';
	        let TEXT = site.data.text ? site.data.text : FG;
	        let ACCENT = site.data.accent ? site.data.accent : '#666';

	        return {
				"settings" : {

					"bg" : BG,
					"fg" : FG,
					"text" : TEXT,
					"accent" : ACCENT,

					"cms-header-bg" : site.data.header_bg,
					"cms-header-fg" : site.data.header_fg,
					"header-bg" : `var(--theme-cms-header-bg,${BG})`,
					"header-fg" : `var(--theme-cms-header-fg,${FG})`,
					"header-text" : `var(--theme-cms-header-fg,${FG})`,
					"header-button-active-bg" : `var(--theme-cms-header-fg,${FG})`,
					"header-button-active-fg" : `var(--theme-cms-header-bg,${BG})`,

					"cms-actionbar-bg" : site.data.mobile_actions_bg,
					"cms-actionbar-fg" : site.data.mobile_actions_fg,
					"actionBar-bg" : `var(--theme-cms-actionbar-bg,${ACCENT})`,
					"actionBar-fg" : `var(--theme-cms-actionbar-fg,${FG})`,
					"actionBar-text" : `var(--theme-cms-actionbar-fg,${FG})`,
					"actionBar-button-active-bg" : `var(--theme-cms-actionbar-fg,${FG})`,
					"actionBar-button-active-fg" : `var(--theme-cms-actionbar-bg,${ACCENT})`,

					"cms-masthead-logo-fg" : site.data.masthead_logo_fg,
					"masthead-logo-fg" :`var(--theme-cms-masthead-logo-fg,${TEXT})`,

					"button-roundness" : "9999px",
					"button-active-bg" : "var(--theme-fg)",
					"button-active-fg" : "var(--theme-bg)",
					"button-inactive-opacity" : "1",

					"palette-light-bg":`var(--theme-cms-light-bg,${BG})`,
					"palette-light-fg":`var(--theme-cms-light-fg,${FG})`,
					"palette-light-text":`var(--theme-cms-light-text,${TEXT})`,
					"palette-light-button-active-bg":`var(--theme-cms-light-button-active-bg,${FG})`,
					"palette-light-button-active-fg":`var(--theme-cms-light-button-active-fg,${BG})`,

					"palette-alt-bg":`var(--theme-cms-alt-bg,${ACCENT})`,
					"palette-alt-fg":`var(--theme-cms-alt-fg,${FG})`,
					"palette-alt-text":`var(--theme-cms-alt-text,${TEXT})`,
					"palette-alt-button-active-bg":`var(--theme-cms-alt-button-active-bg,${FG})`,
					"palette-alt-button-active-fg":`var(--theme-cms-alt-button-active-fg,${ACCENT})`,

					"palette-dark-bg":`var(--theme-cms-dark-bg,${TEXT})`,
					"palette-dark-fg":`var(--theme-cms-dark-fg,${ACCENT})`,
					"palette-dark-text":`var(--theme-cms-dark-text,${ACCENT})`,
					"palette-dark-button-active-bg":`var(--theme-cms-dark-button-active-bg,${ACCENT})`,
					"palette-dark-button-active-fg":`var(--theme-cms-dark-button-active-fg,${TEXT})`,

					"cms-frame-bg" : site.data.frame_bg,
					"cms-frame-text" : site.data.frame_text,
					"frame-size" : "clamp(6px,1vw,16px)",
					"frame-bg" : `var(--theme-cms-frame-bg,${ACCENT})`,
					"frame-text" : `var(--theme-cms-frame-text,${TEXT})`,

					"cms-map-pin" : site.data.map_pin,
					"cms-map-tint" : site.data.map_tint,
					"cms-map-roads" : site.data.map_roads,
					"map-pin" : `var(--theme-cms-map-pin,${TEXT})`,
					"map-tint" : `var(--theme-cms-map-tint,${FG})`,
					"map-roads" : `var(--theme-cms-map-roads,${BG})`,

					"cms-footer-nav-fg":site.data.footer_texture_fg,
					"nav-texture" : site.data.footer_navigation_texture ? `url(${site.data.footer_navigation_texture.url})`:'',
					"nav-texture-fg" :  `var(--theme-cms-footer-nav-fg,${ACCENT})`,

					"cms-footer-bg" : site.data.footer_bg,
					"cms-footer-fg" : site.data.footer_fg,
					"footer-texture" :  "url(/assets/img/placeholder-texture.jpg)",
					"footer-bg" :  `var(--theme-cms-footer-bg,${TEXT})`,
					"footer-fg" :  `var(--theme-cms-footer-fg,${BG})`
				}
			}
	      
    	}
    } catch (error) {
        throw new Error('Error fetching JSON: ' + error.message);
    }
};
