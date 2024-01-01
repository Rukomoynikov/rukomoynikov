<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import DefaultSocialIcon from '/src/assets/images/facebook_share/facebook_cover_1200x630.jpg?url';

	export let title: string | undefined;
	export let description =
		"Hey there. It's a page of a regular developer. Mostly I write about ruby or typescript.";

	$: metaTitle = title ? `${title} | Max Rukomoynikov` : 'Max Rukomoynikov';

	import { page } from '$app/stores';
</script>

<SvelteSeo
	title={metaTitle}
	{description}
	keywords="rails ruby typescript react elixir rust"
	openGraph={{
		title: metaTitle,
		description,
		images: [
			{
				url: DefaultSocialIcon
			}
		],
		url: $page.url.pathname,
		type: 'website',
		site_name: 'Primal Movement'
	}}
/>
