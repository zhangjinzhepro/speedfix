"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = void 0;
const isUndefined = (value) => Object.prototype.toString.call(value).includes('Undefined');
exports.isUndefined = isUndefined;
