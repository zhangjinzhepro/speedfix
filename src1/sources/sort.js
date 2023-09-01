/**
 * 数组排序
 * @param target
 * @param type
 * @param key
 * @returns {[]}
 */
import { isObject } from './isObject';

export const sort = (target, filter, key) => {
  if (key && filter === 'order') {
    return target.sort((a, b) => a[key] - b[key]);
  }
  if (filter && target.every((n) => isObject(n))) {
    return target.sort((a, b) => b[filter] - a[filter]);
  }
  if (filter === 'order') {
    return target.sort((a, b) => a - b);
  }
  return target.sort((a, b) => b - a);
};
