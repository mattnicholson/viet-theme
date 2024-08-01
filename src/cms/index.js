const prismic = require('@prismicio/client');

let CMS_CACHE = {};

const CMSModule = {
	pageTypes: ['basic','home','story','groups','catering','location','post','blocks'],
  nl2br: function(text) {
    return text.replace(/\n/gi, '<br />');
  },
  richText: function(rtfObject) {
    if (!rtfObject) return '';
    return prismic.asHTML(rtfObject,{linkResolver:this.linkResolver});
  },
  linkResolver: function(doc){
  	if (doc.type === 'basic') {
	    return `/${doc.data.handle}/`
	  }
	  return null
  },
  getSiteEntries: async function() {

  	const PRISMIC_REPO = process.env.PRISMIC_REPO;
    const PRISMIC_SITE_HANDLE = process.env.PRISMIC_SITE_HANDLE;

    if (!PRISMIC_REPO || !PRISMIC_SITE_HANDLE) return false;

	const client = prismic.createClient(PRISMIC_REPO, { linkResolver:this.linkResolver });

	const site = await this.getSite();

  const getAllEntryTypes = async (documentId) => {
    let allEntries = [];

    for (const type of this.pageTypes) {
      try {
        const entries = await client.dangerouslyGetAll({
          filters: [prismic.filter.at(`my.${type}.site`, documentId)]
        });
        allEntries = allEntries.concat(entries);
      } catch (error) {
        console.warn(`No documents found for type: ${type} or another error occurred.`, error.message);
        // Continue processing other document types
      }
      
    }

    return allEntries;
  }
	
	const entries = await getAllEntryTypes(site.id);

	return entries;

  },
  getSite: async function() {
    if (CMS_CACHE['site']){
    	return CMS_CACHE['site'];
    }

    const PRISMIC_REPO = process.env.PRISMIC_REPO;
    const PRISMIC_SITE_HANDLE = process.env.PRISMIC_SITE_HANDLE;

    if (!PRISMIC_REPO || !PRISMIC_SITE_HANDLE) return false;

    const client = await fetch(`https://${PRISMIC_REPO}.cdn.prismic.io/api/v2`);
    if (!client.ok) {
      throw new Error('Failed to fetch data');
    }
    const clientRefs = await client.json();

    let master = clientRefs.refs.find(r => r.id === 'master');

    const url = new URL(`https://${PRISMIC_REPO}.prismic.io/api/v2/documents/search`);
    url.searchParams.append('ref', master.ref);
    url.searchParams.append('q', `[[at(document.type,"site")]]`);

    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const site = data.results.find(r => r.uid === PRISMIC_SITE_HANDLE);

    CMS_CACHE['site'] = site;
    return site;
  }
};

// Exporting an instance of the module
module.exports = CMSModule;
