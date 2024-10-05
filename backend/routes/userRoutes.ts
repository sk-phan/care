import express from 'express';
import { createUser, getAllUsers, loginUser } from '../controllers/userController';

const userRoutes = express.Router();

userRoutes.post('/create', createUser);

userRoutes.post('/login', loginUser);

userRoutes.get('/', getAllUsers);

export default userRoutes;
