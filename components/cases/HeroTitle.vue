<template>
  <div class="hero-title">
    <div class="hero-title__container">
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
    }
  }
})
</script>

<style>
  .hero-title {
    /* url('~/assets/images/title_background.webp') */
    background: #f9dddc;
  }

  .hero-title__tag {
    padding: 12px 17px;
    font: 600 17px IBM Plex Sans, sans-serif;
    background: white;
    display: inline-flex;
    border-radius: 12px;
  }

  .hero-title__tag:not(:last-of-type) {
    margin-right: 24px;
  }

  .hero-title__title {
    font: normal 62px/68px IBM Plex Sans, sans-serif;
    margin: 18px 0 0 0;
  }

  .hero-title__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 35px 0 60px;
  }

  .hero-title__subtitle {
    margin-top: 34px;
    font: 300 34px IBM Plex Sans, sans-serif;
  }
</style>
