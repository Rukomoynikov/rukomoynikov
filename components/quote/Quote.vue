<i18n lang="yaml">
en:
  quote_1: Damn cool feeling, something was not in&nbsp;the&nbsp;universe,
  бац: bam
  появилось: appeared
ru:
  quote_1: Чертовски крутое чувство, чего–то не&nbsp;было во&nbsp;вселенной,
</i18n>

<template>
  <div class="quote-container">
    <blockquote :class="cssClass">
      <slot />
    </blockquote>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    size: {
      type: String,
      default () {
        return null
      }
    }
  },
  computed: {
    cssClass () {
      return {
        quote: true,
        quote_small: this.size === 'small'
      }
    }
  }
})
</script>

<style scoped>
.quote-container {
  background: white;
  padding: 50px 0;
  border-radius: 6px;
}

.quote {
  font: 600 60px/70px IBM Plex Sans, sans-serif;
  margin-left: 204px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 60px;
}

.quote_small {
  margin-top: 20px;
  margin-bottom: 30px;
}

@media only screen and (max-width: 595px) {
  .quote {
    margin-left: 30px;
    font: 400 40px IBM Plex Sans, sans-serif;
  }
}

/* .quote::before {
  content: "«";
  position: absolute;
  top: -4%;
  right: calc(100% + 10px);
  font-size: 100px;
  color: #616161;
}

.quote::after {
  content: "»";
  font-size: 100px;
  color: #616161;
  position: absolute;
  margin-left: 10px;
  bottom: 4%;
} */

@media only screen and (max-width: 595px) {
  .quote::before,
  .quote::after {
    display: none;
  }
}

.icon {
  width: auto;
  height: 60px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.nobreak {
  white-space: nowrap;
}
</style>
