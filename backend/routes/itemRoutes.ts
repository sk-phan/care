import express from 'express';
import { authHandler } from '../middlewares/authHandler.middleware';
import { createItem, deleteItem, getAllItems, getItemById, updateItem } from '../controllers/itemControler';

const itemRoutes = express.Router();

// Get all items
itemRoutes.get('/', authHandler, getAllItems);

// Get a single item by ID
itemRoutes.get('/:id', getItemById);

// Create a new item (requires authentication)
itemRoutes.post('/', authHandler, createItem);

// Update an item by ID (requires authentication)
itemRoutes.put('/:id', authHandler, updateItem);

// Delete an item by ID (requires authentication)
itemRoutes.delete('/:id', authHandler, deleteItem);

export default itemRoutes;