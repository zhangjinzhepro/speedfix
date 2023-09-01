"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectCopy = void 0;
const isObject_1 = require("./isObject");
const isArray_1 = require("./isArray");
const objectCopy = (target, type) => {
    if (type === 'deep') {
        const newObj = (0, isObject_1.isObject)(target) ? {} : [];
        Object.keys(target).forEach((key) => {
            if (target[key] && ((0, isObject_1.isObject)(target[key]) || (0, isArray_1.isArray)(target[key]))) {
                newObj[key] = (0, isObject_1.isObject)(target[key]) ? {} : [];
                newObj[key] = (0, exports.objectCopy)(target[key], 'deep');
            }
            else {
                newObj[key] = target[key];
            }
        });
        return newObj;
    }
    return Object.assign(target);
};
exports.objectCopy = objectCopy;
