"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const CustomError_1 = require("../utils/CustomError");
class InternalServerError extends CustomError_1.CustomError {
    constructor() {
        super('Internal Server Error. Try again later.');
        this.StatusCode = 500;
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    serialize() {
        return { message: 'Internal Server Error. Try again later.' };
    }
}
exports.InternalServerError = InternalServerError;
