import { isString } from '../src/sources/isString';
import { expect, test } from '@jest/globals';
test('检测string类型', () => {
  expect(isString({})).toBe(false);
  expect(isString('123')).toBe(true);
  expect(isString(123)).toBe(false);
  expect(isString([123])).toBe(false);
  expect(isString(null)).toBe(false);
});
