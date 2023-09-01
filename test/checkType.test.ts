import { expect, test } from '@jest/globals';

import { checkType } from '../src/sources/checkType';
test('检查类型', () => {
  expect(checkType(1)).toBe('Number');
  expect(checkType('123123')).toBe('String');
  expect(checkType([1, 2, 3])).toBe('Array');
  expect(checkType({ a: 1 })).toBe('Object');
  expect(checkType(undefined)).toBe('Undefined');
  expect(checkType(null)).toBe('Null');
  expect(checkType(() => {})).toBe('Function');
});
