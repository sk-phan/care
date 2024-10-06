import express from 'express';
import { createUser, getAllUsers, loginUser } from '../controllers/userController';
import { loginWithGoogle } from '../controllers/googleAuthController';

const userRoutes = express.Router();

userRoutes.post('/create', createUser);

userRoutes.post('/login', loginUser);

userRoutes.post('/loginWithGoogle', loginWithGoogle);

userRoutes.get('/', getAllUsers);

export default userRoutes;
