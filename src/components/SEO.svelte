<svelte:head>
  <title>{meta_title}</title>
</svelte:head>

<script>
  export let title;

  $: meta_title = title ? `${title} | Max Rukomoynikov` : 'Max Rukomoynikov';
</script>
