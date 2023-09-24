<script lang="ts">
import type { PageData } from './$types';

export let data: PageData;
</script>

<div class="container posts">
  <ul>
    <li>
      <a href="posts/rails-on-docker">Rails on Docker</a>
    </li>
  </ul>
</div>


<style>
  .container {
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 20px auto 20px auto;
    padding: 0 10px;
  }

  .posts {
    margin-top: 120px;
  }
</style>
