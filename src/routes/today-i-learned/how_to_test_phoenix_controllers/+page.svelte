<script lang="ts">
	import Title from '$components/Title.svelte';
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import LinksList from '$components/LinksList.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<Container>
	<Title level="1">Trigger Phoenix controllers from mix tasks</Title>

	<TwoColsContainer>
		<Paragraph>
			On of my projects needs to receive files from outside, like for example being uploaded from
			Github CI and I'd like to simulate this behaviour on my local machine. So, I needed a mix task
			which I will trigger and it would upload a file to the application.
		</Paragraph>

		<Paragraph>
			Easiest way would be to start the application in one terminal tab and trigger this mix task in
			another.But Phoenix has all needed to make these both tasks simultanesly. In other words mix
			tasks can start up your application and shut it down when it's finished.
		</Paragraph>

		<div slot="aside">
			<LinksList
				links={[['CodeMetrics - home for your development metrics', 'https://codemetrics.dev']]}
			/>
		</div>
	</TwoColsContainer>

	<Title level="2">Application part</Title>

	<TwoColsContainer>
		<CodeBlock snippet="today-i-learned/how_to_test_phoenix_controllers/simple_action.elixir" />
	</TwoColsContainer>

	<TwoColsContainer>
		<Paragraph>
			Just for the sake of explanation I will keep it simple. Just a controller action that accepts
			get request with one query parameter.
		</Paragraph>
	</TwoColsContainer>

	<Title level="2">Mix task</Title>

	<TwoColsContainer>
		<CodeBlock snippet="today-i-learned/how_to_test_phoenix_controllers/mix_task.elixir" />
	</TwoColsContainer>

	<TwoColsContainer>
		<Paragraph>
			The mix task itself is relatively simple as well. I just check if TCP server is running. If
			not it starts the application. Main part is taken from the Phoenix github repo.
		</Paragraph>

		<div slot="aside">
			<LinksList
				links={[
					[
						'Elixir github repo',
						'https://github.com/phoenixframework/phoenix/blob/3b64d58322ab2cb4bdaf6cb9662b84170b9bafeb/lib/mix/tasks/phx.server.ex#L31'
					]
				]}
			/>
		</div>
	</TwoColsContainer>
</Container>
