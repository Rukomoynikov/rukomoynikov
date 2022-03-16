<template>
  <div>
    <SocialHead
      :title="'Statistics 101 with interactive examples'"
      :description="'Docker image for generation rails application or play with ruby'"
      :image="require('/assets/images/posts/rails-on-docker/facebook-share.jpg')"
    />

    <HeroTitleSmall
      :tags="['Statistics', 'D3', 'R Language']"
      :title="'Statistics 101 with interactive examples'"
      :subtitle="'Мне почему-то нравится статистика. Возможно, при помощи статистики можно иначе взглянуть на какие-то события в мире или просто факты. Например, '"
    />

    <Container :type="'common'">
      <section>
        <Title :level="2">
          Меры центральной тенденции
        </Title>

        <section>
          <Title :level="3">
            Среднее арифметическое
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Среднее арифметическое — сумма всех наблюдений деленное на количество наблюдений. Например, рост людей в компании: 156 см, 162 см, 174 см, 158 см, 169 см, 170 см. Значит формула подсчета будет такой (156 + 162 + 174 + 158 + 169 + 170) / 6 = 164 см.  Средний рост в компании 164 см. Среднее арифметическое очень зависит от выбросов — слишком больших и маленьких значений. Давайте добавим кого-то очень высоко роста, например Кесен Султан ростом 251 см. Вот как изменится среднее арифметичское: (156 + 162 + 174 + 158 + 169 + 170 + 251) / 7 = 177 см. Часто для того чтобы избавиться от выбросов из выборки удаляют 25% самых больших и самых маленьких наблюдений.
            </Paragraph>
          </Container>
        </section>

        <section>
          <Title :level="3">
            Мода
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Мода - по-простому говоря самое часто встречающееся значение. Например, подорожание проезда в процентах за последние 10 лет: 1%, 2%, 1%, 1%, 4%, 2%, 1%, 5%, 2%, 3%. Итого 1% встречается 4 раза, 2% — 3 раза, 3% - 1 раз, 4% - 1 раз, 5% - 1 раз, значит мода этой выборки — 1%, а среднее арифметическое - 2.2.
            </Paragraph>
          </Container>
        </section>

        <section>
          <Title :level="3">
            Бокс-плот
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Значение по середине или два значения если в выборке четное количество наблюдений.
              https://www.d3-graph-gallery.com/graph/boxplot_show_individual_points.html
            </Paragraph>
          </Container>
        </section>
      </section>

      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Меры изменчивости
        </Title>

        <Title :level="3">
          Дисперсия и среднее отклонение
        </Title>

        <Container :type="'content'">
          <Paragraph>
            Среднее арифметическое — сумма всех наблюдений деленное на количество наблюдений. Например, рост людей в компании: 156 см, 162 см, 174 см, 158 см, 169 см, 170 см. Значит формула подсчета будет такой (156 + 162 + 174 + 158 + 169 + 170) / 6 = 164 см.  Средний рост в компании 164 см. Среднее арифметическое очень зависит от выбросов — слишком больших и маленьких значений. Давайте добавим кого-то очень высоко роста, например Кесен Султан ростом 251 см. Вот как изменится среднее арифметичское: (156 + 162 + 174 + 158 + 169 + 170 + 251) / 7 = 177 см. Часто для того чтобы избавиться от выбросов из выборки удаляют 25% самых больших и самых маленьких наблюдений.
          </Paragraph>
        </Container>
      </section>

      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Квантили и квартили и перцентили
        </Title>

        <Container :type="'content'">
          <Paragraph>
            По-просту говоря квартили и перцентили это частный случай квантилей. Квартили отделяют по 25% наблюдений, поэтому медианна это второй квартиль. Процентили понятно из названия отделябт проценты.
          </Paragraph>
        </Container>
      </section>

      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Бокс-плот
        </Title>
      </section>

      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Нормальное распределение
        </Title>
      </section>

      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Тестирование гипотез
        </Title>
      </section>

      <Spacing :type="'vertical-section'" />

      <section>
        <Title :level="2">
          Язык программирования R
        </Title>
      </section>

      <client-only>
        <Chart />
      </client-only>

    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitleSmall from '~/components/hero_title_small/HeroTitleSmall.vue'
import CodeSinppet from '~/components/code_snippet/CodeSinppet.vue'
import LinksList from '~/components/links_list/LinksList.vue'
import Title from '~/components/title/Title.vue'
import Paragraph from '~/components/paragraph/Paragraph.vue'
import Container from '~/components/container/Container.vue'
import Spacing from '~/components/spacing/Spacing.vue'
import WithImage from '~/components/with_image/WithImage.vue'
import Chart from '~/components/chart/Chart.vue'

import CSDockerCompose from '~/posts/rails-on-docker/code_snippets/docker-compose.vue'
import CSDockerfile from '~/posts/rails-on-docker/code_snippets/dockerfile.vue'

export default Vue.extend({
  components: {
    HeroTitleSmall,
    CodeSinppet,
    LinksList,
    Title,
    Paragraph,
    Container,
    Spacing,
    CSDockerCompose,
    CSDockerfile,
    WithImage,
    Chart
  }
})
</script>
