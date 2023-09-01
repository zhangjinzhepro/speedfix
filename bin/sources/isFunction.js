"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
const isFunction = (value) => Object.prototype.toString.call(value).includes('Function');
exports.isFunction = isFunction;
