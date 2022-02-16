<template>
  <div class="posts-section">
    <div class="posts-section_title">{{ sectionTitle }}</div>
    <div class="posts-section_posts">
      <a class="post-link" :href="post.link" v-for="(post, index) in postsList" v-key="index">
        <div class="post-link_letter">{{ post.letter }}</div>
        <div class="post-link_text">{{ post.title }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    sectionTitle: {
      type: String,
      default: null
    },
    postsList: {
      type: Array,
      default: null
    },
  }
})
</script>

<style type="text/css" scoped>
  .posts-section_title {
    font: 600 17px "IBM Plex Sans", sans-serif;
    margin-bottom: 14px;
  }

  .posts-section_posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px 30px;
  }

  .post-link {
    display: flex;
    text-decoration: none;
  }

  .post-link_letter {
    display: flex;
    font-size: 42px;
    justify-content: center;
    align-items: center;
    height: 58px;
    width: 58px;
    color: white;
    margin-right: 10px;
    background-image: url("~/assets/images/icons/letter-background.svg");
    background-size: cover;
    flex-shrink: 0;
  }

  .post-link_text {
    color: #4f6ebf;
    font-size: 22px;
    line-height: 29px;
    text-decoration: underline;
    margin-top: -3px;
  }
</style>
