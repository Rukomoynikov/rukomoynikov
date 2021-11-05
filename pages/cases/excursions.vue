<template>
  <Case>
    <SocialHead
      :title="'Рукомойников Максим'"
      :description="'Моя большая цель на 5 лет — научиться делать полезные и удобные продукты. Для этого я тренируюсь на своих задачах, много смотрю работы разных студий, учусь дизайну в Бюро Горбунова.'"
      :image="'https://rukomoynikov.ru/facebook_share_2.jpg'"
    />

    <div class="container">
      <div class="case-description">

          <div class="block-with-photo case-description__block">
            <picture>
              <source srcset="~assets/images/cases/excursions/detailed/detailed-part-1.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-1@2x.webp 2x" type="image/webp" loading="lazy">
              <source srcset="~assets/images/cases/excursions/detailed/detailed-part-1.jpg 1x, ~assets/images/cases/excursions/detailed/detailed-part-1@2x.jpg 2x" loading="lazy">
              <img src="~assets/images/cases/excursions/detailed/detailed-part-1@2x.jpg" loading="lazy" class="block-with-photo__photo">
            </picture>
            <div class="block-with-photo__paragraph">
              На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.
            </div>
          </div>

        <div class="block-with-photo">
          <picture>
            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-2.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-2@2x.webp 2x" type="image/webp" loading="lazy">
            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-2.jpg 1x, ~assets/images/cases/excursions/detailed/detailed-part-2@2x.jpg 2x" loading="lazy">
            <img src="~assets/images/cases/excursions/detailed/detailed-part-2@2x.jpg" loading="lazy" class="block-with-photo__photo">
          </picture>
          <div class="block-with-photo__paragraph">
            На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.
          </div>
        </div>

      </div>

      <div class="case-footer">
        <h3 class="case-footer">Еще один рассказик и все😉</h3>
      </div>
    </div>
  </Case>
</template>

<style type="text/css">
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 20px auto;
  padding: 0 10px;
}

.case-description__block:not(:last-of-type) {
  margin-bottom: 45px;
}

.block-with-photo {
  max-width: 800px;
}

.block-with-photo__paragraph {
  font: normal 28px "IBM Plex Sans", sans-serif;
}

.block-with-photo__photo {
  margin-bottom: 15px;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Case from '~/components/cases/Case.vue'

export default Vue.extend({
  components: { Case }
})
</script>
