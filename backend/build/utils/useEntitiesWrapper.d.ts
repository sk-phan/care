import { Model } from "mongoose";
import { Request, Response } from "express";
declare const useEntitiesWrapper: <T>(model: Model<T>, req: Request, res: Response, query?: {}) => Promise<void>;
export default useEntitiesWrapper;
