import { Request, Response, NextFunction } from 'express';
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const authHandler: (req: AuthenticatedRequest, _res: Response, next: NextFunction) => Promise<void>;
export {};
