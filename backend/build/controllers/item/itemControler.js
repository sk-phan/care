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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getAllItems = exports.createItem = void 0;
const ItemModel_1 = __importDefault(require("../../models/ItemModel"));
const BadRequestError_1 = require("../../errors/BadRequestError");
const useEntitiesWrapper_1 = __importDefault(require("../../utils/useEntitiesWrapper"));
const useEntityWrapper_1 = __importDefault(require("../../utils/useEntityWrapper"));
const createItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, title, description, condition, city, category, email, image } = req.body;
        const currentImage = image || undefined;
        const newItem = new ItemModel_1.default({
            name,
            title,
            description,
            condition,
            city,
            country: 'FI',
            category,
            email,
            status: 'available',
            image: currentImage
        });
        const savedItem = yield newItem.save();
        (0, useEntityWrapper_1.default)(res, savedItem, 201);
    }
    catch (e) {
        next(e);
    }
});
exports.createItem = createItem;
const getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, useEntitiesWrapper_1.default)(ItemModel_1.default, req, res).catch(next);
});
exports.getAllItems = getAllItems;
const getItemById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("JDJJD");
        const item = yield ItemModel_1.default.findById(req.params.id);
        if (!item) {
            throw new BadRequestError_1.BadRequestError('Item not found');
        }
        ;
        (0, useEntityWrapper_1.default)(res, item);
    }
    catch (e) {
        next(e);
    }
});
exports.getItemById = getItemById;
const updateItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItem = yield ItemModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            throw new BadRequestError_1.BadRequestError('Item not found');
        }
        res.json(updatedItem);
    }
    catch (e) {
        next(e);
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedItem = yield ItemModel_1.default.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            throw new BadRequestError_1.BadRequestError('Item not found');
        }
        res.status(204).end();
    }
    catch (e) {
        next(e);
    }
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=itemControler.js.map