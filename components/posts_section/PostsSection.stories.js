export default {
  title: 'Posts/Posts Section'
}

export const PostsSection = () => `
  <PostsSection
    :sectionTitle="'Programming'"
    :postsList='[
      {letter: "E", title: "How to make a Telegram bot in Elixir", link: "/posts/elixir-telegram-bot/"},
      {letter: "R", title: "Docker way to generate and run Rails application", link: "/posts/rails-on-docker/"}
    ]'
  />
`
