<script lang="ts">
  import Header from "$components/Header.svelte";

  import { page } from '$app/stores';
  import SEO from "$components/SEO.svelte";
</script>

<SEO />

<Header />
<slot />
