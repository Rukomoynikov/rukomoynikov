<template>
  <div>
    <Header />
    <Nuxt />
    <div class="footer">
      <Footer />
    </div>
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
.footer {
  margin-top: 60px;
}
</style>
