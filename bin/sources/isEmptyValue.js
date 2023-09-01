"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyValue = void 0;
const isEmptyObject_1 = require("./isEmptyObject");
const isEmptyList_1 = require("./isEmptyList");
const isUndefined_1 = require("./isUndefined");
const isNull_1 = require("./isNull");
const isArray_1 = require("./isArray");
const isObject_1 = require("./isObject");
const isEmptyValue = (value) => {
    if ((0, isObject_1.isObject)(value)) {
        return (0, isEmptyObject_1.isEmptyObject)(value);
    }
    if ((0, isArray_1.isArray)(value)) {
        return (0, isEmptyList_1.isEmptyList)(value);
    }
    return (0, isUndefined_1.isUndefined)(value) || (0, isNull_1.isNull)(value) || value === '';
};
exports.isEmptyValue = isEmptyValue;
