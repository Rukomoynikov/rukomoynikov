<template>
  <div class="container">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    availableLocales () {
      return (this.$i18n.locales as Array<{code: String}>).filter(i => i.code !== this.$i18n.locale)
    }
  }
})
</script>

<style>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 20px auto;
  padding: 0 10px;
}
</style>
