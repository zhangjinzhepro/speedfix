export const isFunction = (value: any): boolean => Object.prototype.toString.call(value).includes('Function');
