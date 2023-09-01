import { isUndefined } from '../src/sources/isUndefined';
import { expect, test } from '@jest/globals';
test('检测undefined类型', () => {
  expect(isUndefined({})).toBe(false);
  expect(isUndefined('123')).toBe(false);
  expect(isUndefined(123)).toBe(false);
  expect(isUndefined([123])).toBe(false);
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined(undefined)).toBe(true);
});
