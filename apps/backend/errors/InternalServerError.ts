import { CustomError } from "../utils/CustomError";

export class InternalServerError extends CustomError {
    StatusCode = 500;
    constructor() {
        super('Internal Server Error. Try again later.');
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    serialize(): { message: string; } {
        return { message: 'Internal Server Error. Try again later.' }
    }
}