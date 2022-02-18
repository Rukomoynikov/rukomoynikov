export default {
  title: 'Posts/Case Description',
}

export const CaseDescription = () => `
  <div>
    <p>This component is used to provide case or post header and content</p>

    <CaseDescription>
      <template #header>
        <HeroTitle
          :title="'Digital discounts on «Black Friday»'"
          :subtitle="'Black Friday in most cases is a cheating. Prices go up. But, when we talk about digital discounts it works fine. Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site.'"
          :tags="['design', 'making site']"
          :image="'cases/digitaldeals/detailed-page/cover'"
        />
      </template>

      <Container :type="'common'">
        <section>
          <Title :level="2">
            Task
          </Title>

          <Container :type="'content'">
            <Paragraph>I wanted to make something simple. On the Producthunt you will plenty of simple projects, but they are profitable and popular.</Paragraph>
          </Container>
        </section>
      </Container>
    </CaseDescription>
  </div>
`
