import mongoose, { Document, Schema, Model } from 'mongoose';
import { BaseItemType } from "../types/item.type";

export interface IItem extends Document, BaseItemType {};

const itemSchema: Schema<IItem> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    condition: {
        type: String,
        enum: ["new", "like-new", "very-good", "good", "acceptable"],
        default: "new"
    },
    status: {
        type: String,
        enum: ["available", "reserved"],
        default: "available"
    },
    category: {
        type: String,
        enum: ["toy", "book", "clothing", "other"],
        required: true
    },
    image: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    email: {
        type: String,
        required: true
    },
});

// Create indexes for optimization
itemSchema.index({ title: 1 });
itemSchema.index({ city: 1 });
itemSchema.index({ country: 1 });

itemSchema.set('toJSON', {
    transform: (_document: mongoose.Document, returnedObject: { [key: string]: any }) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
}
});

const Item: Model<IItem> = mongoose.model<IItem>('Item', itemSchema);
export default Item;
