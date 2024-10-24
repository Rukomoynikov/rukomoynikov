<script>
	import Title from '$components/Title.svelte';
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import Paragraph from '$components/Paragraph.svelte';

	import LinksList from '$components/LinksList.svelte';
	import RailDefaultImage from './assets/rails-basic-app@2x.webp?enhanced';
	import CodeBlock from '$components/CodeBlock.svelte';
	import Image from '$components/Image.svelte';
</script>

<Container>
	<Title level="1">Rails on Docker</Title>

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
		<Paragraph>
			Well I don't have ruby installed locally. And I need to generate a new Rails application or
			experiment in IRB.
		</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<Paragraph>
			The first thing I did was look at the official Rails image. It turned out to be deprecated,
			and the authors suggested Ruby as a replacement.Using Ruby image, I was unable to generate a
			Rails application, so Imade my own Docker image.
		</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/rails-on-docker/example.dockerfile" />

		<div slot="aside">
			<LinksList
				links={[
					[
						'Image on Docker Hub',
						'https://hub.docker.com/repository/docker/rukomoynikov/rails/general'
					]
				]}
			/>
		</div>
	</TwoColsContainer>

	<Title level="2">Using the image</Title>

	<TwoColsContainer>
		<Paragraph>
			The following command will generate a new Rails application in the current folder and install
			required gems in the gems folder. As you know, a container cannot change its content after it
			has been built.Therefore, all application files and gems will be stored on the host machine.
		</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/rails-on-docker/rails_new.sh" />
	</TwoColsContainer>

	<TwoColsContainer>
		<Paragraph>
			Launching the application is not much more difficult. But, in a simple form, it will only work
			if you use the sqlite database.
		</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/rails-on-docker/start_rails.sh" />
	</TwoColsContainer>

	<TwoColsContainer>
		<Paragraph>
			Running IRB. Or you can enter console and run ruby files from local machine.
		</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/rails-on-docker/rails_bash.sh" />
	</TwoColsContainer>

	<TwoColsContainer>
		<Image src={RailDefaultImage} alt="Rails default page" />
	</TwoColsContainer>

	<Title level="2">What's next?</Title>

	<TwoColsContainer>
		<Paragraph>
			Above you saw an example of basic Rails application used SQLite. In order to use Postgresql
			and Webpacker you need something more complicated than simple Dockerfile. You need
			docker-compose. There you will be able to separate application into a ruby service, and the
			client service.
		</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<Paragraph>Here is example of docker-compose.yml</Paragraph>
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/rails-on-docker/docker-compose.yml" />

		<div slot="aside">
			<LinksList
				links={[
					[
						'Heavily inspired by Evil Martians article',
						'https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development'
					]
				]}
			/>
		</div>
	</TwoColsContainer>
</Container>
