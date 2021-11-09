<template>
  <div class="hero-title">
    <div class="hero-title_container">
      <div class="hero-title__tag" v-for="tag in tags" :key="tag">
        {{tag}}
      </div>
      <h2 class="hero-title__title">
        {{title}}
      </h2>
      <div class="hero-title__subtitle" v-if="subtitle">
        {{subtitle}}
      </div>
    </div>
  </div>
</template>

<style>
  .hero-title {
    background: #f9dddc;
    padding: 55px 0 76px;
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
    font: normal 96px/110px IBM Plex Sans, sans-serif;
    margin: 6px 0 34px 0;
  }

  .hero-title_container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 0 10px;
  }

  .hero-title__subtitle {
    font: 300 34px IBM Plex Sans, sans-serif;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tags: {
      type: Array,
      required: false
    },
    title: String,
    subtitle: {
      type: String,
      required: false
    }
  }
})
</script>
