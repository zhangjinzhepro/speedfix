"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = void 0;
const isNull = (value) => Object.prototype.toString.call(value).includes('Null');
exports.isNull = isNull;
