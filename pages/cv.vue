<template>
  <div>
    <SocialHead
      :title="'How to make a Telegram bot in Elixir'"
      :description="'This is the first part of three in the series. There you will find creating foundation and answering to users.'"
      :image="require('/assets/images/posts/elixir-telegram-bot/facebook-share.jpg')"
    />

    <Container :type="'common'">
      <div class="cv">
        <h2 class="cv__title">Ruby & JS программист</h2>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">...</h3>
              <div class="job__description">Делал несколько разовых проектов, помогал ребятам в Альфабанке с тестированием. Последние полгода почти не писал код, учился дизайну в Бюро Горбунова.</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__title">Декабрь 2020 — ...</div>
          </div>
        </div>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">ModusCreate, Ruby on Rails developer</h3>
              <div class="job__description">Приложение для студентов и преподавателей американских университетов. Из интересного: микросервисная архитектура, Amazon очереди, Kubernetes, немного Elixir.</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__title">Март 2020 — Декабрь 2020</div>
          </div>
        </div>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">ЭТП ГПБ, JS/Rails developer</h3>
              <div class="job__description">Начинал в компании как фронтенд программист. Во время работы заинтересовался RoR стеком и выполнил много задач на нем. Полюбил тестирование и начал применять: Capybara, RSpec, Gherkin, и Gitlab CI.</div>
              <div class="job__description">Около двух лет отвечал за весь JS код в нескольких проектах. Большинство из них было основано или на Jquery или на Vue.</div>
              <div class="job__description">Собеседовал ребят в команду. Помогал собирать команду тестирования и настраивать процессы. Мы использовали  Gitlab CI и авто-тесты основанные на BDD.</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__title">Март 2016 — Февраль 2020</div>
          </div>
        </div>

        <div class="job">
          <Container :type="'content'">
            <h3 class="job__title">Пет-проекты хоть и старенькие, но код посмотреть можно</h3>
            <div class="job__description">
              <ul>
                <li><a class="job__link" href="https://github.com/Rukomoynikov/cucumber-reports">Гем для генерации html отчетов по cucumber тестам (мне нравится BDD)</a></li>
                <li><a class="job__link" href="https://gitlab.com/pet-projects7/testus-site">Проект на ror: делает из тестов документацию и объединяет участников команд вокруг документации. Демо проекта - https://mnogotestov.ru</a></li>
                <li><a class="job__link" href="https://gitlab.com/pet-projects7/travelparty">Проект у которого не осталось демо, задумка — поисковик дешевых авиабилетов</a></li>
                <li><a class="job__link" href="https://gitlab.com/pet-projects7/heroes-of-markets">Сайт и парсер рынка акций, анализ эффективности</a></li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '~/components/Container.vue'

export default Vue.extend({
  components: {
    Container
  }
})
</script>

<style type="text/css">
.cv {
  background-color: white;
  padding: 40px;
  border-radius: 9px;
}

.cv__title {
  margin: 0;
  margin-bottom: 24px;
}

.job + .job {
  margin-top: 23px;
}

.job__title {
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 19px;
  font-weight: 500;
}

.job__description {
  font-size: 19px;
}

.job__description ul {
  margin-top: 0;
}

.job__description + .job__description {
  margin-top: 8px;
}

.job__link {
  color: #b66e6e;
}

.article-layout {
  display: flex;
}

@media only screen and (max-width: 595px) {
  .article-layout {
    flex-direction: column;
  }
}

.article-layout__text {
  display: flex;
  margin-right: 42px;
}

.article-layout__quotes {
  display: flex;
  font-size: 15px;
}
</style>
