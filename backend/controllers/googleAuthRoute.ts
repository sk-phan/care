import { Request, Response } from 'express';
import logger from '../config/logger';
const googleAuthRoute = require('express').Router()
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/UserModel");

const client = new OAuth2Client("307978777663-2dpvmr35u7b6l8s57r2hobs0gagahieo.apps.googleusercontent.com");

googleAuthRoute.post("/google-auth", async (req: Request, res: Response) => {
    const { credential, client_id } = req.body;
    try {
      // Verify the ID token
        const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: client_id,
    });
    const payload = ticket.getPayload();
    
    if (!payload)  throw new Error('Invalid payload');

    // Extract user details from payload
    const { email, given_name, family_name } = payload;

    // Check if user exists in the database
    let user = await User.findOne({ email });

    if (!user) {
      // Create a user if they do not exist
      user = await User.create({
        email,
        name: `${given_name} ${family_name}`,
        authSource: 'google',
      });
    }
    res.status(200).json({ payload });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
        logger.error(error);
    }
});

export default googleAuthRoute;