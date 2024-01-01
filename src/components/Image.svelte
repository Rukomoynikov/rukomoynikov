<script lang="ts">
	export let alt: string = '';
	export let src: string;

	$: imageSRC = src.default ? src.default : src;
</script>

<div class="image">
	{#if imageSRC !== undefined && imageSRC !== ''}
		<enhanced:img src={imageSRC} {alt} />
	{:else}
		<div />
	{/if}
</div>

<style>
	/* eslint-disable-next-line no-unused-expressions */
	.image img {
		width: 100%;
		height: auto;
	}
</style>
