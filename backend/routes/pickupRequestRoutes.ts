import express from 'express';
import { createEmailRequest } from '../controllers/pickup-request/pickupRequestController';

const pickupRequestRoutes = express.Router();

pickupRequestRoutes.get('/', createEmailRequest);

export default pickupRequestRoutes;
