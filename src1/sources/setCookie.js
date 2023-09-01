import { objectToQuery } from './objectToQuery';

/**
 * 添加cookie
 * @param key
 * @param value
 * @param option
 * @returns {undefined}
 */
// eslint-disable-next-line consistent-return
export const setCookie = (key, value, options = {}) => {
  // options配置
  const optionStr = objectToQuery(options, ';');
  document.cookie = `${key}=${encodeURIComponent(value)};${optionStr}`;
};
