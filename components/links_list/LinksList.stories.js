export default {
  title: 'Posts/LinksList'
}

export const LinksList = () => ({
  template: `
    <LinksList
      :links="[
        ['Documentation about Telegram bots', 'https://core.telegram.org/bots/api#getting-updates'],
      ]"
    />
  `
})
