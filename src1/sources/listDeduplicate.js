import { isUndefined } from './isUndefined';
import { listRemove } from './listRemove';

/**
 * 数组去重
 * @param target
 * @param key
 * @param type
 * @returns {[]}
 */
export const listDeduplicate = (target, key, type) => {
  // 简单数组
  if (isUndefined(key)) {
    return Array.from(new Set(target));
  }
  // 对象数组
  for (let i = 0; i < target.length; i++) {
    for (let j = i + 1; j < target.length; j++) {
      if (target[i][key] === target[j][key]) {
        // eslint-disable-next-line no-param-reassign
        target = listRemove(target, type && type === 'behind' ? i : j, 1);
        j--;
      }
    }
  }
  return target;
};
