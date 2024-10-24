<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { copy } from 'svelte-copy';
	import { page } from '$app/stores';
	export let snippet = '';
	export let fileName: string | undefined = undefined;
	const code = $page.data.codes?.[snippet];

	let showCopyButton = false;

	const mouseEnter = () => {
		showCopyButton = true;
	};

	const mouseLeave = () => {
		showCopyButton = false;
	};
</script>

{#if code}
	<div
		on:focus={mouseEnter}
		on:blur={mouseLeave}
		on:mouseleave={mouseLeave}
		on:mouseenter={mouseEnter}
		class="codeBlock"
		class:codeBlock--with-filename={fileName}
	>
		<button class:copyButton--show={showCopyButton} class="copyButton" use:copy={code.raw}>
			Copy
		</button>
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
	.copyButton {
		position: absolute;
		right: 2px;
		top: 2px;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	.copyButton--show {
		visibility: visible;
		opacity: 100;
	}

	.fileName {
		padding: 1.25rem;
		border-radius: 0.5rem 0.5rem 0 0;
		font-size: 1rem;
		white-space: pre-wrap !important;
		background: #240c2e;
		color: #ebccf9;
	}

	.codeBlock {
		position: relative;
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

	:global(code) {
		counter-reset: step;
		counter-increment: step 0;
	}

	:global(code) :global(.line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(115, 138, 148, 0.4);
	}
</style>
