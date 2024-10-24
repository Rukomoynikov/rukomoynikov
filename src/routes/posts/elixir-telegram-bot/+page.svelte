<script>
  import Title from '$components/Title.svelte';
  import Container from '$components/Container.svelte';
  import TwoColsContainer from '$components/TwoColsContainer.svelte';
  import Paragraph from '$components/Paragraph.svelte';

  import LinksList from '$components/LinksList.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import Video from '$components/Video.svelte';
  import ApiTokenVideo from './assets/api_token.mp4';
  import DemoBotVideo from './assets/demo_of_bot.mp4';
  import CodeBlockInline from '$components/CodeBlockInline.svelte';
</script>

<Container>
  <Title level="1">Introduction to Telegram Bots API</Title>

  <Title level="2">Exchanging messages with Telegram</Title>

  <TwoColsContainer>
    <Paragraph>
      Telegram supports two types of integration: webhooks and polling. Webhooks it's a type when
      Telegram sends request to your server whenever bot recevied a message from the user. There
      pros and cons of that type of integration. Webhooks are more sustainable in general. For
      webhooks it's necessary to have web-server with external IP adress. This server will receive
      new messages through get requests from Telegram. During development you can use ngrock.
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      Polling is a constant polling of the Telegram server for new messages. For polling, you do not
      need a server and an external address. Simple application that sends requests to the Telegram
      server without stopping is enough.
    </Paragraph>

    <div slot="aside">
      <LinksList
        links={[
					[
						'Documentation about Telegram bots',
						'https://core.telegram.org/bots/api#getting-updates'
					]
				]}
      />
    </div>
  </TwoColsContainer>

  <Title level="2">Obtaining a token from Telegram</Title>

  <TwoColsContainer>
    <Paragraph>The token for Telegram requests must be obtained from the BotFather bot.</Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <Video src={ApiTokenVideo} />

    <div slot="aside">
      <LinksList links={[['BotFather', 'https://t.me/botfather']]} />
    </div>
  </TwoColsContainer>

  <Title level="2">Elixir</Title>

  <TwoColsContainer>
    <Paragraph>
      Elixir is a functional programming language. Based on the another programming language Erlang.
      The main advantage of Elixir is the ability to manage a huge number of processes. These
      processes are also made in a special way, so they take up significantly less memory and
      processor time than normal computer processes.
    </Paragraph>

    <div slot="aside">
      <LinksList
        links={[
					['How to install Elixir one elixir-lang.org', 'https://elixir-lang.org/install.html'],
					[
						'Installing with asdf package manager',
						'https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817'
					]
				]}
      />
    </div>
  </TwoColsContainer>

  <Title level="2">The application</Title>

  <TwoColsContainer>
    <Paragraph>
      I will gradually complicate the application. I'll start with a echo bot that sends a message
      back in response to a message. Next, I will add saving users to the database. And in the end,
      I'll try to make it a little useful - upon request from the user, the bot will send summary
      information about the stock market.
    </Paragraph>
  </TwoColsContainer>

  <Title level="3"
  >Creation of the skeleton of the application and installation of the necessary tools</Title
  >

  <TwoColsContainer>
    <CodeBlock snippet="posts/elixir-telegran-bot/new_elixir_app.sh" />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      First you need to create a new application. The <CodeBlockInline>--sup</CodeBlockInline> option
      adds a supervisor to the application and starts it at startup. After creation, the structure of
      the application should look like this:
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock snippet="posts/elixir-telegran-bot/structure.sh" />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      Additionally, you need to install HTTPoison to send requests and Jason to work with JSON in
      responses from the Telegram server.
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock snippet="posts/elixir-telegran-bot/deps.elixir" fileName="stocks_bot/mix.exs" />
  </TwoColsContainer>

  <Title level="2">Receiving user message</Title>

  <TwoColsContainer>
    <CodeBlock
      snippet="posts/elixir-telegran-bot/stocks_bot_initial.elixir"
      fileName="stocks_bot/lib/stocks_bot.ex"
    />
    <div slot="aside">
      <LinksList
        links={[
					[
						'Documentation about Telegram bots',
						'https://core.telegram.org/bots/api#getting-updates'
					]
				]}
      />
    </div>
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      Now you can try how it works. Send your bot a message. Then open your terminal and enter these
      commands.
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock snippet="posts/elixir-telegran-bot/test_bot.sh" />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>In the terminal you will see incoming message:</Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock snippet="posts/elixir-telegran-bot/messages_log.elixir" />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      If you try to receive messages again, the answer will be the same. This happens because it is
      necessary to indicate to the telegram which messages have already been received. To do this,
      take the <CodeBlockInline>update_id</CodeBlockInline> of the last message, increase it to one and
      use it as a get parameter to receive new messages.
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph
    >So far, the script receives one message and stops working, but it needs to continue listening
      to new messages. I'll fix it now.
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock
      snippet="posts/elixir-telegran-bot/stocks_bot_3.elixir"
      fileName="stocks_bot/lib/stocks_bot.ex"
    />
  </TwoColsContainer>

  <Title level="3">Polite answer</Title>

  <TwoColsContainer>
    <CodeBlock
      snippet="posts/elixir-telegran-bot/stocks_bot_2.elixir"
      fileName="stocks_bot/lib/stocks_bot.ex"
    />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph
    >The <CodeBlockInline>answer_to_message</CodeBlockInline> function uses pattern matching to pick
      up the sender's name and the text of the incoming message to send it back to the user as a post-request.
    </Paragraph>
  </TwoColsContainer>

  <Title level="3">Using supervisor for the application</Title>

  <TwoColsContainer>
    <Paragraph>First step is converting app to a Genserver.</Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock
      snippet="posts/elixir-telegran-bot/stocks_bot.elixir"
      fileName="stocks_bot/lib/stocks_bot.ex"
    />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>Then this Genserver need to be added to Supervisor Tree.</Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <CodeBlock
      snippet="posts/elixir-telegran-bot/application.elixir"
      fileName="stocks_bot/lib/stocks_bot/application.ex"
    />
    <div slot="aside">
      <LinksList
        links={[
					[
						'Article from AppSignal with good examples',
						'https://blog.appsignal.com/2021/08/23/using-supervisors-to-organize-your-elixir-application.html'
					]
				]}
      />
    </div>
  </TwoColsContainer>

  <Title level="2">Demo time</Title>

  <TwoColsContainer>
    <Video src={DemoBotVideo} />

    <div slot="aside">
      <LinksList
        links={[
					[
						'Github repository with bot source code',
						'https://github.com/Rukomoynikov/telegram-bot-article'
					]
				]}
      />
    </div>
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      Yes, the bot does not yet have superintelligence. In the next part, I will add user storage in
      the database and teach the bot to send stock price information.
    </Paragraph>
  </TwoColsContainer>
</Container>
