<template>
  <div>
    <SocialHead
      :title="'Основа для бота — получение сообщение и ответ пользователю'"
      :description="'Это первая часть их трех в серии «Как написать Телеграм—бота на Эликсире»'"
      :image="require('/assets/images/posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg')"
    />

    <HeroTitle
      :tags="['Телеграм', 'Эликсир']"
      :title="'Как написать бота для Телеграма на Эликсире'"
    />

    <div class="post__container">
      <section class="post__section">
        <h2 class="post__title_h2">
          Часть про Телеграм и АПИ
        </h2>

        <section class="post__sub-section">
          <h3 class="post__title_h3">
            Обмен сообщениями с сервером Телеграма
          </h3>

          <div class="content-container">
            <p class="post__paragraph">
              Телеграм поддерживает два типа интеграции: веб–хуки и поллинг. Веб–хуки это когда Телеграм сам сообщает о получении новых сообщений от пользователей. Другими словами в случае с веб–хуками это ответственность Телеграма передать вам сообщение. Но, для того чтобы получать эти сообщения вам понадобится сервер с адресом доступным в интернете. Это может быть и просто айпи–адресс или урл mysite.ru. Для локальной разработки можно использовать ngrock.
            </p>

            <p class="post__paragraph">
              Поллинг — это постоянное опрашивание сервера Телеграма есть ли там новые сообщения. Для полллинга не нужен сервер и адрес в интернете, достаточно приложения которое без остановки отправляет запросы на сервер Телеграма.
            </p>

            <ul class="links-list">
              <li>
                <a href="https://core.telegram.org/bots/api#getting-updates" class="links-list__link">
                  Документация по Телеграм ботам
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="post__sub-section">
          <h3 class="post__title_h3">
            Получение токена для запросов в Телеграм
          </h3>

          <div class="content-container">
            <p class="post__paragraph">
              Токен для запросов в Телеграм нужно получить у бота BotFather.
            </p>

            <video controls loop class="post__video">
              <source :src="require(&quot;/assets/videos/posts/elixir-telegram-bot/api_token.mp4&quot;)" type="video/mp4">
            </video>

            <ul class="links-list">
              <li>
                <a href="https://t.me/botfather" class="links-list__link">BotFather</a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section class="post__section">
        <h2 class="post__title_h2">
          Эликсир
        </h2>

        <section class="post__sub-section">
          <div class="content-container">
            <p class="post__paragraph">
              Эликсир — это функциональный язык программирования. Работает на базе другого языка программирования Эрланга. Основное преимущество Эликсира — умение управлять огромным количеством процессов. Эти процессы тоже сделаны особым образом поэтому они занимают существенно меньше памяти и времени процессора, чем обычные процессы компьютера.
            </p>

            <ul class="links-list">
              <li><a href="https://elixir-lang.org/install.html" class="links-list__link">Инструкция по установке на elixir-lang.org</a></li>
              <li><a href="https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817" class="links-list__link">Установка при помощи asdf</a></li>
            </ul>
          </div>
        </section>
      </section>
      <section class="post__section">
        <h2 class="post__title_h2">
          Приложение
        </h2>
        <div class="content-container">
          <p class="post__paragraph">
            Я буду постепенно усложнять приложение. Начну с бота который в ответ на сообщение присылает его обратно. Дальше добавлю сохранение пользователей в базу данных. А в конце попробую сделать его немного полезным — по запросу от пользователя бот будет отправлять сводную информацию о рынке акций.
          </p>
        </div>

        <section class="post__sub-section">
          <h3 class="post__title_h3">
            Создание скелета приложения и установка необходимых инструментов
          </h3>

          <div class="content-container">
            <CodeSinppet :short="true">
              mix new stocks_bot --sup
            </CodeSinppet>

            <p class="post__paragraph">
              Для начала надо создать новое приложение. Опция <i>--sup</i> добавляет в приложение супервизор и запускает его при старте. После создание структура приложения выглядит примерно так:
            </p>

            <CodeSinppet><CSFileTree /></CodeSinppet>

            <p class="post__paragraph">
              Дополнительно надо установить HTTPoison для отправки запросов и Jason для работы с джейсонами в ответах от сервера Телеграм.
            </p>

            <CodeSinppet :file-name="'stocks_bot/mix.exs'">
              <CSDeps />
            </CodeSinppet>
          </div>

          <ul class="links-list">
            <li><a href="https://hex.pm/packages/httpoison" class="links-list__link">HTTPoisin — эйчтитипи клиент для Эликсира</a></li>
            <li><a href="https://hex.pm/packages/jason" class="links-list__link">Jason — модуль для работы с джейсон-файлами</a></li>
          </ul>
        </section>

        <section class="post__sub-section">
          <h3 class="post__title_h3">
            Получение сообщение пользователя
          </h3>

          <div class="content-container">
            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSReceivingMessages />
            </CodeSinppet>

            <p class="post__paragraph">
              Теперь можно поробовать как это работает. Отправьте своему боту сообщение. Потом откройте консоль и введите эти команды
            </p>

            <CodeSinppet :file-name="'Консоль'" :icon="'console'">
              iex -S mix
              StocksBot.get_updates()
            </CodeSinppet>

            <p class="post__paragraph">
              Консоль напечатает сообщение которые вы отправили боту и потом получили от апи Телеграма.
            </p>

            <CodeSinppet><CSMEssageJson /></CodeSinppet>

            <p class="post__paragraph">
              Если снова попробовать получить сообщения, то ответ будет таким же. Это происходит потому, что надо указать телеграму какие сообщения уже получены. Для этого надо взять <i>update_id</i> последнего сообщения, добавить единицу и использовать это как гет–параметр для получения новых сообщений. Пока что скрипт получает одно сообщение и прекращает работу, а надо чтобы продолжал слушать новые сообщения. Сейчас я это исправлю.
            </p>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSRecursiveGetUpdates />
            </CodeSinppet>
          </div>
        </section>

        <section class="post__sub-section">
          <h3 class="post__title_h3">
            Ответ пользователю
          </h3>

          <div class="content-container">
            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSAnswerToAUser />
            </CodeSinppet>
          </div>
        </section>

        <section class="post__sub-section">
          <h3 class="post__title_h3">
            Запуск приложения в супервизоре
          </h3>

          <div class="content-container">
            <p class="post__paragraph">
              Первое что надо сделать — преобразовать приложение в Генсервер (Genserver).
            </p>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSGenserver />
            </CodeSinppet>

            <p class="post__paragraph">
              Потом этот Генсервер добавить в СупервизорТри (Supervisor Tree).
            </p>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot/application.ex '">
              <CSSupervisor />
            </CodeSinppet>
          </div>
        </section>
      </section>
      <section class="post__section">
        <h2 class="post__title_h2">
          Демо
        </h2>

        <div class="content-container">
          <video controls loop class="post__video">
            <source :src="require(&quot;/assets/videos/posts/elixir-telegram-bot/demo_of_bot.mp4&quot;)" type="video/mp4">
          </video>

          <p class="post__paragraph">
            Да, пока что бот не обладает суперинтеллектом. В следующей части я добавлю хранение пользовательей в базе данных и научу бота отправлять информацию о курсе акций.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'
import CodeSinppet from '~/components/CodeSinppet.vue'

import CSFileTree from '~/posts/elixir-telegram-bot/code_snippets/file_tree.vue'
import CSDeps from '~/posts/elixir-telegram-bot/code_snippets/deps.vue'
import CSMEssageJson from '~/posts/elixir-telegram-bot/code_snippets/message_json.vue'
import CSRecursiveGetUpdates from '~/posts/elixir-telegram-bot/code_snippets/recursive_fet_updates.vue'
import CSAnswerToAUser from '~/posts/elixir-telegram-bot/code_snippets/answer_to_a_user.vue'
import CSSupervisor from '~/posts/elixir-telegram-bot/code_snippets/supervisor.vue'
import CSGenserver from '~/posts/elixir-telegram-bot/code_snippets/genserver.vue'
import CSReceivingMessages from '~/posts/elixir-telegram-bot/code_snippets/receiving_messages.vue'

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
    CSReceivingMessages
  }
})
</script>

<style scoped>
  .post__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 50px 10px 0 10px;
  }

  .content-container {
    max-width: 800px;
  }

  .links-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .links-list__link {
    color: #b66e6e;
    display: flex;
  }

  .links-list > li {
    margin-bottom: 10px;
  }

  .links-list__link::before {
    content: ' ';
    background-image: url('~/assets/images/icons/link-2.svg');
    margin-right: 4px;
    margin-top: 2px;
    display: block;
    width: 1em;
    height: 1em;
  }

  .post__video {
    width: 100%;
    margin-bottom: 18px;
  }

  .post__title_h2 {
    font-size: 26px;
    font-weight: bold;
    margin: 0 0 22px 0;
  }

  .post__title_h3 {
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 16px 0;
  }

  .post__paragraph {
    font-size: 18px;
  }

  .post__section {
    margin-bottom: 40px;
  }

  .post__sub-section {
    margin-bottom: 30px;
  }
</style>
