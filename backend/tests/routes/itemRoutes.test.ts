import request from 'supertest';
import express from 'express';

import itemRoutes from '../../routes/itemRoutes'; 
import responseJson from './item-routes-response.json';
import { getAllItems, getItemById, createItem, updateItem } from '../../controllers/itemControler';
import userRoutes from '../../routes/userRoutes';

const app = express();
app.use(express.json()); 
app.use('/api/items', itemRoutes);
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

describe('Item Routes', () => {
    it('GET /api/items should respond with an array of items', async () => {
        (getAllItems as jest.Mock).mockImplementation((_req, res) => {
            res.status(200).json(responseJson);
        });

        const response = await request(app).get('/api/items');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(responseJson);
    });

    it('GET /api/items/:id should respond with a single item', async () => {
        (getItemById as jest.Mock).mockImplementation((_req, res) => {
            res.status(200).json(responseJson[0]);
        });

        const response = await request(app).get('/api/items/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(responseJson[0]);
    });

    it('POST /api/items/create should create a new item', async () => {
        const newItem = {
            id: '3',
            title: "Children's Storybook",
            description: "A beautifully illustrated storybook for young readers.",
            condition: "like-new",
            status: "available",
            category: "book",
            image: "https://example.com/images/storybook.jpg",
            city: "Tampere",
            country: "Finland",
            donorId: "63c0e3c844f1b4d2d4e8e6e6", 
            createdAt: "2024-10-20T12:00:00Z"
        };

        (createItem as jest.Mock).mockImplementation((_req, res) => {
            res.status(201).json(newItem);
        });

        const response = await request(app)
            .post('/api/items/create')
            .send(newItem);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(newItem);
    });

    it('PUT /api/items/:id should update an existing item', async () => {
        const updatedItem = {
            id: '3',
            title: "Children's Storybook In English",
            description: "A beautifully illustrated storybook for young readers.",
            condition: "like-new",
            status: "available",
            category: "book",
            image: "https://example.com/images/storybook.jpg",
            city: "Tampere",
            country: "Finland",
            donorId: "63c0e3c844f1b4d2d4e8e6e6", 
            createdAt: "2024-10-20T12:00:00Z"
        };

        (updateItem as jest.Mock).mockImplementation((_req, res) => {
            res.status(204).json({...updatedItem});
        });

        const response = await request(app)
            .put('/api/items/3')
            .send(updatedItem);

        expect(response.status).toBe(204);
    });
});
