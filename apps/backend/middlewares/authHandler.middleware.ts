import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors/BadRequestError';
import { AuthenticationError } from '../errors/AuthenticationError';
import User from '../models/UserModel';

const jwt  = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

interface AuthenticatedRequest extends Request {
    user?: any;
}

export const authHandler = async (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get('authorization');
    
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new AuthenticationError();
        }
    
        const token = authHeader.split(' ')[1];
    
        const decodedToken: any = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decodedToken.id).select('-passwordHash');
    
        if (!user) {
            throw new BadRequestError('User not found');
        }
    
        req.user = user; 
    } catch(error) {
        next(error);
    }
};


