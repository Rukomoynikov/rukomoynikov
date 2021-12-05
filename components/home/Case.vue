<template>
  <div class="case">
    <a :href="caseHref" class="link">
      <UnifiedPicture :src="imageSrc" :cssClass="'case__image'" />
    </a>
    <div class="case__text">
      <div v-for="tag in tags" class="label">
        {{ tag }}
      </div>
      <div class="title" v-html="title" />
      <div class="description" v-html="description" />
      <a :href="caseHref" class="link">
        {{ hrefTitle }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    imageSrc: String,
    caseHref: String,
    tags: Array,
    title: String,
    description: String,
    hrefTitle: String
  }
})
</script>

<style scoped>
.case {
  display: flex;
  align-items: flex-end;
}

@media only screen and (max-width: 595px) {
  .case {
    flex-direction: column;
    align-items: flex-start;
  }
}

.case__text {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  max-width: 220px;
  width: 100%;
}

@media only screen and (max-width: 595px) {
  .case__text {
    margin-left: 5px;
    max-width: 80%;
  }
}

.link {
  color: #4f6ebf;
  font: 300 20px IBM Plex Sans, sans-serif;
  margin-bottom: 3px;
  margin-top: 10px;
  flex: 1;
}

.description {
  font: 300 18px IBM Plex Sans, sans-serif;
  margin-top: 8px;
}

.title {
  font: 400 24px IBM Plex Sans, sans-serif;
  margin-top: 15px;
}

.label {
  font: 400 18px IBM Plex Sans, sans-serif;
  background-color: #f9edc3;
  display: inline-block;
  padding: 0 10px;
  border-radius: 6px;
}

@media only screen and (max-width: 595px) {
  .case__image {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .case__text {
    min-width: 33%;
  }
}
</style>

<style type="text/css">
  .case__image {
    width: 100%;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border-radius: 6px;

    /* flex: 1; */
  }
</style>
