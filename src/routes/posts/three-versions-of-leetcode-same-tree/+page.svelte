<script>
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
	import Title from '$components/Title.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import LinksList from '$components/LinksList.svelte';

	import TreeImg from './assets/tree.svg';
</script>

<Container>
	<Title level="1">Three versions of Leetcode "Same tree"</Title>

	<TwoColsContainer>
		<Paragraph
			>Given the roots of two binary trees p and q, write a function to check if they are the same
			or not. Two binary trees are considered the same if they are structurally identical, and the
			nodes have the same value.</Paragraph
		>

		<img src={TreeImg} width="100%" alt="Tree graph" />

		<div slot="aside">
			<LinksList links={[['LeetCode', 'https://leetcode.com/problems/same-tree/']]} />
		</div>
	</TwoColsContainer>

	<Title level="2">BFS</Title>
	<TwoColsContainer>
		<Paragraph
			>This implementation of isSameTree takes a level-order (breadth-first) approach using two
			queues to compare the trees level by level. Each queue maintains the nodes for one tree, and
			the algorithm processes nodes in parallel from both trees. The outer while loop continues as
			long as both queues have nodes to process, while the inner for loop handles each level of the
			trees by processing the current level's worth of nodes (tracked by node1LevelLength). For each
			pair of nodes dequeued, it performs the familiar three-way comparison: both null nodes are
			skipped, mismatched null states indicate different structures, and different values indicate
			non-identical trees. After each successful node comparison, the left and right children of
			both nodes are enqueued for later processing. This level-by-level traversal ensures that nodes
			at the same positions in both trees are compared in a predictable order, moving from top to
			bottom and left to right. The approach has the same O(n) time complexity as the other versions
			but provides a different traversal pattern that might be more suitable for certain
			applications, particularly when level-order processing is desired.</Paragraph
		>

		<CodeBlock snippet="posts/three-versions-of-leetcode-same-tree/bfs.ts" />
	</TwoColsContainer>

	<Title level="2">DFS Iterative</Title>
	<TwoColsContainer>
		<Paragraph
			>It uses an iterative approach with a stack instead of recursion. It maintains a stack of node
			pairs to be compared, initially containing the root nodes of both trees. In each iteration, it
			pops a pair of nodes from the stack and performs the same three key comparisons as the
			recursive version: if both nodes are null, it continues to the next pair; if exactly one node
			is null, the trees differ in structure (returns false); and if the values don't match, the
			trees are different (returns false). The key difference is that instead of making recursive
			calls, it explicitly pushes the left and right child pairs onto the stack for future
			comparison. The stack manages the traversal order, effectively mimicking the call stack that
			would be created in the recursive version. The function returns true only if all node pairs
			have been processed without finding any mismatches, meaning the trees are identical. This
			iterative approach can be more space-efficient than recursion for very deep trees, as it won't
			create a deep call stack.</Paragraph
		>
		<CodeBlock snippet="posts/three-versions-of-leetcode-same-tree/dfs_iterative.ts" />
	</TwoColsContainer>

	<Title level="2">DFS Recursive</Title>
	<TwoColsContainer>
		<Paragraph
			>It uses a recursive approach that checks three base cases: first, if both nodes are null, the
			trees are identical at this point (returns true); second, if exactly one node is null while
			the other isn't, the trees have different structures (returns false); and third, if the
			current nodes' values don't match, the trees are different (returns false). If all these
			checks pass, the function recursively compares the left and right subtrees of both nodes,
			using the AND operator (&&) to ensure both subtrees match. This depth-first traversal
			continues until either a mismatch is found or all nodes have been verified to match,
			effectively comparing the entire structure and values of both trees in O(n) time, where n is
			the number of nodes in the tree.</Paragraph
		>
		<CodeBlock snippet="posts/three-versions-of-leetcode-same-tree/dfs_recursive.ts" />
	</TwoColsContainer>
</Container>
