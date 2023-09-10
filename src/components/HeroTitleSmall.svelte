<script lang="ts">
	export let tags: string[] = [];
	export let title = '';
	export let subTitle: string | null = null;
</script>

<div class="hero-title">
	<div class="hero-title__container">
		<div class="hero-title__text-container">
			{#each tags as tag}
				<div class="hero-title__tag">{tag}</div>
			{/each}
			<h2 class="hero-title__title">
				{title}
			</h2>
			{#if subTitle}
				<div class="hero-title__subtitle">{subTitle}</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.hero-title {
		/* background-color: #ebec96; */
		background-color: white;
		opacity: 0.8;
		background-size: 40px 40px;
	}

	.hero-title__tag {
		padding: 12px 17px;
		font: var(--font-hero-title-tag);
		background-color: whitesmoke;
		display: inline-flex;
		border-radius: 12px;
	}

	.hero-title__tag:not(:last-of-type) {
		margin-right: 24px;
	}

	.hero-title__title {
		font: var(--font-hero-title-title);
		margin: 18px 0 0 0;
		max-width: 1000px;
		color: black;
	}

	@media only screen and (max-width: 595px) {
		.hero-title__title {
			font: var(--font-hero-title-title_small);
			margin: 18px 0 0 0;
		}
	}

	.hero-title__container {
		max-width: 1200px;
		width: 100%;
		margin: auto;
	}

	.hero-title :global(.hero-title__subtitle) {
		margin-top: 22px;
		font: var(--font-hero-title-subtitle);
		max-width: 800px;
		color: black;
	}

	.hero-title__image {
		margin-top: 59px;
		border: 10px solid white;
		overflow: hidden;
		max-width: 100%;
	}

	.hero-title__text-container {
		padding: 35px 10px 60px 10px;
	}
</style>
