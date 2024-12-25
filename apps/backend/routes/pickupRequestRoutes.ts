import express from 'express';
import { createEmailRequest } from '../controllers/pickup-request/pickupRequestController';

const pickupRequestRoutes = express.Router();

pickupRequestRoutes.post('/', createEmailRequest);

export default pickupRequestRoutes;
