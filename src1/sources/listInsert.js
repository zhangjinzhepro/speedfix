import { isUndefined } from './isUndefined';
import { checkType } from './checkType';
import { isNumber } from './isNumber';
import { isObject } from './isObject';

const createArray = (target, data, index, type) => [...target.slice(0, type ? index : (index + 1)), ...(checkType(data) === 'Array' ? data : [data]), ...target.slice(type ? index : (index + 1))];

/**
 * 数组添加
 * @returns {[]}
 * @param target
 * @param data
 * @param filter
 * @param dir
 */

export const listInsert = (target, data, filter, dir) => {
  // 对象数组添加
  if (isObject(filter)) {
    const index = target.findIndex((n) => Object.keys(filter).every((m) => filter[m] === n[m]));
    // 向前
    if (dir === 'ahead') {
      return createArray(target, data, index, 1);
    }
    // 向后
    return createArray(target, data, index, 0);
  }
  // 下标正常添加
  if (isNumber(filter)) {
    return createArray(target, data, filter, 1);
  }
  // 尾部正常添加
  if (isUndefined(filter)) {
    return target.concat(data);
  }
  return null;
};
