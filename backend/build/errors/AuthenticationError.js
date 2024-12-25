"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = void 0;
const CustomError_1 = require("../utils/CustomError");
class AuthenticationError extends CustomError_1.CustomError {
    constructor() {
        super('User unauthenticated. Invalid email or password');
        this.StatusCode = 401;
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
    serialize() {
        return { message: 'User unauthenticated. Invalid email or password' };
    }
}
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=AuthenticationError.js.map