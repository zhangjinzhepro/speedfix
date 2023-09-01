"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStorage = void 0;
const checkType_1 = require("./checkType");
const isNumber_1 = require("./isNumber");
const setStorage = (key, value, options = {}) => {
    const item = {
        key: 'wanadoStorage',
        data: JSON.stringify(value),
        type: (0, checkType_1.checkType)(value),
        expires: (0, isNumber_1.isNumber)(options.expires) && new Date().getTime() + options.expires * 1000,
        mode: options.mode || 'local',
    };
    (options.mode === 'session' ? sessionStorage : localStorage).setItem(key, JSON.stringify(item));
};
exports.setStorage = setStorage;
