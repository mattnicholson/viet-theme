// Visit site.com/.netlify/fuctions/hello

export default async (req, context) => {
	
	/*

	Accessing params: const apiKey = Netlify.env.get("MY_API_KEY");

	*/
	
  	return new Response("Hello, world!");
};