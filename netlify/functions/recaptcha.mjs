// Visit site.com/.netlify/fuctions/hello

export default async (req, context) => {

	//const apiKey = Netlify.env.get("MY_API_KEY");
	
	/*

	Accessing .env variables: const apiKey = Netlify.env.get("MY_API_KEY");

	*/

  	return Response.json({ hello: "world" });
};