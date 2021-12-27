<template>
  <picture>
    <source v-if="checkExtension('webp')" :srcset="webpSrcset" type="image/webp">
    <source v-if="checkExtension('jpg')" :srcset="jpgSrcSet">
    <img :src="require(`~/assets/images/${src}@2x.jpg`)" :class="cssClass">
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: String,
    cssClass: {
      type: String,
      default: null
    },
    extensions: {
      type: Array,
      default () {
        return ['webp', 'jpg']
      }
    }
  },
  computed: {
    webpSrcset () {
      return `${require(`~/assets/images/${this.src}.webp`)} 1x, ${require(`~/assets/images/${this.src}@2x.webp`)} 2x`
    },
    jpgSrcSet () {
      return `${require(`~/assets/images/${this.src}.jpg`)} 1x, ${require(`~/assets/images/${this.src}@2x.jpg`)} 2x`
    }
  },
  methods: {
    checkExtension (extension: String) {
      return this.extensions.includes(extension)
    }
  }
})
</script>
