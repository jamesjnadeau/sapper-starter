<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`/index.json`);
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
