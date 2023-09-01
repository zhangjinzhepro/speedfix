"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInsert = void 0;
const isUndefined_1 = require("./isUndefined");
const checkType_1 = require("./checkType");
const isNumber_1 = require("./isNumber");
const createArray = (target, data, index, type) => [...target.slice(0, type ? index : (index + 1)), ...((0, checkType_1.checkType)(data) === 'Array' ? data : [data]), ...target.slice(type ? index : (index + 1))];
const listInsert = (target, data, filter, dir) => {
    if (typeof filter === 'object') {
        const index = target.findIndex((n) => Object.keys(filter).every((m) => filter[m] === n[m]));
        if (dir === 'ahead') {
            return createArray(target, data, index, 1);
        }
        return createArray(target, data, index, 0);
    }
    if ((0, isNumber_1.isNumber)(filter)) {
        return createArray(target, data, filter, 1);
    }
    if ((0, isUndefined_1.isUndefined)(filter)) {
        return target.concat(data);
    }
    return null;
};
exports.listInsert = listInsert;
