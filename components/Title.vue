<template>
  <component :is="htmlTag" :class="`title_h${level}`">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    level: {
      type: Number,
      default: 2
    }
  },
  computed: {
    htmlTag () {
      return `h${this.level}`
    }
  }
})
</script>

<style>
  .title_h2 {
    margin: 0 0 20px 0;
    padding: 0;
    color: #c91010;
    font: normal 28px IBM Plex Sans, sans-serif;
  }

  .title_h3 {
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 16px 0;
  }
</style>
