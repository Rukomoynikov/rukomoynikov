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

      <pre>
defmodule TelegramBotElixir.Worker do
  use GenServer

  def start_link(args) do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  @impl true
  def init(:ok) do
    get_updates()
    {:ok, %{}}
  end

  def get_updates(offset \\ nil) do
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =
           TelegramBotElixir.Endpoints.updates_url(offset) |> HTTPoison.get(),
         {:ok, data} = Jason.decode(body) do
      parse_messages(data["result"], offset)
    end
  end

  defp parse_messages(_messages = [], offset) do
    get_updates(offset)
  end

  defp parse_messages(messages, _offset) do
    Enum.each(messages, fn message ->
      TelegramBotElixir.Database.save_user(message)
      |> TelegramBotElixir.MessagesRouter.answer_to_message()
    end)

    List.last(messages)
    |> Map.fetch!("update_id")
    |> get_updates()
  end
end
      </pre>

      <h3>Создание скелета приложения и установка необходимых инструментов</h3>
      <h3>Получение сообщений и ответ пользователю</h3>
      <h3>Сохранение пользователей в базу данных</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'

export default Vue.extend({
  components: { HeroTitle }
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
</style>
