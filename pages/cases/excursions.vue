<template>
  <div>
    <div class="hero-title">
      <div class="hero-title_container">
        <div class="hero-title__tag">дизайн сайта</div>
        <h2 class="hero-title__title">Экскурсия по району Хамовники на бегу</h2>
        <div class="hero-title__subtitle">Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.</div>
      </div>
    </div>

    <div class="case-description">
      <div class="block-with-photo">
        <picture></picture>
        <div class="block-with-photo__paragraph"> На первой старанице рассказ о том, что это такое. Краткая информация о длине маршрута и визуально на карте показываем, где пролегает.
        </div>
      </div>
    </div>

    <div class="case-footer">
      <h3 class="case-footer">Еще один рассказ и все😉</h3>
    </div>
  </div>
</template>

<style type="text/css">
.hero-title {
  background: #f9dddc;
  padding: 55px 0 121px;
}

.hero-title__tag {
  padding: 12px 17px;
  font: 600 17px IBM Plex Sans, sans-serif;
  background: white;
  display: inline-flex;
  border-radius: 12px;
}

.hero-title__title {
  font: normal 96px/110px IBM Plex Sans, sans-serif;
  margin: 12px 0 44px 0;
}

.hero-title_container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 20px auto;
  padding: 0 10px;
}

.hero-title__subtitle {
  font: normal 34px IBM Plex Sans, sans-serif;
}

.case-description {
  padding-top: 90px;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData ({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  }
})
</script>
