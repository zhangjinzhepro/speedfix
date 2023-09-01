"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
const isObject = (value) => Object.prototype.toString.call(value).includes('Object');
exports.isObject = isObject;
