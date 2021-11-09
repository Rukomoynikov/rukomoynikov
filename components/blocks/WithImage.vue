<template>
  <div class="block-with-photo case-description__block">
    {{ require(`${image}.webp`) }}
<!--    <picture>-->
<!--      <source :srcset="image + '.webp 1x,' + image + '@2x.webp 2x'" type="image/webp" loading="lazy">-->
<!--      <source :srcset="image + '.jpg 1x, ' + image + '@2x.jpg 2x'" loading="lazy">-->
<!--      <img :src="require(image + '@2x.jpg')" loading="lazy" class="block-with-photo__photo">-->
<!--    </picture>-->
    <div class="block-with-photo__paragraph">
      На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.
    </div>
  </div>
</template>

<style>
  .block-with-photo {
    max-width: 800px;
  }

  .block-with-photo__paragraph {
    font: 300 28px "IBM Plex Sans", sans-serif;
  }

  .block-with-photo__photo {
    margin-bottom: 15px;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: String
  }
})
</script>
