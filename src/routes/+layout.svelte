<script>
	import '@fontsource/ibm-plex-sans';
	import '$assets/stylesheet/global.css';

	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import SEO from '$components/SEO.svelte';
</script>

<SEO />

<Container>
	<TwoColsContainer>
		<h1>
			<a href="/">Max Rukomoynikov</a>
		</h1>

		<div>I love to create. Developer and designer. Looking forward to make cool things.</div>
	</TwoColsContainer>
</Container>

<slot />

<style>
	h1 {
		margin-bottom: 4px;
	}
</style>
