<template>
  <div>
    <SocialHead
      :title="'How to generate Rails app and run it without installing ruby locally'"
      :description="'Docker image for generation rails application or play with ruby'"
      :image="require('/assets/images/posts/rails-on-docker/facebook-share.jpg')"
    />

    <HeroTitleSmall
      :tags="['Ruby', 'Docker']"
      :title="'How to generate Rails app and run it without installing ruby locally'"
      :subtitle="'In internet plenty of articles about Dockerizing existing application. But, what if you don\'t have installed ruby locally and need to generate new app.'"
    />

    <Container :type="'common'">
      https://quiz.evrone.ru/ruby?utm_source=vc&utm_medium=article&utm_campaign=quiz1-anons
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitleSmall from '~/components/HeroTitleSmall.vue'
import CodeSinppet from '~/components/CodeSinppet.vue'
import LinksList from '~/components/links-list.vue'
import Title from '~/components/Title/Title.vue'
import Paragraph from '~/components/Paragraph.vue'
import Container from '~/components/Container.vue'
import Spacing from '~/components/Spacing.vue'
import WithImage from '~/components/blocks/WithImage.vue'

import CSDockerCompose from '~/posts/rails-on-docker/code_snippets/docker-compose.vue'
import CSDockerfile from '~/posts/rails-on-docker/code_snippets/dockerfile.vue'

export default Vue.extend({
  components: {
    HeroTitleSmall,
    CodeSinppet,
    LinksList,
    Title,
    Paragraph,
    Container,
    Spacing,
    CSDockerCompose,
    CSDockerfile,
    WithImage
  }
})
</script>
