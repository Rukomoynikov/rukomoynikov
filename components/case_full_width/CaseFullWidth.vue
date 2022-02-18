<template>
  <div class="case">
    <div class="case__img">
      <UnifiedPicture
        :src="imageSrc"
        :css-class="'case__image'"
      />
    </div>

    <div class="case__title-and-tags">
      <div class="case__tags">
        <div class="case__tag">
          Сайт
        </div>
        <div class="case__tag">
          Программирование
        </div>
      </div>
      <div class="case__title">
        Экскурсия по району Хамовники на бегу
      </div>
    </div>

    <div class="case__description-1">
      Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.
    </div>

    <div class="case__description-2">
      Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    imageSrc: {
      type: String,
      default: null
    },
    caseHref: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    hrefTitle: {
      type: String,
      default: null
    }
  }
})
</script>

<style scoped>
  .case {
    display: grid;
    grid-template-areas:
      "picture picture picture picture picture"
      "title-and-tags space description-1 description-space description-2";
    grid-template-columns: minmax(100px, 411px) 1fr minmax(100px, 340px) 20px minmax(100px, 340px);
  }

  .case__img {
    grid-area: picture;
    margin-bottom: 34px;
    width: auto;
  }

  .case__title {
    font-size: 22px;
    color: #4f6ebf;
    text-decoration: underline;
  }

  .case__tags {
    display: flex;
    margin-bottom: 8px;
    column-gap: 9px;
  }

  .case__tag {
    padding: 1px 5px;
    background-color: #f9edc3;
    font-size: 14px;
    color: #1a1a1a;
  }

  .case__title-and-tags {
    grid-area: title-and-tags;
  }

  .case__description-1 {
    grid-area: description-1;
  }

  .case__description-2 {
    grid-area: description-2;
  }

  .case__description-1,
  .case__description-2 {
    font-size: 20px;
    font-weight: lighter;
  }

  @media only screen and (max-width: 595px) {
    .case {
      grid-template-areas:
        "picture"
        "title-and-tags"
        "description-1"
        "description-2";
      grid-template-columns: 1fr;
    }

    .case__title {
      font-size: 22px;
      margin-bottom: 14px;
    }

    .case__img {
      margin-bottom: 3px;
    }

    .case__description-1 {
      margin-bottom: 12px;
    }

    .case__description-1,
    .case__description-2 {
      font-size: 16px;
    }
  }
</style>
