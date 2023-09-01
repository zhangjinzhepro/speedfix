import { objectMerge } from '../src/sources/objectMerge';
import { expect, test } from '@jest/globals';
test(
  '对象合并',
  () => {
    expect(objectMerge([{ a: 1 }, {
      a: 2,
      b: 2,
    }, {
      a: 3,
      c: 3,
    }]))
      .toStrictEqual({
        a: 3,
        b: 2,
        c: 3,
      });
    expect(objectMerge([{ a: 1 }, {
      a: 2,
      b: 2,
    }, {
      a: 3,
      c: 3,
    }], 'ahead'))
      .toStrictEqual({
        a: 1,
        b: 2,
        c: 3,
      });
  },
);
