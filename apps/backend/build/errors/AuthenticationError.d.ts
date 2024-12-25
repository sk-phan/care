import { CustomError } from "../utils/CustomError";
export declare class AuthenticationError extends CustomError {
    StatusCode: number;
    constructor();
    serialize(): {
        message: string;
    };
}
