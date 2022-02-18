export default {
  title: 'Posts/Cases/Text on the right'
}

export const Case = () => `
  <Case
    :tags="['Design']"
    :description="$t('Site and boilerplate for creatting Vue applciations. Design of the site based on technical specifications familiar for every javascript developer.')"
    :href-title="'Site'"
    :title="$t('Boilerplate for Vue apps')"
    :image-src="'cases/vue-boilerpate/vue-boilerpate'"
    :case-href="'https://rukomoynikov.github.io/vue-webpack-boilerplate/'"
  />
`
