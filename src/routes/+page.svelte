<script>
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import LinksList from '$components/LinksList.svelte';
	import Container from '$components/Container.svelte';
	import Title from '$components/Title.svelte';
</script>

<Container>
  <Title level="2">Posts</Title>

	<TwoColsContainer>
		<LinksList
			links={[
				['Rails on Docker', '/posts/rails-on-docker/'],
				['How to make a Telegram bot in Elixir', '/posts/elixir-telegram-bot/']
			]}
		/>
	</TwoColsContainer>

  <Title level="2">Today I learned</Title>

  <TwoColsContainer>
    <LinksList
      links={[
				['Setup Traefik endpoints', '/today-i-learned/traefik-label-for-router'],
			]}
    />
  </TwoColsContainer>

  <Title level="2">Open source contributions</Title>

	<TwoColsContainer>
		<LinksList
			links={[
				['Tabled (Ruby gem for printing tables in terminal)', 'https://rubygems.org/gems/tabled'],
				['Processable (Ruby gem to build processes)', 'https://rubygems.org/gems/processable'],
				[
					'Forecaster (Get a weather forecast in terminal. Written on Rust.)',
					'https://crates.io/crates/forecaster'
				]
			]}
		/>
	</TwoColsContainer>
</Container>
