import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        required: true,
        type: String
    },
    condition: {
        type: String,
        enum: ["new","like-new","very-good","good","acceptable"],
        default: "new"
    },
    status: {
        type: String,
        enum: ["available","reserved"],
        default: "available"
    },
    image: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    }
})

itemSchema.index({ title: 1 });
itemSchema.index({ city: 1 });
itemSchema.index({ country: 1 });

itemSchema.set('toJSON', {
    transform: (_document: mongoose.Document, returnedObject: { [key: string]: any }) => {
        returnedObject.id = returnedObject._id.toString();

        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;