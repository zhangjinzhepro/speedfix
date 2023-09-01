import { isNotObject } from './isNotObject';
/**
 * 对象转query
 * @param target
 * @param limit
 * @returns {Error|[]}
 */

export const objectToQuery = (target, limit = '&') => {
  if (isNotObject(target)) {
    return Error('target必须是一个对象');
  }
  let str = '';
  // eslint-disable-next-line no-return-assign
  Object.entries(target).forEach((n, i) => str += `${i > 0 ? limit : ''}${n[0]}=${n[1]}`);
  return str;
};
