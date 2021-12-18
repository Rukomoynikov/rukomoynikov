<i18n lang="yaml">
en:
  Максим: "Maxim"
  Рукомойников: "Rukomoynikov"
  Слоган: "I love to create. Worked as{1}a{1}programmer, looking for a{1}designer job."
  твиттер: "twiiter"
  фейсбук: "facebook"
  беханс: "behance"
ru:
  Слоган: "Люблю что{0}то{1}создавать. Работаю программистом и дизайнером."
  твиттер: "твиттер"
  фейсбук: "фейсбук"
  беханс: "беханс"
</i18n>

<template>
  <div class="header">
    <div class="logo">
      Maxim<br />Rukomoynikov
    </div>
    <div class="slogan">
      I love to create. Developer and designer. Looking forward to make cool things.
    </div>
    <div class="links">
      <a class="link" href="https://twitter.com/Rukomoynikov">twitter</a>
      <a class="link" href="https://www.facebook.com/rukomoynikov">facebook</a>
      <a class="link" href="https://www.behance.net/ruq">behance</a>
    </div>
  </div>
</template>

<style type="text/css" scoped>
.header {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 69px auto;
  padding: 0 10px;
}

.logo {
  font: 400 50px/54px IBM Plex Sans, sans-serif;
  margin-right: auto;
}

@media only screen and (max-width: 595px) {
  .logo {
    font: 400 40px/42px IBM Plex Sans, sans-serif;
  }
}

.slogan {
  font: 300 20px/27px IBM Plex Sans, sans-serif;
  max-width: 271px;
  margin-top: 7px;
  margin-right: 20px;
}

@media only screen and (max-width: 595px) {
  .slogan {
    display: none;
  }
}

.links {
  margin-top: 9px;
}

.link {
  font: 300 20px/27px IBM Plex Sans, sans-serif;
  color: #3a4a6a;
  display: block;
  margin-bottom: 3px;
}

@media only screen and (max-width: 595px) {
  .link {
    font: 300 17px/21px IBM Plex Sans, sans-serif;
  }
}
</style>
