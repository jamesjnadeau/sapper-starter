<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		let slug = params.slug.join('/')
			.replace(/\.[^/.]+$/, ""); // drop extension
		// rewrite path if looking for index file
		if (slug.slice(-1) === '/') {
			slug += 'index';
		}

		const res = await this.fetch(`/${slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import PageTransition from "src/components/PageTransition";
	export let post;
</script>


<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<PageTransition>
	<div class='content'>
		{@html post.html}
	</div>
</PageTransition>
