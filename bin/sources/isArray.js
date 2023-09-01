"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
const isArray = (value) => Object.prototype.toString.call(value).includes('Array');
exports.isArray = isArray;
