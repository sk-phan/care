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
exports.loginWithGoogle = void 0;
const logger_1 = __importDefault(require("../../config/logger"));
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client("307978777663-2dpvmr35u7b6l8s57r2hobs0gagahieo.apps.googleusercontent.com");
const loginWithGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { credential, client_id } = req.body;
    try {
        // Verify the ID token
        const ticket = yield client.verifyIdToken({
            idToken: credential,
            audience: client_id,
        });
        const payload = ticket.getPayload();
        if (!payload)
            throw new Error('Invalid payload');
        // Extract user details from payload
        const { email, given_name, family_name } = payload;
        // Check if user exists in the database
        let user = yield UserModel_1.default.findOne({ email });
        if (!user) {
            // Create a user if they do not exist
            user = yield UserModel_1.default.create({
                email,
                name: `${given_name} ${family_name}`,
                authSource: 'google',
            });
        }
        res.status(200).json({ payload });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
        logger_1.default.error(error);
    }
});
exports.loginWithGoogle = loginWithGoogle;
//# sourceMappingURL=googleAuthController.js.map