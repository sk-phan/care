import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController';

const userRoutes = express.Router();

userRoutes.post('/create', createUser);

userRoutes.get('/', getAllUsers);

export default userRoutes;
