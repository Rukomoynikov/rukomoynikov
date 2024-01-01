<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import DefaultSocialIcon from '/src/assets/images/facebook_share/facebook_cover_1200x630.jpg?h=630&w=1200&url';

	export let title: string | undefined;
	export let description =
		"Hey there. It's a page of a regular developer. Mostly I write about ruby or typescript.";

	export let image = DefaultSocialIcon;

	$: metaTitle = title ? `${title} | Max Rukomoynikov` : 'Max Rukomoynikov';
	$: socialImage = `https://rukomoynikov.ru${image}`;

	import { page } from '$app/stores';
</script>

<SvelteSeo
	title={metaTitle}
	{description}
	canonical="https://rukomoynikov.ru/"
	keywords="rails, ruby, typescript, react, elixir, rust"
	openGraph={{
		title: metaTitle,
		description,
		images: [
			{
				url: socialImage,
				width: 1200,
				height: 630,
				alt: "Max Rukomoynikov's site"
			}
		],
		url: $page.url.pathname,
		type: 'website',
		site_name: "Max Rukomoynikov's site"
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@MRukomoynikov',
		description,
		image: DefaultSocialIcon
	}}
/>
