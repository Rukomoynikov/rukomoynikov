<template>
  <CaseDescription>
    <template #header>
      <HeroTitle
        :title="'Figma template for social media covers'"
        :subtitle="'Being Featured at producthunt is most desirable thing for new startup. There are many examples how simple idea turned out into a popular product. I decided to try this experience out on myself.'"
        :tags="['producthunt', 'design', 'web']"
        :image="'cases/figma-social/detailed/detailed'"
      />
    </template>

    <SocialHead
      :title="'Figma template for social media covers'"
      :description="'Being Featured at producthunt is most desirable thing for new startup. There are many examples how simple idea turned out into a popular product. I decided to try this experience out on myself.'"
      :image="require('/assets/images/cases/figma-social/facebook.png')"
    />

    <Container :type="'common'">
      <section>
        <Title :level="'2'">
          Idea
        </Title>

        <div class="article-layout">
          <div class="article-layout__text">
            <Container :type="'content'">
              <Paragraph>Every time when i need to create social media cover i google sizes. And i thought wouldn't it be cool to create a template where i can create picture and put it on right away?</Paragraph>

              <Paragraph>Quick search in Figma Comminuity didn't find anything similiar. Actually there is been similiar examples but very limited. In most cases they were just several rectangles with sizes and social network label or figma files with only one social network.</Paragraph>

              <Paragraph>Ok, let's do it.</Paragraph>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <LinksList
              :links="[
                ['Social media size guide ', 'https://www.figma.com/templates/social-media/'],
              ]"
            />
          </div>
        </div>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="'2'">Process</Title>
        <Container :type="'content'">
          <WithImage :image="'cases/figma-social/result/result'">Few screens from the process</WithImage>

          <Paragraph>Entrice process took about 2 weeks. Since the task was not just creating rectanlges with certain sizes but recreating interfaces as well. I wanted to give users opportunity to put on newly created cowers and check it out on interfaces.</Paragraph>

          <Paragraph>Obviously i could take existing UI Kit from Figma Community Library. But i decided to make everying on my own. And it turned out to interesting hobbie. I mean copying existing interfaces. It's a very meditative process. Especially i liked copying icons.</Paragraph>

          <Paragraph>Next time i will try to record a clip with entire process.</Paragraph>
        </Container>

        <Quote :size="'small'">Copying is the way <br />design works.</Quote>
      </section>
      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="'2'">Result</Title>

        <WithImage :image="'cases/figma-social/result-2/result'">Screenshot from ProductHunt. As you might see it didn't become "TOP OF THE DAY".</WithImage>

        <div class="article-layout">
          <div class="article-layout__text">
            <Container :type="'content'">
              <Paragraph>
                I made templates for 4 social networks: Instagram, Facebook, Twitter and Youtube. But it was just a middle of the task. I planned to publish it on ProductHunt.
              </Paragraph>

              <Paragraph>
                I published several projects on HackerNews, but it was simple since publishing on HN it's filling one or two fields. Though ProductHunt process is bit more complex and needs more time still rules as easy and intuitive. Before submiting your project you need to fill some requirements like fill information about yourself and upvoting several projects.
              </Paragraph>

              <Paragraph>
                Besides of the description of project you will need several pictures about the project. So here is mine. I like them, but i think it would be better if i add some screenshots from real figma file. And maybe shooting video.
              </Paragraph>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <LinksList
              :links="[
                ['Project on ProductHunt', 'https://www.producthunt.com/posts/social-media-covers-in-figma'],
                ['File in Figma Community', 'https://www.figma.com/community/file/1050007276881810676'],
              ]"
            />
          </div>
        </div>
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
import Quote from '~/components/home/Quote.vue'
import UnifiedPicture from "~/components/UnifiedPicture.vue"
import WithImage from "~/components/blocks/WithImage.vue"

export default Vue.extend({
  components: { CaseDescription, HeroTitle, Title, LinksList, Container, Paragraph, Quote, UnifiedPicture, WithImage },
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

  .article-layout {
    display: flex;
  }

  @media only screen and (max-width: 595px) {
    .article-layout {
      flex-direction: column;
    }
  }

  .article-layout__text {
    display: flex;
    margin-right: 42px;
  }

  .article-layout__quotes {
    display: flex;
    font-size: 15px;
  }
</style>
