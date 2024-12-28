export type ApiResponse<T> = {
    data: T;
    status: number;
    message?: string;
    error?: string;
};

export type Metadata = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    timestamp: number;
}
export type EntitiesResponse<T> = {
    entities: T[];
    metadata: Metadata;
};
