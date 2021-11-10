<template>
  <div>
    <HeroTitle
      :tags="['Телеграм', 'Эликсир']"
      :title="'Как написать бота для Телеграма на Эликсире'"
    />

    <div class="container">
      <h2>Часть про Телеграм и АПИ</h2>

      <h3>Обмен сообщениями с сервером Телеграма</h3>

      <div class="content-container">
        <p>Телеграм поддерживает два типа интеграции: веб–хуки и поллинг. Веб–хуки это когда Телеграм сам сообщает о получении новых сообщений от пользователей. Другими словами в случае с веб–хуками это ответственность Телеграма передать вам сообщение. Но, для того чтобы получать эти сообщения вам понадобится сервер с адресом доступным в интернете. Это может быть и просто айпи–адресс или урл mysite.ru. Для локальной разработки можно использовать ngrock.</p>

        <p>Поллинг — это постоянное опрашивание сервера Телеграма есть ли там новые сообщения. Для полллинга не нужен сервер и адрес в интернете, достаточно приложения которое без остановки отправляет запросы на сервер Телеграма.</p>
      </div>

      <ul class="links-list">
        <li>
          <a href="" class="link">
            Документация по Телеграм АПИ
          </a>
        </li>
      </ul>

      <h2>Эликсир</h2>

      <div class="content-container">
        <p>Эликсир — это функциональный язык программирования. Работает на базе другого языка программирования Эрланга. Основное преимущество Эликсира — умение управлять огромным количеством процессов. Эти процессы тоже сделаны особым образом поэтому они занимают существенно меньше памяти и времени процессора, чем обычные процессы компьютера.</p>
      </div>

      <h2>Приложение</h2>
      <div class="content-container">
        <p>Я буду постепенно усложнять приложение. Начну с эхо–бота, бота который в ответ на сообщение присылает его обратно. Дальше добавлю сохранение пользователей в базу данных. А в конце попробую сделать его немного полезным — по запросу от пользователя бот будет отправлять сводную информацию о рынке акций.</p>
      </div>

      <h3>Создание скелета приложения и установка необходимых инструментов</h3>

      <div class="content-container">
        <CodeSinppet :short="true">mix new stocks_bot --sup</CodeSinppet>

        <p>Для начала надо создать новое приложение. Опция <i>--sup</i> добавляет в приложение супервизор и запускает его при старте. После создание структура приложения выглядит примерно так:</p>

        <CodeSinppet>
stocks_bot
├── README.md
├── lib
│   ├── stocks_bot
│   │   └── application.ex
│   └── stocks_bot.ex
├── mix.exs
└── test
├── stocks_bot_test.exs
└── test_helper.exs
        </CodeSinppet>

        <p>Дополнительно надо установить HTTPoison для отпрвки запросов и Jason для работы с джейсонами в ответах от сервера Телеграм.</p>

        <CodeSinppet :file-name="'stocks_bot/mix.exs'">
...

defp deps do
  [
    {:httpoison, "~> 1.8"},
    {:jason, "~> 1.2"}
  ]
end
        </CodeSinppet>
      </div>

      <h3>Отправка запросов в Телеграм</h3>
      <div class="content-container">
        <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex '">
defmodule StocksBot do
  @basic_url "https://api.telegram.org/bot<Токен от Botfather>>/"

  def get_updates(offset \\ nil) do
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =
           updates_url(offset) |> HTTPoison.get(),
         {:ok, data} = Jason.decode(body) do
      IO.inspect(data["result"])
    end
  end

  defp updates_url(_offset = nil) do
    @basic_url <> "getUpdates"
  end
end
        </CodeSinppet>

      <p>Теперь можно поробовать как это работает. Отправьте своему боту сообщение. Потом откройте консоль и введите эти команды</p>

      <CodeSinppet>
iex -S mix
StocksBot.get_updates()
      </CodeSinppet>

      <p>Консоль напечатает сообщение которые вы отправили боту и потом получили от апи Телеграма. </p>

      <CodeSinppet>
[
  %{
    "message" => %{
      "chat" => %{
        "first_name" => "Maksim",
        "id" => 120407271,
        "last_name" => "Rukomoynikov",
        "type" => "private",
        "username" => "rukomoynikov"
      },
      "date" => 1636549063,
      "from" => %{
        "first_name" => "Maksim",
        "id" => 120407271,
        "is_bot" => false,
        "language_code" => "ru",
        "last_name" => "Rukomoynikov",
        "username" => "rukomoynikov"
      },
      "message_id" => 1142,
      "text" => "Hello"
    },
    "update_id" => 475896056
  }
]
    </CodeSinppet>

    <p>Если снова попробовать получить сообщения, то ответ будет таким же. Это происходит потому, что надо указать телеграму какие сообщения уже получены. Для этого надо взять <i>update_id</i> последнего сообщения, добавить единицу и использовать это как гет–параметр для получения новых сообщений. Да и сейчас скрипт получает одно сообщение и прекращает, а надо чтобы слушал. Сейчас я это исправлю.</p>

  <CodeSinppet>
defmodule TelegramBotElixir do
  @basic_url "https://api.telegram.org/bot167028316:AAHC6XHgTAiYqon6GTgPan6jhC_jF3CFIXk/"

  def get_updates(offset \\ nil) do
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =
           updates_url(offset) |> HTTPoison.get(),
         {:ok, data} = Jason.decode(body) do

      parse_messages(data["result"])
      |> get_last_update_id()
      |> get_updates()
    end
  end

  defp parse_messages(messages) do
    Enum.each(messages, fn message ->
      IO.inspect(message)
    end)

    messages
  end

  defp get_last_update_id(_messages = []) do
    nil
  end

  defp get_last_update_id(messages) do
    List.last(messages) |> Map.fetch!("update_id")
  end

  defp updates_url(_offset = nil) do
    @basic_url <> "getUpdates"
  end

  defp updates_url(offset) do
    @basic_url <> "getUpdates?offset=#{offset + 1}"
  end
end
  </CodeSinppet>
      </div>
<!--      <h3>Получение сообщений и ответ пользователю</h3>-->

<!--      <h3>Сохранение пользователей в базу данных</h3>-->

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'
import CodeSinppet from '~/components/CodeSinppet.vue'

export default Vue.extend({
  components: { HeroTitle, CodeSinppet }
})
</script>

<style scoped>
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 0 10px;
  }

  .content-container {
    max-width: 800px;
  }

  .link {
    color: #b66e6e;
    display: flex;
  }

  .link::before {
    content: ' ';
    background-image: url('~/assets/images/icons/link.svg');
    display: block;
    width: 1.1em;
    height: 1.1em;
  }

  .links-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .code {
    background: white;
    padding: 18px 12px;
    overflow-x: scroll;
    font-family: "IBM Plex Mono", sans-serif;
  }
</style>
