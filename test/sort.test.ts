import { sort } from '../src/sources/sort';
import { expect, test } from '@jest/globals';
test('数组排序', () => {
  expect(sort([2, 4, 3, 6, 5, 8, 7, 9, 0])).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 0]);
  expect(sort([2, 4, 3, 6, 5, 8, 7, 9, 0], 'order')).toStrictEqual([0, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(sort([{ a: 1 }, { a: 4 }, { a: 2 }, { a: 3 }], 'a')).toStrictEqual([{ a: 4 }, { a: 3 }, { a: 2 }, { a: 1 }]);
  expect(sort([{ a: 1 }, { a: 4 }, { a: 2 }, { a: 3 }], 'order', 'a')).toStrictEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]);
});
