import express from 'express';
import { createEmailRequest } from '../controllers/email/emailController';

const emailRoutes = express.Router();

emailRoutes.get('/', createEmailRequest);

export default emailRoutes;
