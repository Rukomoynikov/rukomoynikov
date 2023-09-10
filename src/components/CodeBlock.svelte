<!-- $lib/components/Codeblock.svelte -->

<script lang="ts">
  import { copy } from 'svelte-copy';
  import { page } from "$app/stores";
  export let snippet = "";
  const code = $page.data.codes?.[snippet];
</script>

{#if code}
  <div class='codeBlock'>
    <button use:copy={code.raw}>
      Click me!
    </button>
    {@html code.code}
  </div>
{:else}
  <div><strong>Invalid code snippet: {snippet}</strong></div>
{/if}

<style>
  .codeBlock :global(pre) {
    font-size: 2rem;
    padding: 1.25rem;
    border-radius: 0.5rem;
    margin-block: 1rem;
    overflow: auto;
    white-space : pre-wrap !important;
    /*word-break: break-word;*/
  }
</style>


<!--https://github.com/ScriptRaccoon/codeblocks-->
