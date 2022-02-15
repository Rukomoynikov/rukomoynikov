<template>
  <div>
    <SocialHead
      :title="'Posts about everything. Design, programming, books and travels.'"
      :description="'My big goal for 5 years is to learn how to make products that solve people\'s problems and looks beautiful. To do this, I train on my tasks, watch a lot of work from different studios.'"
      :image="require('/assets/images/facebook_share_2.jpg')"
    />

    <Container :type="'common'">
      <PostsSection
        :sectionTitle="'Programming'"
        :postsList='[
          {letter: "E", title: "How to make a Telegram bot in Elixir", link: "/posts/elixir-telegram-bot/"},
          {letter: "R", title: "Docker way to generate and run Rails application", link: "/posts/rails-on-docker/"}
        ]'
        />
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostsSection from '~/components/PostsSection.vue'
import SocialHead from '~/components/SocialHead.vue'

export default Vue.extend({
  components: { PostsSection, SocialHead }
})
</script>
