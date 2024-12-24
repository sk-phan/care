"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info = (...params) => {
    console.log('INFO:', ...params);
};
const error = (...params) => {
    console.error('ERROR:', ...params);
};
const logger = { info, error };
exports.default = logger;
