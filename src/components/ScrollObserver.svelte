<script>
  let y;

  function scrollObserver(event) {
    console.log(event)
  }
</script>

<main>
  {y}
</main>

<svelte:window bind:scrollY={y} on:scroll="{scrollObserver}"/>
