import { isNotArray } from './isNotArray';
import { isNotObject } from './isNotObject';
import { isArray } from './isArray';
import { isNumber } from './isNumber';
import { isObject } from './isObject';

/**
 * 数组删除
 * @param target
 * @param filter
 * @param count
 * @returns {Error|[]}
 */
export const listRemove = (target, filter, count) => {
  // 对象数组删除
  if (isObject(filter)) {
    return target.filter((n) => Object.keys(filter).every((keys) => n[keys] !== filter[keys]));
  }
  // 根据数量删除
  if (isNumber(filter)) {
    return target.slice(0, filter).concat(isNumber(count) ? target.slice(filter + count) : []);
  }
  // 简单数组删除
  if (isArray(filter) && filter.every((n) => isNotObject(n))) {
    return target.filter((n) => !filter.includes(n));
  }
  return null;
};
