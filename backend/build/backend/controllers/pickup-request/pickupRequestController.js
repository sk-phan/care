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
exports.createEmailRequest = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const ItemModel_1 = __importDefault(require("../../models/ItemModel"));
const BadRequestError_1 = require("../../errors/BadRequestError");
const NotFoundError_1 = require("../../errors/NotFoundError");
const logger_1 = __importDefault(require("../../config/logger"));
const createEmailRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message, itemId, donorEmail } = req.body;
        if (!name || !email || !itemId) {
            throw new BadRequestError_1.BadRequestError('Field name, email or itemId is missing. Please try again!');
        }
        const item = yield ItemModel_1.default.findById(itemId).populate('donorId');
        if (!item) {
            throw new NotFoundError_1.NotFoundError('Item not found.');
        }
        ;
        if (!donorEmail) {
            throw new BadRequestError_1.BadRequestError('Donor email not available');
        }
        const mailOptions = {
            from: email,
            to: donorEmail,
            subject: "Notification",
            text: message || '',
        };
        const transporter = nodemailer_1.default.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.GOOGLE_ACCOUNT,
                pass: process.env.GOOGLE_PASS
            }
        });
        const info = yield transporter.sendMail(mailOptions);
        logger_1.default.info('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (e) {
        next(e);
    }
});
exports.createEmailRequest = createEmailRequest;
