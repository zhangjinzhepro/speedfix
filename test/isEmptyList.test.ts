import { isEmptyList } from '../src/sources/isEmptyList';
import { expect, test } from '@jest/globals';
test('检测空列表', () => {
  expect(isEmptyList([123, 345])).toBe(false);
  expect(isEmptyList([])).toBe(true);
});
