import { objectCopy } from '../src/sources/objectCopy';
import { expect, test } from '@jest/globals';
test(
  '对象克隆',
  () => {
    expect(objectCopy({
      a: 1,
      b: 2,
      c: {
        aa: 11,
        bb: 22,
      },
    }))
      .toStrictEqual({
        a: 1,
        b: 2,
        c: {
          aa: 11,
          bb: 22,
        },
      });
    expect(objectCopy({
      a: 1,
      b: 2,
      c: {
        aa: 11,
        bb: 22,
      },
    }, 'deep'))
      .toStrictEqual({
        a: 1,
        b: 2,
        c: {
          aa: 11,
          bb: 22,
        },
      });
  },
);
