<script lang="ts">
  export let name = 'Max Rukomoynikov';
  export let tagline = 'Software Engineer';
</script>

<header class="header">
  <div class="header__content">
    <h1 class="header__name">{name}</h1>
    <p class="header__tagline">{tagline}</p>
  </div>
</header>

<style>
  .header {
    margin-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 20px;
  }
  
  .header__content {
    display: flex;
    flex-direction: column;
  }
  
  .header__name {
    margin: 0;
    padding: 0;
    font: var(--font-logo);
    color: var(--heading-color);
  }
  
  .header__tagline {
    margin: 5px 0 0 0;
    padding: 0;
    color: var(--text-color);
    font: var(--font-header-slogan);
  }
  
  @media only screen and (max-width: 595px) {
    .header__name {
      font: var(--font-logo-small);
    }
  }
</style>