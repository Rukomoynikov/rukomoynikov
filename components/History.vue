<template>
  <div class="columns">
    <div class="column">
      <div class="subtitle">
        Прошлое
      </div>
      <div class="text">
        Последние 6&nbsp;лет я&nbsp;работал бэкенд и&nbsp;фронтенд программистом. Я&nbsp;делал сайты, боты, и&nbsp;пару мобильных приложений.
      </div>
      <div class="text">
        До&nbsp;программирования, я&nbsp;несколько лет проработал менеджером интернет&mdash;проектов. Управлять процессом интересно, но&nbsp;создавать самому мне нравится больше. Поэтому я&nbsp;начал программировать. Это чертовски крутое чувство, когда чего-то не&nbsp;было во&nbsp;вселенной, и&nbsp;бац появилось.
      </div>
    </div>

    <div class="column">
      <div class="subtitle">
        Настоящее и будущее
      </div>
      <div class="text">
        Моя большая цель на&nbsp;5&nbsp;лет&nbsp;&mdash; научиться делать полезные и&nbsp;удобные продукты. Для этого я&nbsp;тренируюсь на&nbsp;своих задачах, много смотрю работы разных студий, учусь дизайну в&nbsp;Бюро Горбунова.
      </div>
      <div class="text">
        Напишите мне в&nbsp;Telegram если у&nbsp;вас есть вакансия дизайнера.
      </div>
    </div>

    <div class="column">
      <div class="foto-container">
        <picture>
          <source srcset="~assets/images/myphotos/black-portrait.jpg 1x, ~assets/images/myphotos/black-portrait@2x.jpg 2x" loading="lazy">
          <img src="~assets/images/myphotos/black-portrait@2x.jpg" loading="lazy">
        </picture>
        <div class="foto-container__line"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
}

.column {
  max-width: 370px;
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

.foto-container {
  position: relative;
}

.foto-container__line {
  position: absolute;
  height: 1px;
  width: calc(100% + 20px);
  left: calc(0% - 10px);
  bottom: 4px;
  background: black;
}
</style>
