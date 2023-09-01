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
export const listRemove = (target: any[], filter?: any, count?: number): Error | [] | null => {
  // 对象数组删除
  if (isObject(filter)) {
    // @ts-ignore
    return target.filter((n) => Object.keys(filter).every((keys) => n[keys] !== filter[keys]));
  }
  // 根据数量删除
  if (isNumber(filter)) {
    // @ts-ignore
    return target.slice(0, filter).concat(isNumber(count) ? target.slice(filter + count) : []);
  }
  // 简单数组删除
  if (isArray(filter) && typeof filter !== "number" && filter?.every((n: any) => !isObject(n))) {
    // @ts-ignore
    return target.filter((n) => !filter.includes(n));
  }
  return null;
};
