import { checkType } from './checkType';
import { isNumber } from './isNumber';

/**
 * 设置storage
 * @param key
 * @param value
 * @param options
 */
export const setStorage = (key, value, options = {}) => {
  const item = {
    key: 'wanadoStorage',
    data: JSON.stringify(value),
    type: checkType(value),
    expires: isNumber(options.expires) && new Date().getTime() + options.expires * 1000,
    mode: options.mode || 'local',
  };
  (options.mode === 'session' ? sessionStorage : localStorage).setItem(key, JSON.stringify(item));
};
