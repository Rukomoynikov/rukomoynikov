<template>
  <blockquote class="quote">
    Чертовски крутое чувство, чего&mdash;то не&nbsp;было во&nbsp;вселенной, и&nbsp;<nobr>&laquo;<img class="icon" src="~assets/images/icons/magic-wand.svg" />бац&raquo;</nobr> появилось
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
</style>
