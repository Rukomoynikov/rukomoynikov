<script lang="ts">
	export const size: '1200' | '800' | null = '1200';

	let cssClass = `container--${size}`;
</script>

<div class={cssClass}>
	<slot />
</div>

<style>
	.container--1200 {
		max-width: 1200px;
    display: block;
		margin: 50px auto 20px auto;
		padding: 0 10px;
	}

	@media only screen and (max-width: 595px) {
		.container--1200 {
			padding: 0 10px;
		}
	}

	.container--800 {
		max-width: 800px;
	}
</style>
