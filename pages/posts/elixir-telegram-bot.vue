<template>
  <div>
    <SocialHead
      :title="'How to make a Telegram bot in Elixir'"
      :description="'This is the first part of three in the series. There you will find creating foundation and answering to users.'"
      :image="require('/assets/images/posts/elixir-telegram-bot/facebook-share.jpg')"
    />

    <HeroTitle
      :tags="['Telegram', 'Elixir']"
      :title="'How to make a Telegram bot in Elixir'"
    />

    <Container :type="'common'">
      <section>
        <Title level="2">
          Introduction to Telegram Bots API
        </Title>

        <section>
          <Title level="3">
            Exchanging messages with Telegram
          </Title>

          <Container :type="'content'">
            <Paragraph>
              Telegram supports two types of integration: webhooks and polling. Webhooks it's a type when Telegram sends request to your server whenever bot recevied a message from the user. There pros and cons of that type of integration. Webhooks are more sustainable in general. For webhooks it's necessary to have web-server with external IP adress. This server will receive new messages through get requests from Telegram. During development you can use ngrock.
            </Paragraph>

            <Paragraph>
              Polling is a constant polling of the Telegram server for new messages. For polling, you do not need a server and an external address. Simple application that sends requests to the Telegram server without stopping is enough.
            </Paragraph>

            <LinksList
              :links="[
                ['Documentation about Telegram bots', 'https://core.telegram.org/bots/api#getting-updates'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Obtaining a token from Telegram
          </Title>

          <Container :type="'content'">
            <Paragraph>
              The token for Telegram requests must be obtained from the BotFather bot.
            </Paragraph>

            <video controls loop class="post__video">
              <source :src="require('/assets/videos/posts/elixir-telegram-bot/api_token.mp4')" type="video/mp4">
            </video>

            <LinksList
              :links="[
                ['Botfather', 'https://t.me/botfather'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />
      </section>
      <Spacing :type="'vertical-section'" />
      <section>
        <Title level="2">
          Elixir
        </Title>

        <section>
          <Container :type="'content'">
            <Paragraph>
              Elixir is a functional programming language. Based on the another programming language Erlang. The main advantage of Elixir is the ability to manage a huge number of processes. These processes are also made in a special way, so they take up significantly less memory and processor time than normal computer processes.
            </Paragraph>

            <LinksList
              :links="[
                ['How to install Elixir one elixir-lang.org', 'https://elixir-lang.org/install.html'],
                ['Installing with asdf package manager', 'https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />
      </section>
      <Spacing :type="'vertical-section'" />
      <section>
        <Title level="2">
          The application
        </Title>
        <Container :type="'content'">
          <Paragraph>
            I will gradually complicate the application. I'll start with a echo bot that sends a message back in response to a message. Next, I will add saving users to the database. And in the end, I'll try to make it a little useful - upon request from the user, the bot will send summary information about the stock market.
          </Paragraph>

          <section>
            <Title level="3">
              Creation of the skeleton of the application and installation of the necessary tools
            </Title>

            <div class="content-container">
              <CodeSinppet :short="true">
                <CSCreatingNewApp />
              </CodeSinppet>

              <Paragraph>
                First you need to create a new application. The <LikeItalic>--sup</LikeItalic> option adds a supervisor to the application and starts it at startup. After creation, the structure of the application should look like this:
              </Paragraph>

              <CodeSinppet><CSFileTree /></CodeSinppet>

              <Paragraph>
                Additionally, you need to install HTTPoison to send requests and Jason to work with Jason in responses from the Telegram server.
              </Paragraph>

              <CodeSinppet :file-name="'stocks_bot/mix.exs'">
                <CSDeps />
              </CodeSinppet>
            </div>

            <LinksList
              :links="[
                ['HTTPoisin — http-client for Elixir', 'https://hex.pm/packages/httpoison'],
                ['Jason — library for working with JSON', 'https://hex.pm/packages/jason'],
              ]"
            />
          </section>
        </Container>

        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Receiving user message
          </Title>

          <Container :type="'content'">
            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSReceivingMessages />
            </CodeSinppet>

            <Paragraph>
              Now you can try how it works. Send your bot a message. Then open your terminal and enter these commands.
            </Paragraph>

            <CodeSinppet :file-name="'Termial'" :icon="'console'">
              <CSConsole />
            </CodeSinppet>

            <Paragraph>
              In the terminal you will see incoming message.
            </Paragraph>

            <CodeSinppet><CSMEssageJson /></CodeSinppet>

            <Paragraph>
              If you try to receive messages again, the answer will be the same. This happens because it is necessary to indicate to the telegram which messages have already been received. To do this, take the <LikeItalic>update_id</LikeItalic> of the last message, increase it to one and use it as a get parameter to receive new messages.
            </Paragraph>

            <Paragraph>So far, the script receives one message and stops working, but it needs to continue listening to new messages. I'll fix it now.</Paragraph>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSRecursiveGetUpdates />
            </CodeSinppet>
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Polite answer
          </Title>

          <Container :type="'content'">
            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSAnswerToAUser />
            </CodeSinppet>

            <Paragraph>
              The <LikeItalic>answer_to_message</LikeItalic> function uses pattern matching to pick up the sender's name and the text of the incoming message to send it back to the user as a post-request.
            </Paragraph>
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />

        <section>
          <Title level="3">
            Using supervisor for the application
          </Title>

          <Container :type="'content'">
            <Paragraph>
              First step is converting app to a Genserver.
            </Paragraph>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot.ex'">
              <CSGenserver />
            </CodeSinppet>

            <Paragraph>
              Then this Genserver need to be added to Supervisor Tree.
            </Paragraph>

            <CodeSinppet :file-name="'stocks_bot/lib/stocks_bot/application.ex '">
              <CSSupervisor />
            </CodeSinppet>

            <LinksList
              :links="[
                ['Article from AppSignal with good examples', 'https://blog.appsignal.com/2021/08/23/using-supervisors-to-organize-your-elixir-application.html'],
              ]"
            />
          </Container>
        </section>
        <Spacing :type="'vertical-section_sub'" />
      </section>
      <Spacing :type="'vertical-section'" />
      <section>
        <Title level="2">
          Demo time
        </Title>

        <Container :type="'content'">
          <video controls loop class="post__video">
            <source :src="require('/assets/videos/posts/elixir-telegram-bot/demo_of_bot.mp4')" type="video/mp4">
          </video>

          <Paragraph>
            Yes, the bot does not yet have superintelligence. In the next part, I will add user storage in the database and teach the bot to send stock price information.
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
import LikeItalic from '~/components/blocks/LikeItalic.vue'

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
    Spacing,
    LikeItalic
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

  .i-span {
    padding: 1px 4px;
    border-radius: 20px;
    background: rgba(69, 156, 193, 0.24);
    color: white;
  }
</style>
