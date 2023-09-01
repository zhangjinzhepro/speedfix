import { isPhoneNum } from '../src/sources/isPhoneNum';
import { expect, test } from '@jest/globals';
test('检测手机号', () => {
  expect(isPhoneNum(13234565434564)).toBe(false);
  expect(isPhoneNum(3232)).toBe(false);
  expect(isPhoneNum(17669675323)).toBe(true);
});
