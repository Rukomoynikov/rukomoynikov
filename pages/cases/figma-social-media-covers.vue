<template>
  <CaseDescription>
    <template #header>
      <HeroTitle
        :title="'Figma template for social media covers'"
        :subtitle="'Черная пятница — это часто обман, цены на обычные товары наоборот растут. А вот с цифровыми товарами, все работает так как надо. Каждый год в эту неделю, я обновляю подписку на книги, покупаю какие-то приложения. В этот год, решил сделать список предложений в виде отдельного сайта.'"
        :tags="['дизайн сайта']"
      />
    </template>

    <template #contents>
      <h1>111</h1>
    </template>

    <SocialHead
      :title="'Скидки на «Чёрную пятницу»'"
      :description="'Черная пятница — это часто обман, цены на обычные товары наоборот растут. А вот с цифровыми товарами, все работает так как надо. Каждый год в эту неделю, я обновляю подписку на книги, покупаю какие-то приложения. В этот год, решил сделать список предложений в виде отдельного сайта.'"
      :image="require('/assets/images/cases/digitaldeals/social.jpg')"
    />

    <Container :type="'common'">
      <section>
        <Title :level="2">
          Задача
        </Title>

        <Container :type="'content'">
          <Paragraph>Сделать инструмент которым можно пользоваться в работе. Отправить его в ПродактХант.</Paragraph>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">Результаты</Title>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">ПродактХант</Title>

        <Container :type="'content'">
          <Paragraph>
            Получилось, наверное даже слишком просто. Но, это была крутая практика, особенно понравилось делать эти маленькие баннеры. Из-за того, что макет простой все отлично выглядит на всех разрешениях.
          </Paragraph>
          <div class="imageWithDescription">
            <a href="http://digitaldeals.today" class="gallery__block gallery__block-full">
              <img src="~assets/images/cases/digitaldeals/digitaldeals-fullpage.webp" loading="lazy" class="case__image">
            </a>
            <div class="imageWithDescription__description">
              Сайт digitaldeals.today
            </div>
          </div>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Что дальше
        </Title>

        <Container :type="'content'">
          <Paragraph>
            Когда думал о проекте, хотелось попробовать что-то новое. В обычном случае я бы взял, накст, или свою заготовку на вью или руби-он-рейлс. Вобшем, решил попробовать астро. Астро — это сборщик статических сайтов, с поддержкой современных фреймворков и возможностью гридатации.
          </Paragraph>

          <LinksList
            :links="[
              ['Сборщик сайтов Астро', 'https://astro.build'],
              ['Сайт со скидками на Гитхабе', 'https://github.com/Rukomoynikov/digitaldeals.today']
            ]"
          />
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />
    </Container>
  </CaseDescription>
</template>

<script lang="ts">
import Vue from 'vue'
import CaseDescription from '~/components/cases/CaseDescription.vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'
import Title from '~/components/Title.vue'
import LinksList from '~/components/links-list.vue'
import Container from '~/components/Container.vue'
import Paragraph from '~/components/Paragraph.vue'
import heroImage from '~/assets/images/cases/digitaldeals/hero-title.svg'

export default Vue.extend({
  components: { CaseDescription, HeroTitle, Title, LinksList, Container, Paragraph },
  data () {
    return {
      heroImage
    }
  }
})
</script>

<style type="text/css">
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }

  .gallery__block {
    display: block;
  }

  .gallery__block-half {
    width: 50%;
  }

  .gallery__block-full img {
    width: 100%;
  }

  .gallery__block-half img {
    width: 100%;
  }

  .gallery_safari-screenshots {
    margin-left: -20px;
  }

  .imageWithDescription__description {
    margin-top: 8px;
    color: #888;
    font-size: 14px;
  }
</style>
