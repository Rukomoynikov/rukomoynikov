<i18n lang="yaml">
en:
  quote: Damn cool feeling, something was not in the universe, and "{image}bam" appeared
ru:
  quote: Чертовски крутое чувство, чего{mdash}то не{nbsp}было во{nbsp}вселенной, и{nbsp}"{image}бац" появилось
</i18n>


<template>
  <i18n path="quote" tag="blockquote" class="quote">
    <template #image>
      <img src="~assets/images/icons/magic-wand.svg" class="icon" />
    </template>
    <template #nbsp>&nbsp;</template>
    <template #mdash>&mdash;</template>
  </i18n>
<!-- <div>
  {{ $t('quote', ['&nbsp;', '&mdash;']) }}
</div> -->
</template>

<style scoped>
.quote {
  font: 400 60px/70px IBM Plex Sans, sans-serif;
  margin-left: 204px;
  position: relative;
}

@media only screen and (max-width: 595px) {
  .quote {
    margin-left: 30px;
    font: 400 40px IBM Plex Sans, sans-serif;
  }
}

.quote::before {
  content: "«";
  position: absolute;
  top: 0;
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
}

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
</style>
