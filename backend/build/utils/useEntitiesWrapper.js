"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const useEntitiesWrapper = (model_1, req_1, res_1, ...args_1) => __awaiter(void 0, [model_1, req_1, res_1, ...args_1], void 0, function* (model, req, res, query = {}) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    const total = yield model.countDocuments(query);
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    const data = yield model
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit);
    const result = {
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
});
exports.default = useEntitiesWrapper;
//# sourceMappingURL=useEntitiesWrapper.js.map