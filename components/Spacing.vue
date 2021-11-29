<template>
  <div :class="cssClass" />
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
      return `spacing_${this.type}`
    }
  }
})
</script>

<style>
  .spacing_vertical-section {
    margin-bottom: 52px;
  }

  .spacing_vertical-section_sub {
    margin-bottom: 30px;
  }
</style>
