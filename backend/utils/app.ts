import express, { Request, Response } from 'express';

import logger from "./logger";
import config from "./config";

const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

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

// API for Google Authentication
app.post("/google-auth", async(req: Request, res:  Response) => {
    const { credential, client_id } = req.body;
    try {
        const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: client_id,
        });

        const payload = ticket.getPayload();
        const userid = payload["sub"];
        console.log(userid)
        res.status(200).json({ payload });
    } catch(error) {
        res.status(400).json({ error });
        logger.error(error);
    }
})

export default app;
