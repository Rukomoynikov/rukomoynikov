<template>
  <div>
    <Header />
    <div class="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: { Header, Footer }
})
</script>


<style type="text/css" scoped>
  .content {
    min-height: calc(100vh - 218px); /* 218 - size of the header + footer */
  }
</style>
