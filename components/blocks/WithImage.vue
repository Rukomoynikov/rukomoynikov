<template>
  <div class="block-with-photo">
    <UnifiedPicture :src="image" :css-class="'block-with-photo__photo'" />
    <div class="block-with-photo__paragraph">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UnifiedPicture from '~/components/UnifiedPicture.vue'

export default Vue.extend({
  components: { UnifiedPicture },
  props: {
    image: {
      type: String,
      default () {
        return null
      }
    },
    caption: {
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
    margin-bottom: 22px;
  }

  .block-with-photo__paragraph {
    font: 400 14px "IBM Plex Sans", sans-serif;
    color: #888;
  }

  .block-with-photo__photo {
    max-width: 100%;
  }
</style>
