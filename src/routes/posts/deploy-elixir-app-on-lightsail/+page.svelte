<!--https://raw.githubusercontent.com/Rukomoynikov/rukomoynikov/e295a70d5d01cbc532e7c11078b90051f3b3e483/src/pages/posts/deploy-rails-on-amazon-lightsail.astro-->
<script lang="ts">
	import Title from '$components/Title.svelte';
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import Paragraph from '$components/Paragraph.svelte';

	import LinksList from '$components/LinksList.svelte';
	import CodeBlockInline from '$components/CodeBlockInline.svelte';
	import Image from '$components/Image.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';

	import { page } from '$app/stores';
</script>

<Container>
	<TwoColsContainer>
		<Paragraph>
			During this article i will lead you from basics of Lightsail to fully a furnished automatic
			CI\CD to Lightsail.
		</Paragraph>
	</TwoColsContainer>

	<Title level="2">What is Lightail in general?</Title>

	<TwoColsContainer>
		<Paragraph>
			Lightsail - new service from Amazon Cloud. Treat it like an younger brother of Amazon EC2.
			Though being a lighten version of EC2 it supports all essential tools. At the moment you can
			use: VPS, container services, hosted databases, load balancers and permanent storage and
			backups. Not bad, hah?
		</Paragraph>

		<Paragraph>
			In this tutorial i will use <CodeBlockInline>container service</CodeBlockInline> what is someting
			similiar to Amazon Fargate + EC2. Container service allows to run Docker images.
		</Paragraph>

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

		<!-- <Paragraph>
      One container service fits five docker containers
    </Paragraph> -->
	</TwoColsContainer>

	<Title level="2">Phoenix LiveView application</Title>

	<TwoColsContainer>
		<Image src={$page.data.pictures['./assets/example_app.png']} alt="Phoenix default page" />

		<Paragraph>
			To make this tale a bit simple i will not dive into creating something meaningfull. Rather we
			will create a basic boilerplate without Ecto. If in the future you will decide to add database
			this should not be a problem as LightSail supports managed databases as well.
		</Paragraph>

		<CodeBlock snippet="/posts/deploy-elixir-app-on-lightsail/create_new_app.sh" />

		<Paragraph>
			Well done! Now it's time to make a commit and if you want to look at your new shiny project
			run local server <CodeBlockInline>mix phx.server</CodeBlockInline>.
		</Paragraph>

		<div slot="aside">
			<LinksList links={[['Example application on Github', 'https://lightsail.aws.amazon.com']]} />
		</div>
	</TwoColsContainer>

	<Title level="2">Lightsail required setup</Title>

	<TwoColsContainer>
		<Image
			src={$page.data.pictures['./assets/light-sail-empty-container-service.png']}
			alt="Amazon LightSail welcome page"
		/>

		<Paragraph>
			We are one step closer to the deployed application. Deployed on Lightsail. To make it possible
			first we need to create a container service and IAM settings.
		</Paragraph>

		<Paragraph>
			Let's begin from container service. First sign in to AWS console and open Lightsail section.
			At the moment Amazon offers $10 "machine" to 3 months for free. Cheapest ($15) plan for
			managed database also is free for first 3 months. Why not to give it a try? Please create a
			container service.
		</Paragraph>

		<Image src={$page.data.pictures['./assets/pricing.png']} alt="Amazon LightSail pricing" />

		<Paragraph>
			On the creation screen: change region if needed, leave "Set up your first deployment" as is.
			In the field "Identify your service" enter desired name and save it somewhere. "Container
			service name" will be used later in CI settings.
		</Paragraph>
	</TwoColsContainer>

	<Title level="3">IAM roles</Title>

	<TwoColsContainer>
		<Paragraph>
			To be able interact with AWS API we need to create these two entities: policy, user. By
			default Amazon doesn't offer a policy to control Lightsail, but we are free to create it on
			our own.
		</Paragraph>

		<CodeBlock snippet="posts/deploy-elixir-app-on-lightsail/iam.json" />
	</TwoColsContainer>

	<Title level="2">Docker setup</Title>

	<TwoColsContainer>
		<Paragraph>
			Lightsail will run container we point to. So, in order to create docker container first
			Dockerfile is required. Using this file Github CI will build image and push the image to
			Lightsail image's container.
		</Paragraph>

		<CodeBlock snippet="posts/deploy-elixir-app-on-lightsail/Dockerfile.dockerfile" />
	</TwoColsContainer>

	<Title level="2">Github Actions to test and deploy</Title>

	<TwoColsContainer>
		<Paragraph>
			Heya! We are almost there. Let's setup CI pipeline to test our super-duper app.
		</Paragraph>

		<CodeBlock snippet="posts/deploy-elixir-app-on-lightsail/github-ci.yml" />
	</TwoColsContainer>
</Container>
