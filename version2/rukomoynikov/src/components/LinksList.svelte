<script lang="ts">
	export let links: [string, string][] = [];
</script>

<ul class="links-list">
	{#each links as link}
		<li>
			<a href={link[1]} class="links-list__link">
				{link[0]}
			</a>
		</li>
	{/each}
</ul>

<style>
	.links-list {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.links-list__link {
		color: #b66e6e;
		display: flex;
	}

	.links-list > li {
		margin-bottom: 10px;
		font: var(--font-links-list-item);
	}
</style>
