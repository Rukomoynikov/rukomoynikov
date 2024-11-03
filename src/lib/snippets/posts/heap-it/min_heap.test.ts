import { MinHeap } from './min_heap';

describe('Insert', () => {
	test('Basic insert', () => {
		const mh = new MinHeap();
		mh.insert(10);
		expect(mh.heap).toStrictEqual([10]);
	});

	test('Basic sorting', () => {
		const mh = new MinHeap();
		mh.insert(10);
		mh.insert(100);
		expect(mh.heap).toStrictEqual([10, 100]);
	});

	test('Insert with many values', () => {
		const mh = new MinHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));

		expect(mh.heap).toStrictEqual([1, 2, 5, 10, 100]);
	});
});

describe('Remove', () => {
	test('Basic scenario', () => {
		const mh = new MinHeap();
		mh.insert(10);
		mh.remove();

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove all values', () => {
		const mh = new MinHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));
		[10, 5, 2, 1, 100].forEach((_) => mh.remove());

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove one and resort', () => {
		const mh = new MinHeap();

		[100, 40, 70, 10, 5, 2, 25, 1].forEach((num) => mh.insert(num));
		mh.remove();

		expect(mh.heap).toStrictEqual([2, 10, 5, 100, 40, 70, 25]);
	});

	test('Leetcode', () => {
		const mh = new MinHeap();

		[1, 2, 3, 4, 5, 6, 7].forEach((num) => mh.insert(num));

		const sortedMax = [1, 2, 3, 4, 5, 6, 7].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
	});

	test('Leetcode with duplicates', () => {
		const mh = new MinHeap();

		[1, 4, 5, 1, 3, 4, 2, 6].forEach((num) => mh.insert(num));

		const sortedMax = [1, 4, 5, 1, 3, 4, 2, 6].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([1, 1, 2, 3, 4, 4, 5, 6]);
	});
});
