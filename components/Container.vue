<template>
  <div :class="cssClass">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default () {
        return null
      }
    }
  },
  computed: {
    cssClass () {
      return `container_${this.type}`
    }
  }
})
</script>

<style>
  .container_common {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 50px 10px 0 10px;
  }

  .container_content {
    max-width: 800px;
  }
</style>
