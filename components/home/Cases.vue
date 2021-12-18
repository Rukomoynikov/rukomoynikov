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
        :tags="['Design']"
        :description="$t('Site for an excursion agency. The agency organizes running tours with locals. Such guides are popular abroad. The guys decided to try to do it in Moscow.')"
        :hrefTitle="'Case at Behance'"
        :title="$t('Running tour around Khamovniki')"
        :imageSrc="'cases/excursions/cover/excursions'"
        :caseHref="'https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy'" />
    </div>

    <div class="case">
      <Case
        :tags="['Site']"
        :description="$t('Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site.')"
        :hrefTitle="'Story'"
        :title="$t('Site and banners for Black Friday')"
        :imageSrc="'cases/digitaldeals/cover/digitaldeals'"
        :caseHref="'/cases/digitaldeals/'" />
    </div>

    <div class="case">
      <Case
        :tags="['Design']"
        :description="$t('Also an educational work. It was great to tale a boring article from Wikipedia and make it interesting')"
        :hrefTitle="'Image file'"
        :title="$t('Article about whool history')"
        :imageSrc="'cases/wool/wool'"
        :caseHref="'https://bureau.ru/classroom/tasks/typography/verstka-mnogoetazhnoy-veb-stranitsy-update/1606/results/40357/Овечья_шерсть.png'" />
    </div>

    <div class="case">
      <Case
        :tags="['Design']"
        :description="$t('Applciation for storing documents of the whole family. When the expiration date comes up, the application will tell you how and when to update documents.')"
        :hrefTitle="'Image file'"
        :title="$t('Documents in the pocket')"
        :imageSrc="'cases/documents/documents'"
        :caseHref="'https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg'" />
    </div>

    <div class="case">
      <Case
        :tags="['Design']"
        :description="$t('Site and boilerplate for creatting Vue applciations. Design of the site based on technical specifications familiar for every javascript developer.')"
        :hrefTitle="'Site'"
        :title="$t('Boilerplate for Vue apps')"
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
