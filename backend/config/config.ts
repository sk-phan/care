import dotenv from 'dotenv';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const isProduction: boolean = process.env.NODE_ENV === 'production';

// MongoDB connection string
export const MONGODB_URI = isProduction ? process.env.MONGO_URI : 'mongodb://127.0.0.1:27017/care-app';

const config = { MONGODB_URI, PORT };
export default config;
