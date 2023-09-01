import { isNotObject } from './isNotObject';

export const isEmptyObject = (data) => {
  if (isNotObject(data)) {
    throw new Error('请传入一个对象');
  }
  return !(Object.keys(data).length);
};
