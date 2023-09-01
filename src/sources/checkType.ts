export const checkType = (value: any) => Object.prototype.toString.call(value).replace(/^\[(\w+)\s(\w+)]$/, (str, $1, $2) => $2);
