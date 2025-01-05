<script lang="ts">
	export let tags: string[] = [];
</script>

<div class="tags">
	{#each tags as tag}
		<div class="tags__tag">{tag}</div>
	{/each}
</div>

<!--display: inline-block;-->
<!--padding: 4px 8px;-->
<!--border-radius: 4px;-->
<!--background: #f1f1f1;-->
<!--font-size: 14px;-->
<!--color: #666;-->

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .tags__tag {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    background: #f1f1f1;
    font-size: 14px;
    color: #666;
  }

  .tags__tag + .tags__tag {
    margin-left: 2px;
  }
</style>
