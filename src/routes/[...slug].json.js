import { loadContent, jsonPageResponse } from './_load_content';

export async function get(req, res) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	console.log(slug.join('/'));
	// List the Markdown files and return their filenames
    const posts = await loadContent(slug.join('/'));

	await jsonPageResponse(posts, req, res);
}
