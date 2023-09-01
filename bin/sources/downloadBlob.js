"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadBlob = void 0;
const downloadBlob = (data, fileName, type) => {
    const link = document.createElement('a');
    const blob = new Blob([data], { type: type });
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
};
exports.downloadBlob = downloadBlob;
