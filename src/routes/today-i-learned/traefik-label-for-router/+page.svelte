<script lang="ts">
  import Title from '$components/Title.svelte';
  import Container from '$components/Container.svelte';
  import TwoColsContainer from '$components/TwoColsContainer.svelte';
  import Paragraph from '$components/Paragraph.svelte';

  import Image from '$components/Image.svelte';
  import TraefikLabels from './assets/traefik_labels.png?enhanced'
  import CodeBlock from '$components/CodeBlock.svelte';
</script>

<Container>
  <Title level="1">Setup Traefik endpoints</Title>

  <TwoColsContainer>
    <Paragraph>
      I run few services on my server and I want to access them via subdomains. I use Portainer and Docker Swarm to manage containers.
    </Paragraph>

    <Paragraph>
      Here is the configuration of one of my services with exposed port 80 and domain name:
    </Paragraph>
  </TwoColsContainer>

  <TwoColsContainer>
    <Image src={TraefikLabels} alt="Traefik endpoints" />
  </TwoColsContainer>

  <TwoColsContainer>
    <Paragraph>
      And then I needed to add another service and so I decided to reuse configuration above but only change domain name.
    </Paragraph>

    <Paragraph>
      It ended up both services being not accessible. I was getting 404 error.
    </Paragraph>
  </TwoColsContainer>

  <Title level="2">My mistake</Title>

  <TwoColsContainer>
    <CodeBlock snippet="today-i-learned/traefik-label-for-router/traefik_conf.yml" />
  </TwoColsContainer>
</Container>
