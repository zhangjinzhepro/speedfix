/**
 * 获取storage
 * @param key
 * @param type
 * @returns {null|any}
 */
import { isEmptyValue } from './isEmptyValue';

export const getStorage = (key, type) => {
  // 判断存储位置
  const item = (type === 'session' ? sessionStorage : localStorage).getItem(key);
  // 判空
  if (isEmptyValue(item)) return null;
  const origin = JSON.parse(item);
  // wanado数据
  if (origin.key === 'wanadoStorage') {
    // 判断过期
    if (origin.expire && (origin.expire <= new Date().getTime())) {
      // 移除数据
      (origin.mode === 'session' ? sessionStorage : localStorage).removeItem(key);
      return null;
    }
    return JSON.parse(origin.data);
  }
  // 普通数据
  return origin;
};
