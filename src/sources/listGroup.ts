import { isArray } from "./isArray";
import { isObject } from "./isObject";

/**
 * 对象数组分组
 * @param target
 * @param key
 * @returns {Error|[]}
 */
export const listGroup = (target: any[], key: string | number): Error | any[] => {
  // 判断初始类型
  if (!isArray(target) || target.some((n) => !isObject(n))) {
    return Error('target必须为对象数组');
  }
  return target.reduce((obj, ele) => {
    const newObj = obj;
    (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
    return newObj;
  }, {});
};
