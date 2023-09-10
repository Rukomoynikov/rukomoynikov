<script lang="ts">
  import type { ImgMeta } from './types';

  export let meta: ImgMeta[];
  // if there is only one, vite-imagetools won't wrap the object in an array
  if (!(meta instanceof Array)) meta = [meta];

  const sources = meta[0].sources;
  const fallback = meta[0].img;

  export let sizes = '100vw';
  export let alt = '';
  export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';

  export let imageClass = '';
  export let pictureClass = '';
</script>

<!--<div style={`max-width: ${fallback.w}px`}>-->

<div style={`max-width: ${fallback.w}px`}>
  <picture class={pictureClass}>
    {#each Object.entries(sources) as [type, srcMeta]}
      <source
        type="image/{type}"
        {sizes}
        srcset={srcMeta.map((m) => `${m.src} ${m.w}w`).join(', ')}
      />
    {/each}
    <img src={fallback.src} {alt} {loading} class={imageClass} />
  </picture>
</div>

<style>
  picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<!--https://www.youtube.com/watch?v=285vSLe9LQ8-->
<!--https://github.com/JonasKruckenberg/imagetools/blob/4227bd1fac13b7c5ac3c34c90d5c7ac5a005e45b/docs/directives.md?plain=1#L455-->
<!--https://github.com/JonasKruckenberg/imagetools/blob/4227bd1fac13b7c5ac3c34c90d5c7ac5a005e45b/examples/vite-simple/README.md?plain=1#L11-->
