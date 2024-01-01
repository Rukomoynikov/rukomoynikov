<script>
	import SEO from '$components/SEO.svelte';
	import Title from '$components/Title.svelte';
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import LinksList from '$components/LinksList.svelte';
</script>

<SEO title="I bought Genki ShadowCast 2 Pro" />

<Container>
	<Title level="1">I bought Genki ShadowCast 2 Pro</Title>

	<TwoColsContainer>
		<Paragraph>
			I like to play video games once in a while. Being a kid I spent probably years in total
			playing on different consoles. I remember playing on ZX Spectrum, NES, Sega, PlayStation and
			probably some more. I don't have the favourite but Grandia II is always in my heart.
		</Paragraph>

		<TwoColsContainer>
			<Paragraph>
				So, games, I love them. And I always wanted to stream it online. Honestly I'm not sure why.
				Maybe partly as I heard it may bring you and additional source of income. But it's not a
				main reason for me. I just think it's nice to have someone around when you play. And it's
				nice to have a chat with someone while you play.
			</Paragraph>

			<Paragraph>But how to stream What I need to buy to be able?</Paragraph>
		</TwoColsContainer>

		<div slot="aside">
			<LinksList
				links={[['Grandia II (Youtube)', 'https://www.youtube.com/watch?v=eo7lyF2vfQU']]}
			/>
		</div>
	</TwoColsContainer>

	<Title level="2">Genki ShadowCast 2 Pro</Title>

	<TwoColsContainer>
		<Paragraph
			>Somehow I came across a link to Kickstarter campaign of Genki ShadowCast 2 Pro. It's a device
			that allows you to stream your gameplay from <strong>Nintendo Switch (my option)</strong>,
			PlayStation 4, Xbox One, and other consoles to your computer or whatever has an HDMI output.</Paragraph
		>

		<Paragraph>
			I bought a kit with Shadow Cast 2 Pro, Shadow Cast 2, Covert Dock 2. I think for my needs
			simple Shadow Cast 2 Pro would be more than enough.
		</Paragraph>

		<div slot="aside">
			<LinksList
				links={[
					[
						'Genki ShadowCast 2 Pro (Kickstarter)',
						'https://www.kickstarter.com/projects/humanthings/genki-alpine'
					],
					["Genki's Official website", 'https://www.genkithings.com']
				]}
			/>
		</div>
	</TwoColsContainer>
</Container>
