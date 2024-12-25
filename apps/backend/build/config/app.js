"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("./config"));
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const itemRoutes_1 = __importDefault(require("../routes/itemRoutes"));
const pickupRequestRoutes_1 = __importDefault(require("../routes/pickupRequestRoutes"));
const cors = require('cors');
const app = (0, express_1.default)();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
logger_1.default.info('connecting to', config_1.default.MONGODB_URI);
mongoose.connect(config_1.default.MONGODB_URI)
    .then(() => {
    logger_1.default.info('connected to MongoDB');
})
    .catch((error) => {
    logger_1.default.error('error connecting to MongoDB:', error.message);
});
app.use(cors());
app.use(express_1.default.static('build'));
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/items', itemRoutes_1.default);
app.use('/api/pickupRequest', pickupRequestRoutes_1.default);
// Must be defined in the end of application
app.use(errorHandler_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map