import { queryToObject } from './queryToObject';

export const getCookie = (key: string): string => {
  const cookieObj = queryToObject(document.cookie, ';');
  return cookieObj[key];
};
