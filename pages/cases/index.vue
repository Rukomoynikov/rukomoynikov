<template>
  <Container :type="'common'">
    <Title :level="4">Design cases and projects</Title>

    <CaseOnThird />
    <CaseHalfOnFalf />
    <CaseHalfOnFalf />

    <CaseFullWidth
      :image-src="'cases/excursions/case-full-width/illustration'"
      :tags="['Сайт', 'Программирование']"
      :caseHref="'https://yandex.ru'"
      :title="'Экскурсия по району Хамовники на бегу'">
      <template #description-1>
        Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.
      </template>

      <template #description-2>
        Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.
      </template>
    </CaseFullWidth>

    <Case
      :tags="['Producthunt']"
      :description="$t('Being Featured at producthunt is most desirable thing for new startup. I decided to try this experience out on myself.')"
      :href-title="'Story'"
      :title="$t('Figma template for social media covers')"
      :image-src="'cases/figma-social/cases-list/cases-list'"
      :case-href="'/cases/figma-social-media-covers'"
    />

    <Case
      :tags="['Design']"
      :description="$t('Site for an excursion agency. The agency organizes running tours with locals. Such guides are popular abroad. The guys decided to try to do it in Moscow.')"
      :href-title="'Case at Behance'"
      :title="$t('Running tour around Khamovniki')"
      :image-src="'cases/excursions/cover/excursions'"
      :case-href="'https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy'"
    />

    <Case
      :tags="['Site']"
      :description="$t('Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site.')"
      :href-title="'Story'"
      :title="$t('Site and banners for Black Friday')"
      :image-src="'cases/digitaldeals/cover/digitaldeals'"
      :case-href="'/cases/digitaldeals/'"
    />

    <Case
      :tags="['Design']"
      :description="$t('Applciation for storing documents of the whole family. When the expiration date comes up, the application will tell you how and when to update documents.')"
      :href-title="'Image file'"
      :title="$t('Documents in the pocket')"
      :image-src="'cases/documents/documents'"
      :case-href="'https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg'"
    />

    <Case
      :tags="['Design']"
      :description="$t('Site and boilerplate for creatting Vue applciations. Design of the site based on technical specifications familiar for every javascript developer.')"
      :href-title="'Site'"
      :title="$t('Boilerplate for Vue apps')"
      :image-src="'cases/vue-boilerpate/vue-boilerpate'"
      :case-href="'https://rukomoynikov.github.io/vue-webpack-boilerplate/'"
    />
  </Container>
</template>
