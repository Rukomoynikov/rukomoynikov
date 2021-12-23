<template>
  <div class="block-with-photo case-description__block">
    {{ require(`${image}.webp`) }}
    <div class="block-with-photo__paragraph">
      На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: {
      type: String,
      default () {
        return null
      }
    }
  }
})
</script>

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
