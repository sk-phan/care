import { CustomError } from "../utils/CustomError";

export class AuthenticationError extends CustomError {
    StatusCode = 401;
    constructor() {
        super('User unauthenticated. Invalid email or password');
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
    serialize(): { message: string; } {
        return { message: 'User unauthenticated. Invalid email or password' };
    }
}