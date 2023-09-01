"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = void 0;
const isBoolean = (value) => Object.prototype.toString.call(value).includes('Boolean');
exports.isBoolean = isBoolean;
