export const checkType = (value) => Object.prototype.toString.call(value).replace(/^\[(\w+)\s(\w+)]$/, (str, $1, $2) => $2);
