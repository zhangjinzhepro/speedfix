import { listGroup } from '../src/sources/listGroup';
import { expect, test } from '@jest/globals';
test('列表分组', () => {
  const list = [
    { year: 2016, key: 2 },
    { year: 2015, key: 123 },
    { year: 2006, key: 76 },
    { year: 2022, key: 5 },
    { year: 2016, key: 245 },
    { year: 2018, key: 209 },
    { year: 2006, key: 23 },
  ];

  const result = {
    2006: [{ key: 76, year: 2006 }, { key: 23, year: 2006 }],
    2015: [{ key: 123, year: 2015 }],
    2016: [{ key: 2, year: 2016 }, { key: 245, year: 2016 }],
    2018: [{ key: 209, year: 2018 }],
    2022: [{ key: 5, year: 2022 }],
  };

  expect(listGroup(list, 'year')).toStrictEqual(result);
});
