import dotenv from 'dotenv';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const isProduction: boolean = process.env.NODE_ENV === 'production';
const localMongoURI = process.env.LOCAL_MONGO_URI;
const productionMongoURI = isProduction ?  process.env.MONGODB_URI : localMongoURI;

const MONGODB_URI = productionMongoURI;

const config = { MONGODB_URI, PORT };
export default config;
