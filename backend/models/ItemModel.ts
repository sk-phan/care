import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IItem extends Document {
    name: string;
    title: string;
    description: string;
    condition: "new" | "like-new" | "very-good" | "good" | "acceptable";
    status: "available" | "reserved";
    category: "toy" | "book" | "clothing" | "other";
    image: string;
    city: string;
    country: string;
    createdAt: Date;
    email: string;
}

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
        required: true
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
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
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
