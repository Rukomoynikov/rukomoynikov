<i18n lang="yaml">
en:
  quote_1: Damn cool feeling, something was not in&nbsp;the&nbsp;universe,
  бац: bam
  появилось: appeared
ru:
  quote_1: Чертовски крутое чувство, чего–то не&nbsp;было во&nbsp;вселенной,
</i18n>

<template>
  <blockquote class="quote">
    <span>Damn cool feeling, when something was not in&nbsp;the&nbsp;universe,</span>
    <span class="nobreak">and «<img src="~assets/images/icons/magic-wand.svg" class="icon">bam»</span>
    <span>appeared</span>
  </blockquote>
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

.nobreak {
  white-space: nowrap;
}
</style>
