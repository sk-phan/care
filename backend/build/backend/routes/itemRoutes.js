"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authHandler_middleware_1 = require("../middlewares/authHandler.middleware");
const itemControler_1 = require("../controllers/item/itemControler");
const itemRoutes = express_1.default.Router();
// Get all items
itemRoutes.get('/', itemControler_1.getAllItems);
// Get a single item by ID
itemRoutes.get('/:id', itemControler_1.getItemById);
// Create a new item (requires authentication)
itemRoutes.post('/', itemControler_1.createItem);
// Update an item by ID (requires authentication)
itemRoutes.put('/:id', authHandler_middleware_1.authHandler, itemControler_1.updateItem);
// Delete an item by ID (requires authentication)
itemRoutes.delete('/:id', itemControler_1.deleteItem);
exports.default = itemRoutes;
//# sourceMappingURL=itemRoutes.js.map