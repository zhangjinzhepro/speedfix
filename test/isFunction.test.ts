import { isFunction } from '../src/sources/isFunction';
import { expect, test } from '@jest/globals';
test('检测function类型', () => {
  expect(isFunction({})).toBe(false);
  expect(isFunction(()=> {})).toBe(true);
});
