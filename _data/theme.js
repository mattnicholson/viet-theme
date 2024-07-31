const fetch = require('node-fetch');
const staticData = require('./theme-static.json');
const cms = require('../src/cms/index.js');

module.exports = async function() {

    try {

    	const site = await cms.getSite();

    	if(!site){

    		return staticData;

    	}else{

	        console.log(site.data)

	        let BG = site.data.bg ? site.data.bg : '#FFF';
	        let FG = site.data.fg ? site.data.fg : '#000';
	        let TEXT = site.data.text ? site.data.fg : FG;
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

					"cms-actionbar-bg" : "",
					"cms-actionbar-fg" : "",
					"actionBar-bg" : `var(--theme-cms-actionbar-bg,${ACCENT})`,
					"actionBar-fg" : `var(--theme-cms-actionbar-fg,${FG})`,
					"actionBar-text" : `var(--theme-cms-actionbar-fg,${FG})`,
					"actionBar-button-active-bg" : `var(--theme-cms-actionbar-fg,${FG})`,
					"actionBar-button-active-fg" : `var(--theme-cms-actionbar-bg,${ACCENT})`,

					"masthead-logo-fg" :"var(--theme-colors-grey)",

					"button-roundness" : "9999px",
					"button-active-bg" : "var(--theme-fg)",
					"button-active-fg" : "var(--theme-bg)",
					"button-inactive-opacity" : "1",

					"frame-size" : "clamp(6px,1vw,16px)",
					"frame-bg" : "var(--theme-accent)",

					"map-pin" : "var(--theme-colors-grey)",
					"map-tint" : "var(--theme-colors-gold)",
					"map-roads" : "var(--theme-colors-light)",

					"nav-texture" : "url(/assets/img/texture/footer-nav-texture.png)",

					"footer-texture" :  "url(/assets/img/placeholder-texture.jpg)",
					"footer-bg" :  "var(--theme-colors-grey)"
				}
			}
	      
    	}
    } catch (error) {
        throw new Error('Error fetching JSON: ' + error.message);
    }
};
