<i18n lang="yaml">
en:
  Прошлое: Past
  Прошлое часть 1: For the last 6 years I have been working as a backend and frontend programmer. I've made websites, bots, and a couple of mobile apps.
  Прошлое часть 2: Before programming, I worked as a project manager for several years. It's interesting to manage the process, but I like to create on my own more. So I started programming. It’s a damn cool feeling when something wasn’t in the universe and bam it's appeared.
  Настоящее и будущее: Modern era and future
ru:
  Прошлое часть 1: "Последние 6{0}лет я{0}работал бэкенд и{0}фронтенд программистом. Я{0}делал сайты, боты, и{0}пару мобильных приложений."
  Прошлое часть 2: "До{0}программирования, я{0}несколько лет проработал менеджером интернет{1}проектов. Управлять процессом интересно, но{0}создавать самому мне нравится больше. Поэтому я{0}начал программировать. Это чертовски крутое чувство, когда чего-то не{0}было во{0}вселенной, и{0}бац появилось."
</i18n>

<template>
  <div class="columns">
    <div class="column">
      <div class="subtitle">
        {{ $t('Прошлое') }}
      </div>
      <div class="text">
        {{ $t('Прошлое часть 1', ["&nbsp;"]) }}
      </div>
      <div class="text">
        {{ $t('Прошлое часть 2', ["&nbsp;", "&mdash;"]) }}
      </div>
    </div>

    <div class="column">
      <div class="subtitle">
        {{ $t('Настоящее и будущее') }}
      </div>
      <div class="text">
        {{ $t('Моя большая цель на&nbsp;5&nbsp;лет&nbsp;&mdash; научиться делать полезные и&nbsp;удобные продукты. Для этого я&nbsp;тренируюсь на&nbsp;своих задачах, много смотрю работы разных студий, учусь дизайну в&nbsp;Бюро Горбунова.') }}
      </div>
      <div class="text">
        {{ $t('Напишите мне в&nbsp;Telegram если у&nbsp;вас есть вакансия дизайнера.') }}
      </div>

      <div class="text">
        <a href="t.me/rukomoynikov">t.me/rukomoynikov</a>
      </div>
    </div>

    <div class="column column-foto">
      <img src="~assets/images/myphotos/transparent-photo-in-black@2x.png" loading="lazy" class="foto">
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
}

@media only screen and (max-width: 595px) {
  .columns {
    flex-direction: column;
  }
}

.column {
  max-width: 370px;
  order: 2;
}

@media only screen and (max-width: 595px) {
  .column-foto {
    order: 1;
  }
}

.column:not(:last-of-type) {
  margin-right: 50px;
}

.subtitle {
  font: 500 20px IBM Plex Sans, sans-serif;
  margin-bottom: 14px;
}

.text {
  font: 400 20px/25px IBM Plex Sans, sans-serif;
  margin-bottom: 20px;
}

@media only screen and (max-width: 595px) {
  .text {
    margin-left: 5px;
    max-width: 80%;
  }
}

.foto {
  width: 100%;
  background-color: #efd85c;
  border-radius: 50%;
  margin-top: 35px;
}

@media only screen and (max-width: 595px) {
  .foto {
    width: 120px;
    margin-bottom: 22px;
  }
}
</style>
