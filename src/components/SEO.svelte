<script>
  export let title;
  export let description = "My big goal for 5 years is to learn how to make products that solve people's problems and looks beautiful. To do this, I train on my tasks, watch a lot of work from different studios."

  $: metaTitle = title ? `${title} | Max Rukomoynikov` : 'Max Rukomoynikov';
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={description}>
</svelte:head>
