import { listRemove } from '../src/sources/listRemove';
import { expect, test } from '@jest/globals';
test(
  '列表删除',
  () => {
    expect(listRemove([1, 2, 3, 4], 1, 2))
      .toStrictEqual([1, 4]);
    expect(listRemove([1, 2, 3, 4], [1, 4]))
      .toStrictEqual([2, 3]);
    expect(listRemove([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }], { a: 3 }))
      .toStrictEqual([{ a: 1 }, { a: 2 }, { a: 4 }]);
  },
);
