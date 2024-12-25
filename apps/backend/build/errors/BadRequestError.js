"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const CustomError_1 = require("../utils/CustomError");
class BadRequestError extends CustomError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.StatusCode = 400;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serialize() {
        return { message: this.message };
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map