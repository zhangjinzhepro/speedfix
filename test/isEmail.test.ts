import { isEmail } from '../src/sources/isEmail';
import { expect, test } from '@jest/globals';
test('检测邮箱', () => {
  expect(isEmail('123@163.com')).toBe(true);
  expect(isEmail('123')).toBe(false);
  expect(isEmail('123@')).toBe(false);
  expect(isEmail('123@345')).toBe(false);
});
