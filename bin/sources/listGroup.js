"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGroup = void 0;
const isArray_1 = require("./isArray");
const isObject_1 = require("./isObject");
const listGroup = (target, key) => {
    if (!(0, isArray_1.isArray)(target) || target.some((n) => !(0, isObject_1.isObject)(n))) {
        return Error('target必须为对象数组');
    }
    return target.reduce((obj, ele) => {
        const newObj = obj;
        (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
        return newObj;
    }, {});
};
exports.listGroup = listGroup;
