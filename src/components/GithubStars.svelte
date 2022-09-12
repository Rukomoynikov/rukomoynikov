<script lang="ts">
  export let repo: string;

  let repo_info: string;
  let data: string;

  async function main() {
    data = await fetch(`https://api.github.com/repos/${repo}`).then(response =>response.json());
  }

  main()
</script>

{JSON.stringify(data)}
