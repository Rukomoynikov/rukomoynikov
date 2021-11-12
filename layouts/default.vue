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
  components: { Header, Footer },
  data () {
    return {
      stickyHeader: false,
      lastTimeScrollOccured: null as null | number
    }
  },
  // mounted (): void {
  //   const heroTitle = document.querySelector('.hero-title')
  //
  //   window.addEventListener('scroll', (_event) => {
  //     this.lastTimeScrollOccured = 0
  //     const now = new Date()
  //
  //     if (now - this.lastTimeScrollOccured >= 10300) {
  //       console.log(now - this.lastTimeScrollOccured)
  //       this.lastTimeScrollOccured = now
  //
  //       if (!heroTitle) { return }
  //
  //       const heroTitleBottom = heroTitle.getBoundingClientRect().bottom
  //
  //       if (heroTitleBottom <= 0 && this.stickyHeader === false) {
  //           this.stickyHeader = true
  //       } else if (heroTitleBottom > 0 && this.stickyHeader === true) {
  //           this.stickyHeader = false
  //       }
  //
  //     }
  //   })
  // }
})
</script>

<style type="text/css" scoped>
.footer {
  margin-top: 60px;
}

.sticked-header {
  position: fixed;
  background: black;
  color: white;
}
</style>
