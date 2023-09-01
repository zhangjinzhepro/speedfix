import { objectToQuery } from './objectToQuery';

/**
 * 添加cookie
 * @param key
 * @param value
 * @param options
 * @returns {undefined}
 */
// eslint-disable-next-line consistent-return
export const setCookie = (key: any, value: string | number | boolean, options = {}): undefined => {
  // options配置
  const optionStr = objectToQuery(options, ';');
  document.cookie = `${key}=${encodeURIComponent(value)};${optionStr}`;
};
