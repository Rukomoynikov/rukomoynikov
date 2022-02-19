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
    font-size: 19px;
    font-weight: bold;
    margin: 0 0 8px 0;
    letter-spacing: calc(1px / 5);
  }

  .title_h4 {
    margin: 0 0 20px 0;
    padding: 0;
    color: #c91010;
    font: 300 20px IBM Plex Sans, sans-serif;
  }
</style>
