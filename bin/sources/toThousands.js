"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toThousands = void 0;
const toThousands = (target) => {
    const ghost = String(target);
    const float = ghost.includes('.');
    return float ? `${ghost.split('.')[0].replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`)}.${ghost.split('.')[1]}` : ghost.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`);
};
exports.toThousands = toThousands;
