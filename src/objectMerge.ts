import { isArray } from "./isArray";
import { isObject } from "./isObject";

/**
 * 对象合并
 * @param target
 * @param type
 * @returns {{}}
 */
export const objectMerge = (target: any[], type?: string): {} => {
  if (!isArray(target) || target.some((n) => !isObject(n))) {
    return Error('target必须为一个对象数组');
  }
  return target.reduce((a, b) => (type === 'ahead' ? { ...b, ...a } : { ...a, ...b }));
};
