<template>
  <div>
    <div v-if="fileName" class="code-block__filename">
      <img src="~/assets/images/icons/file.svg" class="code-block__file-icon">
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
    }
  }
})
</script>

<style>
.code-block {
  background: white;
  padding: 0 12px;
  overflow-x: scroll;
  margin: 0;
  color: rgb(21, 21, 119);
}

.code-block_short {
  padding: 6px 12px;
}

.code-block__filename {
  background: #c7c7c7;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  font-weight: normal;
}

.code-block__file-icon {
  height: 1em;
  margin-right: 5px;
}
</style>
