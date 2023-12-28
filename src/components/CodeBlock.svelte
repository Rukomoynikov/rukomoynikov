<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { copy } from 'svelte-copy';
	import { page } from '$app/stores';
	export let snippet = '';
	export let fileName: string | undefined = undefined;
	const code = $page.data.codes?.[snippet];
</script>

{#if code}
	<div class="codeBlock" class:codeBlock--with-filename={fileName}>
		<!-- <button use:copy={code.raw}> Copy </button> -->
		{#if fileName}
			<div class="fileName">File: {fileName}</div>
		{/if}

		{@html code.code}
	</div>
{:else}
	<div><strong>Invalid code snippet: {snippet}</strong></div>
{/if}

<!--https://github.com/ScriptRaccoon/codeblocks-->

<style>
	.fileName {
		padding: 1.25rem;
		border-radius: 0.5rem 0.5rem 0 0;
		font-size: 1rem;
		white-space: pre-wrap !important;
		background: #240c2e;
		color: #ebccf9;
	}

	.codeBlock :global(pre) {
		padding: 1.25rem;
		border-radius: 0.5rem;
		margin-block: 1rem;
		font-size: 1rem;
		overflow: auto;
		white-space: pre-wrap !important;
	}

	.codeBlock--with-filename :global(pre) {
		margin-top: 0;
		border-radius: 0 0 0.5rem;
		padding-top: 0.5rem;
	}
</style>
