<template>
  <div>
    <SocialHead
      :title="'How to make a Telegram bot in Elixir'"
      :description="'This is the first part of three in the series. There you will find creating foundation and answering to users.'"
      :image="require('/assets/images/posts/elixir-telegram-bot/facebook-share.jpg')"
    />

    <HeroTitleSmall
      :tags="['Ruby', 'Docker']"
      :title="'Hot to generate Rails app and run it without installing ruby locally'"
    />

    <Container :type="'common'">
<prism :lang="'elixir'">...
defp parse_messages(messages) do
  Enum.each(messages, fn message ->
    answer_to_message(message)
  end)

  messages
end

defp answer_to_message(message) do
  %{
    "message" => %{
      "chat" => %{"id" => chat_id},
      "text" => original_text
    }
  } = message

  answer = %{
    text: "Hello: #{original_text}",
    chat_id: chat_id
  }

  HTTPoison.post(
    @basic_url <> "sendMessage",
    Jason.encode!(answer),
    [{"Content-Type", "application/json"}]
  )
end</prism>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitleSmall from '~/components/HeroTitleSmall.vue'
import CodeSinppet from '~/components/CodeSinppet.vue'
import LinksList from '~/components/links-list.vue'
import Title from '~/components/Title.vue'
import Paragraph from '~/components/Paragraph.vue'
import Container from '~/components/Container.vue'
import Spacing from '~/components/Spacing.vue'
import LikeItalic from '~/components/blocks/LikeItalic.vue'

export default Vue.extend({
  components: {
    HeroTitleSmall,
    CodeSinppet,
    LinksList,
    Title,
    Paragraph,
    Container,
    Spacing,
    LikeItalic
  },
  mounted() {
    console.log(1)
    // Prism.highlightAll()
  }
})
</script>
