export declare abstract class CustomError extends Error {
    message: string;
    constructor(message: string);
    abstract StatusCode: number;
    abstract serialize(): {
        message: string;
    };
}
