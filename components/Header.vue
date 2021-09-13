<template>
  <div class="header">
    <div class="logo">
      Максим<br>Рукомойников
    </div>
    <div class="slogan">
      Люблю что&mdash;то создавать. Работал программистом, ищу работу дизайнером.
    </div>
    <div class="links">
      <a class="link" href="#">твиттер</a>
      <a class="link" href="#">вконтакте</a>
      <a class="link" href="#">фейсбук</a>
    </div>
  </div>
</template>

<style type="text/css" scoped>
.header {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-bottom: 69px;
}

.logo {
  font: 400 50px/54px IBM Plex Sans, sans-serif;
  margin-right: 33px;
}

.slogan {
  font: 300 20px/27px IBM Plex Sans, sans-serif;
  max-width: 271px;
  margin-top: 7px;
}

.links {
  margin-left: auto;
  margin-top: 9px;
}

.link {
  font: 300 20px/27px IBM Plex Sans, sans-serif;
  color: #3a4a6a;
  display: block;
  margin-bottom: 3px;
}
</style>
