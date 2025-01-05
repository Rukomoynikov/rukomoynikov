<script lang="ts">
	export let alt: string = '';
	export let src: string;

	$: imageSRC = src.default ? src.default : src;
</script>

<div class="image">
	{#if imageSRC !== undefined && imageSRC !== ''}
		<enhanced:img src={imageSRC} {alt} />
	{:else}
		<div></div>
	{/if}
</div>

<style>
	.image img {
		width: 100%;
		height: auto;
		margin-bottom: 16px;
	}
</style>
