import { CustomError } from "../utils/CustomError";
export declare class InternalServerError extends CustomError {
    StatusCode: number;
    constructor();
    serialize(): {
        message: string;
    };
}
