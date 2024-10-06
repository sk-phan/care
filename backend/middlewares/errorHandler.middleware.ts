import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";
import logger from "../config/logger";

export const errorHandler: ErrorRequestHandler = (
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction  
) => {
    logger.error(error);
    if (error instanceof CustomError) {
        return res.status(error.StatusCode).json(error.serialize)
    }
    return res.status(400).json({ message: error.message })
};