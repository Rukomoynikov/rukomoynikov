import { MaxHeap } from './max_heap';

describe('Insert', () => {
	test('Basic insert', () => {
		const mh = new MaxHeap();
		mh.insert(10);
		expect(mh.heap).toStrictEqual([10]);
	});

	test('Basic sorting', () => {
		const mh = new MaxHeap();
		mh.insert(10);
		mh.insert(100);
		expect(mh.heap).toStrictEqual([100, 10]);
	});

	test('Insert with many values', () => {
		const mh = new MaxHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));

		expect(mh.heap).toStrictEqual([100, 10, 2, 1, 5]);
	});
});

describe('Remove', () => {
	test('Basic scenario', () => {
		const mh = new MaxHeap();
		mh.insert(10);
		mh.remove();

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove all values', () => {
		const mh = new MaxHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));
		[10, 5, 2, 1, 100].forEach((_) => mh.remove());

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove one and resort', () => {
		const mh = new MaxHeap();

		[100, 40, 70, 10, 5, 2, 25, 1].forEach((num) => mh.insert(num));
		mh.remove();

		expect(mh.heap).toStrictEqual([70, 40, 25, 10, 5, 2, 1]);
	});

	test('Leetcode', () => {
		const mh = new MaxHeap();

		[1, 2, 3, 4, 5, 6, 7].forEach((num) => mh.insert(num));

		const sortedMax = [1, 2, 3, 4, 5, 6, 7].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
	});

	test('Leetcode with duplicates', () => {
		const mh = new MaxHeap();

		[1, 4, 5, 1, 3, 4, 2, 6].forEach((num) => mh.insert(num));

		const sortedMax = [1, 4, 5, 1, 3, 4, 2, 6].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([6, 5, 4, 4, 3, 2, 1, 1]);
	});
});
