<template>
  <div class="header">
    <div class="logo">Максим<br />Рукомойников</div>
    <div class="slogan">Люблю что&mdash;то создавать. Работал программистом, ищу работу дизайнером.</div>
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
}

.logo {
  font: 400 50px/54px IBM Plex Sans, sans-serif;
}

.slogan {
  font: light 20px/27px IBM Plex Sans, sans-serif;
  max-width: 288px;
}

.links {
  margin-left: auto;
}

.link {
  color: #3a4a6a;
  display: block;
}
</style>
