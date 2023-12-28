<script lang="ts">
	export let alt: string = '';
	export let src: string;
	$: imageSRC = src
</script>

<div class="image">
	<enhanced:img src={imageSRC} {alt} />
</div>

<style>
	/* eslint-disable-next-line no-unused-expressions */
	.image img {
		width: 100%;
		height: auto;
	}
</style>
