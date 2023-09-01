import { listDeduplicate } from '../src/sources/listDeduplicate';
import { expect, test } from '@jest/globals';
test('列表去重', () => {
  const list1 = [
    { year: 2016, key: 2 },
    { year: 2016, key: 3 },
    { year: 2016, key: 4 },
    { year: 2024, key: 2 },
    { year: 2022, key: 2 },
  ];
  const result1 = [{ key: 2, year: 2016 }, { key: 2, year: 2024 }, { key: 2, year: 2022 }];
  expect(listDeduplicate(list1, 'year')).toStrictEqual(result1);

  const list2 = [
    { year: 2016, key: 2 },
    { year: 2016, key: 3 },
    { year: 2016, key: 4 },
    { year: 2024, key: 2 },
    { year: 2022, key: 2 },
  ];
  const result2 = [{ key: 4, year: 2016 }, { key: 2, year: 2024 }, { key: 2, year: 2022 }];
  expect(listDeduplicate(list2, 'year', 'behind')).toStrictEqual(result2);

  const list3 = [1, 2, 3, 3, 4, 5, 4, 5, 4, 6, 8, 6, 5, 3, 5, 6];
  const result3 = [1, 2, 3, 4, 5, 6, 8];
  expect(listDeduplicate(list3)).toStrictEqual(result3);
});
