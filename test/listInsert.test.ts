import { listInsert } from '../src/sources/listInsert';
import { expect, test } from '@jest/globals';
test('列表插入', () => {
  expect(listInsert([1, 2, 3, 4], { a: 1 }, 2)).toStrictEqual([1, 2, { a: 1 }, 3, 4]);
  expect(listInsert([1, 2, 3, 4], { a: 1 })).toStrictEqual([1, 2, 3, 4, { a: 1 }]);
  expect(listInsert([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }], { a: 6 })).toStrictEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 6 }]);
  expect(listInsert([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }], { a: 6 }, { a: 3 })).toStrictEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 6 }, { a: 4 }]);
  expect(listInsert([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }], { a: 6 }, { a: 3 }, 'ahead')).toStrictEqual([{ a: 1 }, { a: 2 }, { a: 6 }, { a: 3 }, { a: 4 }]);
});
