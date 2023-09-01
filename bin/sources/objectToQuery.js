"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToQuery = void 0;
const isObject_1 = require("./isObject");
const objectToQuery = (target, limit = '&') => {
    if (!(0, isObject_1.isObject)(target)) {
        return Error('target必须是一个对象');
    }
    let str = '';
    Object.entries(target).forEach((n, i) => str += `${i > 0 ? limit : ''}${n[0]}=${n[1]}`);
    return str;
};
exports.objectToQuery = objectToQuery;
