<template>
  <div class="hero-title">
    <div class="hero-title__container">
      <UnifiedPicture v-if="image" :src="image" :css-class="'hero-title__image'" />
      <div class="hero-title__text-container">
        <div v-for="tag in tags" :key="tag" class="hero-title__tag">
          {{ tag }}
        </div>
        <h2 class="hero-title__title">
          {{ title }}
        </h2>
        <div v-if="subtitle" class="hero-title__subtitle">
          {{ subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UnifiedPicture from '~/components/unified_picture/UnifiedPicture.vue'

export default Vue.extend({
  components: { UnifiedPicture },
  props: {
    tags: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default () {
        return null
      }
    },
    subtitle: {
      type: String,
      required: false,
      default () {
        return null
      }
    },
    image: {
      type: String,
      required: false,
      default () {
        return null
      }
    }
  }
})
</script>

<style scoped>
  .hero-title {
    /* background-color: #fbab7e; #f9dddc; background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%); */

    min-height: calc(100vh - 148px);
    background-color: #ebec96;
    opacity: 0.8;
    background-image: radial-gradient(#14164a 1px, #ebec96 1px), linear-gradient(0deg, transparent 0%, transparent 100%);
    background-size: 40px 40px;
  }

  .hero-title__tag {
    padding: 12px 17px;
    font: 600 17px IBM Plex Sans, sans-serif;
    background-color: white;
    display: inline-flex;
    border-radius: 12px;
  }

  .hero-title__tag:not(:last-of-type) {
    margin-right: 24px;
  }

  .hero-title__title {
    font: normal 62px/68px IBM Plex Sans, sans-serif;
    margin: 18px 0 0 0;
    max-width: 1000px;
    color: black;
  }

  @media only screen and (max-width: 595px) {
    .hero-title__title {
      font: normal 54px/58px IBM Plex Sans, sans-serif;
      margin: 18px 0 0 0;
    }
  }

  .hero-title__container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }

  .hero-title__subtitle {
    margin-top: 22px;
    font: 300 28px/33px IBM Plex Sans, sans-serif;
    max-width: 800px;
    color: black;
  }

  .hero-title__text-container {
    padding: 35px 10px 60px 10px;
  }
</style>

<style>
  .hero-title__image {
    margin-top: 59px;
    border: 10px solid white;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
  }
</style>
