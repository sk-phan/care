import { CustomError } from "../utils/CustomError";
export declare class NotFoundError extends CustomError {
    message: string;
    StatusCode: number;
    constructor(message: string);
    serialize(): {
        message: string;
    };
}
