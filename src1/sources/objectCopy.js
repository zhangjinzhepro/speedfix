import { isObject } from './isObject';
import { isArray } from './isArray';

/**
 * 深浅拷贝
 * @param target
 * @param type
 * @returns {*[]|any}
 */
export const objectCopy = (target, type) => {
  if (type === 'deep') {
    const newObj = isObject(target) ? {} : [];
    Object.keys(target).forEach((key) => {
      // eslint-disable-next-line no-mixed-operators
      if (target[key] && (isObject(target[key]) || isArray(target[key]))) {
        newObj[key] = isObject(target[key]) ? {} : [];
        newObj[key] = objectCopy(target[key], 'deep');
      } else {
        newObj[key] = target[key];
      }
    });
    return newObj;
  }
  return Object.assign(target);
};
