"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectMerge = void 0;
const isArray_1 = require("./isArray");
const isObject_1 = require("./isObject");
const objectMerge = (target, type) => {
    if (!(0, isArray_1.isArray)(target) || target.some((n) => !(0, isObject_1.isObject)(n))) {
        return Error('target必须为一个对象数组');
    }
    return target.reduce((a, b) => (type === 'ahead' ? Object.assign(Object.assign({}, b), a) : Object.assign(Object.assign({}, a), b)));
};
exports.objectMerge = objectMerge;
