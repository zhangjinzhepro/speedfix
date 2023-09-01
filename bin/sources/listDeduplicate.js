"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDeduplicate = void 0;
const isUndefined_1 = require("./isUndefined");
const listRemove_1 = require("./listRemove");
const listDeduplicate = (target, key, type) => {
    if ((0, isUndefined_1.isUndefined)(key)) {
        return Array.from(new Set(target));
    }
    for (let i = 0; i < target.length; i++) {
        for (let j = i + 1; j < target.length; j++) {
            if (target[i][key] === target[j][key]) {
                target = (0, listRemove_1.listRemove)(target, type && type === 'behind' ? i : j, 1);
                j--;
            }
        }
    }
    return target;
};
exports.listDeduplicate = listDeduplicate;
