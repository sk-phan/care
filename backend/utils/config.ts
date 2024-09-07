import dotenv from 'dotenv';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3003;
const isProduction: boolean = process.env.NODE_ENV === 'production';
const localMongoURI: string = "mongodb://localhost:27017/care-app";
const productionMongoURI: string = "mongodb+srv://sukiphan97:TZsHfxyPeHhilRRo@cluster0.ocs4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const MONGODB_URI: string = isProduction ? productionMongoURI : localMongoURI;

const config = { MONGODB_URI, PORT };
export default config;
