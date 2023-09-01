/**
 * 伪数组转换数组
 * @param target
 * @returns {[]}
 */
export const toArray = (target) => Array.prototype.slice.call(target);
