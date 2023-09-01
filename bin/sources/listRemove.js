"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRemove = void 0;
const isArray_1 = require("./isArray");
const isNumber_1 = require("./isNumber");
const isObject_1 = require("./isObject");
const listRemove = (target, filter, count) => {
    if ((0, isObject_1.isObject)(filter)) {
        return target.filter((n) => Object.keys(filter).every((keys) => n[keys] !== filter[keys]));
    }
    if ((0, isNumber_1.isNumber)(filter)) {
        return target.slice(0, filter).concat((0, isNumber_1.isNumber)(count) ? target.slice(filter + count) : []);
    }
    if ((0, isArray_1.isArray)(filter) && typeof filter !== "number" && (filter === null || filter === void 0 ? void 0 : filter.every((n) => !(0, isObject_1.isObject)(n)))) {
        return target.filter((n) => !filter.includes(n));
    }
    return null;
};
exports.listRemove = listRemove;
