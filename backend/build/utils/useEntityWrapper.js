"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useEntityWrapper = (res, entity, statusCode = 200) => {
    const metadata = {
        timestamp: Date.now(),
    };
    const response = {
        entity,
        metadata,
    };
    res.status(statusCode).json(response);
};
exports.default = useEntityWrapper;
//# sourceMappingURL=useEntityWrapper.js.map