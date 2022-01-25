<template>
  <CaseDescription>
    <template #header>
      <HeroTitle
        :title="'Экскурсия по району Хамовники на бегу»'"
        :subtitle="'Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве'"
        :tags="['дизайн сайта']"
      />
    </template>

    <SocialHead
      :title="'Дизайн для сайта «Экскурсия по району Хамовники на бегу»'"
      :description="'Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве'"
      :image="'https://rukomoynikov.ru/facebook_share_2.jpg'"
    />

    <div class="container">
      <div class="desktop-and-mobile">
        <div class="desktop-and-mobile__desktop">
          <picture>
            <source srcset="~assets/images/cases/excursions/detailed/full-frame-desktop.webp 1x, ~assets/images/cases/excursions/detailed/full-frame-desktop@2x.webp 2x" type="image/webp" loading="lazy">
            <source srcset="~assets/images/cases/excursions/detailed/full-frame-desktop.jpg 1x, ~assets/images/cases/excursions/detailed/full-frame-desktop@2x.jpg 2x" loading="lazy">
            <img src="~assets/images/cases/excursions/detailed/full-frame-desktop@2x.jpg" loading="lazy" class="desktop-and-mobile__image">
          </picture>
        </div>
        <div class="desktop-and-mobile__mobile">
          <picture>
            <source srcset="~assets/images/cases/excursions/detailed/full-frame-mobile.webp 1x, ~assets/images/cases/excursions/detailed/full-frame-mobile@2x.webp 2x" type="image/webp" loading="lazy">
            <source srcset="~assets/images/cases/excursions/detailed/full-frame-mobile.jpg 1x, ~assets/images/cases/excursions/detailed/full-frame-mobile@2x.jpg 2x" loading="lazy">
            <img src="~assets/images/cases/excursions/detailed/full-frame-mobile@2x.jpg" loading="lazy" class="desktop-and-mobile__image">
          </picture>
        </div>
      </div>
    </div>
    <!--      <div class="case-description">-->
    <!--        <div class="block-with-photo case-description__block">-->
    <!--          <picture>-->
    <!--            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-1.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-1@2x.webp 2x" type="image/webp" loading="lazy">-->
    <!--            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-1.jpg 1x, ~assets/images/cases/excursions/detailed/detailed-part-1@2x.jpg 2x" loading="lazy">-->
    <!--            <img src="~assets/images/cases/excursions/detailed/detailed-part-1@2x.jpg" loading="lazy" class="block-with-photo__photo">-->
    <!--          </picture>-->
    <!--          <div class="block-with-photo__paragraph">-->
    <!--            На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="block-with-photo case-description__block">-->
    <!--          <picture>-->
    <!--            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-2.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-2@2x.webp 2x" type="image/webp" loading="lazy">-->
    <!--            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-2.jpg 1x, ~assets/images/cases/excursions/detailed/detailed-part-2@2x.jpg 2x" loading="lazy">-->
    <!--            <img src="~assets/images/cases/excursions/detailed/detailed-part-2@2x.jpg" loading="lazy" class="block-with-photo__photo">-->
    <!--          </picture>-->
    <!--          <div class="block-with-photo__paragraph">-->
    <!--            На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="block-with-photo case-description__block">-->
    <!--          <picture>-->
    <!--            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-3.webp 1x, ~assets/images/cases/excursions/detailed/detailed-part-3@2x.webp 2x" type="image/webp" loading="lazy">-->
    <!--            <source srcset="~assets/images/cases/excursions/detailed/detailed-part-3.png 1x, ~assets/images/cases/excursions/detailed/detailed-part-3@2x.png 2x" loading="lazy">-->
    <!--            <img src="~assets/images/cases/excursions/detailed/detailed-part-3@2x.png" loading="lazy" class="block-with-photo__photo">-->
    <!--          </picture>-->
    <!--          <div class="block-with-photo__paragraph">-->
    <!--            На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.-->
    <!--          </div>-->
    <!--        </div>-->

    <div class="container">
      <div class="case-footer">
        <Title :level="2">
          Еще один рассказик и все 😉
        </Title>
        <Case
          :tags="['Дизайн и верстка']"
          :description="$t('Сайт и набор скриптов для создания приложений на Джаваскрипт.')"
          :href-title="'Сайт'"
          :title="$t('Шаблон для джаваскрипт приложений')"
          :image-src="'cases/vue-boilerpate/vue-boilerpate'"
          :case-href="'https://rukomoynikov.github.io/vue-webpack-boilerplate/'"
        />
      </div>
    </div>
  </CaseDescription>
</template>

<script lang="ts">
import Vue from 'vue'
import CaseDescription from '~/components/cases/CaseDescription.vue'
import Case from '~/components/home/Case.vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'
import Title from '~/components/Title.vue'

export default Vue.extend({
  components: { CaseDescription, HeroTitle, Case, Title }
})
</script>

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

.desktop-and-mobile {
  display: flex;
  justify-content: space-between;
}

.desktop-and-mobile__desktop {
  max-width: calc(930px - 60px);
}

.desktop-and-mobile__mobile {
  max-width: 270px;
}

.desktop-and-mobile__image {
  width: 100%;
}
</style>
