<template>
  <div>
    <SocialHead
      :title="'Hot to generate Rails app and run it without installing ruby locally'"
      :description="'Docker image for generation rails application or play with ruby'"
      :image="require('/assets/images/posts/rails-on-docker/facebook-share.jpg')"
    />

    <HeroTitleSmall
      :tags="['Ruby', 'Docker']"
      :title="'Hot to generate Rails app and run it without installing ruby locally'"
      :subtitle="'In internet plenty of articles about Dockerizing your existing application. But, what you can do if you don\'t have installed ruby locally and need to generate new app.'"
    />

    <Container :type="'common'">
      <Title :level="2">
        Why Docker?
      </Title>

      <section>
        <Container :type="'content'">
          <Paragraph>
            It has always been easier to supply the necessary tools locally. If you need to have multiple versions, then rvm or nvm solve the problem. Then came Docker. Until this year, I had successfully managed to avoid it. On projects where the guys worked with Docker, I instead installed everything locally. But, I thought that enough fighting and it's time to try to live with the idea of "docker for everything". It's simply time to admit either i work using Docker or i don't work at all.
          </Paragraph>
        </Container>
      </section>

      <Spacing :type="'vertical-section_sub'" />

      <Title :level="2">
        Generating Ruby on Rails application
      </Title>

      <section>
        <Container :type="'content'">
          <Paragraph>
            Well I don't have ruby installed locally. And I need to generate a new Rails application or experiment in IRB.
          </Paragraph>

          <Paragraph>
            The first thing I did was look at the official Rails image. It turned out to be deprecated, and the authors suggested Ruby as a replacement. Using Ruby image, I was unable to generate a Rails application, so I made my own Docker image.
          </Paragraph>

          <CodeSinppet>
            <CSDockerfile />
          </CodeSinppet>

          <LinksList
            :links="[
              ['hub.docker.com/repository/docker/rukomoynikov/rails', 'https://hub.docker.com/repository/docker/rukomoynikov/rails/general'],
            ]"
          />
        </Container>
      </section>

      <Spacing :type="'vertical-section_sub'" />

      <section>
        <Container :type="'content'">
          <Title :level="3">
            Using the image
          </Title>

          <Paragraph>
            The following command will generate a new Rails application in the current folder and install required gems in the gems folder. As you know, a container cannot change its content after it has been built. Therefore, all application files and gems will be stored on the host machine.
          </Paragraph>

          <CodeSinppet>docker run --rm -v /$(pwd):/app rukomoynikov/rails rails new .</CodeSinppet>

          <Paragraph>
            Launching the application is not much more difficult. But, in a simple form, it will only work if you use the sqlite database.
          </Paragraph>

          <CodeSinppet>docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails rails s -b 0.0.0.0</CodeSinppet>

          <Paragraph>
            Running IRB. Or you can enter console and run ruby files from local machine.
          </Paragraph>

          <CodeSinppet>docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails bash</CodeSinppet>

          <WithImage :image="'posts/rails-on-docker/rails-basic-app/rails-basic-app'">
            Ruby on Rails default page
          </WithImage>
        </Container>
      </section>

      <Spacing :type="'vertical-section_sub'" />

      <Title :level="2">
        What's next?
      </Title>

      <section>
        <Container :type="'content'">
          <Paragraph>
            Выше пример минимального Rails приложения. Для полноценного использования потребуется, что-то серьезнее чем один Dockerfile. Например, docker-compose. Там можно выделить Ruby приложение в отдельный сервис, да и клиентскую часть тоже.
          </Paragraph>

          <Paragraph>
            Ниже пример моего docker-compose.yml
          </Paragraph>

          <CodeSinppet>
            <CSDockerCompose />
          </CodeSinppet>
        </Container>
      </section>
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
