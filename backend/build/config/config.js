"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';
const localMongoURI = process.env.LOCAL_MONGO_URI;
const productionMongoURI = isProduction ? process.env.MONGODB_URI : localMongoURI;
const MONGODB_URI = productionMongoURI;
const config = { MONGODB_URI, PORT };
exports.default = config;
//# sourceMappingURL=config.js.map