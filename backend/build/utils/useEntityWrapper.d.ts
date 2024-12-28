import { Response } from "express";
declare const useEntityWrapper: <T>(res: Response, entity: T, statusCode?: number) => void;
export default useEntityWrapper;
