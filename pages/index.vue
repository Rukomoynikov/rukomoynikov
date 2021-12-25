<i18n lang="yaml">
en:
  Сайты и мобильные приложения: "Sites and mobile apps"
  Моя история: "My history is like"
ru:
  Слоган: "Люблю что{0}то{1}создавать. Работаю программистом и дизайнером."
</i18n>

<template>
  <div>
    <SocialHead
      :title="'Rukomoynikov Maxim'"
      :description="'My big goal for 5 years is to learn how to make products that solve people\'s problems and looks beautiful. To do this, I train on my tasks, watch a lot of work from different studios.'"
      :image="require('/assets/images/facebook_share_2.jpg')"
    />

    <div class="cases">
      <h2 class="title--h2">Sites and mobile apps</h2>
      <Cases />
      <div class="quote-block">
        <Quote>
          <span>Damn cool feeling, when something was not in&nbsp;the&nbsp;universe,</span>
          <span class="nobreak">and «<img src="~assets/images/icons/magic-wand.svg" class="icon">bam»</span>
          <span>appeared</span>
        </Quote>
      </div>
    </div>

    <div class="cases">
      <h2 class="title--h2">My history is like
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
