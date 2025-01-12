<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import '$assets/stylesheet/global.css';

	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	let { children } = $props();

	import { page } from '$app/stores';

	import DefaultSocialIcon from '/src/assets/images/facebook_share/facebook_cover_1200x630.jpg?h=630&w=1200&url';

	const title = $page.data.title ? `${$page.data.title}` : 'Max Rukomoynikov';
	const description: string = $page.data.description
		? $page.data.description
		: 'Max Rukomoynikov. Software Engineer. Ruby, Rails, Typescript, React, Elixir, Rust';
	let image = $page.data.image ? $page.data.image : DefaultSocialIcon;
	image = `https://rukomoynikov.com${image}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={$page.url.pathname} />
	<meta name="keywords" content="rails, ruby, typescript, react, elixir, rust" />
	<meta name="twitter:image" content={image} />
	<meta name="robots" content="index,follow" />
	<meta name="googlebot" content="index,follow" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@MRukomoynikov" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image:url" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={title} />
	<meta property="og:url" content={$page.url.pathname} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={title} />
</svelte:head>

<Container>
	<TwoColsContainer>
		<h1>
			<a href="/">Max Rukomoynikov</a>
		</h1>

		<div>I love to create. Developer and designer. Looking forward to make cool things.</div>
	</TwoColsContainer>
</Container>

{@render children()}

<style>
	h1 {
		margin-bottom: 4px;
	}

	h1 a {
		color: var(--color-text);
		text-decoration: none;
	}
</style>
