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
        :tags="['Producthunt']"
        :description="$t('Being Featured at producthunt is most desirable thing for new startup. I decided to try this experience out on myself.')"
        :href-title="'Story'"
        :title="$t('Figma template for social media covers')"
        :image-src="'cases/figma-social/cases-list/cases-list'"
        :case-href="'/cases/figma-social-media-covers'"
      />
    </div>

    <div class="case">
      <Case
        :tags="['Design']"
        :description="$t('Site for an excursion agency. The agency organizes running tours with locals. Such guides are popular abroad. The guys decided to try to do it in Moscow.')"
        :href-title="'Case at Behance'"
        :title="$t('Running tour around Khamovniki')"
        :image-src="'cases/excursions/cover/excursions'"
        :case-href="'https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy'"
      />
    </div>

    <div class="case">
      <Case
        :tags="['Site']"
        :description="$t('Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site.')"
        :href-title="'Story'"
        :title="$t('Site and banners for Black Friday')"
        :image-src="'cases/digitaldeals/cover/digitaldeals'"
        :case-href="'/cases/digitaldeals/'"
      />
    </div>

    <div class="case">
      <Case
        :tags="['Design']"
        :description="$t('Applciation for storing documents of the whole family. When the expiration date comes up, the application will tell you how and when to update documents.')"
        :href-title="'Image file'"
        :title="$t('Documents in the pocket')"
        :image-src="'cases/documents/documents'"
        :case-href="'https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg'"
      />
    </div>

    <div class="case">
      <Case
        :tags="['Design']"
        :description="$t('Site and boilerplate for creatting Vue applciations. Design of the site based on technical specifications familiar for every javascript developer.')"
        :href-title="'Site'"
        :title="$t('Boilerplate for Vue apps')"
        :image-src="'cases/vue-boilerpate/vue-boilerpate'"
        :case-href="'https://rukomoynikov.github.io/vue-webpack-boilerplate/'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Case from '~/components/case/Case.vue'

export default Vue.extend({
  components: { Case }
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
