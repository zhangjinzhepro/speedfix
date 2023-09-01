"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
const objectToQuery_1 = require("./objectToQuery");
const setCookie = (key, value, options = {}) => {
    const optionStr = (0, objectToQuery_1.objectToQuery)(options, ';');
    document.cookie = `${key}=${encodeURIComponent(value)};${optionStr}`;
};
exports.setCookie = setCookie;
