<template>
  <div>
    <SocialHead
      :title="'Rukomoynikov Maxim. Developer and designer.'"
      :description="'My big goal for 5 years is to learn how to make products that solve people\'s problems and looks beautiful. To do this, I train on my tasks, watch a lot of work from different studios.'"
      :image="require('/assets/images/facebook_share_2.jpg')"
    />

    <Container :type="'common'">
      <div class="cv">
        <h2 class="cv__title">Ruby && JS программист</h2>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">...</h3>
              <div class="job__description">Делал несколько разовых проектов, помогал ребятам в Альфабанке с тестированием. Последние полгода почти не писал код, учился дизайну в Бюро Горбунова.</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__dates">Декабрь 2020 — ...</div>
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
            <div class="job__dates">Март 2020 — Декабрь 2020</div>
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
            <div class="job__dates">Март 2016 — Февраль 2020</div>
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

        <div class="job">
          <Container :type="'content'">
            <h3 class="job__title">Технические штуки с которыми встречался</h3>
            <div class="tags">
              <div v-for="tag in tags" v-html="tag" :key="tag" class="tags__tag" />
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
  },
  data() {
    return {
      tags: [
        "Ruby on Rails",
        "Capybara",
        "Gitlab CI",
        "TDD",
        "RSpec",
        "Trailblaizer",
        "Postgres",
        "Elasticsearch",
        "Ruby Microservices",
        "Docker",
        "Kubernetes",
        "Capistrano",
        "Helm",
        "New Relic",
        "React",
        "Vue"
      ]
    }
  }
})
</script>

<style type="text/css">
.cv {
  background-color: white;
  padding: max(20px, 2vw);
  border-radius: 9px;
}

.cv__title {
  margin: 0;
  margin-bottom: 24px;
}

.job + .job {
  margin-top: 41px;
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

.job__dates {
  font-size: 16px;
}

.article-layout {
  display: flex;
}

@media only screen and (max-width: 595px) {
  .article-layout {
    flex-direction: column;
  }

  .article-layout__text {
    order: 2;
  }

  .article-layout__quotes {
    order: 1;
  }

  .cv {
    padding: max(20px, 2vw);
  }
}

.article-layout__text {
  display: flex;
  margin-right: 42px;
}

.article-layout__quotes {
  display: flex;
  font-size: 15px;
  max-width: 250px;
  width: 100%;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.tags__tag {
  padding: 4px 8px;
  border: 1px dashed black;
  border-radius: 4px;
}
</style>
