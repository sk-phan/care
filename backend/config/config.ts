import dotenv from 'dotenv';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const isProduction: boolean = process.env.NODE_ENV === 'production';
const localMongoURI = process.env.LOCAL_MONGO_URI;

const MONGODB_URI = isProduction ?  process.env.MONGODB_URI : localMongoURI;

const config = { MONGODB_URI, PORT };
export default config;
