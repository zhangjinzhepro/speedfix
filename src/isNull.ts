export const isNull = (value: any): boolean => Object.prototype.toString.call(value).includes('Null');
