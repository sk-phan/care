"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/user/userController");
const googleAuthController_1 = require("../controllers/user/googleAuthController");
const userRoutes = express_1.default.Router();
userRoutes.post('/create', userController_1.createUser);
userRoutes.post('/login', userController_1.loginUser);
userRoutes.post('/loginWithGoogle', googleAuthController_1.loginWithGoogle);
userRoutes.get('/', userController_1.getAllUsers);
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map