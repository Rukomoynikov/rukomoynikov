export default {
  title: 'Posts/Cases/Full width'
}

export const CaseFullWidth = () => `
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
`
