<template>
  <div>
    <Header />
    <div class="cases">
      <h2 class="title--h2">
        Сайты и мобильные приложения
      </h2>
      <Cases />
      <div class="quote-block">
        <Quote />
      </div>
    </div>

    <div class="cases">
      <h2 class="title--h2">
        Моя история
      </h2>
      <History />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Cases from '~/components/Cases.vue'
import History from '~/components/History.vue'

export default Vue.extend({})
</script>

<style type="text/css" scoped>
.cases {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
}

.title--h2 {
  margin: 0;
  padding: 0;
  color: #c91010;
  font: 300 20px IBM Plex Sans, sans-serif;
  margin-bottom: 20px;
}

.quote-block {
  margin: 70px 0;
}
</style>
