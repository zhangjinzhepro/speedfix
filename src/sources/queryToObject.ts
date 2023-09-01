/**
 * query转对象
 * @param target
 * @param limit
 * @returns {Error|[]}
 */

export const queryToObject = (target: string, limit: string = '&'): {[p: string]: string} => (
  target.includes(limit) ? target.split(limit) : [target]).map((n) => n.split('=')).reduce((a, b) => ({
  ...a,
  [b[0].trim()]: b[1],
}), {});
