import { NextFunction, Request, Response } from "express";
import nodemailer, { SentMessageInfo, SendMailOptions, Transporter } from 'nodemailer'; // Import types from nodemailer
import Item, { IItem } from "../../models/ItemModel";
import { emailRequest } from "./emailController.type";
import { IUser } from "../../models/UserModel";
import { BadRequestError } from "../../errors/BadRequestError";
import { NotFoundError } from "../../errors/NotFoundError";
import logger from "../../config/logger";

export const createEmailRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, message, itemId } = req.body as emailRequest;
        if (!name || !email || !itemId) {
            throw new BadRequestError('Field name, email or itemId is missing. Please try again!');
        }

        const item: IItem | null = await Item.findById(itemId).populate('donorId');
        if (!item) {
            throw new NotFoundError('Item not found.');
        };
        console.log(item)

        const donor = item?.donorId as IUser | null;
        if (!donor || !donor.email) {
            throw new BadRequestError('Donor email not available');
        }

        const mailOptions: SendMailOptions = {
            from: email,
            to: donor.email,
            subject: "Notification",
            text: message || '',
        }
    
        const transporter: Transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.GOOGLE_ACCOUNT,
                pass: process.env.GOOGLE_PASS
            }
        });

        const info: SentMessageInfo = await transporter.sendMail(mailOptions);
        logger.info('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch(e) {
        next(e);
    }
}
