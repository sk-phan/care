import { Request, Response } from "express";

const jwt  = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

import User, { IUser } from '../models/UserModel';
import { BadRequestError } from "../errors/BadRequestError";
import { InternalServerError } from "../errors/InternalServerError";
import { AuthenticationError } from "../errors/AuthenticationError";

const SECRET_KEY = process.env.JWT_SECRET;

export const createUser = async (req: Request, res: Response) => {
    const { email, name, password} = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new BadRequestError('Email is already in use');
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const newUser: IUser = new User({ email, name, passwordHash });
        await newUser.save();
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
            expiresIn: '1h',
        });
        res.status(201).json({ token, user: newUser.toJSON() });
    }
    catch (error) {
        throw new InternalServerError();
    }
};

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        throw new InternalServerError();
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new AuthenticationError();
    }

    const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!passwordCorrect) {
        throw new AuthenticationError();
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h',
    });
    
    res.json({ token, user: user.toJSON() });
};