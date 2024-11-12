import express from 'express';

import logger from "./logger";
import config from "./config";
import { errorHandler } from '../middlewares/errorHandler.middleware';
import userRoutes from '../routes/userRoutes';
import itemRoutes from '../routes/itemRoutes';
import emailRoutes from '../routes/emailRoutes';

const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error: Error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/email', emailRoutes);

// Must be defined in the end of application
app.use(errorHandler); 

export default app;
