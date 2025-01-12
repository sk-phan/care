import { NextFunction, Request, Response } from "express";
import Item from "../../models/ItemModel";
import { BadRequestError } from "../../errors/BadRequestError";
import { IItem } from "../../models/ItemModel";
import useEntityWrapper from "../../utils/useEntityWrapper";

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, title, description, condition, city, category, email, image} = req.body as IItem;
        const currentImage = image || undefined;

        const newItem = new Item({
            name,
            title,
            description,
            condition,
            city,            
            country: 'FI',
            category,
            email,
            status: 'available',
            image: currentImage
        });
    
        const savedItem = await newItem.save();
        useEntityWrapper(res, savedItem, 201);
    } catch(e) {
        next(e)
    }
};

export const getAllItems = async (_req: Request, res: Response, _next: NextFunction) => {
    return res.status(200);
};

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            throw new BadRequestError('Item not found');
        };

        return useEntityWrapper(res, item);
    }  catch(e) {
        next(e)
    }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            throw new BadRequestError('Item not found');
        }
        return useEntityWrapper(res, updatedItem, 201);
    }  catch(e) {
        next(e)
    }
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            throw new BadRequestError('Item not found');
        }
        res.status(204).end();
    } catch(e) {
        next(e);
    }
};