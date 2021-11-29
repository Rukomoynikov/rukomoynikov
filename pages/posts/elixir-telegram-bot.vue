<template>
  <div>
    <SocialHead
      :title="'Как написать Телеграм-бота на Эликсире'"
      :description="'Это первая часть их трех в серии «Как написать Телеграм—бота на Эликсире»'"
      :image="require('/assets/images/posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg')"
    />

    <HeroTitle
      :tags="['Телеграм', 'Эликсир']"
      :title="'Как написать бота для Телеграма на Эликсире'"
    />

    <Container :type="'common'">
      <section>
        <Title level="2">
          Часть про Телеграм и АПИ
        </Title>

        <section>
          <Title level="3">
            Обмен сообщениями с сервером Телеграма
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Телеграм поддерживает два типа интеграции: веб–хуки и поллинг. Веб–хуки это когда Телеграм сам сообщает о получении новых сообщений от пользователей. Другими словами в случае с веб–хуками это ответственность Телеграма передать вам сообщение. Но, для того чтобы получать эти сообщения вам понадобится сервер с адресом доступным в интернете. Это может быть и просто айпи–адресс или урл mysite.ru. Для локальной разработки можно использовать ngrock.
            </Paragraph>

            <Paragraph>
              Поллинг — это постоянное опрашивание сервера Телеграма есть ли там новые сообщения. Для полллинга не нужен сервер и адрес в интернете, достаточно приложения которое без остановки отправляет запросы на сервер Телеграма.
            </Paragraph>

            <LinksList
              :links="[
                ['Документация по Телеграм ботам', 'https://core.telegram.org/bots/api#getting-updates'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Получение токена для запросов в Телеграм
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Токен для запросов в Телеграм нужно получить у бота BotFather.
            </Paragraph>

            <video controls loop class="post__video">
              <source :src="require('/assets/videos/posts/elixir-telegram-bot/api_token.mp4')" type="video/mp4">
            </video>

            <LinksList
              :links="[
                ['Botfather для управления ботами', 'https://t.me/botfather'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />
      </section>
      <Spacing :type="'vertical-section'" />
      <section>
        <Title level="2">
          Эликсир
        </Title>

        <section>
          <Container :type="'content'">
            <Paragraph>
              Эликсир — это функциональный язык программирования. Работает на базе другого языка программирования Эрланга. Основное преимущество Эликсира — умение управлять огромным количеством процессов. Эти процессы тоже сделаны особым образом поэтому они занимают существенно меньше памяти и времени процессора, чем обычные процессы компьютера.
            </Paragraph>

            <LinksList
              :links="[
                ['Инструкция по установке на elixir-lang.org', 'https://elixir-lang.org/install.html'],
                ['Установка при помощи asdf', 'https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />
      </section>
      <Spacing :type="'vertical-section'" />
      <section>
        <Title level="2">
          Приложение
        </Title>
        <Container :type="'content'">
          <Paragraph>
            Я буду постепенно усложнять приложение. Начну с бота который в ответ на сообщение присылает его обратно. Дальше добавлю сохранение пользователей в базу данных. А в конце попробую сделать его немного полезным — по запросу от пользователя бот будет отправлять сводную информацию о рынке акций.
          </Paragraph>
        </Container>

        <section>
          <Title level="3">
            Создание скелета приложения и установка необходимых инструментов
          </Title>

          <div class="content-container">
            <CodeSinppet :short="true">
              <CSCreatingNewApp />
            </CodeSinppet>

            <Paragraph>
              Для начала надо создать новое приложение. Опция <i>--sup</i> добавляет в приложение супервизор и запускает его при старте. После создание структура приложения выглядит примерно так:
            </Paragraph>

            <CodeSinppet><CSFileTree /></CodeSinppet>

            <Paragraph>
              Дополнительно надо установить HTTPoison для отправки запросов и Jason для работы с джейсонами в ответах от сервера Телеграм.
            </Paragraph>

            <CodeSinppet :file-name="'stocks_bot/mix.exs'">
              <CSDeps />
            </CodeSinppet>
          </div>

          <LinksList
            :links="[
              ['HTTPoisin — эйчтитипи клиент для Эликсира', 'https://hex.pm/packages/httpoison'],
              ['Jason — модуль для работы с джейсон-файлами', 'https://hex.pm/packages/jason'],
            ]"
          />
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Получение сообщение пользователя
          </Title>

          <Container :type="'content'">
            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSReceivingMessages />
            </CodeSinppet>

            <Paragraph>
              Теперь можно поробовать как это работает. Отправьте своему боту сообщение. Потом откройте консоль и введите эти команды
            </Paragraph>

            <CodeSinppet :file-name="'Консоль'" :icon="'console'">
              <CSConsole />
            </CodeSinppet>

            <Paragraph>
              Консоль напечатает сообщение которые вы отправили боту и потом получили от апи Телеграма.
            </Paragraph>

            <CodeSinppet><CSMEssageJson /></CodeSinppet>

            <Paragraph>
              Если снова попробовать получить сообщения, то ответ будет таким же. Это происходит потому, что надо указать телеграму какие сообщения уже получены. Для этого надо взять <i>update_id</i> последнего сообщения, добавить единицу и использовать это как гет–параметр для получения новых сообщений. Пока что скрипт получает одно сообщение и прекращает работу, а надо чтобы продолжал слушать новые сообщения. Сейчас я это исправлю.
            </Paragraph>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSRecursiveGetUpdates />
            </CodeSinppet>
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Ответ пользователю
          </Title>

          <div class="content-container">
            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSAnswerToAUser />
            </CodeSinppet>

            <Paragraph>
              Функция <i>answer_to_message</i> при помощи паттерн-матчинга забирает имя отправителя и текст входящего сообщения, чтобы отправить это обратно пользователю пост-запросом.
            </Paragraph>
          </div>
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Запуск приложения в супервизоре
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Первое что надо сделать — преобразовать приложение в Генсервер (Genserver).
            </Paragraph>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSGenserver />
            </CodeSinppet>

            <Paragraph>
              Потом этот Генсервер добавить в СупервизорТри (Supervisor Tree).
            </Paragraph>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot/application.ex '">
              <CSSupervisor />
            </CodeSinppet>

            <LinksList
              :links="[
                ['Статья с примерами суперивизоров от AppSignal', 'https://blog.appsignal.com/2021/08/23/using-supervisors-to-organize-your-elixir-application.html'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />
      </section>
      <Spacing :type="'vertical-section'" />
      <section>
        <h2 class="post__title_h2">
          Демо
        </h2>

        <Container :type="'content'">
          <video controls loop class="post__video">
            <source :src="require('/assets/videos/posts/elixir-telegram-bot/demo_of_bot.mp4')" type="video/mp4">
          </video>

          <Paragraph>
            Да, пока что бот не обладает суперинтеллектом. В следующей части я добавлю хранение пользовательей в базе данных и научу бота отправлять информацию о курсе акций.
          </Paragraph>
        </Container>
      </section>
      <Spacing :type="'vertical-section'" />
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'
import CodeSinppet from '~/components/CodeSinppet.vue'
import LinksList from '~/components/links-list.vue'
import Title from '~/components/Title.vue'
import Paragraph from '~/components/Paragraph.vue'
import Container from '~/components/Container.vue'
import Spacing from '~/components/Spacing.vue'

import CSFileTree from '~/posts/elixir-telegram-bot/code_snippets/file_tree.vue'
import CSDeps from '~/posts/elixir-telegram-bot/code_snippets/deps.vue'
import CSMEssageJson from '~/posts/elixir-telegram-bot/code_snippets/message_json.vue'
import CSRecursiveGetUpdates from '~/posts/elixir-telegram-bot/code_snippets/recursive_fet_updates.vue'
import CSAnswerToAUser from '~/posts/elixir-telegram-bot/code_snippets/answer_to_a_user.vue'
import CSSupervisor from '~/posts/elixir-telegram-bot/code_snippets/supervisor.vue'
import CSGenserver from '~/posts/elixir-telegram-bot/code_snippets/genserver.vue'
import CSReceivingMessages from '~/posts/elixir-telegram-bot/code_snippets/receiving_messages.vue'
import CSCreatingNewApp from '~/posts/elixir-telegram-bot/code_snippets/creating_new_app.vue'
import CSConsole from '~/posts/elixir-telegram-bot/code_snippets/console.vue'

export default Vue.extend({
  components: {
    HeroTitle,
    CodeSinppet,
    CSFileTree,
    CSDeps,
    CSMEssageJson,
    CSRecursiveGetUpdates,
    CSAnswerToAUser,
    CSSupervisor,
    CSGenserver,
    CSReceivingMessages,
    CSCreatingNewApp,
    CSConsole,
    LinksList,
    Title,
    Paragraph,
    Container,
    Spacing
  }
})
</script>

<style scoped>
  .post__video {
    width: 100%;
    margin-bottom: 18px;
  }

  .post__sub-section {
    margin-bottom: 30px;
  }
</style>
