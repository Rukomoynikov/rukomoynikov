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
  Слоган: "Люблю что{0}то{1}создавать. Работаю программистом и дизайнером."
</i18n>

<template>
  <div>
    <div class="case">
      <Case
        :tags="['Дизайн']"
        :description="$t('Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом. Ребята решили попробовать сделать это в&nbsp;Москве.')"
        :hrefTitle="'Работа на Behance'"
        :title="$t('Экскурсия по району Хамовники на бегу')"
        :imageSrc="'cases/excursions/cover/excursions'"
        :caseHref="'https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy'" />
    </div>

    <div class="case">
      <Case
        :tags="['Дизайн']"
        :description="$t('Каждый год в эту неделю, я обновляю подписку на книги, покупаю какие-то приложения. В этот год, решил сделать список предложений в виде отдельного сайта.')"
        :hrefTitle="'Рассказ'"
        :title="$t('Сайт и баннеры для «Черной пятницы»')"
        :imageSrc="'cases/digitaldeals/cover/digitaldeals'"
        :caseHref="'/cases/digitaldeals/'" />
    </div>

    <div class="case">
      <Case
        :tags="['Дизайн']"
        :description="$t('Тоже учебная работа. Здорово получилось взять скучную статью из&nbsp;Википедии и&nbsp;сделать ее&nbsp;интерснее.')"
        :hrefTitle="'Джипег'"
        :title="$t('Статья про овечью шерсть')"
        :imageSrc="'cases/wool/wool'"
        :caseHref="'https://bureau.ru/classroom/tasks/typography/verstka-mnogoetazhnoy-veb-stranitsy-update/1606/results/40357/Овечья_шерсть.png'" />
    </div>

    <div class="case">
      <Case
        :tags="['Дизайн']"
        :description="$t('Приложение для хранения документов всей семьи. Когда подойдет срок действия приложение подскажет как обновить. Данными можно делиться с&nbsp;другими приложениями.')"
        :hrefTitle="'Джипег'"
        :title="$t('Доки в кармане')"
        :imageSrc="'cases/documents/documents'"
        :caseHref="'https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg'" />
    </div>

    <div class="case">
      <Case
        :tags="['Дизайн и верстка']"
        :description="$t('Сайт и набор скриптов для создания приложений на Джаваскрипт.')"
        :hrefTitle="'Сайт'"
        :title="$t('Шаблон для джаваскрипт приложений')"
        :imageSrc="'cases/vue-boilerpate/vue-boilerpate'"
        :caseHref="'https://rukomoynikov.github.io/vue-webpack-boilerplate/'" />
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
