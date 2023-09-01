export const isNotBoolean = (value) => !Object.prototype.toString.call(value).includes('Boolean');
