import { checkType } from "./sources/checkType";
import { downloadBlob } from "./sources/downloadBlob";
import { getCookie } from "./sources/getCookie";
import { getStorage } from "./sources/getStorage";
import { isArray } from "./sources/isArray";
import { isBoolean } from "./sources/isBoolean";
import { isChinese } from "./sources/isChinese";
import { isEmail } from "./sources/isEmail";
import { isEmptyList } from "./sources/isEmptyList";
import { isEmptyObject } from "./sources/isEmptyObject";
import { isEmptyValue } from "./sources/isEmptyValue";
import { isFunction } from "./sources/isFunction";
import { isNull } from "./sources/isNull";
import { isNumber } from "./sources/isNumber";
import { isObject } from "./sources/isObject";
import { isPhoneNum } from "./sources/isPhoneNum";
import { isString } from "./sources/isString";
import { isUndefined } from "./sources/isUndefined";
import { listDeduplicate } from "./sources/listDeduplicate";
import { listGroup } from "./sources/listGroup";
import { listInsert } from "./sources/listInsert";
import { listRemove } from "./sources/listRemove";
import { objectToQuery } from "./sources/objectToQuery";
import { objectCopy } from "./sources/objectCopy";
import { objectMerge } from "./sources/objectMerge";
import { queryToObject } from "./sources/queryToObject";
import { setCookie } from "./sources/setCookie";
import { setStorage } from "./sources/setStorage";
import { sort } from "./sources/sort";
import { toArray } from "./sources/toArray";
import { toDate } from "./sources/toDate";
import { toThousands } from "./sources/toThousands";

const speedfix = {
  checkType,
  downloadBlob,
  getCookie,
  getStorage,
  isArray,
  isBoolean,
  isChinese,
  isEmail,
  isEmptyList,
  isEmptyObject,
  isEmptyValue,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isPhoneNum,
  isString,
  isUndefined,
  listDeduplicate,
  listGroup,
  listInsert,
  listRemove,
  objectCopy,
  objectMerge,
  objectToQuery,
  queryToObject,
  setCookie,
  setStorage,
  sort,
  toArray,
  toDate,
  toThousands
};

export default speedfix
