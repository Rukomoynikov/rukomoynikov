<template>
  <div>
    <SocialHead
      :title="'Рукомойников Максим'"
      :description="'Моя большая цель на 5 лет — научиться делать полезные и удобные продукты. Для этого я тренируюсь на своих задачах, много смотрю работы разных студий, учусь дизайну в Бюро Горбунова.'"
      :image="'https://rukomoynikov.ru/facebook_share_2.jpg'"
    />

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
import Cases from '~/components/Cases.vue'
import History from '~/components/History.vue'
import SocialHead from '~/components/SocialHead.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: { Cases, History, SocialHead, Footer }
})
</script>

<style type="text/css" scoped>
.cases {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 20px auto;
  padding: 0 10px;
}

@media only screen and (max-width: 595px) {
  .cases {
    padding: 0 10px;
  }
}

.title--h2 {
  margin: 0 0 20px 0;
  padding: 0;
  color: #c91010;
  font: 300 20px IBM Plex Sans, sans-serif;
}

.quote-block {
  margin: 70px 0;
}
</style>
