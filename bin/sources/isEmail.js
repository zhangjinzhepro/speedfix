"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
const isEmail = (val) => {
    const rule = /\w+@\w+\.[A-z]/;
    return rule.test(val);
};
exports.isEmail = isEmail;
