<template>
  <CaseDescription>
    <template #header>
      <HeroTitle
        :title="'Скидки на «Чёрную пятницу»'"
        :subtitle="'Черная пятница — это часто обман, цены на обычные товары наоборот растут. А вот с цифровыми товарами, все работает так как надо. Каждый год в эту неделю, я обновляю подписку на книги, покупаю какие-то приложения. В этот год, решил сделать список предложений в виде отдельного сайта.'"
        :tags="['дизайн сайта']"
        :image="heroImage"
      />
    </template>

    <SocialHead
      :title="'Скидки на «Чёрную пятницу»'"
      :description="'Черная пятница — это часто обман, цены на обычные товары наоборот растут. А вот с цифровыми товарами, все работает так как надо. Каждый год в эту неделю, я обновляю подписку на книги, покупаю какие-то приложения. В этот год, решил сделать список предложений в виде отдельного сайта.'"
      :image="require('/assets/images/cases/digitaldeals/social.jpg')"
    />

    <div class="post__container">
      <section class="post__section">
        <h2 class="post__title_h2">
          Референсы
        </h2>

        <div class="gallery gallery_safari-screenshots">
          <a href="https://anytype.io/en" class="gallery__block gallery__block-half">
            <img src="~assets/images/cases/digitaldeals/anytype.webp" loading="lazy" class="case__image">
          </a>

          <a href="gallery_safari-screenshots" class="gallery__block gallery__block-half">
            <img src="~assets/images/cases/digitaldeals/sprout.webp" loading="lazy" class="case__image">
          </a>

          <a href="https://l.netology.ru/issledovanie-dizajna" class="gallery__block gallery__block-half">
            <img src="~assets/images/cases/digitaldeals/netology.webp" loading="lazy" class="case__image">
          </a>
        </div>
      </section>

      <section class="post__section">
        <h2 class="post__title_h2">
          Что получилось в итоге
        </h2>

        <div class="content-container">
          <a href="http://digitaldeals.today" class="gallery__block gallery__block-full">
            <img src="~assets/images/cases/digitaldeals/digitaldeals-fullpage.webp" loading="lazy" class="case__image">
          </a>
        </div>
      </section>

      <section class="post__section">
        <h2 class="post__title_h2">
          Технические подробности
        </h2>

        <div class="content-container">
          <p class="post__paragraph">
            Когда думал о проекте, хотелось попробовать что-то новое. В обычном случае я бы взял, накст, или свою заготовку на вью или руби-он-рейлс. Вобшем, решил попробовать астро. Астро — это сборщик статических сайтов, с поддержкой современных фреймворков и возможностью гридатации.
          </p>

          <LinksList :links="[
            ['Сборщик сайтов Астро', 'https://astro.build'],
            ['Сайт со скидками на Гитхабе', 'https://github.com/Rukomoynikov/digitaldeals.today']
          ]" />
        </div>
      </section>
    </div>
  </CaseDescription>
</template>

<script lang="ts">
import Vue from 'vue'
import CaseDescription from '~/components/cases/CaseDescription.vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'
import Title from '~/components/Title.vue'
import LinksList from '~/components/links-list.vue'
import heroImage from '~/assets/images/cases/digitaldeals/hero-title.svg'

export default Vue.extend({
  components: { CaseDescription, HeroTitle, Title, LinksList },
  data () {
    return {
      heroImage
    }
  }
})
</script>

<style type="text/css">
  .post__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 50px 10px 0 10px;
  }

  .post__paragraph {
    font-size: 18px;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
  }

  .gallery__block {
    display: block;
  }

  .content-container {
    max-width: 800px;
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
</style>
