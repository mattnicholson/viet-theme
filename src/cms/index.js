const prismic = require('@prismicio/client');

module.exports = {
	nl2br : function(text){
		return text.replace(/\n/gi,'<br />');
	},
	richText : function(rtfObject){

		if(!rtfObject) return '';
		return prismic.asHTML(rtfObject);
	
	},
	getSite : async function(){

		const PRISMIC_REPO = process.env.PRISMIC_REPO;
		const PRISMIC_SITE_HANDLE = process.env.PRISMIC_SITE_HANDLE;

		if(!PRISMIC_REPO || !PRISMIC_SITE_HANDLE) return false;

		const client = await fetch(`https://${PRISMIC_REPO}.cdn.prismic.io/api/v2`);
	        if (!client.ok) {
	            throw new Error('Failed to fetch data');
	        }
	        const clientRefs = await client.json();
	        
	        let master = clientRefs.refs.find(r=>r.id === 'master');

	        const url = new URL(`https://${PRISMIC_REPO}.prismic.io/api/v2/documents/search`)
			url.searchParams.append(`ref`,master.ref)
			url.searchParams.append(`q`,`[[at(document.type,"site")]]`)

	        const response = await fetch(url.href);
	        if (!response.ok) {
	            throw new Error('Failed to fetch data');
	        }
	        const data = await response.json();
	        const site = data.results.find(r=>r.uid === PRISMIC_SITE_HANDLE);

	        return site;

	}

}