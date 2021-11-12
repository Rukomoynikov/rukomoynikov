<template>
  <div>
    <SocialHead
      :title="'Как написать бота для Телеграма на Эликсире'"
      :description="'Создание Телеграм–бота на Эликсире'"
      :image="require('/assets/images/facebook_share_2.jpg')"
    />

    <HeroTitle
      :tags="['Телеграм', 'Эликсир']"
      :title="'Как написать бота для Телеграма на Эликсире'">
    </HeroTitle>

    <div class="container">
      <h2>Часть про Телеграм и АПИ</h2>

      <h3>Обмен сообщениями с сервером Телеграма</h3>

      <div class="content-container">
        <p>Телеграм поддерживает два типа интеграции: веб–хуки и поллинг. Веб–хуки это когда Телеграм сам сообщает о получении новых сообщений от пользователей. Другими словами в случае с веб–хуками это ответственность Телеграма передать вам сообщение. Но, для того чтобы получать эти сообщения вам понадобится сервер с адресом доступным в интернете. Это может быть и просто айпи–адресс или урл mysite.ru. Для локальной разработки можно использовать ngrock.</p>

        <p>Поллинг — это постоянное опрашивание сервера Телеграма есть ли там новые сообщения. Для полллинга не нужен сервер и адрес в интернете, достаточно приложения которое без остановки отправляет запросы на сервер Телеграма.</p>
      </div>

      <ul class="links-list">
        <li>
          <a href="https://core.telegram.org/bots/api#getting-updates" class="link">
            Документация по Телеграм ботам
          </a>
        </li>
      </ul>

      <h3>Получение токена для запросов в Телеграм</h3>

      <div class="content-container">
        <p>Токен для запросов в Телеграм нужно получить у бота BotFather.</p>

        <video controls loop class="post__video">
          <source :src='require("/assets/videos/posts/elixir-telegram-bot/api_token.mp4")' type="video/mp4" />
        </video>

        <ul class="links-list">
          <li>
            <a href="https://t.me/botfather" class="link">
              BotFather
            </a>
          </li>
        </ul>
      </div>

      <h2>Эликсир</h2>

      <div class="content-container">
        <p>Эликсир — это функциональный язык программирования. Работает на базе другого языка программирования Эрланга. Основное преимущество Эликсира — умение управлять огромным количеством процессов. Эти процессы тоже сделаны особым образом поэтому они занимают существенно меньше памяти и времени процессора, чем обычные процессы компьютера.</p>

        <ul class="links-list">
          <li><a href="https://elixir-lang.org/install.html" class="link">
              Инструкция по установке на elixir-lang.org
            </a></li>

          <li><a href="https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817" class="link">
            Установка при помощи asdf
          </a></li>
        </ul>
      </div>

      <h2>Приложение</h2>
      <div class="content-container">
        <p>Я буду постепенно усложнять приложение. Начну с эхо–бота, бота который в ответ на сообщение присылает его обратно. Дальше добавлю сохранение пользователей в базу данных. А в конце попробую сделать его немного полезным — по запросу от пользователя бот будет отправлять сводную информацию о рынке акций.</p>
      </div>

      <h3>Создание скелета приложения и установка необходимых инструментов</h3>

      <div class="content-container">
        <CodeSinppet :short="true">mix new stocks_bot --sup</CodeSinppet>

        <p>Для начала надо создать новое приложение. Опция <i>--sup</i> добавляет в приложение супервизор и запускает его при старте. После создание структура приложения выглядит примерно так:</p>

        <CodeSinppet>stocks_bot
├── README.md
├── lib
│   ├── stocks_bot
│   │   └── application.ex
│   └── stocks_bot.ex
├── mix.exs
└── test
├── stocks_bot_test.exs
└── test_helper.exs</CodeSinppet>

        <p>Дополнительно надо установить HTTPoison для отпрвки запросов и Jason для работы с джейсонами в ответах от сервера Телеграм.</p>

        <CodeSinppet :file-name="'stocks_bot/mix.exs'">...

defp deps do
  [
    {:httpoison, "~> 1.8"},
    {:jason, "~> 1.2"}
  ]
end</CodeSinppet>
      </div>

      <ul class="links-list">
        <li>
          <a href="https://hex.pm/packages/httpoison" class="link">HTTPoisin</a>
        </li>
        <li>
          <a href="https://hex.pm/packages/jason" class="link">Jason</a>
        </li>
      </ul>

      <h3>Получение сообщение пользователя</h3>

      <div class="content-container">
        <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">defmodule StocksBot do
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
end</CodeSinppet>

      <p>Теперь можно поробовать как это работает. Отправьте своему боту сообщение. Потом откройте консоль и введите эти команды</p>

      <CodeSinppet>iex -S mix
StocksBot.get_updates()</CodeSinppet>

      <p>Консоль напечатает сообщение которые вы отправили боту и потом получили от апи Телеграма. </p>

      <CodeSinppet>[
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
]</CodeSinppet>

    <p>Если снова попробовать получить сообщения, то ответ будет таким же. Это происходит потому, что надо указать телеграму какие сообщения уже получены. Для этого надо взять <i>update_id</i> последнего сообщения, добавить единицу и использовать это как гет–параметр для получения новых сообщений. Да и сейчас скрипт получает одно сообщение и прекращает, а надо чтобы слушал. Сейчас я это исправлю.</p>

<CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">defmodule StocksBot do
  @basic_url "https://api.telegram.org/bot<Токен от Botfather>>/"

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
end</CodeSinppet>
      </div>

      <h3>Ответ пользователю</h3>
      <div class="content-container">
      <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">...
defp parse_messages(messages) do
  Enum.each(messages, fn message ->
    answer_to_message(message)
  end)

  messages
end

defp answer_to_message(message) do
  %{
    "message" => %{
      "chat" => %{"id" => chat_id},
      "text" => original_text
    }
  } = message

  answer = %{
    text: "Hello: #{original_text}",
    chat_id: chat_id
  }

  HTTPoison.post(
    "https://api.telegram.org/bot167028316:AAHC6XHgTAiYqon6GTgPan6jhC_jF3CFIXk/sendMessage",
    Jason.encode!(answer),
    [{"Content-Type", "application/json"}]
  )
end</CodeSinppet>
      </div>

      <h3>Запуск приложения в супервизоре</h3>
      <div class="content-container">
        <p>Первое что надо сделать — преобразовать приложение в Генсервер (Genserver).</p>

        <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">defmodule StocksBot do
  use GenServer
  @basic_url "https://api.telegram.org/bot167028316:AAHC6XHgTAiYqon6GTgPan6jhC_jF3CFIXk/"

  def start_link(args) do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  @impl true
  def init(:ok) do
    get_updates()
    {:ok, %{}}
  end
...</CodeSinppet>

        <p>Потом этот Генсервер добавить в СупервизорТри (Supervisor Tree).</p>

<CodeSinppet :file-name="'stocks_bot/lib/stocks_bot/application.ex '">defmodule StocksBot.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [ StocksBot ]

    opts = [strategy: :one_for_one, name: StocksBot.Supervisor]
    Supervisor.start_link(children, opts)
  end
end</CodeSinppet>
      </div>

      <h2>Демо</h2>
      <div class="content-container">
        <video controls loop class="post__video">
          <source :src='require("/assets/videos/posts/elixir-telegram-bot/demo_of_bot.mp4")' type="video/mp4" />
        </video>

        <p>Да, пока что бот не обладает супер–интеллектом. В следующей части я добавлю хранение пользовательей в базе данных при помощи и научу бота отправлять информацию о курсе акций. </p>
      </div>
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
    background-image: url('~/assets/images/icons/link-2.svg');
    margin-right: 4px;
    margin-top: 2px;
    display: block;
    width: 1em;
    height: 1em;
  }

  .links-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .post__video {
    width: 100%;
  }
</style>
