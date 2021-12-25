<template>
  <ul class="links-list">
    <li v-for="(link, index) in links" :key="index">
      <a :href="link[1]" class="links-list__link">
        {{link[0]}}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    links: {
      type: Array,
      default () {
        return [] as Array<[string, string]>
      }
    }
  }
})
</script>

<style>
  .links-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .links-list__link {
    color: #b66e6e;
    display: flex;
  }

  .links-list > li {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .links-list__link::before {
    content: ' ';
    background-image: url('~/assets/images/icons/link-2.svg');
    background-repeat: no-repeat;
    margin-right: 4px;
    margin-top: 2px;
    display: block;
    width: 1em;
    height: 1em;
  }
</style>
