export default {
  title: 'Posts/Links List'
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
