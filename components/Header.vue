<i18n lang="yaml">
en:
  Максим: "Maxim"
  Рукомойников: "Rukomoynikov"
  Слоган: "I love to create. Worked as a programmer, looking for a job as a designer."
  твиттер: twiiter
  фейсбук: facebook
  беханс: behance
ru:
  Слоган: "Люблю что–то создавать. Работал программистом, ищу работу дизайнером."
</i18n>

<template>
  <div class="header">
    <div class="logo">
      {{ $t('Максим') }}<br>{{ $t('Рукомойников') }}
    </div>
    <div class="slogan">
      {{ $t('Слоган') }}
    </div>
    <div class="links">
      <a class="link" href="https://twitter.com/Rukomoynikov">{{ $t('twitter') }}</a>
      <a class="link" href="https://www.facebook.com/rukomoynikov">{{ $t('facebook') }}</a>
      <a class="link" href="https://www.behance.net/ruq">{{ $t('behance') }}</a>
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
  margin-right: 33px;
}

@media only screen and (max-width: 595px) {
  .logo {
    font: 400 40px/42px IBM Plex Sans, sans-serif;
    margin-right: 0;
  }
}

.slogan {
  font: 300 20px/27px IBM Plex Sans, sans-serif;
  max-width: 271px;
  margin-top: 7px;
  margin-left: auto;
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
