<template>
  <component :is="htmlTag" :class="`title--h${level}`">
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
  .title--h2 {
    margin: 0 0 20px 0;
    padding: 0;
    color: #c91010;
    font: 300 20px IBM Plex Sans, sans-serif;
  }
</style>
