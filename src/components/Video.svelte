<script lang="ts">
	import { Video } from 'flowbite-svelte';
	export let src: string;
</script>

<div class="video">
	<Video {src} controls />
</div>

<style>
	.video :global(video) {
		width: 100%;
		height: auto;
	}
</style>
