import { isBoolean } from '../src/sources/isBoolean';
import { expect, test } from '@jest/globals';
test('检测布尔类型', () => {
  expect(isBoolean(1)).toBe(false);
  expect(isBoolean('1')).toBe(false);
  expect(isBoolean({ a: 1 })).toBe(false);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean(true)).toBe(true);
});
