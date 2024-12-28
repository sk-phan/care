import { Model } from "mongoose";
import { Request, Response } from "express";

type EntitiesListResult<T> = {
    entities: T[];
    metadata: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
        timestamp: number;
    };
}

const useEntitiesWrapper = async <T>(
    model: Model<T>,
    req: Request,
    res: Response,
    query = {}
): Promise<void> => {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 50;

    const total = await model.countDocuments(query);
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    const data = await model
        .find(query)
    .skip((page - 1) * limit)
    .limit(limit);

    const result: EntitiesListResult<T> = {
    entities: data,
    metadata: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage,
        timestamp: Date.now()
    },
    };

    res.json(result);
};

export default useEntitiesWrapper;
