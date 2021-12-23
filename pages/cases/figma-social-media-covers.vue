<template>
  <CaseDescription>
    <template #header>
      <HeroTitle
        :title="'Figma template for social media covers'"
        :subtitle="'Being Featured at producthunt is most desirable thing for new startup. There are many examples how simple idea turned out into a popular product. I decided to try this experience out on myself.'"
        :tags="['producthunt', 'design', 'web']"
      />
    </template>

    <SocialHead
      :title="'Figma template for social media covers'"
      :description="'Being Featured at producthunt is most desirable thing for new startup. There are many examples how simple idea turned out into a popular product. I decided to try this experience out on myself.'"
      :image="require('/assets/images/cases/digitaldeals/social.jpg')"
    />

    <Container :type="'common'">
      <section>
        <Title :level="2">
          Idea
        </Title>

        <Container :type="'content'">
          <Paragraph>Every time when i need to create social media cover i google sizes. And i thought wouldn't it be cool to create a template where i can create picture and put it on right away?</Paragraph>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">Process</Title>
        <Container :type="'content'">
          <Paragraph>Entrice process took about 2 weeks. Since task was not just frames with sizes but also recreate interfaces. </Paragraph>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">Result</Title>

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
          What next?
        </Title>

        <Container :type="'content'">
          <Paragraph>
            I want to continue development: add more examples, maybe add web application.
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
