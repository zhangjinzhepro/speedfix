export const isBoolean = (value: any): boolean => Object.prototype.toString.call(value).includes('Boolean');
