"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pickupRequestController_1 = require("../controllers/pickup-request/pickupRequestController");
const pickupRequestRoutes = express_1.default.Router();
pickupRequestRoutes.post('/', pickupRequestController_1.createEmailRequest);
exports.default = pickupRequestRoutes;
//# sourceMappingURL=pickupRequestRoutes.js.map