<script>
	import HeroTitleSmall from '$components/HeroTitleSmall.svelte';
	import Title from '$components/Title.svelte';
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import RailsBasicAppImage from './rails-basic-app@2x.webp?w=400;800;1600&format=avif;webp;jpg&as=picture';

	import Picture from '$components/Picture/Picture.svelte';
	import LinksList from '$components/LinksList.svelte';
  import CodeBlock from "$components/CodeBlock.svelte";
  import SEO from "$components/SEO.svelte";
</script>

<SEO title="Rails on Docker" />

<title>11</title>

<HeroTitleSmall
	title="How to generate Rails app and run it without installing ruby locally"
	tags={['Ruby', 'Docker']}
	subTitle="In internet plenty of articles about Dockerizing existing application. But, what if you don't have installed ruby locally and need to generate new app."
/>

<Container>

	<Title level="2">Why Docker?</Title>

	<TwoColsContainer>
		<Paragraph>
			It has always been easier to supply the necessary tools locally. If you need to have multiple
			versions, then rvm or nvm solve the problem. Then came Docker. Until this year, I had
			successfully managed to avoid it. On projects where the guys worked with Docker, I instead
			installed everything locally. But, I thought that enough fighting and it's time to try to live
			with the idea of "docker for everything". It's simply time to admit either i work using Docker
			or i don't work at all.
		</Paragraph>
	</TwoColsContainer>

	<Title level="2">Generating Ruby on Rails application</Title>

	<TwoColsContainer>
		<Paragraph
			>Well I don't have ruby installed locally. And I need to generate a new Rails application or
			experiment in IRB.</Paragraph
		>

		<Paragraph
			>The first thing I did was look at the official Rails image. It turned out to be deprecated,
			and the authors suggested Ruby as a replacement.Using Ruby image, I was unable to generate a
			Rails application, so Imade my own Docker image.</Paragraph
		>
	</TwoColsContainer>

	<TwoColsContainer>


		<CodeBlock snippet="posts/rails-on-docker/docker" />
	</TwoColsContainer>

	<TwoColsContainer>
		<Picture meta={RailsBasicAppImage} />
	</TwoColsContainer>

  <Title level="2">What's next?</Title>

  <TwoColsContainer>
    <Paragraph>Above you saw an example of basic Rails application used SQLite. In order to use Postgresql and Webpacker you need something more complicated than simple Dockerfile. You need docker-compose. There you will be able to separate application into a ruby service, and the client service.</Paragraph>

    <Paragraph>Here is example of docker-compose.yml</Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <div slot="aside">
      <LinksList
        links={[
					['Amazon Lightsail', 'https://lightsail.aws.amazon.com'],
					[
						'Deploy your first containerized application (Youtube)',
						'https://www.youtube.com/watch?v=RhcR5LaRXIQ'
					]
				]}
      />
    </div>

    <CodeBlock snippet="posts/rails-on-docker/docker-compose.yml" />
  </TwoColsContainer>
</Container>
