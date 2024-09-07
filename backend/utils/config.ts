import dotenv from 'dotenv';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3003;
// const isProduction: boolean = process.env.NODE_ENV === 'production';
// const localMongoURI: string = "mongodb://localhost:27017/task-management";
const productionMongoURI: string = "mongodb+srv://sukiphan97:Nhung1967@cluster0.syysth0.mongodb.net/?retryWrites=true&w=majority";

const MONGODB_URI: string = productionMongoURI;

const config = { MONGODB_URI, PORT };
export default config;
