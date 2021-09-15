<template>
  <div>
    <div class="case">
      <Case>
        <template #image>
          <picture>
            <source srcset="~assets/images/cases/excursions.jpg 1x, ~assets/images/cases/excursions@2x.jpg 2x" loading="lazy">
            <source srcset="~assets/images/cases/excursions@2x.webp" type="image/webp" loading="lazy">
            <img src="~assets/images/cases/excursions.jpg" loading="lazy">
          </picture>
        </template>
        <template #label>
          Сайт
        </template>
        <template #title>
          Экскурсия по району Хамовники на бегу
        </template>
        <template #description>
          Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом. Ребята решили попробовать сделать это в&nbsp;Москве.
        </template>
        <template #link>
          <a href="https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy" class="link">Работа на Behance</a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <picture>
            <source srcset="~assets/images/cases/presentations.jpg 1x, ~assets/images/cases/presentations@2x.jpg 2x" loading="lazy">
            <source srcset="~assets/images/cases/presentations@2x.webp" type="image/webp" loading="lazy">
            <img src="~assets/images/cases/presentations.jpg" loading="lazy">
          </picture>
        </template>
        <template #label>
          Сайт
        </template>
        <template #title>
          Курсы по презентациям
        </template>
        <template #description>
          Учебная работа для курса в&nbsp;Бюро Горбунова. Якорные объекты, модульность, чередование ритма, написание текстов в&nbsp;инфо&mdash;стиле. Все&nbsp;там.
        </template>
        <template #link>
          <a href="https://bureau.ru/classroom/tasks/text/prodayuschaya-stranitsa-update/1606/results/40909/Продающая_страница_курса_по_презентациям.png" class="link">Джипег</a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <picture>
            <source srcset="~assets/images/cases/wool.jpg 1x, ~assets/images/cases/wool@2x.jpg 2x" loading="lazy">
            <source srcset="~assets/images/cases/wool@2x.webp" type="image/webp" loading="lazy">
            <img src="~assets/images/cases/wool.jpg" loading="lazy">
          </picture>
        </template>
        <template #label>
          Сайт
        </template>
        <template #title>
          Верстка статьи про овечью шерсть
        </template>
        <template #description>
          Тоже учебная работа. Здорово получилось взять скучную статью из&nbsp;Википедии и&nbsp;сделать ее&nbsp;интерснее.
        </template>
        <template #link>
          <a href="https://bureau.ru/classroom/tasks/typography/verstka-mnogoetazhnoy-veb-stranitsy-update/1606/results/40357/Овечья_шерсть.png" class="link">Джипег</a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <picture>
            <source srcset="~assets/images/cases/documents.jpg 1x, ~assets/images/cases/documents@2x.jpg 2x" loading="lazy">
            <img src="~assets/images/cases/documents@2x.jpg" loading="lazy">
          </picture>
        </template>
        <template #label>
          Мобильное приложение
        </template>
        <template #title>
          Доки в кармане
        </template>
        <template #description>
          Тоже учебная работа. Здорово получилось взять скучную статью из&nbsp;Википедии и&nbsp;сделать ее&nbsp;интерснее.
        </template>
        <template #link>
          <a href="https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg" class="link">Джипег</a>
        </template>
      </Case>
    </div>

  </div>
</template>

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

.case {
  margin-bottom: 36px;
}
</style>
