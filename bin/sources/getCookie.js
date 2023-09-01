"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
const queryToObject_1 = require("./queryToObject");
const getCookie = (key) => {
    const cookieObj = (0, queryToObject_1.queryToObject)(document.cookie, ';');
    return cookieObj[key];
};
exports.getCookie = getCookie;
