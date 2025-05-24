<script lang="ts">
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import LinksList from '$components/LinksList.svelte';
	import Container from '$components/Container.svelte';
	import Title from '$components/Title.svelte';
	import Header from '$components/Header.svelte';
</script>

<Container>
	<Header name="Max Rukomoynikov" tagline="Software Engineer. Ruby, Rails, Typescript, React, Elixir, Rust" />

	<Title level="2" styles={['list_header']}>Posts</Title>

	<TwoColsContainer>
		<LinksList
			links={[
				['Rails on Docker', '/posts/rails-on-docker/'],
				['How to make a Telegram bot in Elixir', '/posts/elixir-telegram-bot/'],
				[
					'Three versions of leetcode "Same tree challenge"',
					'/posts/three-versions-of-leetcode-same-tree/'
				],
				['Implement Max and Min heaps in Typescript', '/posts/heap-it/']
			]}
		/>
	</TwoColsContainer>

	<Title level="2" styles={['list_header']}>Today I learned</Title>

	<TwoColsContainer>
		<LinksList
			links={[
				['Setup Traefik endpoints', '/today-i-learned/traefik-label-for-router'],
				[
					'Trigger Phoenix controllers from mix tasks',
					'/today-i-learned/how_to_test_phoenix_controllers'
				]
			]}
		/>
	</TwoColsContainer>

	<Title level="2" styles={['list_header']}>Open source contributions</Title>

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
