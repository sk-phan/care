import { NextFunction, Request, Response } from "express";

const jwt  = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

import User, { IUser } from '../../models/UserModel';
import { AuthenticationError } from "../../errors/AuthenticationError";
import useEntitiesWrapper from "../../utils/useEntitiesWrapper";

const SECRET_KEY = process.env.JWT_SECRET;

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, name, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('Email is already in use');
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser: IUser = new User({ email, name, passwordHash });
        await newUser.save();

        const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
            expiresIn: '1h' 
        });

        res.status(201).json({ token, user: newUser.toJSON() });
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    useEntitiesWrapper(User, req, res).catch(next);
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
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
    } catch (error) {
        next(error);
    }
};