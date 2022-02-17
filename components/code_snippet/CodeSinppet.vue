<template>
  <div>
    <div v-if="fileName" class="code-block__filename">
      <img :src="iconSrc" class="code-block__file-icon">
      {{ fileName }}
    </div>
    <pre :class="['code-block', {'code-block_short': short}]"><slot /></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    fileName: {
      type: String,
      default () {
        return null
      }
    },
    short: {
      type: Boolean,
      default () {
        return false
      }
    },
    icon: {
      type: String,
      default () {
        return null
      }
    }
  },
  computed: {
    iconSrc () {
      if (!this.icon) {
        return require('~/assets/images/icons/file-2.svg')
      }

      return require(`~/assets/images/icons/${this.icon}.svg`)
    }
  }
})
</script>

<style>
.code-block {
  background: white;
  padding: 10px 12px;
  overflow-x: scroll;
  margin: 0 0 18px 0;
  color: rgb(21, 21, 119);
}

.code-block_short {
  padding: 6px 12px;
}

.code-block__filename {
  background: #dbf0ff;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  font-weight: normal;
}

.code-block__file-icon {
  height: 1em;
  margin-right: 5px;
}
</style>
