import dotenv from 'dotenv';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const isProduction: boolean = process.env.NODE_ENV === 'production';
const localMongoURI: string = "mongodb://0.0.0.0:27017/care-app";
const productionMongoURI = process.env.MONGODB_URI;

const MONGODB_URI = isProduction ? productionMongoURI : localMongoURI;

const config = { MONGODB_URI, PORT };
export default config;
