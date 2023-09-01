import { queryToObject } from '../src/sources/queryToObject';
import { expect, test } from '@jest/globals';
test('query转对象', () => {
  expect(queryToObject('a=1&b=2&c=3')).toStrictEqual({ a: '1', b: '2', c: '3' });
  expect(queryToObject('a=1:b=2:c=3', ':')).toStrictEqual({ a: '1', b: '2', c: '3' });
});
