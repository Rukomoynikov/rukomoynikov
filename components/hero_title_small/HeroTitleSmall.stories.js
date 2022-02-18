export default {
  title: 'Posts/Hero Title Small',
  args: {
    tags: ['First tag', 'Second tag'],
    title: 'Title',
    subtitle: 'Subtitle'
  }
}

export const HeroTitleSmall = (args, { argTypes }) => ({
  template: `<HeroTitleSmall :tags="tags" :title="title" :subtitle="subtitle" />`,
  props: Object.keys(argTypes)
})
