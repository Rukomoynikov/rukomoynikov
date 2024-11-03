<script>
	import Title from '$components/Title.svelte';
	import Container from '$components/Container.svelte';
	import TwoColsContainer from '$components/TwoColsContainer.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
	import Paragraph from '$components/Paragraph.svelte';
</script>

<Container>
	<Title level="1">Implement Max and Min heaps in Typescript</Title>

	<Title level="2">Max heap</Title>

	<TwoColsContainer>
		<Paragraph
			>The class supports two main operations: insert and remove. When inserting a new value, it's
			first added to the end of the array, and then "bubbled up" through the heap until it reaches
			its correct position. This process (heapifyUp) involves comparing the new value with its
			parent and swapping them if the parent is smaller, continuing until either the root is reached
			or the heap property is satisfied. The remove operation, which always removes the maximum
			value (the root), is more complex. It takes the root value, replaces it with the last element
			in the heap, and then "bubbles down" this element (heapifyDown) by repeatedly swapping it with
			its larger child until it reaches its correct position. This ensures that after any operation,
			the largest value always remains at the root, giving us O(1) access to the maximum value and
			O(log n) time for insertions and removals.</Paragraph
		>

		<CodeBlock snippet="posts/heap-it/max_heap.ts" />
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/heap-it/max_heap.test.ts" />
	</TwoColsContainer>

	<Title level="2">Min heap</Title>

	<TwoColsContainer>
		<CodeBlock snippet="posts/heap-it/min_heap.ts" />
	</TwoColsContainer>

	<TwoColsContainer>
		<CodeBlock snippet="posts/heap-it/min_heap.test.ts" />
	</TwoColsContainer>
</Container>
