"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhoneNum = void 0;
const isPhoneNum = (val) => {
    const rule = /^1\d{10}$/;
    return rule.test(String(val));
};
exports.isPhoneNum = isPhoneNum;
