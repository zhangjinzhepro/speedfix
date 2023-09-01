import { getCookie } from '../src/sources/getCookie';
import { expect, test } from '@jest/globals';

test('获取cookie', () => {
  document.cookie = 'a=112312313213;';
  expect(getCookie('a')).toBe('112312313213');
});
