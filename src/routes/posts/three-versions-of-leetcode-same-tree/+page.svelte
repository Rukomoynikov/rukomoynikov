<script>
  import Container from '$components/Container.svelte';
  import TwoColsContainer from '$components/TwoColsContainer.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import Title from '$components/Title.svelte';
  import Paragraph from '$components/Paragraph.svelte';
  import LinksList from '$components/LinksList.svelte';

  import TreeImg from './assets/tree.svg'
</script>

<Container>
  <Title level="1">Three versions of Leetcode "Same tree"</Title>

  <TwoColsContainer>
    <Paragraph>Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</Paragraph>

    <img src={TreeImg} width="100%"/>

    <div slot="aside">
      <LinksList
        links={[
					[
						'LeetCode',
						'https://leetcode.com/problems/same-tree/'
					]
				]}
      />
    </div>
  </TwoColsContainer>

  <Title level="2">BFS</Title>
  <TwoColsContainer>
    <CodeBlock snippet="posts/three-versions-of-leetcode-same-tree/bfs.ts" />

    <Paragraph>BFS aka Breadth First Search or traversing trees level by level. It </Paragraph>
  </TwoColsContainer>

  <Title level="2">DFS Iterative</Title>
  <TwoColsContainer>
    <CodeBlock snippet="posts/three-versions-of-leetcode-same-tree/dfs_iterative.ts" />
  </TwoColsContainer>

  <Title level="2">DFS Recursive</Title>
  <TwoColsContainer>
    <CodeBlock snippet="posts/three-versions-of-leetcode-same-tree/dfs_recursive.ts" />
  </TwoColsContainer>
</Container>
