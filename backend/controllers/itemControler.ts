import { Request, Response } from "express";
import Item from "../models/ItemModel";
import { BadRequestError } from "../errors/BadRequestError";
import { IItem } from "../models/ItemModel";

export const createItem = async (req: Request, res: Response) => {
    const { title, description, condition, image, city, country, donorId } = req.body as IItem;
    console.log(req.body)
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
};

export const getAllItems = async (_req: Request, res: Response) => {
    const items = await Item.find({}).populate('donorId', 'name email');

    res.json(items);
};

export const getItemById = async (req: Request, res: Response) => {
    const item = await Item.findById(req.params.id).populate('donorId', 'name email');
    if (!item) {
        throw new BadRequestError('Item not found');
    }
    res.json(item);
};

export const updateItem = async (req: Request, res: Response) => {
    console.log("hekki")
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
        throw new BadRequestError('Item not found');
    }
    res.json(updatedItem);
};

export const deleteItem = async (req: Request, res: Response) => {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
        throw new BadRequestError('Item not found');
    }
    res.status(204).end();
};