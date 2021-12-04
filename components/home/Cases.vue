<i18n lang="yaml">
en:
  Дизайн и верстка: "Design"
  Дизайн: "Design"
  Шаблон для джаваскрипт приложений: "Template for javascript apps"
  Сайт и набор скриптов для создания приложений на Джаваскрипт.: "Boilerplate for Vue.js apps. And a promo site with documentation and examples of using."
  Работа на Behance: Open on Behance
  Сайт: Site
  Экскурсия по району Хамовники на бегу: Excursion around the Khamovniki district on the run
  Сайт для курсов по презентациям: Presentation courses
  Статья про овечью шерсть: An article about sheep's wool
  Доки в кармане: Docs in the pocket
ru:
  Слоган: "Люблю что{0}то{1}создавать. Работал программистом, ищу работу дизайнером."
</i18n>

<template>
  <div>
    <div class="case">
      <Case>
        <template #image>
          <a href="https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy" class="link">
            <UnifiedPicture :src="'cases/excursions/cover/excursions'" :cssClass="'case__image'" />
          </a>
        </template>
        <template #label>
          {{ $t('Дизайн') }}
        </template>
        <template #title>
          {{ $t('Экскурсия по району Хамовники на бегу') }}
        </template>
        <template #description>
          {{ $t('Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом. Ребята решили попробовать сделать это в&nbsp;Москве.') }}
        </template>
        <template #link>
          <a href="https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy" class="link">
            {{ $t('Работа на Behance') }}
          </a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <a href="https://bureau.ru/classroom/tasks/text/prodayuschaya-stranitsa-update/1606/results/40909/Продающая_страница_курса_по_презентациям.png" class="link">
            <UnifiedPicture :src="'cases/presentations/presentations'" :cssClass="'case__image'" />
          </a>
        </template>
        <template #label>
          {{ $t('Дизайн') }}
        </template>
        <template #title>
          {{ $t('Сайт для курсов по презентациям') }}
        </template>
        <template #description>
          {{ $t('Учебная работа для курса в&nbsp;Бюро Горбунова. Якорные объекты, модульность, чередование ритма, написание текстов в&nbsp;инфо&mdash;стиле. Все&nbsp;там.') }}
        </template>
        <template #link>
          <a href="https://bureau.ru/classroom/tasks/text/prodayuschaya-stranitsa-update/1606/results/40909/Продающая_страница_курса_по_презентациям.png" class="link">
            {{ $t('Джипег') }}
          </a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <a href="https://bureau.ru/classroom/tasks/typography/verstka-mnogoetazhnoy-veb-stranitsy-update/1606/results/40357/Овечья_шерсть.png" class="link">
            <UnifiedPicture :src="'cases/wool/wool'" :cssClass="'case__image'" />
          </a>
        </template>
        <template #label>
          {{ $t('Дизайн') }}
        </template>
        <template #title>
          {{ $t('Статья про овечью шерсть') }}
        </template>
        <template #description>
          {{ $t('Тоже учебная работа. Здорово получилось взять скучную статью из&nbsp;Википедии и&nbsp;сделать ее&nbsp;интерснее.') }}
        </template>
        <template #link>
          <a href="https://bureau.ru/classroom/tasks/typography/verstka-mnogoetazhnoy-veb-stranitsy-update/1606/results/40357/Овечья_шерсть.png" class="link">
            {{ $t('Джипег') }}
          </a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <a href="https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg" class="link">
            <UnifiedPicture :src="'cases/documents/documents'" :cssClass="'case__image'" />
          </a>
        </template>
        <template #label>
          {{ $t('Дизайн') }}
        </template>
        <template #title>
          {{ $t('Доки в кармане') }}
        </template>
        <template #description>
          {{ $t('Приложение для хранения документов всей семьи. Когда подойдет срок действия приложение подскажет как обновить. Данными можно делиться с&nbsp;другими приложениями.') }}
        </template>
        <template #link>
          <a href="https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg" class="link">
            {{ $t('Джипег') }}
          </a>
        </template>
      </Case>
    </div>

    <div class="case">
      <Case>
        <template #image>
          <a href="https://rukomoynikov.github.io/vue-webpack-boilerplate/" class="link">
            <UnifiedPicture :src="'cases/vue-boilerpate/vue-boilerpate'" :cssClass="'case__image'" />
          </a>
        </template>
        <template #label>
          {{ $t('Дизайн и верстка') }}
        </template>
        <template #title>
          {{ $t('Шаблон для джаваскрипт приложений') }}
        </template>
        <template #description>
          {{ $t('Сайт и набор скриптов для создания приложений на Джаваскрипт.') }}
        </template>
        <template #link>
          <a href="https://rukomoynikov.github.io/vue-webpack-boilerplate/" class="link"> {{ $t('Сайт') }}
          </a>
        </template>
      </Case>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Case from '~/components/home/Case.vue'
import UnifiedPicture from '~/components/UnifiedPicture.vue'

export default Vue.extend({
  components: { Case, UnifiedPicture }
})
</script>

<style type="text/css" scoped>
  .case {
    margin-bottom: 36px;
  }

  @media only screen and (max-width: 595px) {
    .case {
      margin-bottom: 56px;
    }
  }
</style>
