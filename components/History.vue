<i18n lang="yaml">
en:
  text_1: "Maxim"
  Рукомойников: "Rukomoynikov"
  Слоган: "I love to create. Worked as a programmer, looking for a job as a designer."
  твиттер: "twiiter"
  фейсбук: "facebook"
  беханс: "behance"
ru:
  Слоган: "Люблю что{0}то{1}создавать. Работал программистом, ищу работу дизайнером."
  твиттер: "твиттер"
  фейсбук: "фейсбук"
</i18n>

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
