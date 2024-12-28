import { Response } from "express";

type Metadata = {
    timestamp: number;
}

type EntityResponse<T> = {
    entity: T;
    metadata: Metadata;
}

const useEntityWrapper = <T>(res: Response, entity: T, statusCode: number = 200): void => {
    const metadata: Metadata = {
        timestamp: Date.now(),
    };

    const response: EntityResponse<T> = {
        entity,
        metadata,
    };

    res.status(statusCode).json(response);
};

export default useEntityWrapper;