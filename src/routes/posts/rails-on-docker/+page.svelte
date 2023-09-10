<script>
  import HeroTitleSmall from "$components/HeroTitleSmall.svelte";
  import Title from "$components/Title.svelte";
  import Container from "$components/Container.svelte";
  import TwoColsContainer from "$components/TwoColsContainer.svelte";
  import Paragraph from "$components/Paragraph.svelte";
  import Code from "$components/Code.svelte";
  import Image from './rails-basic-app@2x.webp'
  import srcsetAvif from './rails-basic-app@2x.webp?w=500;700;900;1200&as=source&format=avif'
  import srcsetWebp from './rails-basic-app@2x.webp?w=500;700;900;1200&as=source&format=webp'
  import fallback from './rails-basic-app@2x.webp?w=700'

  console.log(srcsetAvif)
</script>

<HeroTitleSmall title="Hello World" tags={['1','2']} subTitle="111"/>

<Container>
  <Title level="2" style={"light"}>Hello title</Title>

  <TwoColsContainer>
    <Paragraph>
      It has always been easier to supply the necessary tools locally. If you need to have multiple versions, then rvm or nvm solve the problem. Then came Docker. Until this year, I had successfully managed to avoid it. On projects where the guys worked with Docker, I instead installed everything locally. But, I thought that enough fighting and it's time to try to live with the idea of "docker for everything". It's simply time to admit either i work using Docker or i don't work at all.
    </Paragraph>
  </TwoColsContainer>

  <picture>
    <source srcset="{srcsetAvif.map(({src, w}) => `${src} ${w}w`).join(',')}" type="image/avif" />
    <source srcset="{srcsetWebp.map(({src, w}) => `${src} ${w}w`).join(',')}" type="image/webp" />
  </picture>

  <Code/>
</Container>


<!--https://github.com/JonasKruckenberg/imagetools/blob/4227bd1fac13b7c5ac3c34c90d5c7ac5a005e45b/docs/directives.md?plain=1#L455-->
<!--https://github.com/JonasKruckenberg/imagetools/blob/4227bd1fac13b7c5ac3c34c90d5c7ac5a005e45b/examples/vite-simple/README.md?plain=1#L11-->