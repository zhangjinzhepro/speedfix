"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
const isEmptyObject = (data) => {
    return !(Object.keys(data).length);
};
exports.isEmptyObject = isEmptyObject;
