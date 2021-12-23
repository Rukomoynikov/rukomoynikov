<template>
  <CaseDescription>
    <template #header>
      <HeroTitle
        :title="'Digital discounts on «Black Friday»'"
        :subtitle="'Black Friday in most cases is a cheating. Prices go up. But, when we talk about digital discounts it works fine. Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site.'"
        :tags="['design', 'makgin site']"
      />
    </template>

    <SocialHead
      :title="'Digital discounts on «Black Friday»'"
      :description="'Black Friday in most cases is a cheating. Prices go up. But, when we talk about digital discounts it works fine. Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site.'"
      :image="require('/assets/images/cases/digitaldeals/social.jpg')"
    />

    <Container :type="'common'">
      <section>
        <Title :level="2">
          Task
        </Title>

        <Container :type="'content'">
          <Paragraph>I wanted to make something simple. On the Producthunt you will plenty of simple projects, but they are profitable and popular.</Paragraph>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Inspiration
        </Title>

        <div class="gallery gallery_safari-screenshots">
          <a href="https://anytype.io/en" class="gallery__block gallery__block-half">
            <img src="~assets/images/cases/digitaldeals/anytype.webp" loading="lazy">
          </a>

          <a href="gallery_safari-screenshots" class="gallery__block gallery__block-half">
            <img src="~assets/images/cases/digitaldeals/sprout.webp" loading="lazy">
          </a>

          <a href="https://l.netology.ru/issledovanie-dizajna" class="gallery__block gallery__block-half">
            <img src="~assets/images/cases/digitaldeals/netology.webp" loading="lazy">
          </a>
        </div>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          In the result
        </Title>

        <Container :type="'content'">
          <Paragraph>
            The result is probably even too simple. But, it was a cool practice, I especially liked making these small banners. Because the layout is simple, everything looks great at all resolutions.
          </Paragraph>
          <div class="imageWithDescription">
            <a href="http://digitaldeals.today" class="gallery__block gallery__block-full">
              <img src="~assets/images/cases/digitaldeals/digitaldeals-fullpage.webp" loading="lazy" />
            </a>
            <div class="imageWithDescription__description">
              https://digitaldeals.today
            </div>
          </div>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Few technical details
        </Title>

        <Container :type="'content'">
          <Paragraph>
            When I thought about the project, I wanted to try something new. In the usual case, I would take, nuxt, or my template for vuew apps or ruby-on-rails. I decided to try Astro. Astro is a static site builder with support for modern frameworks.
          </Paragraph>

          <LinksList
            :links="[
              ['Astro framework', 'https://astro.build'],
              ['Repository of the digitaldeals.today on the Github', 'https://github.com/Rukomoynikov/digitaldeals.today']
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
import { VueAgile } from 'vue-agile'

export default Vue.extend({
  components: { CaseDescription, HeroTitle, Title, LinksList, Container, Paragraph, VueAgile },
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
