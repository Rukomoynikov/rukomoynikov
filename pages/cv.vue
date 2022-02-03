<i18n lang="yaml">
en:
  title: "Ruby && JS developer"
  jobs:
    last:
      description: "I did several one-time projects, helped the guys at Alfabank with testing. For the last six months I have hardly written code, I studied design at the Gorbunov Bureau."
      date: "December 2020 — ..."
    modus:
      company: ModusCreate, Ruby on Rails developer
      description: "We developed application for students and teachers of American universities. From the interesting: microservice architecture, Amazon SQS, Kubernetes, a bit of Elixir."
      date: "March 2020 — December 2020"
    etpgpb:
      company: "ETP GPB, JS/Rails developer"
      description_1: "I started as a front-end programmer in the company. While working, I became interested in the RoR stack and performed many tasks on it. I fell in love with testing and started using: Capybara, RSpec, Gherkin, and Gitlab CI."
      description_2: For about two years I was responsible for all JS code in several projects. Most of them were based on either Jquery or Vue.
      description_3: I interviewed the guys in the team. Helped to assemble the testing team and set up processes. We used Gitlab CI and BDD-based auto-tests.
      date: March 2016 — February 2020
    pet_projects:
      title: Pet projects, though old, but you can see the code
      project_1: Gem for generating html reports on cucumber tests (I like BDD)
      project_2: "Project on RoR: makes documentation out of tests and unites team members around documentation. Demo project - https://mnogotestov.ru"
      project_3: A project that has no demo left, the idea is a search engine for cheap flights
      project_4: Website and stock market parser, performance analysis
    buzzwords:
      title: Technical things that I met
ru:
  title: "Ruby && JS программист"
  jobs:
    last:
      description: "Делал несколько разовых проектов, помогал ребятам в Альфабанке с тестированием. Последние полгода почти не писал код, учился дизайну в Бюро Горбунова."
      date: "Декабрь 2020 — ..."
    modus:
      company: ModusCreate, Ruby on Rails developer
      description: "Приложение для студентов и преподавателей американских университетов. Из интересного: микросервисная архитектура, Amazon очереди, Kubernetes, немного Elixir."
      date: "Март 2020 — Декабрь 2020"
    etpgpb:
      company: ЭТП ГПБ, JS/Rails developer
      description_1: "Начинал в компании как фронтенд программист. Во время работы заинтересовался RoR стеком и выполнил много задач на нем. Полюбил тестирование и начал применять: Capybara, RSpec, Gherkin, и Gitlab CI."
      description_2: Около двух лет отвечал за весь JS код в нескольких проектах. Большинство из них было основано или на Jquery или на Vue.
      description_3: Собеседовал ребят в команду. Помогал собирать команду тестирования и настраивать процессы. Мы использовали Gitlab CI и авто-тесты основанные на BDD.
      date: Март 2016 — Февраль 2020
    pet_projects:
      title: Пет-проекты хоть и старенькие, но код посмотреть можно
      project_1: Гем для генерации html отчетов по cucumber тестам (мне нравится BDD)
      project_2: "Проект на ror: делает из тестов документацию и объединяет участников команд вокруг документации. Демо проекта - https://mnogotestov.ru"
      project_3: Проект у которого не осталось демо, задумка — поисковик дешевых авиабилетов
      project_4: Сайт и парсер рынка акций, анализ эффективности
    buzzwords:
      title: Технические штуки с которыми встречался
</i18n>

<template>
  <div>
    <SocialHead
      :title="'Rukomoynikov Maxim. Developer and designer.'"
      :description="'My big goal for 5 years is to learn how to make products that solve people\'s problems and looks beautiful. To do this, I train on my tasks, watch a lot of work from different studios.'"
      :image="require('/assets/images/facebook_share_2.jpg')"
    />

    <Container :type="'common'">
      <div class="cv">
        <h2 class="cv__title">{{ $t('title') }}</h2>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">...</h3>
              <div class="job__description">{{ $t('jobs.last.description') }}</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__dates">{{ $t('jobs.last.date') }}</div>
          </div>
        </div>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">{{ $t('jobs.modus.company') }}</h3>
              <div class="job__description">{{ $t('jobs.modus.description') }}</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__dates">{{ $t('jobs.modus.date') }}</div>
          </div>
        </div>

        <div class="article-layout job">
          <div class="article-layout__text">
            <Container :type="'content'">
              <h3 class="job__title">{{ $t('jobs.etpgpb.company') }}</h3>
              <div class="job__description">{{ $t('jobs.etpgpb.description_1') }}</div>
              <div class="job__description">{{ $t('jobs.etpgpb.description_2') }}</div>
              <div class="job__description">{{ $t('jobs.etpgpb.description_3') }}</div>
            </Container>
          </div>
          <div class="article-layout__quotes">
            <div class="job__dates">{{ $t('jobs.etpgpb.date') }}</div>
          </div>
        </div>

        <div class="job">
          <Container :type="'content'">
            <h3 class="job__title">{{ $t('jobs.pet_projects.title') }}</h3>
            <div class="job__description">
              <ul>
                <li><a class="job__link" href="https://github.com/Rukomoynikov/cucumber-reports">{{ $t('jobs.pet_projects.project_1') }}</a></li>
                <li><a class="job__link" href="https://gitlab.com/pet-projects7/testus-site">{{ $t('jobs.pet_projects.project_2') }}</a></li>
                <li><a class="job__link" href="https://gitlab.com/pet-projects7/travelparty">{{ $t('jobs.pet_projects.project_3') }}</a></li>
                <li><a class="job__link" href="https://gitlab.com/pet-projects7/heroes-of-markets">{{ $t('jobs.pet_projects.project_4') }}</a></li>
              </ul>
            </div>
          </Container>
        </div>

        <div class="job">
          <Container :type="'content'">
            <h3 class="job__title">{{ $t('jobs.buzzwords.title') }}</h3>
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
