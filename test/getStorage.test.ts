import { getStorage } from '../src/sources/getStorage';
import { setStorage } from '../src/sources/setStorage';
import { expect, test } from '@jest/globals';
test('获取Storage', () => {
  setStorage('a', 123123, { expires: 0 });
  expect(getStorage('a')).toBe(123123);
  setStorage('b', 'abcd', { expires: 0 });
  expect(getStorage('b')).toBe('abcd');
  setStorage('c', { a: 1, b: 2 }, { expires: 0 });
  expect(getStorage('c')).toStrictEqual({ a: 1, b: 2 });
});
