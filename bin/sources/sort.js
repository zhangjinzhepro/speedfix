"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const isObject_1 = require("./isObject");
const sort = (target, filter, key) => {
    if (key && filter === 'order') {
        return target.sort((a, b) => a[key] - b[key]);
    }
    if (filter && target.every((n) => (0, isObject_1.isObject)(n))) {
        return target.sort((a, b) => b[filter] - a[filter]);
    }
    if (filter === 'order') {
        return target.sort((a, b) => a - b);
    }
    return target.sort((a, b) => b - a);
};
exports.sort = sort;
