<template>
  <Case>
    <template #header>
      <div class="hero-title">
        <div class="hero-title_container">
          <div class="hero-title__tag">дизайн сайта</div>
          <h2 class="hero-title__title">Экскурсия по району Хамовники на бегу</h2>
          <div class="hero-title__subtitle">Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.</div>
        </div>
      </div>
    </template>

    <SocialHead
      :title="'Дизайн для сайта «Экскурсия по району Хамовники на бегу»'"
      :description="'Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве'"
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

        <div class="block-with-photo case-description__block">
          <picture>
            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-2.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-2@2x.webp 2x" type="image/webp" loading="lazy">
            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-2.jpg 1x, ~assets/images/cases/excursions/detailed/detailed-part-2@2x.jpg 2x" loading="lazy">
            <img src="~assets/images/cases/excursions/detailed/detailed-part-2@2x.jpg" loading="lazy" class="block-with-photo__photo">
          </picture>
          <div class="block-with-photo__paragraph">
            На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.
          </div>
        </div>

        <div class="block-with-photo case-description__block">
          <picture>
            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-3.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-3@2x.webp 2x" type="image/webp" loading="lazy">
            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-3.png 1x, ~assets/images/cases/excursions/detailed/detailed-part-3@2x.png 2x" loading="lazy">
            <img src="~assets/images/cases/excursions/detailed/detailed-part-3@2x.png" loading="lazy" class="block-with-photo__photo">
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
  font: 300 28px "IBM Plex Sans", sans-serif;
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
