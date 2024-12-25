import { NextFunction, Request, Response } from "express";
export declare const createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllUsers: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
