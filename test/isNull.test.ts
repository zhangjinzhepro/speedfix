import { isNull } from '../src/sources/isNull';
import { expect, test } from '@jest/globals';
test('检测null类型', () => {
  expect(isNull({})).toBe(false);
  expect(isNull('123')).toBe(false);
  expect(isNull(123)).toBe(false);
  expect(isNull([123])).toBe(false);
  expect(isNull(null)).toBe(true);
});
