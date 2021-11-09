<template>
  <component :is="htmlTag" :class="`title--h${level}`">
    <slot />
  </component>
</template>

<style>
  .title--h2 {
    margin: 0 0 20px 0;
    padding: 0;
    color: #c91010;
    font: 300 20px IBM Plex Sans, sans-serif;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    level: String
  },
  computed: {
    htmlTag () {
      return `h${this.level}`
    }
  }
})
</script>
