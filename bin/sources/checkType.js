"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkType = void 0;
const checkType = (value) => Object.prototype.toString.call(value).replace(/^\[(\w+)\s(\w+)]$/, (str, $1, $2) => $2);
exports.checkType = checkType;
exports.default = exports.checkType;
