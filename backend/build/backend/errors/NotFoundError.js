"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const CustomError_1 = require("../utils/CustomError");
class NotFoundError extends CustomError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.StatusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serialize() {
        return { message: this.message };
    }
}
exports.NotFoundError = NotFoundError;
