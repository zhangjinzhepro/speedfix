"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChinese = void 0;
const isChinese = (val) => {
    const rule = /\p{Unified_Ideograph}/u;
    return rule.test(val);
};
exports.isChinese = isChinese;
