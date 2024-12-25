"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const itemSchema = new mongoose_1.default.Schema({
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
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Item = mongoose_1.default.model('Item', itemSchema);
exports.default = Item;
//# sourceMappingURL=ItemModel.js.map