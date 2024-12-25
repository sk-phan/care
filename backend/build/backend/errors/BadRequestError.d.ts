import { CustomError } from "../utils/CustomError";
export declare class BadRequestError extends CustomError {
    message: string;
    StatusCode: number;
    constructor(message: string);
    serialize(): {
        message: string;
    };
}
