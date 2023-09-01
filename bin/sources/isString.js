"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
const isString = (value) => Object.prototype.toString.call(value).includes('String');
exports.isString = isString;
