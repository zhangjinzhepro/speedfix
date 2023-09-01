import { toDate } from '../src/sources/toDate';
import { expect, test } from '@jest/globals';
test('转时间格式', () => {
  expect(toDate(123456789)).toStrictEqual('1970-01-02 18:17:36');
  expect(toDate('1970-01-02 18:17:36', 'yyyy-MM-DD HH:mm:ss')).toStrictEqual('1970-01-02 18:17:36');
  expect(toDate(123456789, 'yyyy-MM-DD hh:mm:ss')).toStrictEqual('1970-01-02 下午 06:17:36');
  expect(toDate(123456789, 'hh:mm:ss')).toStrictEqual('下午 06:17:36');
  expect(toDate(123456789, 'yyyy-MM-DD')).toStrictEqual('1970-01-02');
  expect(toDate(123456789, 'yyyy-M-D H:m:s')).toStrictEqual('1970-1-2 18:17:36');
});
