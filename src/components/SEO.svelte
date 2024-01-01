<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import DefaultSocialIcon from '/src/assets/images/facebook_share/facebook_cover_1200x630.jpg?h=630&w=1200&url';

	export let title: string;
	export let description: string;

	export let image = DefaultSocialIcon;

	$: metaTitle = title ? `${title} | Max Rukomoynikov` : 'Max Rukomoynikov';
  $: metaDescription = description || 'Max Rukomoynikov. Software Engineer. Ruby, Rails, Typescript, React, Elixir, Rust';
	$: socialImage = `https://rukomoynikov.ru${image}`;

	import { page } from '$app/stores';
</script>

<SvelteSeo
	title={metaTitle}
	description={metaDescription}
	canonical={$page.url.pathname}
	keywords="rails, ruby, typescript, react, elixir, rust"
	openGraph={{
		title: metaTitle,
		description: metaDescription,
		images: [
			{
				url: socialImage,
				width: 1200,
				height: 630,
				alt: metaTitle
			}
		],
		url: $page.url.pathname,
		type: 'website',
		site_name: metaTitle
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@MRukomoynikov',
		description: metaDescription,
		image: DefaultSocialIcon
	}}
/>
