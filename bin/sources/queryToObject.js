"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryToObject = void 0;
const queryToObject = (target, limit = '&') => (target.includes(limit) ? target.split(limit) : [target]).map((n) => n.split('=')).reduce((a, b) => (Object.assign(Object.assign({}, a), { [b[0].trim()]: b[1] })), {});
exports.queryToObject = queryToObject;
