import { isEmptyObject } from './isEmptyObject';
import { isEmptyList } from './isEmptyList';
import { isUndefined } from './isUndefined';
import { isNull } from './isNull';
import { isArray } from './isArray';
import { isObject } from './isObject';

export const isEmptyValue = (value) => {
  if (isObject(value)) {
    return isEmptyObject(value);
  } if (isArray(value)) {
    return isEmptyList(value);
  }
  return isUndefined(value) || isNull(value) || value === '';
};
