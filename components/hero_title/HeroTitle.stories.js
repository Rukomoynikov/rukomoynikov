export default {
  title: 'Posts/Hero Title',
  args: {
    tags: ['First tag', 'Second tag'],
    title: 'Title',
    subtitle: 'Subtitle',
    image: "cases/digitaldeals/detailed-page/cover"
  }
}

export const HeroTitle = (args, { argTypes }) => ({
  template: `<HeroTitle :tags="tags" :title="title" :subtitle="subtitle" :image="image" />`,
  props: Object.keys(argTypes)
})


// "require('/assets/images/posts/elixir-telegram-bot/facebook-share.jpg')"
