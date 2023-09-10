<script lang="ts">
	export let layout: 'standard' | 'reversed' | null = 'standard';
</script>

<div class={`columns ${layout}`}>
	<div class="col-1"><slot /></div>
	<div class="col-2"><slot name="aside" /></div>
</div>

<style>
	.columns {
		display: flex;
		align-items: flex-start;
	}

	.columns :global(.post__picture img) {
		width: 100%;
		height: auto;
	}

	.columns {
		display: flex;
	}

	.col-1 {
		max-width: 840px;
		width: 100%;
	}

	.col-2 {
		margin-left: 20px;
		max-width: 100%;
		align-items: flex-end;
		margin-bottom: 1em;
	}

	@media only screen and (max-width: 1024px) {
		.columns {
			align-items: flex-start;
			flex-direction: column;
		}

		.col-2 {
			margin-left: 0;
			margin-bottom: 0;
		}

		.reversed {
			flex-direction: column-reverse;
		}
	}
</style>
