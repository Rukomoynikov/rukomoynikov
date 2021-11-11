<i18n lang="yaml">
en:
  Сайты и мобильные приложения: "Sites and mobile apps"
  Моя история: "My history is like"
ru:
  Слоган: "Люблю что{0}то{1}создавать. Работал программистом, ищу работу дизайнером."
</i18n>

<template>
  <div>
    <SocialHead
      :title="'Рукомойников Максим'"
      :description="'Моя большая цель на 5 лет — научиться делать полезные и удобные продукты. Для этого я тренируюсь на своих задачах, много смотрю работы разных студий, учусь дизайну в Бюро Горбунова.'"
      :image="require('/assets/images/facebook_share_2.jpg')"
    />

    <div class="cases">
      <h2 class="title--h2">
        {{ $t('Сайты и мобильные приложения') }}
      </h2>
      <Cases />
      <div class="quote-block">
        <Quote />
      </div>
    </div>

    <div class="cases">
      <h2 class="title--h2">
        {{ $t('Моя история') }}
      </h2>
      <History />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cases from '~/components/home/Cases.vue'
import Quote from '~/components/home/Quote.vue'
import History from '~/components/home/History.vue'
import SocialHead from '~/components/SocialHead.vue'

export default Vue.extend({
  components: { Cases, History, SocialHead, Quote }
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
