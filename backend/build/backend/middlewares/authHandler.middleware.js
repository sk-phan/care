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
exports.authHandler = void 0;
const BadRequestError_1 = require("../errors/BadRequestError");
const AuthenticationError_1 = require("../errors/AuthenticationError");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;
const authHandler = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new AuthenticationError_1.AuthenticationError();
        }
        const token = authHeader.split(' ')[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const user = yield UserModel_1.default.findById(decodedToken.id).select('-passwordHash');
        if (!user) {
            throw new BadRequestError_1.BadRequestError('User not found');
        }
        req.user = user;
    }
    catch (error) {
        next(error);
    }
});
exports.authHandler = authHandler;
