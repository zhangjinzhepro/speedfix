import { queryToObject } from './queryToObject';

/**
 * 获取cookie
 * @param key
 * @returns {*}
 */
export const getCookie = (key) => {
  const cookieObj = queryToObject(document.cookie, ';');
  return cookieObj[key];
};
