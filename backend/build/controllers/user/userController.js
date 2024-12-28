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
exports.loginUser = exports.getAllUsers = exports.createUser = void 0;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const AuthenticationError_1 = require("../../errors/AuthenticationError");
const useEntitiesWrapper_1 = __importDefault(require("../../utils/useEntitiesWrapper"));
const SECRET_KEY = process.env.JWT_SECRET;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, password } = req.body;
        const existingUser = yield UserModel_1.default.findOne({ email });
        if (existingUser) {
            throw new Error('Email is already in use');
        }
        const passwordHash = yield bcrypt.hash(password, 10);
        const newUser = new UserModel_1.default({ email, name, passwordHash });
        yield newUser.save();
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
            expiresIn: '1h'
        });
        res.status(201).json({ token, user: newUser.toJSON() });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, useEntitiesWrapper_1.default)(UserModel_1.default, req, res).catch(next);
});
exports.getAllUsers = getAllUsers;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield UserModel_1.default.findOne({ email });
        if (!user) {
            throw new AuthenticationError_1.AuthenticationError();
        }
        const passwordCorrect = yield bcrypt.compare(password, user.passwordHash);
        if (!passwordCorrect) {
            throw new AuthenticationError_1.AuthenticationError();
        }
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
            expiresIn: '1h',
        });
        res.json({ token, user: user.toJSON() });
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=userController.js.map