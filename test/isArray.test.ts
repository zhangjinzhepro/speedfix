import { isArray } from '../src/sources/isArray';
import { expect, test } from '@jest/globals';
test('检测数组类型', () => {
  expect(isArray(1)).toBe(false);
  expect(isArray('1')).toBe(false);
  expect(isArray({ a: 1 })).toBe(false);
  expect(isArray([])).toBe(true);
});
