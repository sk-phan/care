"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=CustomError.js.map