import { isNumber } from '../src/sources/isNumber';
import { expect, test } from '@jest/globals';
test('检测number类型', () => {
  expect(isNumber({})).toBe(false);
  expect(isNumber('123')).toBe(false);
  expect(isNumber(123)).toBe(true);
  expect(isNumber([123])).toBe(false);
  expect(isNumber(null)).toBe(false);
});
