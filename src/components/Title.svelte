<script lang="ts">
	export let level: '1' | '2' | '3' | '4' = '1';
	export let style: 'light' | null = null;
  export let styles: Array<'light' | 'list_header'> = [];


	const Tag = `h${level}`;
	const Style = `${style} ${styles.join(' ')}`.trim();
</script>

<svelte:element this={Tag} class={Style}>
	<slot />
</svelte:element>

<style>
	h2 {
		margin: 20px 0 20px 0;
		padding: 0;
    color: var(--links-light);
		font: var(--font-title-h2);
	}

	h2:not(:first-of-type) {
		margin-top: 20px;
	}

	h2.light {
		margin: 0 0 20px 0;
		padding: 0;
		color: var(--links-light);
		font: var(--font-title-h2-light);
	}

	h3 {
		font: var(--font-title-h3);
		margin: 0 0 8px 0;
		letter-spacing: calc(1px / 5);
	}

	h3:not(:first-of-type) {
		margin-top: 5px;
	}

	h4 {
		margin: 0 0 20px 0;
		padding: 0;
		color: #c91010;
		font: var(--font-title-h4);
	}

  .list_header {
    margin-bottom: 8px;
  }
</style>
