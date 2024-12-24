"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = require("../utils/CustomError");
const errorHandler = (error, _req, res, _next) => {
    if (error instanceof CustomError_1.CustomError) {
        return res.status(error.StatusCode).json(error.serialize());
    }
    return res.status(400).json({ message: error.message });
};
exports.errorHandler = errorHandler;
