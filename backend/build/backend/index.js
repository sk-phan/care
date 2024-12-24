"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./config/logger"));
app_1.default.listen(config_1.default.PORT, '0.0.0.0', () => {
    logger_1.default.info(`Server listening on ${config_1.default.PORT}`);
});
