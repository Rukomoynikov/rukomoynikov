<template>
  <div class="repository">
    <img src="~/assets/images/icons/repository.svg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    repository: {
      type: String,
      default: null
    }
  }
})
</script>

<style>
.repository {
  display: block;
}
</style>
