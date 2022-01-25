<template>
  <div>
    <SocialHead
      :title="'Hot to generate Rails app and run it without installing ruby locally'"
      :description="'In internet '"
      :image="require('/assets/images/posts/elixir-telegram-bot/facebook-share.jpg')"
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
            Всегда было проще поставить необходимые инструменты локально. Если надо иметь несколько версий, то rvm или nvm решали проблему. Потом появился Докер. До этого года мне успешно удавалось избегать его. На проектах где ребята работали с докером, я ставил все локально. Но, я подумал, что хватит бороться и пора попробовать жить с мыслью "докер для всего".
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
            Чтож у меня нет установленного руби локально. Мои задачи: сгенерировать новое rails приложение, запустить иногда irb, попробовать что-то в rails консоли. В настроенных приложениях уже используется docker-compose.
          </Paragraph>

          <Paragraph>
            В первую очередь я попробовал оффициальный образ rails на docker хаб. Он оказался депрекейтед и на замену надо использовать образ ruby. В руби из коробки мне не удалось сгененрировать rails приложение и я сделал свой.
          </Paragraph>

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
            Как использовать
          </Title>

          <Paragraph>
            Эта команда сгенерирует новое rails приложение в текущей папке и установит гемы в папку gems. Как известно контейнер не может менять свое содержание после того как был build. Поэтому все файлы приложения и гемы будут храниться на локальной машине.
          </Paragraph>

          <CodeSinppet>docker run --rm -v /$(pwd):/app rukomoynikov/rails rails new .</CodeSinppet>

          <Paragraph>
            Запустить приложение не многим сложнее. Но, в простом виде будет работать только если вы используете бд sqlite.
          </Paragraph>

          <CodeSinppet>docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails rails s -b 0.0.0.0</CodeSinppet>

          <Paragraph>
            Запустить приложение не многим сложнее. Но, в простом виде будет работать только если вы используете бд sqlite.
          </Paragraph>

          <CodeSinppet>docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails bash</CodeSinppet>
        </Container>
      </section>

      <Spacing :type="'vertical-section_sub'" />

      <Title :level="2">
        Docker-compose
      </Title>

      <section>
        <Container :type="'content'">
          <Paragraph>
            Эта команда сгенерирует новое rails приложение в текущей папке и установит гемы в папку gems. Как известно контейнер не может менять свое содержание после того как был build. Поэтому все файлы приложения и гемы будут храниться на локальной машине.
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

import CSDockerCompose from '~/posts/rails-on-docker/code_snippets/docker-compose.vue'

export default Vue.extend({
  components: {
    HeroTitleSmall,
    CodeSinppet,
    LinksList,
    Title,
    Paragraph,
    Container,
    Spacing,
    CSDockerCompose
  }
})
</script>
