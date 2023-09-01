import { isObject } from './isObject';
import { isArray } from './isArray';

/**
 * 深浅拷贝
 * @param target
 * @param type
 * @returns {*[]|any}
 */
export const objectCopy = (target: object, type?: string): any[] | any => {
  if (type === 'deep') {
    const newObj = isObject(target) ? {} : [];
    Object.keys(target).forEach((key) => {
      // @ts-ignore
      if (target[key] && (isObject(target[key]) || isArray(target[key]))) {
        // @ts-ignore
        newObj[key] = isObject(target[key]) ? {} : [];
        // @ts-ignore
        newObj[key] = objectCopy(target[key], 'deep');
      } else {
        // @ts-ignore
        newObj[key] = target[key];
      }
    });
    return newObj;
  }
  return Object.assign(target);
};
