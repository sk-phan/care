import { NextFunction, Request, Response } from "express";
import Item from "../models/ItemModel";
import { BadRequestError } from "../errors/BadRequestError";
import { IItem } from "../models/ItemModel";

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, condition, image, city, country, donorId } = req.body as IItem;
    
        const newItem = new Item({
            title,
            description,
            condition,
            image,
            city,
            country,
            donorId
        });
    
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch(e) {
        next(e)
    }
};

export const getAllItems = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await Item.find({}).populate('donorId', 'name email');
        res.json(items);
    } catch(e) {
        next(e)
    }
};

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await Item.findById(req.params.id).populate('donorId', 'name email');
        if (!item) {
            throw new BadRequestError('Item not found');
        }
        res.json(item);
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
        res.json(updatedItem);
    }  catch(e) {
        next(e)
    }
};

export const deleteItem = async (req: Request, res: Response) => {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
        throw new BadRequestError('Item not found');
    }
    res.status(204).end();
};