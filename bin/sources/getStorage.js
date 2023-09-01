"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStorage = void 0;
const getStorage = (key, type) => {
    let origin;
    const item = (type === 'session' ? sessionStorage : localStorage).getItem(key);
    if (item === null) {
        return null;
    }
    else {
        origin = JSON.parse(item);
    }
    if (origin.key === 'wanadoStorage') {
        if (origin.expire && (origin.expire <= new Date().getTime())) {
            (origin.mode === 'session' ? sessionStorage : localStorage).removeItem(key);
            return null;
        }
        return JSON.parse(origin.data);
    }
    return origin;
};
exports.getStorage = getStorage;
