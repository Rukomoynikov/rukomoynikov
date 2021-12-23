<template>
  <i class="italic"><slot /></i>
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
  .italic {
    border: 1px dashed black;
    border-radius: 11px;
    padding: 0 5px;
  }
</style>
