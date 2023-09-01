"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const isNumber = (value) => Object.prototype.toString.call(value).includes('Number');
exports.isNumber = isNumber;
