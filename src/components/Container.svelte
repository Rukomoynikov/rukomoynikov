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
		margin: 70px auto 40px auto;
		padding: 0 20px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		background-color: white;
		border-radius: 4px;
		padding: 40px;
	}

	@media only screen and (max-width: 595px) {
		.container--1200 {
			padding: 20px;
			margin: 20px auto;
			box-shadow: none;
			border-radius: 0;
		}
	}

	.container--800 {
		max-width: 800px;
		display: block;
		margin: 70px auto 40px auto;
		padding: 0 20px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		background-color: white;
		border-radius: 4px;
		padding: 40px;
	}

	@media only screen and (max-width: 595px) {
		.container--800 {
			padding: 20px;
			margin: 20px auto;
			box-shadow: none;
			border-radius: 0;
		}
	}
</style>
