class MaxHeap {
	public heap: number[] = [];

	insert(val: number): void {
		this.heap.push(val);

		if (this.heap.length > 0) this.heapifyUp(this.heap.length - 1);
		// Heapify up starting from the last element
	}

	private heapifyUp(nodeIndex: number): void {
		if (nodeIndex == 0) return;

		const nodeValue = this.heap[nodeIndex];

		const parentIndex = Math.floor((nodeIndex - 1) / 2);
		const parentValue = this.heap[parentIndex];

		// In node value is higher than parent value, we need to propogate this (node) value up.
		if (nodeValue > parentValue) {
			[this.heap[nodeIndex], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[nodeIndex]
			];
			this.heapifyUp(parentIndex);
		}
	}

	remove(): number {
		if (this.heap.length == 0) return -1;

		if (this.heap.length == 1) return this.heap.pop() as number;

		const top = this.heap[0];
		const last = this.heap.pop() as number;

		this.heap[0] = last;

		this.heapifyDown(0);

		return top;
	}

	private heapifyDown(nodeIndex: number): void {
		// Reached end of the heap
		if (nodeIndex == this.heap.length - 1) return;

		const nodeValue = this.heap[nodeIndex];

		let leftChildIndex = Math.floor(nodeIndex * 2 + 1);
		let rightChildIndex = Math.floor(nodeIndex * 2 + 2);

		const leftChildValue = this.heap[leftChildIndex];
		const rightChildValue = this.heap[rightChildIndex];

		const indexToSwap = rightChildValue >= leftChildValue ? rightChildIndex : leftChildIndex;

		if (this.heap[indexToSwap] > nodeValue) {
			[this.heap[indexToSwap], this.heap[nodeIndex]] = [
				this.heap[nodeIndex],
				this.heap[indexToSwap]
			];

			this.heapifyDown(indexToSwap);

			return;
		}
	}
}

export { MaxHeap };
