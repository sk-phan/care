import request from 'supertest';
import express from 'express';

import responseJson from './user-routes-response.json';
import postResponseJson from './user-routes-post-response.json';

import { createUser, getAllUsers, loginUser } from '../../controllers/userController';
import userRoutes from '../../routes/userRoutes';

const app = express();
app.use(express.json()); 
app.use('/api/users', userRoutes);

jest.mock('../../controllers/itemControler');
jest.mock('../../controllers/userController');

jest.mock('../../middlewares/authHandler.middleware', () => ({
    authHandler: jest.fn((_req, _res, next) => {
        next();
    }),
}));

beforeEach(async () => {
    jest.clearAllMocks(); 
});

describe('User Routes', () => {
    it('GET /api/users should respond with an array of users', async () => {
        (getAllUsers as jest.Mock).mockImplementation((_req, res) => {
            res.status(200).json(responseJson);
        });

        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(responseJson);
    });

    it('POST /api/users/create should create a new user', async () => {
        const newUser = {
            "name": "testi",
            "email": "care-tester@gmail.com",
            "password": "Pass123@"
        };

        (createUser as jest.Mock).mockImplementation((_req, res) => {
            res.status(201).json(postResponseJson);
        });

        
        const response = await request(app)
                        .post('/api/users/create')
                        .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body).toBeDefined();
        expect(response.body.user).toBeDefined();
        expect(response.body.user.name).toEqual(newUser.name);
        expect(response.body.user.email).toEqual(newUser.email);

        expect(response.body.token).toBeDefined();
    });

    it('POST /api/users/login should log user in', async () => {
        const authentication = {
            "email": "care-tester@gmail.com",
            "password": "Pass123@"
        };

        (loginUser as jest.Mock).mockImplementation((_req, res) => {
            res.status(200).json(postResponseJson);
        });

        
        const response = await request(app)
                        .post('/api/users/login')
                        .send(authentication);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.user).toBeDefined();        
        expect(response.body.token).toBeDefined();
    });

    it('POST /api/users/login should return 401 for invalid credentials', async () => {
        const invalidCredentials = {
            "email": "wrong-email@gmail.com",
            "password": "WrongPassword@"
        };

        (loginUser as jest.Mock).mockImplementation((_req, res) => {
            res.status(401).json({ error: "User unauthenticated. Invalid email or password" });
        });

        const response = await request(app)
            .post('/api/users/login')
            .send(invalidCredentials);

        expect(response.status).toBe(401);
        expect(response.body).toBeDefined();
        expect(response.body.error).toEqual("User unauthenticated. Invalid email or password");
    });
});
