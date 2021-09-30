<template>
  <blockquote class="quote">
    Чертовски крутое чувство, чего&mdash;то не&nbsp;было во&nbsp;вселенной, и&nbsp;&laquo;бац&raquo; появилось
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
    margin-left: 0;
    font: 400 50px/60px IBM Plex Sans, sans-serif;
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
</style>
